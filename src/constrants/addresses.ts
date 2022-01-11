export const polyMatic = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export const polyAAVEAddressProvider =
  "0xd05e3E715d945B59290df0ae8eF85c1BdB684744";
export const dex1inch = "0x11111112542D85B3EF69AE05771c2dCCff4fAa26";

export interface IToken {
  symbol: string;
  name: string;
  decimals: number;
  address: string;
  logoURI: string;
}

type erc20Token = { [erc20: string]: IToken };

export const ERC20Token: erc20Token = {
  MATIC: {
    symbol: "MATIC",
    name: "MATIC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },
  USDC: {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },
  USDT: {
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  DAI: {
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  WBTC: {
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    logoURI:
      "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
  },
  LINK: {
    symbol: "LINK",
    name: "ChainLink Token",
    decimals: 18,
    address: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    logoURI:
      "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  },
  WMATIC: {
    symbol: "WMATIC",
    name: "Wrapped Matic",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },
  COMP: {
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    address: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    logoURI:
      "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
  },
  CEL: {
    symbol: "CEL",
    name: "Celsius",
    decimals: 4,
    address: "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
    logoURI:
      "https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png",
  },
  WETH: {
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    logoURI:
      "https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png",
  },
  CRV: {
    symbol: "CRV",
    name: "CRV",
    decimals: 18,
    address: "0x172370d5cd63279efa6d502dab29171933a610af",
    logoURI:
      "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
  },
  QI: {
    symbol: "QI",
    name: "Qi Dao",
    decimals: 18,
    address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    logoURI:
      "https://tokens.1inch.io/0x580a84c73811e1839f75d86d75d88cca0c241ff4.png",
  },
};

export const ERC20TokenAll: erc20Token = {
  MATIC: {
    symbol: "MATIC",
    name: "MATIC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },
  AAVE: {
    symbol: "AAVE",
    name: "Aave",
    decimals: 18,
    address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    logoURI:
      "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
  },
  MUST: {
    symbol: "MUST",
    name: "Must",
    decimals: 18,
    address: "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f",
    logoURI:
      "https://tokens.1inch.io/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f.png",
  },
  UNI: {
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI:
      "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
  },
  USDC: {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },
  USDT: {
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  DAI: {
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  WBTC: {
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    logoURI:
      "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
  },
  LINK: {
    symbol: "LINK",
    name: "ChainLink Token",
    decimals: 18,
    address: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    logoURI:
      "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  },
  MEME: {
    symbol: "MEME",
    name: "MEME (PoS)",
    decimals: 8,
    address: "0xf2b5a8c37278bcdd50727d5ca879f8e5a4642e2e",
    logoURI:
      "https://tokens.1inch.io/0xd5525d397898e5502075ea5e830d8914f6f0affe.png",
  },
  SUPER: {
    symbol: "SUPER",
    name: "SuperFarm",
    decimals: 18,
    address: "0xa1428174f516f527fafdd146b883bb4428682737",
    logoURI:
      "https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png",
  },
  MANA: {
    symbol: "MANA",
    name: "Decentraland MANA",
    decimals: 18,
    address: "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
    logoURI:
      "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png",
  },
  YFI: {
    symbol: "YFI",
    name: "yearn.finance",
    decimals: 18,
    address: "0xda537104d6a5edd53c6fbba9a898708e465260b6",
    logoURI:
      "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png",
  },
  QUICK: {
    symbol: "QUICK",
    name: "Quickswap",
    decimals: 18,
    address: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
    logoURI:
      "https://tokens.1inch.io/0x6c28aef8977c9b773996d0e8376d2ee379446f2f.png",
  },
  WMATIC: {
    symbol: "WMATIC",
    name: "Wrapped Matic",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },
  HAWK: {
    symbol: "HAWK",
    name: "HawkDex",
    decimals: 18,
    address: "0x69cbc7449ee102eb792f1656744bf1a7c1bacb7e",
    logoURI:
      "https://tokens.1inch.io/0x69cbc7449ee102eb792f1656744bf1a7c1bacb7e.png",
  },
  COMP: {
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    address: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    logoURI:
      "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
  },
  BTU: {
    symbol: "BTU",
    name: "BTU Protocol",
    decimals: 18,
    address: "0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc",
    logoURI:
      "https://tokens.1inch.io/0xb683d83a532e2cb7dfa5275eed3698436371cc9f.png",
  },
  $DG: {
    symbol: "$DG",
    name: "decentral.games",
    decimals: 18,
    address: "0x2a93172c8dccbfbc60a39d56183b7279a2f647b4",
    logoURI:
      "https://tokens.1inch.io/0xee06a81a695750e71a662b51066f2c74cf4478a0.png",
  },
  "0xBTC": {
    symbol: "0xBTC",
    name: "0xBitcoin Token",
    decimals: 8,
    address: "0x71b821aa52a49f32eed535fca6eb5aa130085978",
    logoURI:
      "https://tokens.1inch.io/0x71b821aa52a49f32eed535fca6eb5aa130085978.png",
  },
  AGA: {
    symbol: "AGA",
    name: "AGA Token",
    decimals: 4,
    address: "0x033d942a6b495c4071083f4cde1f17e986fe856c",
    logoURI:
      "https://tokens.1inch.io/0x2d80f5f5328fdcb6eceb7cacf5dd8aedaec94e20.png",
  },
  AGAr: {
    symbol: "AGAr",
    name: "AGA Rewards",
    decimals: 8,
    address: "0xf84bd51eab957c2e7b7d646a3427c5a50848281d",
    logoURI:
      "https://tokens.1inch.io/0xb453f1f2ee776daf2586501361c457db70e1ca0f.png",
  },
  ARIA20: {
    symbol: "ARIA20",
    name: "ARIANEE",
    decimals: 18,
    address: "0x46f48fbdedaa6f5500993bede9539ef85f4bee8e",
    logoURI:
      "https://tokens.1inch.io/0x46f48fbdedaa6f5500993bede9539ef85f4bee8e.png",
  },
  AZUKI: {
    symbol: "AZUKI",
    name: "DokiDokiAzuki",
    decimals: 18,
    address: "0x7cdc0421469398e0f3aa8890693d86c840ac8931",
    logoURI:
      "https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png",
  },
  CC10: {
    symbol: "CC10",
    name: "Cryptocurrency Top Tokens Index",
    decimals: 18,
    address: "0x9c49ba0212bb5db371e66b59d1565b7c06e4894e",
    logoURI:
      "https://tokens.1inch.io/0x17ac188e09a7890a1844e5e65471fe8b0ccfadf3.png",
  },
  CEL: {
    symbol: "CEL",
    name: "Celsius",
    decimals: 4,
    address: "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
    logoURI:
      "https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png",
  },
  CFI: {
    symbol: "CFI",
    name: "CyberFi Token",
    decimals: 18,
    address: "0xecf8f2fa183b1c4d2a269bf98a54fce86c812d3e",
    logoURI:
      "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png",
  },
  CTSI: {
    symbol: "CTSI",
    name: "Cartesi Token",
    decimals: 18,
    address: "0x2727ab1c2d22170abc9b595177b2d5c6e1ab7b7b",
    logoURI:
      "https://tokens.1inch.io/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png",
  },
  DB: {
    symbol: "DB",
    name: "Dark.Build",
    decimals: 18,
    address: "0x0e59d50add2d90f5111aca875bae0a72d95b4762",
    logoURI:
      "https://tokens.1inch.io/0x0e59d50add2d90f5111aca875bae0a72d95b4762.png",
  },
  DEFI5: {
    symbol: "DEFI5",
    name: "DEFI Top 5 Tokens Index",
    decimals: 18,
    address: "0x42435f467d33e5c4146a4e8893976ef12bbce762",
    logoURI:
      "https://tokens.1inch.io/0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41.png",
  },
  DEGEN: {
    symbol: "DEGEN",
    name: "DEGEN Index",
    decimals: 18,
    address: "0x8a2870fb69a90000d6439b7adfb01d4ba383a415",
    logoURI:
      "https://tokens.1inch.io/0x126c121f99e1e211df2e5f8de2d96fa36647c855.png",
  },
  DMT: {
    symbol: "DMT",
    name: "Dark Matter Token",
    decimals: 18,
    address: "0xd28449bb9bb659725accad52947677cce3719fd7",
    logoURI:
      "https://tokens.1inch.io/0xd28449bb9bb659725accad52947677cce3719fd7.png",
  },
  DRC: {
    symbol: "DRC",
    name: "Digital Reserve Currency",
    decimals: 0,
    address: "0xfed16c746cb5bfed009730f9e3e6a673006105c7",
    logoURI:
      "https://tokens.1inch.io/0xfed16c746cb5bfed009730f9e3e6a673006105c7.png",
  },
  DSLA: {
    symbol: "DSLA",
    name: "DSLA",
    decimals: 18,
    address: "0xa0e390e9cea0d0e8cd40048ced9fa9ea10d71639",
    logoURI:
      "https://tokens.1inch.io/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png",
  },
  EASY: {
    symbol: "EASY",
    name: "EASY",
    decimals: 18,
    address: "0xdb3b3b147a030f032633f6c4bebf9a2fb5a882b5",
    logoURI:
      "https://tokens.1inch.io/0x913d8adf7ce6986a8cbfee5a54725d9eea4f0729.png",
  },
  ELET: {
    symbol: "ELET",
    name: "Elementeum",
    decimals: 18,
    address: "0x07738eb4ce8932ca961c815cb12c9d4ab5bd0da4",
    logoURI:
      "https://tokens.1inch.io/0x07738eb4ce8932ca961c815cb12c9d4ab5bd0da4.png",
  },
  ETH: {
    symbol: "ETH",
    name: "Ether",
    decimals: 18,
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    logoURI:
      "https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png",
  },
  FRAX: {
    symbol: "FRAX",
    name: "Frax",
    decimals: 18,
    address: "0x104592a158490a9228070e0a8e5343b499e125d0",
    logoURI:
      "https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png",
  },
  FXS: {
    symbol: "FXS",
    name: "Frax Share",
    decimals: 18,
    address: "0x3e121107f6f22da4911079845a470757af4e1a1b",
    logoURI:
      "https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png",
  },
  GAME: {
    symbol: "GAME",
    name: "GAME Credits",
    decimals: 18,
    address: "0x8d1566569d5b695d44a9a234540f68d393cdc40d",
    logoURI:
      "https://tokens.1inch.io/0x63f88a2298a5c4aee3c216aa6d926b184a4b2437.png",
  },
  GHST: {
    symbol: "GHST",
    name: "Aavegotchi GHST Token",
    decimals: 18,
    address: "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
    logoURI:
      "https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png",
  },
  HEX: {
    symbol: "HEX",
    name: "HEXX",
    decimals: 8,
    address: "0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c",
    logoURI:
      "https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png",
  },
  HH: {
    symbol: "HH",
    name: "Holyheld",
    decimals: 18,
    address: "0x521cddc0cba84f14c69c1e99249f781aa73ee0bc",
    logoURI:
      "https://tokens.1inch.io/0x3fa729b4548becbad4eab6ef18413470e6d5324c.png",
  },
  IGG: {
    symbol: "IGG",
    name: "IG Gold",
    decimals: 6,
    address: "0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce",
    logoURI:
      "https://tokens.1inch.io/0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce.png",
  },
  LEND: {
    symbol: "LEND",
    name: "EthLend Token",
    decimals: 18,
    address: "0x313d009888329c9d1cf4f75ca3f32566335bd604",
    logoURI:
      "https://tokens.1inch.io/0x80fb784b7ed66730e8b1dbd9820afd29931aab03.png",
  },
  MONA: {
    symbol: "MONA",
    name: "Monavale",
    decimals: 18,
    address: "0x6968105460f67c3bf751be7c15f92f5286fd0ce5",
    logoURI:
      "https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png",
  },
  NDR: {
    symbol: "NDR",
    name: "NodeRunners",
    decimals: 18,
    address: "0xfb65ef42f7c8a70ff73f627db6e9ba2aff1f20fa",
    logoURI:
      "https://tokens.1inch.io/0x739763a258640919981f9ba610ae65492455be53.png",
  },
  OM: {
    symbol: "OM",
    name: "OM",
    decimals: 18,
    address: "0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea",
    logoURI:
      "https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png",
  },
  PICKLE: {
    symbol: "PICKLE",
    name: "PickleToken",
    decimals: 18,
    address: "0x2b88ad57897a8b496595925f43048301c37615da",
    logoURI:
      "https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png",
  },
  PPDEX: {
    symbol: "PPDEX",
    name: "Pepedex",
    decimals: 18,
    address: "0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e",
    logoURI:
      "https://tokens.1inch.io/0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e.png",
  },
  RBAL: {
    symbol: "RBAL",
    name: "Rebalance Token",
    decimals: 18,
    address: "0x03247a4368a280bec8133300cd930a3a61d604f6",
    logoURI:
      "https://tokens.1inch.io/0x03247a4368a280bec8133300cd930a3a61d604f6.png",
  },
  SDT: {
    symbol: "SDT",
    name: "Stake DAO Token",
    decimals: 18,
    address: "0x361a5a4993493ce00f61c32d4ecca5512b82ce90",
    logoURI:
      "https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png",
  },
  SENT: {
    symbol: "SENT",
    name: "Sentinel",
    decimals: 8,
    address: "0x48e3883233461c2ef4cb3fcf419d6db07fb86cea",
    logoURI:
      "https://tokens.1inch.io/0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037.png",
  },
  SUSHI: {
    symbol: "SUSHI",
    name: "SushiToken",
    decimals: 18,
    address: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    logoURI:
      "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png",
  },
  SWAP: {
    symbol: "SWAP",
    name: "TrustSwap Token",
    decimals: 18,
    address: "0x3809dcdd5dde24b37abe64a5a339784c3323c44f",
    logoURI:
      "https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png",
  },
  SWG: {
    symbol: "SWG",
    name: "Swirge",
    decimals: 18,
    address: "0x043a3aa319b563ac25d4e342d32bffb51298db7b",
    logoURI:
      "https://tokens.1inch.io/0x92ef4ffbfe0df030837b65d7fccfe1abd6549579.png",
  },
  SX: {
    symbol: "SX",
    name: "SportX",
    decimals: 18,
    address: "0x840195888db4d6a99ed9f73fcd3b225bb3cb1a79",
    logoURI:
      "https://tokens.1inch.io/0x99fe3b1391503a1bc1788051347a1324bff41452.png",
  },
  UBT: {
    symbol: "UBT",
    name: "Unibright",
    decimals: 8,
    address: "0x7fbc10850cae055b27039af31bd258430e714c62",
    logoURI:
      "https://tokens.1inch.io/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png",
  },
  VISION: {
    symbol: "VISION",
    name: "Vision Token",
    decimals: 18,
    address: "0x034b2090b579228482520c589dbd397c53fc51cc",
    logoURI:
      "https://tokens.1inch.io/0x034b2090b579228482520c589dbd397c53fc51cc.png",
  },
  WISE: {
    symbol: "WISE",
    name: "Wise Token",
    decimals: 18,
    address: "0xb77e62709e39ad1cbeebe77cf493745aec0f453a",
    logoURI:
      "https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png",
  },
  WOLF: {
    symbol: "WOLF",
    name: "moonwolf.io",
    decimals: 9,
    address: "0x8f18dc399594b451eda8c5da02d0563c0b2d0f16",
    logoURI:
      "https://tokens.1inch.io/0x8f18dc399594b451eda8c5da02d0563c0b2d0f16.png",
  },
  WRX: {
    symbol: "WRX",
    name: "WazirX",
    decimals: 8,
    address: "0x72d6066f486bd0052eefb9114b66ae40e0a6031a",
    logoURI:
      "https://tokens.1inch.io/0x72d6066f486bd0052eefb9114b66ae40e0a6031a.png",
  },
  ZUT: {
    symbol: "ZUT",
    name: "ZeroUtility",
    decimals: 18,
    address: "0xe86e8beb7340659dddce61727e500e3a5ad75a90",
    logoURI:
      "https://tokens.1inch.io/0xe86e8beb7340659dddce61727e500e3a5ad75a90.png",
  },
  ZUZ: {
    symbol: "ZUZ",
    name: "Zeus",
    decimals: 18,
    address: "0x232eab56c4fb3f84c6fb0a50c087c74b7b43c6ad",
    logoURI:
      "https://tokens.1inch.io/0x232eab56c4fb3f84c6fb0a50c087c74b7b43c6ad.png",
  },
  bBADGER: {
    symbol: "bBADGER",
    name: "Badger Sett Badger",
    decimals: 18,
    address: "0x2628d301b161db70e3dbbac88d9d900ca426ff02",
    logoURI:
      "https://tokens.1inch.io/0x3472a5a71965499acd81997a54bba8d852c6e53d.png",
  },
  bDIGG: {
    symbol: "bDIGG",
    name: "Badger Sett Digg",
    decimals: 18,
    address: "0xfdde616084427f0a231d0664a985e1f820e34693",
    logoURI:
      "https://tokens.1inch.io/0x798d1be841a82a273720ce31c822c61a67a601c3.png",
  },
  iFARM: {
    symbol: "iFARM",
    name: "iFARM",
    decimals: 18,
    address: "0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff",
    logoURI:
      "https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png",
  },
  mDEF: {
    symbol: "mDEF",
    name: "Matic Deflect Protocol",
    decimals: 9,
    address: "0x82b6205002ecd05e97642d38d61e2cfeac0e18ce",
    logoURI:
      "https://tokens.1inch.io/0x82b6205002ecd05e97642d38d61e2cfeac0e18ce.png",
  },
  mOCEAN: {
    symbol: "mOCEAN",
    name: "Ocean Token",
    decimals: 18,
    address: "0x282d8efce846a88b159800bd4130ad77443fa1a1",
    logoURI:
      "https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png",
  },
  mRBAL: {
    symbol: "mRBAL",
    name: "Matic Rebalance Token",
    decimals: 18,
    address: "0x66768ad00746ac4d68ded9f64886d55d5243f5ec",
    logoURI:
      "https://tokens.1inch.io/0x03247a4368a280bec8133300cd930a3a61d604f6.png",
  },
  xMARK: {
    symbol: "xMARK",
    name: "Standard",
    decimals: 9,
    address: "0xf153eff70dc0bf3b085134928daeea248d9b30d0",
    logoURI:
      "https://tokens.1inch.io/0xf153eff70dc0bf3b085134928daeea248d9b30d0.png",
  },
  xSDT: {
    symbol: "xSDT",
    name: "Staked SDT",
    decimals: 18,
    address: "0xd921f8318cfd786bab1ea7492673f053c518ac04",
    logoURI:
      "https://tokens.1inch.io/0xd921f8318cfd786bab1ea7492673f053c518ac04.png",
  },
  ANY: {
    symbol: "ANY",
    name: "Anyswap",
    decimals: 18,
    address: "0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8",
    logoURI:
      "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png",
  },
  FSN: {
    symbol: "FSN",
    name: "Fusion",
    decimals: 18,
    address: "0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c",
    logoURI:
      "https://tokens.1inch.io/0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c.png",
  },
  GFARM2: {
    symbol: "GFARM2",
    name: "Gains V2",
    decimals: 18,
    address: "0x7075cab6bcca06613e2d071bd918d1a0241379e2",
    logoURI:
      "https://tokens.1inch.io/0x7075cab6bcca06613e2d071bd918d1a0241379e2.png",
  },
  Krill: {
    symbol: "Krill",
    name: "Krill",
    decimals: 18,
    address: "0x05089c9ebffa4f0aca269e32056b1b36b37ed71b",
    logoURI:
      "https://tokens.1inch.io/0x05089c9ebffa4f0aca269e32056b1b36b37ed71b.png",
  },
  NFTP: {
    symbol: "NFTP",
    name: "NFT Platform Index",
    decimals: 18,
    address: "0xf7d9e281c5cb4c6796284c5b663b3593d2037af2",
    logoURI:
      "https://tokens.1inch.io/0x05089c9ebffa4f0aca269e32056b1b36b37ed71b.png",
  },
  OPU: {
    symbol: "OPU",
    name: "Opu Coin",
    decimals: 18,
    address: "0x7ff2fc33e161e3b1c6511b934f0209d304267857",
    logoURI:
      "https://tokens.1inch.io/0x7ff2fc33e161e3b1c6511b934f0209d304267857.png",
  },
  PLOT: {
    symbol: "PLOT",
    name: "PLOT",
    decimals: 18,
    address: "0xe82808eaa78339b06a691fd92e1be79671cad8d3",
    logoURI:
      "https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png",
  },
  TEL: {
    symbol: "TEL",
    name: "Telcoin",
    decimals: 2,
    address: "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32",
    logoURI:
      "https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png",
  },
  amUSDC: {
    symbol: "amUSDC",
    name: "Aave Matic Market USDC",
    decimals: 6,
    address: "0x1a13f4ca1d028320a707d99520abfefca3998b7f",
    logoURI:
      "https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png",
  },
  amUSDT: {
    symbol: "amUSDT",
    name: "Aave Matic Market USDT",
    decimals: 6,
    address: "0x60d55f02a771d515e077c9c2403a1ef324885cec",
    logoURI:
      "https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png",
  },
  amWBTC: {
    symbol: "amWBTC",
    name: "Aave Matic Market WBTC",
    decimals: 8,
    address: "0x5c2ed810328349100a66b82b78a1791b101c9d61",
    logoURI:
      "https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png",
  },
  amWETH: {
    symbol: "amWETH",
    name: "Aave Matic Market WETH",
    decimals: 18,
    address: "0x28424507fefb6f7f8e9d3860f56504e4e5f5f390",
    logoURI:
      "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png",
  },
  amWMATIC: {
    symbol: "amWMATIC",
    name: "Aave Matic Market WMATIC",
    decimals: 18,
    address: "0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4",
    logoURI:
      "https://tokens.1inch.io/0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4.png",
  },
  amAAVE: {
    symbol: "amAAVE",
    name: "Aave Matic Market AAVE",
    decimals: 18,
    address: "0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360",
    logoURI:
      "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png",
  },
  amDAI: {
    symbol: "amDAI",
    name: "Aave Matic Market DAI",
    decimals: 18,
    address: "0x27f8d03b3a2196956ed754badc28d73be8830a6e",
    logoURI:
      "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png",
  },
  CRV: {
    symbol: "CRV",
    name: "CRV",
    decimals: 18,
    address: "0x172370d5cd63279efa6d502dab29171933a610af",
    logoURI:
      "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
  },
  BIFI: {
    symbol: "BIFI",
    name: "beefy.finance",
    decimals: 18,
    address: "0xfbdd194376de19a88118e84e279b977f165d01b8",
    logoURI:
      "https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png",
  },
  FISH: {
    symbol: "FISH",
    name: "Fish",
    decimals: 18,
    address: "0x3a3df212b7aa91aa0402b9035b098891d276572b",
    logoURI:
      "https://tokens.1inch.io/0x3a3df212b7aa91aa0402b9035b098891d276572b.png",
  },
  PolyDoge: {
    symbol: "PolyDoge",
    name: "PolyDoge",
    decimals: 18,
    address: "0x8a953cfe442c5e8855cc6c61b1293fa648bae472",
    logoURI:
      "https://tokens.1inch.io/0x8a953cfe442c5e8855cc6c61b1293fa648bae472.png",
  },
  mUSD: {
    symbol: "mUSD",
    name: "mStable USD",
    address: "0xe840b73e5287865eec17d250bfb1536704b43b21",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.io/0xe2f2a5c287993345a840db3b0845fbc70f5935a5.png",
  },
  IRON: {
    symbol: "IRON",
    name: "IRON Stablecoin",
    decimals: 18,
    address: "0xd86b5923f3ad7b585ed81b448170ae026c65ae9a",
    logoURI:
      "https://tokens.1inch.io/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a.png",
  },
  TITAN: {
    symbol: "TITAN",
    name: "IRON Titanium Token",
    decimals: 18,
    address: "0xaaa5b9e6c589642f98a1cda99b9d024b8407285a",
    logoURI:
      "https://tokens.1inch.io/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a.png",
  },
  ELE: {
    symbol: "ELE",
    name: "Eleven.finance",
    decimals: 18,
    address: "0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0",
    logoURI:
      "https://tokens.1inch.io/0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0.png",
  },
  SUPERBID: {
    symbol: "SUPERBID",
    name: "SuperBid",
    decimals: 18,
    address: "0xa3860f969075045d82de85b06bb665f93c4bae32",
    logoURI:
      "https://tokens.1inch.io/0xa3860f969075045d82de85b06bb665f93c4bae32.png",
  },
  DFYN: {
    symbol: "DFYN",
    name: "DFYN Token",
    decimals: 18,
    address: "0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97",
    logoURI:
      "https://tokens.1inch.io/0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97.png",
  },
  PLX: {
    symbol: "PLX",
    name: "PolyDex.Fi",
    decimals: 18,
    address: "0x7a5dc8a09c831251026302c93a778748dd48b4df",
    logoURI:
      "https://tokens.1inch.io/0x7a5dc8a09c831251026302c93a778748dd48b4df.png",
  },
  WOO: {
    symbol: "WOO",
    name: "Wootrade Network",
    decimals: 18,
    address: "0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603",
    logoURI:
      "https://tokens.1inch.io/0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603.png",
  },
  renBTC: {
    symbol: "renBTC",
    name: "renBTC",
    decimals: 8,
    address: "0xdbf31df14b66535af65aac99c32e9ea844e14501",
    logoURI:
      "https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png",
  },
  WEXpoly: {
    symbol: "WEXpoly",
    name: "WaultSwap Polygon",
    decimals: 18,
    address: "0x4c4bf319237d98a30a929a96112effa8da3510eb",
    logoURI:
      "https://tokens.1inch.io/0x4c4bf319237d98a30a929a96112effa8da3510eb.png",
  },
  QI: {
    symbol: "QI",
    name: "Qi Dao",
    decimals: 18,
    address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    logoURI:
      "https://tokens.1inch.io/0x580a84c73811e1839f75d86d75d88cca0c241ff4.png",
  },
  miMATIC: {
    symbol: "miMATIC",
    name: "miMATIC",
    decimals: 18,
    address: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    logoURI:
      "https://tokens.1inch.io/0xa3fa99a148fa48d14ed51d610c367c61876997f1.png",
  },
  YELD: {
    symbol: "YELD",
    name: "PolyYeld Token",
    decimals: 18,
    address: "0xd0f3121a190d85de0ab6131f2bcecdbfcfb38891",
    logoURI:
      "https://tokens.1inch.io/0xd0f3121a190d85de0ab6131f2bcecdbfcfb38891.png",
  },
  PGOV: {
    symbol: "PGOV",
    name: "PGOV Token",
    decimals: 18,
    address: "0xd5d84e75f48e75f01fb2eb6dfd8ea148ee3d0feb",
    logoURI:
      "https://tokens.1inch.io/0xd5d84e75f48e75f01fb2eb6dfd8ea148ee3d0feb.png",
  },
  OMEN: {
    symbol: "OMEN",
    name: "Augury Finance",
    decimals: 18,
    address: "0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e",
    logoURI:
      "https://tokens.1inch.io/0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e.png",
  },
  PLR: {
    symbol: "PLR",
    name: "PILLAR",
    decimals: 18,
    address: "0xa6b37fc85d870711c56fbcb8afe2f8db049ae774",
    logoURI:
      "https://tokens.1inch.io/0xa6b37fc85d870711c56fbcb8afe2f8db049ae774.png",
  },
  KNC: {
    symbol: "KNC",
    name: "Kyber Network Crystal v2",
    decimals: 18,
    address: "0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c",
    logoURI:
      "https://tokens.1inch.io/0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c.png",
  },
  VERT: {
    symbol: "VERT",
    name: "Vertex",
    decimals: 18,
    address: "0x72572ccf5208b59f4bcc14e6653d8c31cd1fc5a0",
    logoURI:
      "https://tokens.1inch.io/0x72572ccf5208b59f4bcc14e6653d8c31cd1fc5a0.png",
  },
  BAL: {
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    address: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
    logoURI:
      "https://tokens.1inch.io/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3.png",
  },
  ICE: {
    symbol: "ICE",
    name: "Iron Finance ICE Token",
    decimals: 18,
    address: "0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef",
    logoURI:
      "https://tokens.1inch.io/0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef.png",
  },
  PAPR: {
    symbol: "PAPR",
    name: "PAPR",
    decimals: 18,
    address: "0xfbe49330e7b9f58a822788f86c1be38ab902bab1",
    logoURI:
      "https://tokens.1inch.io/0xfbe49330e7b9f58a822788f86c1be38ab902bab1.png",
  },
  PRNTR: {
    symbol: "PRNTR",
    name: "PRNTR",
    decimals: 18,
    address: "0x03cba0cff3bf727711eae7ef11d152dce3163901",
    logoURI:
      "https://tokens.1inch.io/0x03cba0cff3bf727711eae7ef11d152dce3163901.png",
  },
  ETHA: {
    symbol: "ETHA",
    name: "ETHA",
    decimals: 18,
    address: "0x59e9261255644c411afdd00bd89162d09d862e38",
    logoURI:
      "https://tokens.1inch.io/0x59e9261255644c411afdd00bd89162d09d862e38.png",
  },
  ADDY: {
    symbol: "ADDY",
    name: "Adamant",
    decimals: 18,
    address: "0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539",
    logoURI:
      "https://tokens.1inch.io/0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539.png",
  },
  UST: {
    symbol: "UST",
    name: "Wrapped UST Token (PoS)",
    decimals: 18,
    address: "0x692597b009d13c4049a947cab2239b7d6517875f",
    logoURI:
      "https://tokens.1inch.io/0x692597b009d13c4049a947cab2239b7d6517875f.png",
  },
  SHI3LD: {
    symbol: "SHI3LD",
    name: "PolyShield",
    decimals: 18,
    address: "0xf239e69ce434c7fb408b05a0da416b14917d934e",
    logoURI:
      "https://tokens.1inch.io/0xf239e69ce434c7fb408b05a0da416b14917d934e.png",
  },
  SNK: {
    symbol: "SNK",
    name: "Snook",
    decimals: 18,
    address: "0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309",
    logoURI:
      "https://tokens.1inch.io/0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309.png",
  },
  IRIS: {
    symbol: "IRIS",
    name: "Iris",
    decimals: 18,
    address: "0xdab35042e63e93cc8556c9bae482e5415b5ac4b1",
    logoURI:
      "https://tokens.1inch.io/0xdab35042e63e93cc8556c9bae482e5415b5ac4b1.png",
  },
  xUSD: {
    symbol: "xUSD",
    name: "xDollar Stablecoin",
    decimals: 18,
    address: "0x3a3e7650f8b9f667da98f236010fbf44ee4b2975",
    logoURI:
      "https://tokens.1inch.io/0x3a3e7650f8b9f667da98f236010fbf44ee4b2975.png",
  },
  KOGECOIN: {
    symbol: "KOGECOIN",
    name: "kogecoin.io",
    decimals: 9,
    address: "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
    logoURI:
      "https://tokens.1inch.io/0x13748d548d95d78a3c83fe3f32604b4796cffa23.png",
  },
  DHV: {
    symbol: "DHV",
    name: "DeHive.finance",
    decimals: 18,
    address: "0x5fcb9de282af6122ce3518cde28b7089c9f97b26",
    logoURI:
      "https://tokens.1inch.io/0x5fcb9de282af6122ce3518cde28b7089c9f97b26.png",
  },
  CADC: {
    symbol: "CADC",
    name: "CAD Coin (PoS)",
    decimals: 18,
    address: "0x5d146d8b1dacb1ebba5cb005ae1059da8a1fbf57",
    logoURI:
      "https://tokens.1inch.io/0x5d146d8b1dacb1ebba5cb005ae1059da8a1fbf57.png",
  },
  EURS: {
    symbol: "EURS",
    name: "STASIS EURS Token (PoS)",
    decimals: 2,
    address: "0xe111178a87a3bff0c8d18decba5798827539ae99",
    logoURI:
      "https://tokens.1inch.io/0xe111178a87a3bff0c8d18decba5798827539ae99.png",
  },
  XSGD: {
    symbol: "XSGD",
    name: "XSGD (PoS)",
    decimals: 6,
    address: "0x769434dca303597c8fc4997bf3dab233e961eda2",
    logoURI:
      "https://tokens.1inch.io/0x769434dca303597c8fc4997bf3dab233e961eda2.png",
  },
  TETU: {
    symbol: "TETU",
    name: "TETU Reward Token",
    decimals: 18,
    address: "0x255707b70bf90aa112006e1b07b9aea6de021424",
    logoURI:
      "https://tokens.1inch.io/0x255707b70bf90aa112006e1b07b9aea6de021424.png",
  },
  "1FLR": {
    symbol: "1FLR",
    name: "Flare Token",
    decimals: 18,
    address: "0x5f0197ba06860dac7e31258bdf749f92b6a636d4",
    logoURI:
      "https://tokens.1inch.io/0x5f0197ba06860dac7e31258bdf749f92b6a636d4.png",
  },
  APW: {
    symbol: "APW",
    name: "APWine Token (PoS)",
    decimals: 18,
    address: "0x6c0ab120dbd11ba701aff6748568311668f63fe0",
    logoURI:
      "https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png",
  },
  DHT: {
    symbol: "DHT",
    name: "dHedge DAO Token (PoS)",
    decimals: 18,
    address: "0x8c92e38eca8210f4fcbf17f0951b198dd7668292",
    logoURI:
      "https://tokens.1inch.io/0x8c92e38eca8210f4fcbf17f0951b198dd7668292.png",
  },
  dUSD: {
    symbol: "dUSD",
    name: "dHEDGE Stablecoin Yield",
    decimals: 18,
    address: "0xbae28251b2a4e621aa7e20538c06dee010bc06de",
    logoURI:
      "https://tokens.1inch.io/0xbae28251b2a4e621aa7e20538c06dee010bc06de.png",
  },
  NACHO: {
    symbol: "NACHO",
    name: "NACHO",
    decimals: 18,
    address: "0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2",
    logoURI:
      "https://tokens.1inch.io/0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2.png",
  },
  NSHARE: {
    symbol: "NSHARE",
    name: "NSHARE",
    decimals: 18,
    address: "0x948d0a28b600bdbd77af4ea30e6f338167034181",
    logoURI:
      "https://tokens.1inch.io/0x948d0a28b600bdbd77af4ea30e6f338167034181.png",
  },
};

type PoolMap = { [pair: string]: string };

export const dodoV2Pool: PoolMap = {
  USDC_DAI: "0xaaE10Fa31E73287687ce56eC90f81A800361B898",
  USDT_DAI: "0xDa43a4aAB20D313Ab3AA07d8E09f3521F32a3D83",
  WETH_USDC: "0x5333Eb1E32522F1893B7C9feA3c263807A02d561",
  WMATIC_USDC: "0x10Dd6d8A29D489BEDE472CC1b22dc695c144c5c7",
  WMATIC_WETH: "0xC877D7BbCB5b40C3F3d7e7E0d0DA6220BEE027a1",
  USDC_USDT: "0x56FF5E27d40FBF746ADaa3DA820ADb2056F225E7",
  WBTC_USDC: "0xe020008465cD72301A18b97d33D73bF44858A4b7",
};

type RouterMap = { [protocol: string]: string };

export const uniswapRouter: RouterMap = {
  POLYGON_SUSHISWAP: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  POLYGON_QUICKSWAP: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  POLYGON_APESWAP: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
  POLYGON_JETSWAP: "0x5C6EC38fb0e2609672BDf628B1fD605A523E5923",
  POLYGON_POLYCAT: "0x94930a328162957FF1dd48900aF67B5439336cBD",
  POLYGON_WAULTSWAP: "0x3a1D87f206D12415f5b0A33E786967680AAb4f6d",
};
