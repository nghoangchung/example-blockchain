import BlockChain from "./src/BlockChain.js"

const coinBlockChain = new BlockChain(5)

console.log(coinBlockChain)
coinBlockChain.addBlock({moneyIn: 10, moneyOut: 20})
coinBlockChain.addBlock({moneyIn: 500, moneyOut: 20})
coinBlockChain.addBlock({moneyIn: 100, moneyOut: 250})
console.log('list of blocks: ', coinBlockChain.chain)
console.log('check valid block: ',coinBlockChain.isValidBlock())