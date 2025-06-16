# Shardeum Ticketing Platform

A modern web application for purchasing and managing event tickets using SHM cryptocurrency on the Shardeum network.

## 🚀 Features

### Core Functionality
- **Event Discovery**: Browse available events and ticket options
- **Secure Ticket Purchase**: Buy tickets using SHM cryptocurrency
- **Ticket Management**: View and manage your purchased tickets
- **Real-time Updates**: Live ticket availability and transaction status
- **User Registration**: Easy registration process for events

### Technical Features
- **Shardeum Integration**: Full integration with Shardeum blockchain
- **MetaMask Support**: Seamless wallet connection and transaction signing
- **Responsive Design**: Beautiful UI that works on all devices
- **Real-time Updates**: Live network information and transaction status
- **Modern UI**: Built with Tailwind CSS and Lucide icons

## 🛠 Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Blockchain**: Shardeum Network
- **Web3**: Ethers.js v6
- **Wallet**: MetaMask integration
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📋 Prerequisites

Before running the application, ensure you have:

1. **Node.js** (v16 or higher)
2. **MetaMask** browser extension
3. **Shardeum Network** configured in MetaMask
4. **SHM tokens** for ticket purchases

### Shardeum Network Configuration

Add Shardeum network to MetaMask with these details:
- **Network Name**: Shardeum
- **RPC URL**: `https://api.shardeum.org`
- **Chain ID**: (Check current chain ID via API)
- **Currency Symbol**: SHM

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/tusharpamnani/shardeum-ticketing-platform.git
cd shardeum-ticketing-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

## 📖 How to Use

### 1. Connect Your Wallet
- Click "Launch App" on the landing page
- Approve MetaMask connection
- Ensure you're on the Shardeum network

### 2. Browse Events
- View available events on the main dashboard
- See event details including price, date, and capacity
- Filter and sort events as needed

### 3. Purchase Tickets
- Select an event you're interested in
- Click "Register Now" to start the purchase process
- Fill in your registration details
- Confirm the SHM transaction in MetaMask
- Receive your ticket instantly

### 4. Manage Tickets
- View all your purchased tickets in "Your Collection"
- See transaction details and purchase dates
- Access event information for your tickets

## 🔧 API Integration

The application uses the Shardeum blockchain for:

### Core Methods Used
- `eth_chainId` - Get network chain ID
- `eth_gasPrice` - Get current gas prices
- `eth_getBalance` - Check wallet balances
- `eth_sendTransaction` - Process ticket purchases
- `eth_getTransactionReceipt` - Verify purchase status

### Shardeum-Specific Methods
- `shardeum_getNetworkAccount` - Network configuration
- `shardeum_getNodeList` - Active network nodes
- `shardeum_getCycleInfo` - Network cycle information

## 🏗 Project Structure

```
├── src/                    # Source code
│   ├── services/          # API services
│   │   └── shardeumApi.js # Shardeum blockchain integration
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # Project documentation
```

The application follows a modular structure:
- `src/` contains all the source code
  - `services/` handles blockchain integration
  - `App.jsx` contains the main application logic and UI components
  - `main.jsx` is the application entry point
  - `index.css` contains global styles and Tailwind imports
- Configuration files in the root directory handle build and styling setup

## 💡 Key Features Explained

### Smart Ticket Management
The app handles tickets by:
1. Verifying ticket availability
2. Processing secure SHM payments
3. Generating unique ticket records
4. Managing user ticket collections

### Purchase Flow
- Secure wallet connection
- User registration details collection
- SHM payment processing
- Instant ticket delivery
- Transaction verification

### Security Features
- All transactions require MetaMask approval
- No private keys stored in the application
- Direct blockchain interaction
- Transaction verification and receipt tracking

## 🔒 Security Considerations

- **Wallet Security**: Never share your private keys
- **Transaction Verification**: Always verify transaction details in MetaMask
- **Network Verification**: Ensure you're connected to the correct Shardeum network
- **Amount Verification**: Double-check ticket prices before purchasing

## 🚧 Future Enhancements

- **Event Creation**: Allow organizers to create and manage events
- **Ticket Resale**: Enable secondary market for tickets
- **QR Codes**: Generate QR codes for event entry
- **Email Notifications**: Send purchase confirmations and reminders
- **Event Categories**: Better organization of different event types
- **Analytics**: Track ticket sales and event popularity
- **Mobile App**: Native mobile applications for iOS and Android

## 🐛 Troubleshooting

### Common Issues

**Wallet Connection Failed**
- Ensure MetaMask is installed and unlocked
- Check that you're on the Shardeum network
- Refresh the page and try again

**Purchase Failed**
- Check your SHM balance for ticket price and gas
- Verify the event is still available
- Ensure network connectivity

**Tickets Not Showing**
- Clear browser cache
- Check console for error messages
- Verify wallet connection

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Verify your MetaMask configuration
3. Ensure sufficient SHM balance for purchases
4. Try refreshing the application

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Verify Shardeum network status

---

**Built with ❤️ for the Shardeum ecosystem** 