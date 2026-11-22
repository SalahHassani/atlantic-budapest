import { SITE_CONFIG } from './config/site';

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F7FA] text-[#102A43] p-6">
      <div className="text-center">
        <h1 className="text-xl font-semibold">{SITE_CONFIG.brandName}</h1>
        <p className="text-sm text-[#64748B] mt-1">
       \s /V,   {SITE_CONFIG.teamName} — Milestone 0 Foundation Initialized
        </p>
      </div>
    </main>
  );
}

export default App;