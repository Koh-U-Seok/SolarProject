import express from "express";
import db from "../../models/index";
import Web3 from "web3";

// Swap
import { BigNumber } from "@ethersproject/bignumber";
import { AbiItem } from "web3-utils";
import { abi as DFSAbi } from "../../contracts/artifacts/Token.json";
import { abi as DfsEthPoolAbi } from "../../contracts/artifacts/LiquidityPool.json";

// MainNet
const web3 = new Web3(
  "wss://polygon-mumbai.infura.io/ws/v3/2ca09ab04a7c44dcb6f886deeba97502"
);

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  try {
    // 프론트에서 { address : 주소 ,amount: 수량, data: token(바꿀 토큰) } 정보를

    // axios.post("http://localhost:8080/api/swap/approve")에 보내주고

    // process.env.( 조건을 걸어서 :DFS_TOKEN_CA,ETH_TOKEN_CA,USDT_TOKEN_CA,BNB_TOKEN_CA )

    // 값을 받아 왔다면,{address : 주소 ,amount: 수량, data: token(받을 토큰)} 정보를

    // axios.post("http://localhost:8080/api/swap/swapTransaction")에

    // process.env.(조건을 걸어서 DFS_ETH_POOL_CA,DFS_USDT_POOL_CA,DFS_BNB_POOL_CA)

    // 에서 method swaptokens 를 거쳐서 결과값으로 {from:userAddress, to:조건처리된 pool ,data:swaptokens}

    res.end();
  } catch (error) {
    console.log(error);
    res.send();
  }
});

router.post("/swapApprove", async (req, res) => {
  try {
    const filterToken = async () => {
      switch (req.body.data) {
        case "dfs":
          return new web3.eth.Contract(
            DFSAbi as AbiItem[],
            process.env.DFS_TOKEN_CA
          );

        case "eth":
          return new web3.eth.Contract(
            DFSAbi as AbiItem[],
            process.env.ETH_TOKEN_CA
          );

        case "usdt":
          return new web3.eth.Contract(
            DFSAbi as AbiItem[],
            process.env.USDT_TOKEN_CA
          );

        case "bnb":
          return new web3.eth.Contract(
            DFSAbi as AbiItem[],
            process.env.BNB_TOKEN_CA
          );
        default:
          throw new Error("Invalid token");
      }
    };

    const result = await filterToken();

    const amount = BigNumber.from(
      Math.floor(req.body.amount * 10 ** 18).toString()
    );

    let approve = await result.methods
      .approve(result.options.address, amount)
      .encodeABI();

    res.send({
      from: req.body.userAddress,
      to: result.options.address,
      data: approve,
    });
  } catch (error) {
    console.log(error);
    res.end();
  }
});

router.post("/swapTransaction", async (req, res) => {
  try {
    const filterPool = async () => {
      let target = req.body.data;

      if ("dfsethpool".includes(target)) {
        return new web3.eth.Contract(
          DfsEthPoolAbi as AbiItem[],
          process.env.DFS_ETH_POOL_CA
        );
      } else if ("dfsbnbpool".includes(target)) {
        return new web3.eth.Contract(
          DfsEthPoolAbi as AbiItem[],
          process.env.DFS_BNB_POOL_CA
        );
      } else if ("dfsusdtpool".includes(target)) {
        return new web3.eth.Contract(
          DfsEthPoolAbi as AbiItem[],
          process.env.DFS_USDT_POOL_CA
        );
      } else {
        throw new Error("Invalid Error");
      }
    };
    const result = await filterPool();
    const amount = BigNumber.from(
      Math.floor(req.body.amount * 10 ** 18).toString()
    );

    const tokenSwap = result.methods
      .swapTokens(result.options.address, amount)
      .encodeABI();

    res.send({
      from: req.body.userAddress,
      to: result.options.address,
      data: tokenSwap,
    });
  } catch (error) {
    console.log(error);
    res.send();
  }
});

export default router;
