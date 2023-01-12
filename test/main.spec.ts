import chai, { expect } from "chai";
import chaiBN from "chai-bn";
import BN from "bn.js";
chai.use(chaiBN(BN));

import { TonClient, fromNano, WalletContractV4, internal, Cell, toNano, Address, safeSign, beginCell } from "ton";
import { SmartContract } from "ton-contract-executor";
import * as main from "../contracts/main";
import { internalMessage, randomAddress } from "./helpers";
import { mnemonicNew, mnemonicToPrivateKey, sha256_sync } from "ton-crypto";
import { sign, signVerify } from "ton-crypto";

import { hex } from "../build/main.compiled.json";

describe("test", () => {
  let contract: SmartContract;

  beforeEach(async () => {
    contract = await SmartContract.fromCell(
      Cell.fromBoc(hex)[0] as any, // code cell from build output
      main.data({
        ownerAddress: randomAddress("owner"),
        number: 0,
      }) as any,
      {
        debug: true,
      }
    );
  });

  it("test", async () => {
    //TODO TESTS

  });
});
