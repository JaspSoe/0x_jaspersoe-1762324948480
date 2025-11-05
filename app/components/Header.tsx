"use client";

interface HeaderProps {
  isAuthenticated: boolean;
  onAuth: (platform: string) => void;
  onShowDashboard: () => void;
}

export default function Header({ isAuthenticated, onAuth, onShowDashboard }: HeaderProps) {
  return (
    <header className="relative z-50 border-b border-white/10 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl gradient-solana flex items-center justify-center animate-pulse-slow">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">SolanaBot</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {isAuthenticated ? (
              <>
                <button 
                  onClick={onShowDashboard}
                  className="hidden sm:block px-4 py-2 rounded-lg glass-effect hover:bg-white/10 transition-all"
                >
                  Dashboard
                </button>
                <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg glass-effect">
                  <div className="w-2 h-2 bg-solana-green rounded-full animate-pulse" />
                  <span className="text-sm hidden sm:inline">Connected</span>
                </div>
              </>
            ) : (
              <>
                <button 
                  onClick={() => onAuth('twitter')}
                  className="px-3 sm:px-6 py-2 rounded-lg glass-effect hover:bg-white/10 transition-all text-sm sm:text-base"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => onAuth('wallet')}
                  className="px-3 sm:px-6 py-2 rounded-lg gradient-solana hover:opacity-90 transition-all font-semibold text-black text-sm sm:text-base"
                >
                  Connect
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}