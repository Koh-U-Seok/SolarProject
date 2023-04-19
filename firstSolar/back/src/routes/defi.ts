import { Router, Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import db from "../../models/index";

import { mainNet } from "../setting";
import { abi as DexAbi } from "../../contracts/artifacts/Dex.json";

const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/U60psLWRd8tg7yShqQgZ-1YTMSYB0EGo"
);
dotenv.config();

interface LPData {
  id: string;
  chain: number;
  name: string;
  oracleId: string;
  status: string;
  platform: string;
  symbol: string;
  tvl: number;
  apy: number;
  dailyTvlRate?: number;
  network: string;
  mainNetLogo?: string;
  platformLogo?: string;
  tokens?: Array<string>;
  tokenAddress?: string;
}

interface detailLp {
  addLiquidityUrl: string;
  apy: number;
  assets: Array<string>;
  buyTokenUrl: string;
  chain: string;
  createdAt: number;
  dailyTvlRate: number | null;
  earnContractAddress: string;
  earnedToken: string;
  earnedTokenAddress: string;
  id: string;
  lastHarvest: number;
  mainNetLogo: string;
  name: string;
  network: string;
  oracle: string;
  oracleId: string;
  platformId: string;
  platformLogo: string;
  pricePerFullShare: string;
  removeLiquidityUrl: string;
  risks: Array<string>;
  status: string;
  strategy: string;
  strategyTypeId: string;
  token: string;
  tokenAddress: string;
  tokenAmmId: string;
  tokenDecimals: number;
  tokenProviderId: string;
  tvl: number;
}

const router = Router();

const ONE_DAY_MS: number = 24 * 60 * 60 * 1000;
const MAX_RETRIES: number = 3;
const RETRY_DELAY: number = 1000;
let retries: number = 0;

const getTvlData = async (
  lpId: string,
  oracleId: string,
  lpChain: number,
  date?: number
) => {
  const url = date
    ? `https://api.beefy.finance/tvl?${encodeURIComponent(
        oracleId
      )}&date=${date}`
    : `https://api.beefy.finance/tvl?${encodeURIComponent(oracleId)}`;
  return (await axios.get(url)).data[lpChain]?.[lpId] ?? 0;
};

let obj: { from?: string; to?: string; data?: string } = {
  from: "",
  to: "",
  data: "",
};

const deployed = new web3.eth.Contract(DexAbi as AbiItem[], process.env.DEX);

router.get("/", async (req: Request, res: Response<LPData[]>) => {
  retries = 0;

  const totalLplListUp = async () => {
    try {
      const now: Date = new Date();
      const yesterday: Date = new Date(now.getTime() - ONE_DAY_MS);

      const getPool = await db.Pool.findAll();

      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter((lp: any) => lp.status === "active");

      const data: Array<LPData> = await Promise.all(
        activeLpList.map(async (lp: any) => {
          const lpId: string = lp.id;
          const oracleId: string = lp.oracleId;
          const lpChain: number = mainNet[lp.chain];
          const tokens: Array<string> = lp.assets;

          const [tvlNow, tvlYesterday] = await Promise.all([
            getTvlData(lpId, oracleId, lpChain),
            getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
          ]);

          const dailyTvlRate: number =
            ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

          return {
            id: lpId,
            name: lp.name,
            platformId: lp.platformId,
            network: lp.network,
            oracleId: oracleId,
            status: lp.status,
            symbol: lp.symbol,
            tvl: tvlNow,
            apy:
              (await axios.get(`https://api.beefy.finance/apy?${oracleId}`))
                .data[lpId] ?? 0,
            dailyTvlRate,
            mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
            platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
            tokens,
            tokenAddress: lp.tokenAddress,
          };
        })
      );
      const dataWithPool = [...data, ...getPool];
      res.send(dataWithPool);
    } catch (error) {
      if (retries < MAX_RETRIES) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        await totalLplListUp();
      } else {
        console.error(error);
        res.send();
      }
    }
  };

  await totalLplListUp();
});

router.post("/filter", async (req: Request, res: Response<LPData[]>) => {
  retries = 0;
  const networkListUp = async () => {
    try {
      const { network, dex } = req.body;
      const now: Date = new Date();
      const yesterday: Date = new Date(now.getTime() - ONE_DAY_MS);

      const activeLpList = (
        await axios.get(`https://api.beefy.finance/vaults`)
      ).data.filter((lp: any) =>
        network
          ? lp.status === "active" && lp.chain === network
          : dex
          ? lp.status === "active" && lp.platformId === dex
          : lp.status === "active"
      );

      const data: Array<LPData> = await Promise.all(
        activeLpList.map(async (lp: any) => {
          const lpId: string = lp.id;
          const oracleId: string = lp.oracleId;
          const lpChain: number = mainNet[lp.chain];
          const tokens: Array<string> = lp.assets;

          const [tvlNow, tvlYesterday] = await Promise.all([
            getTvlData(lpId, oracleId, lpChain),
            getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
          ]);

          const dailyTvlRate: number =
            ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

          return {
            id: lpId,
            name: lp.name,
            platformId: lp.platformId,
            network: lp.network,
            oracleId: oracleId,
            status: lp.status,
            symbol: lp.symbol,
            tvl: tvlNow,
            apy:
              (await axios.get(`https://api.beefy.finance/apy?${oracleId}`))
                .data[lpId] ?? 0,
            dailyTvlRate,
            mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
            platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
            tokens,
            tokenAddress: lp.tokenAddress,
          };
        })
      );

      res.send(data);
    } catch (error) {
      if (retries < MAX_RETRIES) {
        retries++;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        await networkListUp();
      } else {
        console.error(error);
        res.send();
      }
    }
  };

  await networkListUp();
});

router.post("/check", async (req: Request, res: Response) => {
  const { inputAPI } = req.body;
  try {
    if (!inputAPI) return res.status(403).send({ msg: "No Message" });
    (await axios.get(`https://api.beefy.finance/${inputAPI}`)).data;
    res.status(200).send({ msg: `${inputAPI} is Exist API` });
  } catch (err) {
    res.status(201).send({ msg: `${inputAPI} is No Exist API` });
  }
});

router.post("/detail", async (req: Request, res: Response<detailLp[]>) => {
  const { id } = req.body;
  try {
    const now: Date = new Date();
    const yesterday: Date = new Date(now.getTime() - ONE_DAY_MS);
    const detailList = (
      await axios.get(`https://api.beefy.finance/vaults`)
    ).data.filter((lp: any) => lp.status == "active" && lp.oracleId == id);

    const data: Array<detailLp> = await Promise.all(
      detailList.map(async (lp: any) => {
        const lpId: string = lp.id;
        const oracleId: string = lp.oracleId;
        const lpChain: number = mainNet[lp.chain];

        const [tvlNow, tvlYesterday] = await Promise.all([
          getTvlData(lpId, oracleId, lpChain),
          getTvlData(lpId, oracleId, lpChain, yesterday.getTime()),
        ]);

        const dailyTvlRate: number =
          ((tvlNow - tvlYesterday) / tvlYesterday) * 100;

        return {
          ...lp,
          tvl: tvlNow,
          apy:
            (await axios.get(`https://api.beefy.finance/apy?${oracleId}`)).data[
              lpId
            ] ?? 0,
          dailyTvlRate,
          mainNetLogo: `/imgs/mainNet/${lp.network}.jpg`,
          platformLogo: `/imgs/platform/${lp.platformId}.jpg`,
        };
      })
    );

    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/price", async (req: Request, res: Response) => {
  const { token1, token2 } = req.body;
  try {
    const tokenList = (await axios.get(`https://api.beefy.finance/tokens`))
      .data;
    // const totalCoinList = (
    //   await axios.get(`https://api.coingecko.com/api/v3/coins/list`)
    // ).data.filter(
    //   (token) =>
    //     token.symbol == token1?.toLowerCase() ||
    //     token.symbol == token2?.toLowerCase()
    // );

    // const ids = totalCoinList.map((token) => token.id).join(",");

    // const { data } = await axios.get(
    //   `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd,eth,bnb,usdt`
    // );

    // const tokenPrices = totalCoinList.map((token) => {
    //   const { id, symbol, name } = token;

    //   const usd: number = data[id].usd;
    //   const eth: number = data[id].eth;
    //   const bnb: number = data[id].bnb;
    //   const usdt: number = data[id].usdt;

    //   return { id, symbol, name, usd, eth, bnb, usdt };
    // });

    // res.send({ tokenPrices, tokenList });
    res.send(tokenList);
  } catch (error) {
    console.error(error);
  }
});

router.post("/test", async (req: Request, res: Response) => {
  try {
    const { account }: { account: string } = req.body;

    obj.from = account;
    obj.to = process.env.DEX;
    obj.data = await deployed.methods
      .createLiquidityPool(process.env.DFS, process.env.ETH)
      .encodeABI();
    res.send(obj);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/lp", async (req: Request, res: Response) => {
  try {
    const result = await deployed.methods
      .getLiquidityPool(process.env.DFS, process.env.ETH)
      .call();
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
export default router;
