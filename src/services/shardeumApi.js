import { ethers } from 'ethers';

class ShardeumAPI {
  constructor() {
    this.rpcUrl = 'https://api-testnet.shardeum.org';
    this.provider = null;
    this.signer = null;

    // In-memory ticket DB (mock storage)
    this.tickets = [
      { id: 1, name: "Solana IRL Nagpur", price: "0.01", organizer: "0xA2B95FfB9008dc2141b21b83547C41bCE3e7a65f", available: true },
      { id: 2, name: "ML Workshop", price: "0.005", organizer: "0xA2B95FfB9008dc2141b21b83547C41bCE3e7a65f", available: true }
    ];

    this.userTickets = {}; // Mapping of address => purchased ticket IDs
  }

  async initialize() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        this.provider = new ethers.BrowserProvider(window.ethereum);
        await this.provider.send("eth_requestAccounts", []);
        this.signer = await this.provider.getSigner();
        return true;
      } else {
        throw new Error('MetaMask or compatible wallet not found');
      }
    } catch (error) {
      console.error('Failed to initialize Shardeum connection:', error);
      throw error;
    }
  }

  async getChainId() {
    const res = await fetch(this.rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'eth_chainId', id: 1, jsonrpc: '2.0' })
    });
    const data = await res.json();
    return data.result;
  }

  async getGasPrice() {
    const res = await fetch(this.rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'eth_gasPrice', id: 1, jsonrpc: '2.0' })
    });
    const data = await res.json();
    return data.result;
  }

  async getBalance(address) {
    const res = await fetch(this.rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        method: 'eth_getBalance',
        params: [address, 'latest'],
        id: 1,
        jsonrpc: '2.0'
      })
    });
    const data = await res.json();
    return data.result;
  }

  async estimateGas(transactionObject) {
    const res = await fetch(this.rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        method: 'eth_estimateGas',
        params: [transactionObject, 'latest'],
        id: 1,
        jsonrpc: '2.0'
      })
    });
    const data = await res.json();
    return data.result;
  }

  async sendTransaction(to, amount, gasLimit = null) {
    try {
      if (!this.signer) throw new Error('Wallet not connected');
      const fromAddress = await this.signer.getAddress();
      const value = ethers.parseEther(amount.toString());
      const gasPrice = await this.getGasPrice();

      const txObject = {
        from: fromAddress,
        to: to,
        value: '0x' + value.toString(16),
        gasPrice: gasPrice
      };

      txObject.gas = gasLimit ? '0x' + gasLimit.toString(16) : await this.estimateGas(txObject);

      const tx = await this.signer.sendTransaction({
        to: to,
        value: value,
        gasPrice: gasPrice,
        gasLimit: txObject.gas
      });

      return tx.hash;
    } catch (err) {
      console.error('Error sending transaction:', err);
      throw err;
    }
  }

  formatSHM(weiAmount) {
    return ethers.formatEther(weiAmount);
  }

  parseSHM(shmAmount) {
    return ethers.parseEther(shmAmount.toString());
  }

  async getCurrentAddress() {
    if (!this.signer) throw new Error('Wallet not connected');
    return await this.signer.getAddress();
  }

  // -------------------------
  // TICKET FUNCTIONS BELOW
  // -------------------------

  listAllTickets() {
    return this.tickets;
  }

  async buyTicket(ticketId) {
    const ticket = this.tickets.find(t => t.id === ticketId && t.available);
    if (!ticket) throw new Error('Ticket not found or unavailable');

    const buyer = await this.getCurrentAddress();
    const txHash = await this.sendTransaction(ticket.organizer, ticket.price);

    // Store in-memory record
    if (!this.userTickets[buyer]) this.userTickets[buyer] = [];
    this.userTickets[buyer].push({ ticketId: ticket.id, txHash, timestamp: Date.now() });

    return { success: true, txHash, ticket: ticket.name };
  }

  async getUserTickets() {
    const address = await this.getCurrentAddress();
    const entries = this.userTickets[address] || [];
    return entries.map(entry => {
      const ticketInfo = this.tickets.find(t => t.id === entry.ticketId);
      return {
        name: ticketInfo?.name || 'Unknown',
        txHash: entry.txHash,
        date: new Date(entry.timestamp).toLocaleString()
      };
    });
  }
}

export default new ShardeumAPI();
