import Block from "./Block.js"

export default class BlockChain {
    constructor(difficulty) {
        const genesisBlock = new Block('000', {firstBlock: true})
        this.difficulty = difficulty;
        this.chain = [genesisBlock]
    }
    getLastBlock() {return this.chain[this.chain.length - 1]}
    addBlock(data) {
        const lastBlock = this.getLastBlock();
        const newBlock = new Block(lastBlock.hash, data);
        console.time('mining')
        newBlock.mine(this.difficulty) // Proof of work (PoW) 
        console.timeEnd('mining')
        this.chain.push(newBlock);
    } 
    isValidBlock() {
        for(let i= 1 ; i < this.chain.length; i++) {
            const current = this.chain[i]
            const prev = this.chain[i-1]
            if (current.hash !== current.createHash()) return false;
            if (current.prevHash !== prev.hash) return false;
        }
        return true;
    }
}