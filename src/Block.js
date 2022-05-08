import crypto from 'crypto-js';

export default class Block {
    constructor(prevHash, data) {
        this.prevHash = prevHash
        this.data = data
        this.createdAt = new Date();
        this.hash = this.createHash();
        this.mineValue =  0
    }
    createHash() {
        return crypto.SHA256(this.prevHash + JSON.stringify(this.data) + this.mineValue + this.createdAt).toString(); // can crytional 
    }
    mine(difficulty) { //difficulty type number
        while(!this.hash.startsWith('0'.repeat(difficulty))) { // public key hash
            this.mineValue++;
            this.hash = this.createHash();
        }
    }
}