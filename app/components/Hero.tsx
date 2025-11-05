"use client";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 sm:mb-8 animate-float">
          <div className="px-4 sm:px-6 py-2 rounded-full glass-effect border border-solana-purple/50">
            <span className="text-sm sm:text-base gradient-text font-semibold">✨ AI-Powered dApp Creation</span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
          Build Solana dApps
          <br />
          <span className="gradient-text">In Seconds, Not Months</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Chat with our AI bot to instantly generate, customize, and deploy memecoin launchpads, 
          NFT marketplaces, and more on Solana blockchain.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 rounded-xl gradient-solana hover:opacity-90 transition-all font-bold text-lg text-black shadow-lg shadow-solana-purple/50"
          >
            Start Building Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl glass-effect hover:bg-white/10 transition-all font-bold text-lg">
            View Examples
          </button>
        </div>
        
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:border-solana-purple/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-solana-purple/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-solana-purple" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Deploy</h3>
            <p className="text-gray-400">Deploy your dApp to Solana mainnet in under 60 seconds</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:border-solana-green/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-solana-green/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-solana-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI Powered</h3>
            <p className="text-gray-400">Conversational interface understands your requirements</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:border-solana-blue/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-solana-blue/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-solana-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">No Code Needed</h3>
            <p className="text-gray-400">Build professional dApps without writing a single line of code</p>
          </div>
        </div>
      </div>
    </section>
  );
}