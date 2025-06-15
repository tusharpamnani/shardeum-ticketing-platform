import React, { useState, useEffect } from 'react';
import { Wallet, Ticket, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import shardeumApi from './services/shardeumApi';

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0');
  const [tickets, setTickets] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize app and check wallet connection
  useEffect(() => {
    checkWalletConnection();
    loadTickets();
  }, []);

  // Load balance and user tickets when wallet is connected
  useEffect(() => {
    if (isWalletConnected && walletAddress) {
      loadBalance();
      loadUserTickets();
    }
  }, [isWalletConnected, walletAddress]);

  const checkWalletConnection = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          await connectWallet();
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
  };

  const connectWallet = async () => {
    try {
      setLoading(true);
      await shardeumApi.initialize();
      const address = await shardeumApi.getCurrentAddress();
      setWalletAddress(address);
      setIsWalletConnected(true);
      toast.success('Wallet connected successfully!');
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast.error('Failed to connect wallet: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadBalance = async () => {
    try {
      const balanceWei = await shardeumApi.getBalance(walletAddress);
      const balanceSHM = shardeumApi.formatSHM(balanceWei);
      setBalance(parseFloat(balanceSHM).toFixed(4));
    } catch (error) {
      console.error('Error loading balance:', error);
    }
  };

  const loadTickets = () => {
    const availableTickets = shardeumApi.listAllTickets();
    setTickets(availableTickets);
  };

  const loadUserTickets = async () => {
    try {
      const tickets = await shardeumApi.getUserTickets();
      setUserTickets(tickets);
    } catch (error) {
      console.error('Error loading user tickets:', error);
    }
  };

  const buyTicket = async (ticketId) => {
    try {
      setLoading(true);
      const result = await shardeumApi.buyTicket(ticketId);
      toast.success(`Successfully purchased ticket: ${result.ticket}`);
      loadBalance();
      loadUserTickets();
    } catch (error) {
      console.error('Error buying ticket:', error);
      toast.error('Failed to buy ticket: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isWalletConnected) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">Shardeum Ticket Marketplace</h1>
          <button
            onClick={connectWallet}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Wallet size={20} />
            {loading ? 'Connecting...' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Shardeum Ticket Marketplace</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Balance: {balance} SHM
            </div>
            <div className="text-sm text-gray-600">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Available Tickets */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Tickets</h2>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium">{ticket.name}</h3>
                  <p className="text-gray-600 mt-1">Price: {ticket.price} SHM</p>
                  <button
                    onClick={() => buyTicket(ticket.id)}
                    disabled={loading || !ticket.available}
                    className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Buy Ticket'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* User's Tickets */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Tickets</h2>
            <div className="space-y-4">
              {userTickets.length === 0 ? (
                <p className="text-gray-500">You haven't purchased any tickets yet.</p>
              ) : (
                userTickets.map((ticket, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-medium">{ticket.name}</h3>
                    <p className="text-gray-600 mt-1">Purchased: {ticket.date}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      TX: {ticket.txHash.slice(0, 6)}...{ticket.txHash.slice(-4)}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App; 