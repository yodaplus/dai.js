import { PrivateService } from '@yodaplus/services-core';
import BigNumber from 'bignumber.js';
import { UINT256_MAX } from '../utils/constants';
import tracksTransactions from '../utils/tracksTransactions';

const maxAllowance = new BigNumber(UINT256_MAX).shiftedBy(-18);

export default class AllowanceService extends PrivateService {
  _shouldMinimizeAllowance: boolean;

  constructor(name = 'allowance') {
    super(name, ['token', 'event']);
    this._shouldMinimizeAllowance = false;
  }

  initialize(settings) {
    if (settings && settings.useMinimizeAllowancePolicy) {
      this._shouldMinimizeAllowance = true;
    }
  }

  @tracksTransactions
  async requireAllowance(
    tokenSymbol,
    receiverAddress,
    { estimate = maxAllowance, promise }
  ) {
    const token = this.get('token').getToken(tokenSymbol);
    const ownerAddress = this.get('token')
      .get('web3')
      .currentAddress();
    const allowance = await token.allowance(ownerAddress, receiverAddress);

    if (allowance.lt(maxAllowance.div(2)) && !this._shouldMinimizeAllowance) {
      const tx = await token.approveUnlimited(receiverAddress, { promise });
      this.get('event').emit('allowance/APPROVE', {
        transaction: tx
      });
      return tx;
    }

    if (allowance.lt(estimate) && this._shouldMinimizeAllowance) {
      const tx = await token.approve(receiverAddress, estimate, { promise });
      this.get('event').emit('allowance/APPROVE', {
        transaction: tx
      });
    }
  }

  @tracksTransactions
  async removeAllowance(tokenSymbol, spenderAddress, { promise }) {
    const token = this.get('token').getToken(tokenSymbol);
    const allowance = await token.allowance(
      this.get('token')
        .get('web3')
        .currentAddress(),
      spenderAddress
    );
    if (parseInt(allowance) != 0) {
      return token.approve(spenderAddress, '0', { promise });
    }
  }
}
