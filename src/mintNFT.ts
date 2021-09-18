import { ethers } from "ethers";
import { getProvider } from "./getProvider";

import FactoryNFT from "../artifacts/contracts/factoryNFT.sol/FactoryNFT.json";
import { FactoryNFTAddress } from "./contractAddresses";

const run = async () => {
  const [, , ...unsanitizedArgs] = process.argv;

  if (unsanitizedArgs.length !== 2) {
    // eslint-disable-next-line
    console.log("yarn es ./src/mintNft <privatekey> <tokenuri>");
    return;
  }

  const [privateKey, tokenUri] = unsanitizedArgs;

  const provider = getProvider();

  const wallet = new ethers.Wallet(privateKey, provider);

  const factoryNFTContract = new ethers.Contract(
    FactoryNFTAddress,
    FactoryNFT.abi,
    wallet
  );

  console.log("minting");
  const transaction = await factoryNFTContract.createToken(tokenUri);
  const tx = await transaction.wait();
  const event = tx.events[0];
  const value = event.args[2];
  const tokenId = value.toNumber();

  console.log({
    transaction,
    tx,
    tokenId,
  });
};

(async () => {
  try {
    await run();
  } catch (err) {
    // eslint-disable-next-line
    console.log("err: ", err);
    process.exit(1);
  }
  process.exit(0);
})();
