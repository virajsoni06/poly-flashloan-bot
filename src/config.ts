import { ethers } from "ethers";
import { ERC20Token, ERC20TokenAll } from "./constrants/addresses";

export const renderInterval = 1 * 1000;

// interval of price check (ms)
export const interval = 10 * 1000;

export const initialAmount = 1000;
export const loanAmount = 10000;
export const diffAmount = 10; // Not enough amount to return loan

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_POLYGON_RPC_URL
);

export const explorerURL = "https://polygonscan.com";

// Token pair the bot trading
export const baseTokens = [
  // ERC20Token.DAI,
  // ERC20Token.WETH,
  // ERC20Token.USDC,
  // ERC20Token.USDT,
  ERC20Token.WMATIC,
  ERC20Token.WBTC,
  // ERC20Token.miMATIC,
  // ...Object.keys(ERC20TokenAll).map((key) => ERC20TokenAll[key]),
  // ERC20Token.MATIC,
  // ERC20Token.LINK,
  // ERC20Token.COMP,
  // ERC20Token.CEL,
  // ERC20Token.CRV,
  // ERC20Token.QI,
];

export const tradingTokens = [
  // ERC20Token.DAI,
  // ERC20Token.WETH,
  // ERC20Token.USDC,
  // ERC20Token.USDT,
  ERC20Token.WMATIC,
  // ERC20Token.WBTC,
  // ERC20Token.miMATIC,
  // ...Object.keys(ERC20TokenAll).map((key) => ERC20TokenAll[key]),
  // ERC20Token.MATIC,
  // ERC20Token.LINK,
  // ERC20Token.COMP,
  // ERC20Token.CEL,
  // ERC20Token.CRV,
  // ERC20Token.QI,
];

/**
 * @type {string} public flashloan contract address
 * Polyscan: https://polygonscan.com/address/0x0e0ec2c716b5ba2512af9d3790d8804da42ddd58
 * if you have deployed your own contract, you can use it instead of the default one
 */
export const flashloanAddress: string =
  "0x04fcB9c04344327f359bCb2c54945ce48b32Fb3a";

// protocols the bot will use
export const protocols =
  "POLYGON_SUSHISWAP,POLYGON_QUICKSWAP,POLYGON_APESWAP,POLYGON_JETSWAP,POLYGON_WAULTSWAP";

export const slippage = 3; // percentage
export const gasLimit = 15000000;
export const gasPrice = 30; // gwei
