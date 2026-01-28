
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  PRICING_PLANS, 
  CONTACT_NUMBER, 
  YT_CHANNEL_NAME, 
  YT_SUBSCRIBERS, 
  YT_CHANNEL_URL, 
  YT_PROFILE_PIC,
  PORTFOLIO_VIDEOS,
  SOCIAL_LINKS,
  LIVE_ACTIVITIES
} from './constants';
import { ServiceType, OrderDetails } from './types';

// Animated Logo Component for the Header
const AnimatedLogo = ({ size = "10" }: { size?: string }) => (
  <div className="relative flex items-center justify-center">
    <div className={`absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-30 animate-pulse`}></div>
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full blur-[2px] opacity-70 animate-spin-slow`}></div>
      <img 
        src={YT_PROFILE_PIC} 
        alt="Logo" 
        className={`relative h-${size} w-${size} rounded-full border border-slate-900 object-cover shadow-xl`} 
      />
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'pricing' | 'order'>('home');
  const [selectedPlan, setSelectedPlan] = useState<ServiceType | null>(null);
  const [orderDetails, setOrderDetails] = useState<Partial<OrderDetails>>({
    customerName: '',
    paymentMethod: 'BKASH',
    paymentType: 'ADVANCE',
    trxId: '',
  });
  const [copied, setCopied] = useState(false);
  const [showTicker, setShowTicker] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowTicker(true);
      setCurrentActivityIndex(prev => (prev + 1) % LIVE_ACTIVITIES.length);
      setTimeout(() => setShowTicker(false), 4500);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderDetails.customerName?.trim() || !selectedPlan || !orderDetails.trxId?.trim()) {
      alert("অনুগ্রহ করে সব তথ্য সঠিকভাবে দিন!");
      return;
    }
    
    const plan = PRICING_PLANS.find(p => p.id === selectedPlan);
    const planPrice = plan?.price || 0;
    const paidAmount = orderDetails.paymentType === 'ADVANCE' ? Math.ceil(planPrice * 0.5) : planPrice;
    const pTypeStr = orderDetails.paymentType === 'ADVANCE' ? `৫০% অগ্রিম (৳${paidAmount})` : `ফুল পেমেন্ট (৳${paidAmount})`;
    
    const waMessage = `✨ *New Order: Mr Bangla Studio* ✨
-------------------------------------------
👤 *অর্ডার ডিটেইলস:*
👤 নাম: ${orderDetails.customerName}
📦 প্যাকেজ: ${plan?.title}
💰 মোট মূল্য: ৳${planPrice}
💳 পেমেন্ট মেথড: ${orderDetails.paymentMethod}
💸 পেমেন্ট টাইপ: ${pTypeStr}
🧾 TrxID: ${orderDetails.trxId}

-------------------------------------------
📌 *আমি নিচে আমার ভিডিও ফুটেজ এবং পেমেন্ট স্ক্রিনশট পাঠিয়ে দিচ্ছি। দ্রুত চেক করুন।*`;

    window.open(`https://wa.me/88${CONTACT_NUMBER.replace('-', '')}?text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  const planPrice = PRICING_PLANS.find(p => p.id === selectedPlan)?.price || 0;
  const payableAmount = orderDetails.paymentType === 'ADVANCE' ? Math.ceil(planPrice * 0.5) : planPrice;

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-100 pb-20 font-['Inter']">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] bg-rose-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Live Ticker */}
      <div className={`fixed top-20 left-0 right-0 z-[100] flex justify-center transition-all duration-700 transform ${showTicker ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="glass-panel px-5 py-2.5 rounded-full border border-indigo-500/40 shadow-[0_0_30px_rgba(79,70,229,0.3)] flex items-center gap-3 bg-slate-900/95">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-ping" />
          <p className="text-[11px] font-bold text-slate-200 tracking-wide">{LIVE_ACTIVITIES[currentActivityIndex]}</p>
        </div>
      </div>

      <header className="relative z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex justify-between items-center sticky top-0 shadow-lg">
        <div className="flex items-center gap-3">
          <AnimatedLogo size="10" />
          <div>
            <h1 className="text-sm font-black text-white uppercase tracking-tight">{YT_CHANNEL_NAME}</h1>
            <p className="text-[8px] text-indigo-400 font-bold uppercase tracking-[0.2em]">{YT_SUBSCRIBERS} মেম্বার</p>
          </div>
        </div>
        <button onClick={() => window.open(`https://wa.me/88${CONTACT_NUMBER.replace('-', '')}`, '_blank')} className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-[10px] font-black shadow-xl active:scale-95 transition-all flex items-center gap-2">
          <span>হোয়াটসঅ্যাপ</span> 💬
        </button>
      </header>

      <main className="relative z-10 flex-grow px-5 py-6 tab-content">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in pb-10">
            <section className="text-center py-6">
              <div className="flex justify-center mb-8">
                <AnimatedLogo size="28" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black leading-tight">আপনার ভিডিওকে দিন <br/><span className="gradient-text italic">রাজকীয় ভাইরাল লুক</span></h2>
                <p className="text-slate-400 text-sm px-8 font-medium">১ লক্ষ ২৪ হাজার মেম্বারের বিশ্বস্ত এবং ভেরিফাইড ভিডিও এডিটিং পার্টনার।</p>
              </div>
              
              <div className="mt-10 flex flex-col gap-4">
                <button onClick={() => setActiveTab('pricing')} className="bg-gradient-to-r from-indigo-600 to-indigo-700 w-full py-4 rounded-2xl font-black shadow-[0_10px_40px_rgba(79,70,229,0.4)] active:scale-95 transition-all text-white border border-indigo-500/30">প্যাকেজ দেখুন 💎</button>
                <div className="space-y-2">
                  <button onClick={() => window.open(YT_CHANNEL_URL, '_blank')} className="bg-white/5 border border-white/10 w-full py-4 rounded-2xl font-black active:scale-95 transition-all flex items-center justify-center gap-2 group">
                    <span>ইউটিউব চ্যানেল</span>
                    <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <p className="text-[10px] font-bold text-slate-400 italic">🔥 ঘুরে আসুন আমাদের ১২৪k+ ভেরিফাইড চ্যানেলে!</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-lg font-black italic border-l-4 border-indigo-500 pl-3">কেন আমাদের বেছে নেবেন?</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="glass-panel p-5 rounded-3xl border-white/5 flex gap-4 items-start shadow-xl">
                  <div className="bg-indigo-600/20 p-3 rounded-2xl text-indigo-400 text-lg">🛡️</div>
                  <div>
                    <h4 className="font-black text-xs text-white">ভেরিফাইড ও বিশ্বস্ত</h4>
                    <p className="text-[10px] text-slate-400 mt-1">১.২৪ লাখ সাবস্ক্রাইবারই আমাদের কাজের প্রমাণের বড় সার্টিফিকেট। আমরা কোনো ফেক কাজ করি না।</p>
                  </div>
                </div>
                <div className="glass-panel p-5 rounded-3xl border-white/5 flex gap-4 items-start shadow-xl">
                  <div className="bg-rose-600/20 p-3 rounded-2xl text-rose-400 text-lg">⚡</div>
                  <div>
                    <h4 className="font-black text-xs text-white">সুপার ফাস্ট ডেলিভারি</h4>
                    <p className="text-[10px] text-slate-400 mt-1">আপনার সময়ের মূল্য আমরা বুঝি। ২৪-৪৮ ঘণ্টায় প্রফেশনাল এবং কোয়ালিটি ডেলিভারি নিশ্চিত করি।</p>
                  </div>
                </div>
                <div className="glass-panel p-5 rounded-3xl border-white/5 flex gap-4 items-start shadow-xl">
                  <div className="bg-green-600/20 p-3 rounded-2xl text-green-400 text-lg">💎</div>
                  <div>
                    <h4 className="font-black text-xs text-white">প্রিমিয়াম ভাইরাল এডিট</h4>
                    <p className="text-[10px] text-slate-400 mt-1">সোশ্যাল মিডিয়ায় ভাইরাল হওয়ার জন্য প্রয়োজনীয় সব আধুনিক ইফেক্টস এবং সিনেমাটিক কালার গ্রেডিং।</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-lg font-black italic border-l-4 border-rose-500 pl-3">আমাদের সোশ্যাল মিডিয়া</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="glass-panel p-5 rounded-3xl border-red-500/10 active:scale-95 flex flex-col items-center hover:bg-red-500/5 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="h-10 w-10 mb-3" alt="YT" />
                  <span className="font-black text-[10px] text-white uppercase tracking-widest">YouTube</span>
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="glass-panel p-5 rounded-3xl border-blue-500/10 active:scale-95 flex flex-col items-center hover:bg-blue-500/5 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="h-10 w-10 mb-3" alt="FB" />
                  <span className="font-black text-[10px] text-white uppercase tracking-widest">Facebook</span>
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="glass-panel p-5 rounded-3xl border-slate-500/10 active:scale-95 flex flex-col items-center hover:bg-slate-500/5 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" className="h-10 w-10 mb-3 invert" alt="TK" />
                  <span className="font-black text-[10px] text-white uppercase tracking-widest">TikTok</span>
                </a>
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noreferrer" className="glass-panel p-5 rounded-3xl border-sky-500/10 active:scale-95 flex flex-col items-center hover:bg-sky-500/5 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="h-10 w-10 mb-3" alt="TG" />
                  <span className="font-black text-[10px] text-white uppercase tracking-widest">Telegram</span>
                </a>
              </div>
            </section>

            <section className="space-y-4">
               <h3 className="text-lg font-black italic border-l-4 border-indigo-500 pl-3">কাজের নমুনা</h3>
               <div className="grid grid-cols-1 gap-5">
                  {PORTFOLIO_VIDEOS.map(v => (
                    <div key={v.id} onClick={() => window.open(v.url, '_blank')} className="group glass-panel rounded-3xl overflow-hidden active:scale-[0.98] transition-all cursor-pointer shadow-xl border border-white/5">
                       <div className="relative overflow-hidden">
                         <img src={v.thumbnail} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" alt={v.title} />
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-white/20 backdrop-blur-md p-4 rounded-full">▶️</span>
                         </div>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-6 animate-fade-in pb-10">
            <h2 className="text-2xl font-black text-center mb-8 italic">বেস্ট <span className="gradient-text">সার্ভিস প্যাক</span></h2>
            {PRICING_PLANS.map(p => (
              <div key={p.id} onClick={() => { setSelectedPlan(p.id); setActiveTab('order'); }} className={`glass-panel p-6 rounded-3xl relative border border-white/5 active:scale-[0.97] transition-all shadow-lg ${p.badge ? 'border-indigo-500/40 ring-1 ring-indigo-500/20' : ''}`}>
                {p.badge && <span className="absolute -top-3 right-6 bg-gradient-to-r from-indigo-600 to-rose-500 text-[8px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">{p.badge}</span>}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-black text-lg">{p.title}</h3>
                  <div className="text-right">
                    <span className="text-xl font-black text-indigo-400">৳{p.price}</span>
                    <p className="text-[8px] text-slate-500 font-bold uppercase tracking-tighter">ফিক্সড প্রাইস</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">{p.description}</p>
                <div className="space-y-2 mb-6 h-48 overflow-y-auto scrollbar-hide pr-2">
                  {p.features.map((f, i) => (
                    <div key={i} className={`text-[10px] font-medium py-1 border-b border-white/5 last:border-0 ${f.startsWith('✓') ? 'text-green-500' : 'text-rose-500'}`}>{f}</div>
                  ))}
                </div>
                <button className="w-full bg-white/5 text-white border border-white/10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-colors mt-4">অর্ডার শুরু করুন →</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'order' && (
          <div className="animate-fade-in pb-10">
            <div className="glass-panel p-6 rounded-[2.5rem] shadow-3xl border border-white/5">
              <h2 className="text-xl font-black mb-8 text-center italic tracking-tight uppercase">অর্ডার <span className="gradient-text">কনফার্মেশন</span></h2>
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase px-2">আপনার পূর্ণ নাম</p>
                  <input type="text" required placeholder="নাম লিখুন" value={orderDetails.customerName} onChange={(e) => setOrderDetails({...orderDetails, customerName: e.target.value})} className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 outline-none font-bold text-sm text-white focus:border-indigo-500/50 transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase px-2">প্যাকেজ বাছাই করুন</p>
                  <select required value={selectedPlan || ''} onChange={(e) => setSelectedPlan(e.target.value as ServiceType)} className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 outline-none font-bold text-sm text-white appearance-none">
                    <option value="" disabled>সিলেক্ট করুন</option>
                    {PRICING_PLANS.map(p => <option key={p.id} value={p.id}>{p.title} (৳{p.price})</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase px-2">পেমেন্ট মেথড</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentMethod: 'BKASH'})} className={`py-4 rounded-xl border font-black transition-all ${orderDetails.paymentMethod === 'BKASH' ? 'bg-[#D12053] border-rose-400 scale-[1.02] text-white shadow-lg' : 'bg-slate-900/50 border-white/5 opacity-50'}`}>বিকাশ</button>
                    <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentMethod: 'NAGAD'})} className={`py-4 rounded-xl border font-black transition-all ${orderDetails.paymentMethod === 'NAGAD' ? 'bg-[#F7941D] border-orange-400 scale-[1.02] text-white shadow-lg' : 'bg-slate-900/50 border-white/5 opacity-50'}`}>নগদ</button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase px-2">পেমেন্ট এর ধরণ</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentType: 'ADVANCE'})} className={`py-4 rounded-xl border font-black transition-all text-[10px] ${orderDetails.paymentType === 'ADVANCE' ? 'bg-indigo-600 border-indigo-400 scale-[1.02] text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-900/50 border-white/5 opacity-50'}`}>৫০% অগ্রিম</button>
                    <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentType: 'FULL'})} className={`py-4 rounded-xl border font-black transition-all text-[10px] ${orderDetails.paymentType === 'FULL' ? 'bg-indigo-600 border-indigo-400 scale-[1.02] text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-900/50 border-white/5 opacity-50'}`}>ফুল পেমেন্ট</button>
                  </div>
                </div>

                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-500 uppercase px-2">লেনদেন আইডি (TrxID)</p>
                   <input type="text" required placeholder="TrxID দিন" value={orderDetails.trxId} onChange={(e) => setOrderDetails({...orderDetails, trxId: e.target.value})} className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 outline-none font-mono text-sm text-center tracking-widest text-indigo-400 placeholder:text-slate-600" />
                </div>
                
                <div className="p-6 bg-slate-900/80 rounded-3xl border border-white/5 text-center space-y-4 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50"></div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-black text-rose-500 uppercase tracking-widest animate-pulse">⚠️ পার্সোনাল সেন্ড মানি করুন</p>
                    <p className="text-3xl font-black text-white tracking-tighter tabular-nums selection:bg-indigo-500">{CONTACT_NUMBER}</p>
                  </div>
                  <button type="button" onClick={handleCopy} className="bg-indigo-600 text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/20 active:scale-95 transition-all">{copied ? 'Copied!' : 'Copy Number'}</button>
                  <div className="h-px bg-white/5 mx-4"></div>
                  <div className="flex justify-between items-center px-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase">মোট পেমেন্ট:</span>
                    <span className="text-2xl font-black text-indigo-400">৳{payableAmount}</span>
                  </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 py-5 rounded-2xl text-lg font-black shadow-2xl active:scale-95 transition-all shadow-indigo-600/30 text-white uppercase tracking-widest">অর্ডার নিশ্চিত করুন 🚀</button>
              </form>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-3xl border-t border-white/5 px-8 py-4 flex justify-between items-center rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'home' ? 'text-indigo-400 scale-110' : 'text-slate-500 hover:text-slate-400'}`}>
          <span className="text-xl">🏠</span>
          <span className="text-[8px] font-black uppercase tracking-tighter">Home</span>
        </button>
        <button onClick={() => setActiveTab('pricing')} className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'pricing' ? 'text-indigo-400 scale-110' : 'text-slate-500 hover:text-slate-400'}`}>
          <span className="text-xl">💎</span>
          <span className="text-[8px] font-black uppercase tracking-tighter">Packs</span>
        </button>
        <button onClick={() => setActiveTab('order')} className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'order' ? 'text-indigo-400 scale-110' : 'text-slate-500 hover:text-slate-400'}`}>
          <span className="text-xl">🛒</span>
          <span className="text-[8px] font-black uppercase tracking-tighter">Order</span>
        </button>
        <button onClick={() => window.open(SOCIAL_LINKS.facebook, '_blank')} className="flex flex-col items-center gap-1.5 text-slate-500 active:scale-95 transition-all hover:text-slate-400">
          <span className="text-xl">👤</span>
          <span className="text-[8px] font-black uppercase tracking-tighter">Admin</span>
        </button>
      </nav>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
