import { ERC20Token } from "./constants/addresses";

export const renderInterval = 1 * 1000;

// interval of price check (ms)
export const interval = 10 * 1000;

export const initialAmount = 10000;
export const loanAmount = 10000;
export const diffAmount = 10; // Not enough amount to return loan

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const explorerURL = "https://polygonscan.com";

// Token pair the bot trading
export const baseTokens = [
  ERC20Token.DAI,
  ERC20Token.WETH,
  ERC20Token.USDC,
  ERC20Token.USDT,
  ERC20Token.WMATIC,
  ERC20Token.LINK,
  // ...Object.keys(ERC20Token).slice(0, 5).map((key) => ERC20Token[key]),
];

export const tradingTokens = [
  ERC20Token.DAI,
  ERC20Token.WETH,
  ERC20Token.USDC,
  ERC20Token.USDT,
  ERC20Token.WMATIC,
  ERC20Token.LINK,
  // ...Object.keys(ERC20Token).slice(0, 5).map((key) => ERC20Token[key]),
];

/**
 * @type {string} public flashloan contract address
 * Polyscan: https://polygonscan.com/address/0xb6c4448386c4ecf4e5eab057351f8a6a8a465a0d
 * if you have deployed your own contract, you can use it instead of the default one
 */
export const flashloanAddress: string =
  "0x905Ad472d7eeB94ed1Fc29D8ff4B53FD4D5a5Eb4";

// protocols the bot will use
export const protocols =
  "POLYGON_SUSHISWAP,POLYGON_QUICKSWAP,POLYGON_APESWAP,POLYGON_JETSWAP,POLYGON_WAULTSWAP,POLYGON_UNISWAP_V3";

export const slippage = 3; // percentage
export const gasLimit = 15000000;
export const gasPrice = 30; // gwei
