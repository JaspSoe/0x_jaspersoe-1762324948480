"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface BotInterfaceProps {
  isAuthenticated: boolean;
  onAuth: (platform: string) => void;
  onDappCreated: (dapp: any) => void;
}

export default function BotInterface({ isAuthenticated, onAuth, onDappCreated }: BotInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm SolanaBot. I can help you create and deploy Solana dApps instantly. What would you like to build today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    if (!isAuthenticated) {
      const authMessage: Message = {
        id: Date.now().toString(),
        text: "Please connect your wallet or sign in with X (Twitter) to continue.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([...messages, authMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const response = generateBotResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      if (response.dapp) {
        onDappCreated(response.dapp);
      }
    }, 2000);
  };

  const generateBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('memecoin') || input.includes('token') || input.includes('launchpad')) {
      const dapp = {
        id: Date.now().toString(),
        name: 'Memecoin Launchpad',
        type: 'launchpad',
        url: `https://launchpad-${Date.now()}.solanabot.app`,
        created: new Date(),
        status: 'deployed',
      };
      
      return {
        text: `🚀 Perfect! I've created a Memecoin Launchpad for you with:\n\n✅ Token creation interface\n✅ Liquidity pool setup\n✅ Fair launch mechanics\n✅ Anti-rug protection\n\nYour dApp is now live at: ${dapp.url}\n\nWould you like to customize the design or add more features?`,
        dapp,
      };
    }
    
    if (input.includes('nft') || input.includes('marketplace')) {
      const dapp = {
        id: Date.now().toString(),
        name: 'NFT Marketplace',
        type: 'nft',
        url: `https://nft-${Date.now()}.solanabot.app`,
        created: new Date(),
        status: 'deployed',
      };
      
      return {
        text: `🎨 Awesome! I've deployed an NFT Marketplace with:\n\n✅ Minting interface\n✅ Secondary market trading\n✅ Royalty enforcement\n✅ Collection management\n\nYour marketplace is ready at: ${dapp.url}\n\nWhat would you like to customize?`,
        dapp,
      };
    }
    
    if (input.includes('staking') || input.includes('farm')) {
      const dapp = {
        id: Date.now().toString(),
        name: 'Staking Platform',
        type: 'staking',
        url: `https://stake-${Date.now()}.solanabot.app`,
        created: new Date(),
        status: 'deployed',
      };
      
      return {
        text: `💎 Great choice! Your Staking Platform includes:\n\n✅ Token staking pools\n✅ Reward distribution\n✅ Lock period options\n✅ APY calculator\n\nLive at: ${dapp.url}\n\nReady to configure rewards?`,
        dapp,
      };
    }
    
    if (input.includes('swap') || input.includes('dex')) {
      const dapp = {
        id: Date.now().toString(),
        name: 'Token Swap DEX',
        type: 'dex',
        url: `https://dex-${Date.now()}.solanabot.app`,
        created: new Date(),
        status: 'deployed',
      };
      
      return {
        text: `💱 Fantastic! I've created a DEX with:\n\n✅ Token swapping\n✅ Liquidity pools\n✅ Price charts\n✅ Slippage protection\n\nAccess it here: ${dapp.url}\n\nWant to add more trading pairs?`,
        dapp,
      };
    }
    
    return {
      text: `I can help you build:\n\n🪙 Memecoin Launchpad\n🎨 NFT Marketplace\n💎 Staking Platform\n💱 Token Swap DEX\n🎮 Gaming dApp\n📊 DAO Platform\n\nJust tell me what you'd like to create!`,
      dapp: null,
    };
  };

  const quickActions = [
    "Create a memecoin launchpad",
    "Build an NFT marketplace",
    "Deploy a staking platform",
    "Make a token swap DEX",
  ];

  return (
    <section id="auth-section" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Chat with <span className="gradient-text">SolanaBot</span>
          </h2>
          <p className="text-gray-400">Tell me what you want to build, and I'll create it for you</p>
        </div>

        {!isAuthenticated && (
          <div className="mb-8 p-6 sm:p-8 glass-effect rounded-2xl border-2 border-solana-purple/50">
            <h3 className="text-xl font-bold mb-4 text-center">Connect to Start Building</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onAuth('twitter')}
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-solana-blue hover:bg-solana-blue/90 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
                <span>Sign in with X</span>
              </button>
              <button 
                onClick={() => onAuth('wallet')}
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl gradient-solana hover:opacity-90 transition-all text-black font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        )}

        <div className="glass-effect rounded-2xl overflow-hidden border border-white/10">
          <div className="h-[400px] sm:h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'gradient-solana text-black'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <span className="text-xs opacity-50 mt-2 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-solana-purple rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-solana-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-solana-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInput(action)}
                  className="px-3 py-1 text-sm rounded-lg glass-effect hover:bg-white/10 transition-all"
                >
                  {action}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-solana-purple focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-3 rounded-xl gradient-solana hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}