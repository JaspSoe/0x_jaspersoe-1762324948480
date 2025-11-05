"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BotInterface from "./components/BotInterface";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [userDapps, setUserDapps] = useState<any[]>([]);

  const handleAuth = (platform: string) => {
    // Simulate authentication
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 1000);
  };

  const handleDappCreated = (dapp: any) => {
    setUserDapps([...userDapps, dapp]);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 bg-gradient-to-br from-solana-purple/10 via-black to-solana-green/10 pointer-events-none" />
      
      <Header 
        isAuthenticated={isAuthenticated} 
        onAuth={handleAuth}
        onShowDashboard={() => setShowDashboard(!showDashboard)}
      />
      
      <main className="relative">
        {!showDashboard ? (
          <>
            <Hero onGetStarted={() => {
              if (!isAuthenticated) {
                document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }} />
            <BotInterface 
              isAuthenticated={isAuthenticated}
              onAuth={handleAuth}
              onDappCreated={handleDappCreated}
            />
          </>
        ) : (
          <Dashboard 
            dapps={userDapps}
            onBack={() => setShowDashboard(false)}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}