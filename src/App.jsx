import React, { useState, useEffect } from 'react';
import { Wallet, Ticket, Clock, ChevronRight, Star, Users, Calendar, X, Mail, User, Zap, Shield, Globe, ArrowRight, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import shardeumApi from './services/shardeumApi';

// Landing Page Component
function LandingPage({ onLaunchApp, loading, connectWallet }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Ticket className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Shardeum Tickets
              </span>
            </div>
            <button
              onClick={onLaunchApp}
              disabled={loading}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white px-8 py-3 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              <Wallet size={22} />
              <span className="font-semibold">{loading ? 'Connecting...' : 'Launch App'}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <span className="text-purple-200 font-medium">Powered by Shardeum Blockchain</span>
          </div>
          
          <h1 className="text-7xl font-black text-white mb-8 leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Event Ticketing
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience seamless, secure, and decentralized ticket purchasing. 
            Join the revolution where blockchain meets unforgettable events.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onLaunchApp}
              disabled={loading}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white px-10 py-4 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 text-xl font-bold"
            >
              <Wallet size={26} />
              <span>{loading ? 'Connecting...' : 'Launch App'}</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group text-white border-2 border-white/30 hover:border-white/60 px-10 py-4 rounded-2xl transition-all duration-300 flex items-center space-x-3 hover:bg-white/10 text-xl font-semibold">
              <span>Learn More</span>
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience instant transactions with Shardeum's high-performance blockchain technology.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ultra Secure</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your tickets are protected by cryptographic security and immutable blockchain records.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Global Access</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Access events worldwide with seamless cross-border payments and universal compatibility.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Events</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Discover exclusive concerts, conferences, and experiences from top-tier organizers.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community First</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Join a vibrant ecosystem of event creators, attendees, and blockchain enthusiasts.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Smart Management</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Intuitive dashboard to manage your tickets, track events, and access exclusive perks.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 mb-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Connect your wallet and step into a world where blockchain technology meets unforgettable experiences.
          </p>
          <button
            onClick={onLaunchApp}
            disabled={loading}
            className="group bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white px-12 py-5 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-4 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 text-2xl font-bold mx-auto"
          >
            <Wallet size={28} />
            <span>{loading ? 'Connecting...' : 'Launch App'}</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Protected App Component
function ProtectedApp({ 
  isWalletConnected, 
  walletAddress, 
  balance, 
  tickets, 
  userTickets, 
  loading, 
  selectedTicket, 
  registrationForm,
  setSelectedTicket,
  setRegistrationForm,
  handleTicketClick,
  handleRegistrationSubmit,
  connectWallet 
}) {
  // Show wallet connection modal if not connected
  if (!isWalletConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl max-w-md w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wallet className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Connect Your Wallet</h2>
          <p className="text-gray-300 mb-8 text-lg">
            You need to connect your wallet to access the ticketing platform.
          </p>
          <button
            onClick={connectWallet}
            disabled={loading}
            className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white px-8 py-4 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-purple-500/25 font-bold text-lg"
          >
            <Wallet size={24} />
            <span>{loading ? 'Connecting...' : 'Connect Wallet'}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <nav className="bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Ticket className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shardeum Tickets
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 px-6 py-3 rounded-2xl">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-lg">
                  {balance} SHM
                </span>
              </div>
              <div className="bg-slate-100 border border-slate-200 px-6 py-3 rounded-2xl">
                <span className="text-slate-600 font-semibold">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Available Tickets */}
          <div className="xl:col-span-2">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">
                Featured Events
              </h2>
              <p className="text-slate-600 text-lg">Discover amazing events powered by blockchain technology</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-white/20 hover:scale-105"
                  onClick={() => handleTicketClick(ticket)}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                        {ticket.name}
                      </h3>
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Available
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        {ticket.price} SHM
                      </div>
                      <p className="text-slate-500">Premium event access</p>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTicketClick(ticket);
                      }}
                      disabled={loading || !ticket.available}
                      className="group/btn w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-4 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 disabled:opacity-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl font-semibold text-lg"
                    >
                      <Ticket size={22} />
                      <span>{loading ? 'Processing...' : 'Register Now'}</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User's Tickets */}
          <div className="xl:col-span-1">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">
                Your Collection
              </h2>
              <p className="text-slate-600 text-lg">Your purchased event tickets</p>
            </div>
            
            <div className="space-y-6">
              {userTickets.length === 0 ? (
                <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl shadow-lg p-8 text-center border border-white/50">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Ticket className="h-10 w-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No Tickets Yet</h3>
                  <p className="text-slate-500">Start your journey by purchasing your first event ticket!</p>
                </div>
              ) : (
                userTickets.map((ticket, index) => (
                  <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-white/20 hover:scale-105">
                    <h3 className="font-bold text-xl mb-4 text-slate-800">{ticket.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-slate-600">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <Calendar className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold">Purchased</p>
                          <p className="text-sm text-slate-500">{ticket.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                          <ChevronRight className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-semibold">Transaction</p>
                          <p className="text-sm text-slate-500 font-mono">
                            {ticket.txHash.slice(0, 6)}...{ticket.txHash.slice(-4)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Registration Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl transform transition-all duration-300 ease-in-out border border-white/20">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">
                  Event Registration
                </h2>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-xl"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{selectedTicket.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Date</p>
                      <p className="font-semibold text-slate-700">{selectedTicket.date || 'TBA'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Capacity</p>
                      <p className="font-semibold text-slate-700">{selectedTicket.capacity || 'Unlimited'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <Ticket className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Price</p>
                      <p className="font-semibold text-slate-700">{selectedTicket.price} SHM</p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      value={registrationForm.name}
                      onChange={(e) => setRegistrationForm(prev => ({ ...prev, name: e.target.value }))}
                      className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-slate-50 hover:bg-white text-lg"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm(prev => ({ ...prev, email: e.target.value }))}
                      className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-slate-50 hover:bg-white text-lg"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Wallet Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Wallet className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      value={walletAddress}
                      disabled
                      className="block w-full pl-12 pr-4 py-4 bg-slate-100 border border-slate-200 rounded-2xl text-slate-500 font-mono text-lg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-4 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 disabled:opacity-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl font-bold text-xl"
                >
                  <Ticket size={24} />
                  <span>{loading ? 'Processing...' : 'Complete Registration'}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main App Component with Router Logic
function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0');
  const [tickets, setTickets] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
  });

  // Initialize app and check wallet connection
  useEffect(() => {
    checkWalletConnection();
    loadTickets();
    
    // Handle browser back/forward
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    setCurrentRoute(window.location.pathname);
    
    return () => window.removeEventListener('popstate', handlePopState);
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
      toast.error('Failed to load balance');
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
      toast.error('Failed to load your tickets');
    }
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setRegistrationForm({
      name: '',
      email: '',
    });
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    if (!registrationForm.name || !registrationForm.email) {
      toast.error('Please fill in all fields');
      return;
    }
    try {
      setLoading(true);
      const result = await shardeumApi.buyTicket(selectedTicket.id);
      toast.success(`Successfully purchased ticket: ${result.ticket}`);
      setSelectedTicket(null);
      await loadBalance();
      await loadUserTickets();
    } catch (error) {
      console.error('Error buying ticket:', error);
      toast.error('Failed to buy ticket: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLaunchApp = () => {
    window.history.pushState({}, '', '/app');
    setCurrentRoute('/app');
  };

  // Render the appropriate component based on the current route
  if (currentRoute === '/app') {
    return (
      <ProtectedApp
        isWalletConnected={isWalletConnected}
        walletAddress={walletAddress}
        balance={balance}
        tickets={tickets}
        userTickets={userTickets}
        loading={loading}
        selectedTicket={selectedTicket}
        registrationForm={registrationForm}
        setSelectedTicket={setSelectedTicket}
        setRegistrationForm={setRegistrationForm}
        handleTicketClick={handleTicketClick}
        handleRegistrationSubmit={handleRegistrationSubmit}
        connectWallet={connectWallet}
      />
    );
  }

  return (
    <LandingPage
      onLaunchApp={handleLaunchApp}
      loading={loading}
      connectWallet={connectWallet}
    />
  );
}

export default App;