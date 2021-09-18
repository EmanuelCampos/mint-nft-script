# Mint NFT Script #

## :computer: About the project

This project was made to mint NFTS directly by CLI, to facilitate the development, testing or even the registration of NFTS.

## How To Run

First run `yarn install` to install the packages:

``` bash
yarn install
```

Now configure your `.env` with the required variables

> Use your private key very carefully, because it is extremely secret.

```env
CONTRACT_ADDRESS= // deployed contract Address
DEPLOYER_PRIVATE_KEY= // to mint by your address
NETWORK=rinkeby // the network, can be: mainnet, rinkeby, ropsten
INFURA_PROJECT_ID= // your infura project id, you can see my article to do
```

Run the command to mint the NFT

> the tokenURI is the url where your NFT metadata is hosted.

```bash
yarn es ./src/mintNft <privatekey> <tokenuri>
```


## Authors

| [<img src="https://avatars2.githubusercontent.com/u/16262455?s=115&v=3"><br><sub>@EmanuelCampos</sub>](https://github.com/EmanuelCampos) |
| :------------------------------------------------------------------------------------------------------------------------------: |

| [<img src="https://avatars.githubusercontent.com/u/2005841?s=115&v=4"><br><sub>@sibelius</sub>](https://github.com/sibelius) |
| :------------------------------------------------------------------------------------------------------------------------------: |
