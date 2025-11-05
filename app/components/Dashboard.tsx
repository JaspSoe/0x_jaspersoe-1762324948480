"use client";

interface DApp {
  id: string;
  name: string;
  type: string;
  url: string;
  created: Date;
  status: string;
}

interface DashboardProps {
  dapps: DApp[];
  onBack: () => void;
}

export default function Dashboard({ dapps, onBack }: DashboardProps) {
  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'launchpad':
        return '🚀';
      case 'nft':
        return '🎨';
      case 'staking':
        return '💎';
      case 'dex':
        return '💱';
      default:
        return '⚡';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'launchpad':
        return 'border-solana-purple/50';
      case 'nft':
        return 'border-solana-green/50';
      case 'staking':
        return 'border-yellow-500/50';
      case 'dex':
        return 'border-solana-blue/50';
      default:
        return 'border-white/10';
    }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div>
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text">Your dApps</h1>
            <p className="text-gray-400 mt-2">Manage and monitor your deployed applications</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-4 sm:p-6 w-full sm:w-auto">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Total dApps</p>
              <p className="text-3xl sm:text-4xl font-bold gradient-text">{dapps.length}</p>
            </div>
          </div>
        </div>

        {dapps.length === 0 ? (
          <div className="text-center py-16 sm:py-24">
            <div className="w-20 h-20 rounded-full glass-effect flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">No dApps Yet</h3>
            <p className="text-gray-400 mb-8">Start chatting with SolanaBot to create your first dApp</p>
            <button 
              onClick={onBack}
              className="px-8 py-3 rounded-xl gradient-solana hover:opacity-90 transition-all font-semibold text-black"
            >
              Create Your First dApp
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dapps.map((dapp) => (
              <div 
                key={dapp.id}
                className={`glass-effect rounded-2xl p-6 border-2 ${getTypeColor(dapp.type)} hover:border-opacity-100 transition-all group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{getTypeIcon(dapp.type)}</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-solana-green rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400">{dapp.status}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{dapp.name}</h3>
                <p className="text-sm text-gray-400 mb-4 capitalize">{dapp.type} Application</p>

                <div className="bg-black/30 rounded-lg p-3 mb-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400 truncate flex-1 mr-2">{dapp.url}</span>
                  <button 
                    onClick={() => handleCopyUrl(dapp.url)}
                    className="text-solana-green hover:text-solana-green/80 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-2">
                  <a 
                    href={dapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg gradient-solana hover:opacity-90 transition-all text-center font-semibold text-black text-sm"
                  >
                    Open dApp
                  </a>
                  <button className="px-4 py-2 rounded-lg glass-effect hover:bg-white/10 transition-all text-sm">
                    Settings
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Created</span>
                    <span>{dapp.created.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{dapps.length}</div>
              <div className="text-sm text-gray-400">Total dApps</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-solana-green mb-2">
                {dapps.filter(d => d.status === 'deployed').length}
              </div>
              <div className="text-sm text-gray-400">Deployed</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-solana-purple mb-2">
                {new Set(dapps.map(d => d.type)).size}
              </div>
              <div className="text-sm text-gray-400">dApp Types</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-solana-blue mb-2">100%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}