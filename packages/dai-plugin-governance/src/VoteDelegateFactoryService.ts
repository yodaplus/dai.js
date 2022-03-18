import { LocalService } from '@yodaplus/services-core';
import { VOTE_DELEGATE_FACTORY } from './utils/constants';
import tracksTransactions from './utils/tracksTransactions';

export default class VoteDelegateFactoryService extends LocalService {
  constructor(name = 'voteDelegateFactory') {
    super(name, ['smartContract', 'voteDelegate', 'transactionManager']);
  }

  // writes
  @tracksTransactions
  async createDelegateContract({ promise }) {
    return await this._delegateFactoryContract().create({ promise });
  }

  // reads
  getVoteDelegate(owner) {
    return this.get('voteDelegate').getVoteDelegate(owner);
  }

  isDelegate(address) {
    return this._delegateFactoryContract().isDelegate(address);
  }

  _delegateFactoryContract() {
    return this.get('smartContract').getContractByName(VOTE_DELEGATE_FACTORY);
  }
}
