import { ShieldCheck } from 'lucide-react';

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F7FA] p-6">
      <div className="max-w-md w-full bg-white border border-[#DCE4EC] rounded-xl p-8 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#E1EAF1] text-[#102A43] mb-4">
          <ShieldCheck className="w-6 h-6 text-[#16A6A1]" />
        </div>
        <h1 className="text-2xl font-bold text-[#102A43]">
          Atlantic Budapest
        </h1>
        <p className="text-sm text-[#64748B] mt-2">
          Milestone 0 complete. Foundation, Tailwind CSS v4, and project architecture initialized by Team Atlas.
        </p>
      </div>
    </main>
  );
}

export default App;