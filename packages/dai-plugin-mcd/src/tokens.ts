import { createCurrency, createCurrencyRatio } from '@makerdao/currency';

export const ETH = createCurrency('ETH');
export const XDC = createCurrency('XDC');
export const MKR = createCurrency('MKR');
export const USD = createCurrency('USD');
export const USD_ETH = createCurrencyRatio(USD, ETH);

export const WETH = createCurrency('WETH');
export const DAI = createCurrency('DAI');

// Casting for savings dai
export const DSR_DAI = createCurrency('DSR-DAI');

export const REP = createCurrency('REP');
export const ZRX = createCurrency('ZRX');
export const KNC = createCurrency('KNC');
export const OMG = createCurrency('OMG');
export const BAT = createCurrency('BAT');
export const DGD = createCurrency('DGD');
export const GNT = createCurrency('GNT');
export const USDC = createCurrency('USDC');
export const WBTC = createCurrency('WBTC');
export const TUSD = createCurrency('TUSD');
export const MANA = createCurrency('MANA');
export const USDT = createCurrency('USDT');
export const PAXUSD = createCurrency('PAXUSD');
export const COMP = createCurrency('COMP');
export const LRC = createCurrency('LRC');
export const LINK = createCurrency('LINK');
export const YFI = createCurrency('YFI');
export const BAL = createCurrency('BAL');
export const GUSD = createCurrency('GUSD');
export const UNI = createCurrency('UNI');
export const RENBTC = createCurrency('RENBTC');
export const AAVE = createCurrency('AAVE');
export const MATIC = createCurrency('MATIC');
export const WSTETH = createCurrency('WSTETH');
export const UNIV2DAIETH = createCurrency('UNIV2DAIETH');
export const UNIV2WBTCETH = createCurrency('UNIV2WBTCETH');
export const UNIV2USDCETH = createCurrency('UNIV2USDCETH');
export const UNIV2DAIUSDC = createCurrency('UNIV2DAIUSDC');
export const UNIV2ETHUSDT = createCurrency('UNIV2ETHUSDT');
export const UNIV2LINKETH = createCurrency('UNIV2LINKETH');
export const UNIV2UNIETH = createCurrency('UNIV2UNIETH');
export const UNIV2WBTCDAI = createCurrency('UNIV2WBTCDAI');
export const UNIV2AAVEETH = createCurrency('UNIV2AAVEETH');
export const UNIV2DAIUSDT = createCurrency('UNIV2DAIUSDT');

export const SAI = createCurrency('SAI');

type CDP_TYPE = {
  currency: any;
  ilk: string;
  address?: string;
  decimals?: number;
  abi?: any;
};
export const defaultCdpTypes: CDP_TYPE[] = [
  { currency: ETH, ilk: 'ETH-A' },
  { currency: XDC, ilk: 'XDC-A' }
];

export const defaultTokens = [
  ...new Set([
    ...defaultCdpTypes.map(type => type.currency),
    DAI,
    WETH,
    SAI,
    DSR_DAI
  ])
];
