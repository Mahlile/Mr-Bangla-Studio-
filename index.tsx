
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
  LIVE_ACTIVITIES,
  SOCIAL_LINKS
} from './constants';
import { ServiceType, OrderDetails } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'pricing' | 'order'>('home');
  const [selectedPlan, setSelectedPlan] = useState<ServiceType | null>(null);
  const [orderDetails, setOrderDetails] = useState<Partial<OrderDetails>>({
    customerName: '',
    paymentMethod: 'BKASH',
    paymentType: 'ADVANCE',
    trxId: '',
  });
  const [showTicker, setShowTicker] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowTicker(true);
      setCurrentActivityIndex(prev => (prev + 1) % LIVE_ACTIVITIES.length);
      setTimeout(() => setShowTicker(false), 5000);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderDetails.customerName?.trim()) {
      alert("অনুগ্রহ করে আপনার নামটি লিখুন!");
      return;
    }
    if (!selectedPlan) {
      alert("অনুগ্রহ করে একটি প্যাকেজ সিলেক্ট করুন!");
      return;
    }
    if (!orderDetails.trxId?.trim()) {
      alert("অনুগ্রহ করে পেমেন্ট করার পর Transaction ID (TrxID) দিন। পেমেন্ট তথ্য ছাড়া অর্ডার গ্রহণ করা হবে না।");
      return;
    }
    
    const plan = PRICING_PLANS.find(p => p.id === selectedPlan);
    const totalAmount = plan?.price || 0;
    const paidAmount = orderDetails.paymentType === 'ADVANCE' ? totalAmount * 0.5 : totalAmount;
    const payTypeStr = orderDetails.paymentType === 'ADVANCE' ? `৫০% অগ্রিম (৳${paidAmount})` : `ফুল পেমেন্ট (৳${paidAmount})`;
    
    const waMessage = `✨ *New Order: Mr Bangla Studio* ✨
-------------------------------------------
👤 *অর্ডার ডিটেইলস:*
👤 নাম: ${orderDetails.customerName}
📦 প্যাকেজ: ${plan?.title}
💰 মোট মূল্য: ৳${totalAmount}
💳 পেমেন্ট মেথড: ${orderDetails.paymentMethod}
💸 পেমেন্ট টাইপ: ${payTypeStr}
🧾 TrxID: ${orderDetails.trxId}

-------------------------------------------
📌 *আমি নিচে আমার ভিডিও ফুটেজ এবং পেমেন্ট স্ক্রিনশট পাঠিয়ে দিচ্ছি। দ্রুত চেক করুন।*`;
    
    window.open(`https://wa.me/88${CONTACT_NUMBER.replace('-', '')}?text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  const planPrice = PRICING_PLANS.find(p => p.id === selectedPlan)?.price || 0;
  const payableAmount = orderDetails.paymentType === 'ADVANCE' ? planPrice * 0.5 : planPrice;

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-100 pb-24 md:pb-0 font-['Inter']">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-rose-500/5 blur-[150px] rounded-full" />
      </div>

      {/* Ticker Notifications */}
      <div className={`fixed top-24 left-0 right-0 z-[100] flex justify-center transition-all duration-700 transform ${showTicker ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="glass-panel px-4 py-2.5 rounded-2xl border border-indigo-500/30 shadow-2xl flex items-center gap-3 bg-slate-900/95 backdrop-blur-3xl max-w-[90%]">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
          <p className="text-[10px] font-black text-slate-200">{LIVE_ACTIVITIES[currentActivityIndex]}</p>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-[110] bg-slate-950/95 backdrop-blur-2xl border-b border-white/5 py-5 px-6 flex justify-between items-center sticky top-0 shadow-2xl">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.open(YT_CHANNEL_URL, '_blank')}>
          <div className="relative">
             <img 
               src={YT_PROFILE_PIC} 
               alt="Profile" 
               className="h-12 w-12 rounded-full border-2 border-indigo-500 shadow-xl object-cover" 
             />
             <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-500 border-2 border-slate-950 rounded-full"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-md font-black tracking-tighter text-white">{YT_CHANNEL_NAME}</h1>
              <span className="h-3.5 w-3.5 bg-blue-500 rounded-full flex items-center justify-center text-[7px] text-white">✓</span>
            </div>
            <p className="text-[9px] font-bold text-indigo-400">{YT_SUBSCRIBERS} মেম্বার</p>
          </div>
        </div>
        <div className="flex gap-2">
            <button onClick={() => window.open(`https://wa.me/88${CONTACT_NUMBER.replace('-', '')}`)} className="bg-green-600/10 text-green-500 p-2.5 rounded-xl border border-green-500/20 active:scale-95 transition-all">
              <span className="text-xl">💬</span>
            </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow px-5 py-6 w-full tab-content">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <section className="text-center py-6 flex flex-col items-center">
              {/* Profile Image Highlight */}
              <div 
                className="relative mb-8 group cursor-pointer"
                onClick={() => window.open(YT_CHANNEL_URL, '_blank')}
              >
                <div className="absolute inset-0 bg-indigo-600 blur-[40px] opacity-30 group-hover:opacity-50 transition-opacity rounded-full animate-pulse"></div>
                <div className="relative">
                  <img 
                    src={YT_PROFILE_PIC} 
                    alt="Mister Bangla" 
                    className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-indigo-500/50 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full border-2 border-slate-950 flex items-center gap-1.5 shadow-2xl whitespace-nowrap">
                    <span>ভেরিফাইড ইউটিউবার</span>
                    <span className="h-3.5 w-3.5 bg-white text-indigo-600 rounded-full flex items-center justify-center text-[8px]">✓</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[9px] font-black mb-6 uppercase tracking-widest">১.২৪ লাখ ক্রিয়েটরের বিশ্বস্ত প্ল্যাটফর্ম 🛡️</div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">কন্টেন্টকে দিন <br/><span className="gradient-text italic">রাজকীয় ভাইরাল</span> লুক</h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto mb-10 leading-relaxed font-medium">আমরা আপনার ভিডিওকে করে তুলি অনন্য এবং প্রফেশনাল। আমাদের ভেরিফাইড প্রোফাইল ও কাজের নমুনা দেখুন।</p>
              
              <div className="flex flex-col gap-4 w-full max-w-sm">
                 <button onClick={() => setActiveTab('pricing')} className="bg-indigo-600 w-full py-5 rounded-2xl text-lg font-black shadow-2xl active:scale-95 transition-all border-t border-white/10">প্যাকেজ দেখুন 💎</button>
                 <button onClick={() => window.open(YT_CHANNEL_URL, '_blank')} className="bg-red-600/20 border border-red-500/20 text-red-500 w-full py-5 rounded-2xl text-lg font-black active:scale-95 transition-all flex items-center justify-center gap-3">
                   <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="h-6 w-6" alt="YT" />
                   অফিসিয়াল চ্যানেল ভিজিট
                 </button>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="space-y-6">
              <h3 className="text-xl font-black italic px-2 flex items-center gap-2">
                <span className="h-1 w-8 bg-indigo-500 rounded-full"></span>
                কেন আমাদের বেছে নেবেন?
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="glass-panel p-6 rounded-3xl border-white/5 flex gap-4 items-start shadow-xl">
                  <div className="bg-indigo-600/20 p-3 rounded-2xl text-indigo-400 text-xl shadow-inner">🛡️</div>
                  <div>
                    <h4 className="font-black text-sm text-white">ভেরিফাইড ও বিশ্বস্ত</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">১ লক্ষ ২৪ হাজারের বেশি সাবস্ক্রাইবার বিশিষ্ট ভেরিফাইড চ্যানেল আমাদের প্রধান শক্তি।</p>
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-3xl border-white/5 flex gap-4 items-start shadow-xl">
                  <div className="bg-rose-600/20 p-3 rounded-2xl text-rose-400 text-xl shadow-inner">⚡</div>
                  <div>
                    <h4 className="font-black text-sm text-white">সুপার ফাস্ট ডেলিভারি</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">আমরা সময়ের মূল্য বুঝি। প্রতিটি কাজ নির্ধারিত সময়ের মধ্যেই আপনার হাতে পৌঁছে দেওয়ার নিশ্চয়তা দিই।</p>
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-3xl border-white/5 flex gap-4 items-start shadow-xl">
                  <div className="bg-green-600/20 p-3 rounded-2xl text-green-400 text-xl shadow-inner">💎</div>
                  <div>
                    <h4 className="font-black text-sm text-white">প্রিমিয়াম ভাইরাল এডিটিং</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">আপনার ভিডিওকে ভাইরাল করার জন্য প্রয়োজনীয় সব আধুনিক ইফেক্টস এবং টেকনিক আমরা ব্যবহার করি।</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section className="space-y-6 pb-6">
              <h3 className="text-xl font-black italic px-2 flex items-center gap-2">
                 <span className="h-1 w-8 bg-red-600 rounded-full"></span>
                 কাজের নমুনা
              </h3>
              <div className="space-y-6">
                {PORTFOLIO_VIDEOS.map((v) => (
                  <div key={v.id} onClick={() => window.open(v.url, '_blank')} className="glass-panel rounded-[2.5rem] overflow-hidden border-white/5 active:border-indigo-500/50 transition-all shadow-2xl cursor-pointer group">
                    <div className="aspect-video relative overflow-hidden">
                      <img src={v.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={v.title} />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="h-14 w-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl">▶</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-8 animate-fade-in pb-10">
            <h2 className="text-3xl font-black italic text-center">সার্ভিস <span className="gradient-text">প্যাকসমূহ</span></h2>
            <div className="space-y-6">
              {PRICING_PLANS.map((p) => (
                <div key={p.id} onClick={() => { setSelectedPlan(p.id); setActiveTab('order'); }} className={`glass-panel p-6 rounded-3xl relative border-white/5 active:scale-95 transition-all shadow-xl ${p.id === 'STANDARD' ? 'border-indigo-500/40 bg-indigo-600/5 shadow-2xl' : ''}`}>
                  {p.badge && <div className="absolute -top-3 right-6 bg-gradient-to-r from-indigo-600 to-rose-500 text-white text-[8px] font-black px-4 py-1.5 rounded-full shadow-lg z-10">{p.badge}</div>}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-black text-slate-100">{p.title}</h3>
                      <p className="text-[10px] text-slate-500 font-bold">{p.deliveryTime} ডেলিভারি</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white">৳{p.price}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {p.features.map((f, i) => (
                      <div key={i} className={`flex items-center gap-2 text-[11px] font-medium ${f.startsWith('✘') ? 'text-slate-600' : 'text-slate-400'}`}>
                        <span className={f.startsWith('✓') ? 'text-green-500' : 'text-red-500'}>{f.charAt(0)}</span> {f.substring(2)}
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-4 rounded-2xl font-black text-xs uppercase bg-indigo-600 shadow-xl border-t border-white/10">অর্ডার করুন →</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'order' && (
          <div className="animate-fade-in pb-10">
            <div className="glass-panel p-6 rounded-[2.5rem] border-white/5 shadow-3xl">
              <h2 className="text-2xl font-black italic mb-8 text-center">অর্ডার <span className="gradient-text">ফরম</span></h2>
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-[9px] font-black text-slate-500 uppercase px-3 mb-2 block tracking-widest">আপনার নাম (আবশ্যক)</label>
                    <input type="text" required placeholder="আপনার নাম লিখুন..." value={orderDetails.customerName} onChange={(e) => setOrderDetails({ ...orderDetails, customerName: e.target.value })} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none font-bold text-white text-sm focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-slate-500 uppercase px-3 mb-2 block tracking-widest">প্যাকেজ (আবশ্যক)</label>
                    <select required value={selectedPlan || ''} onChange={(e) => setSelectedPlan(e.target.value as ServiceType)} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none font-bold text-sm text-white appearance-none">
                      <option value="" disabled>প্যাকেজ বাছাই করুন</option>
                      {PRICING_PLANS.map(p => <option key={p.id} value={p.id}>{p.title} (৳{p.price})</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-[9px] font-black text-slate-500 uppercase px-3 mb-2 block tracking-widest">পেমেন্ট মেথড (পার্সোনাল)</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentMethod: 'BKASH'})} className={`py-4 rounded-xl border flex items-center justify-center font-black transition-all ${orderDetails.paymentMethod === 'BKASH' ? 'bg-indigo-600 border-indigo-500 shadow-lg' : 'bg-slate-900 border-white/5 opacity-50'}`}>বিকাশ</button>
                      <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentMethod: 'NAGAD'})} className={`py-4 rounded-xl border flex items-center justify-center font-black transition-all ${orderDetails.paymentMethod === 'NAGAD' ? 'bg-orange-600 border-orange-500 shadow-lg' : 'bg-slate-900 border-white/5 opacity-50'}`}>নগদ</button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-black text-slate-500 uppercase px-3 mb-2 block tracking-widest">Transaction ID / TrxID (আবশ্যক)</label>
                    <input type="text" required placeholder="টাকা পাঠিয়ে TrxID এখানে দিন" value={orderDetails.trxId} onChange={(e) => setOrderDetails({ ...orderDetails, trxId: e.target.value })} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none font-mono text-sm text-indigo-400 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>

                {/* Bill Section */}
                <div className="p-6 bg-indigo-600/10 rounded-3xl border border-indigo-500/20 flex flex-col gap-3 shadow-xl">
                  <p className="text-rose-500 text-[10px] font-black text-center animate-pulse">⚠️ অবশ্যই "সেন্ড মানি" (Send Money) করবেন</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase tracking-tighter">পার্সোনাল নম্বর:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-white">{CONTACT_NUMBER}</span>
                      <button type="button" onClick={handleCopy} className="bg-white/10 px-2 py-1 rounded-lg text-[10px] text-indigo-400 active:scale-90 transition-all">{copied ? 'Copied' : 'Copy'}</button>
                    </div>
                  </div>
                  <div className="h-px bg-white/5"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">প্রদেয় পরিমাণ:</span>
                    <span className="text-2xl font-black text-white">৳{payableAmount}</span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-indigo-600 py-5 rounded-2xl text-lg font-black shadow-2xl border-t border-white/10 active:scale-95 transition-all">অর্ডার প্লেস করুন 🚀</button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-[120] glass-panel border-t border-white/5 px-4 py-4 flex justify-around items-center rounded-t-[2.5rem] shadow-2xl backdrop-blur-3xl">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'home' ? 'text-indigo-400 scale-110' : 'text-slate-500'}`}>
          <span className="text-xl">🏠</span>
          <span className="text-[8px] font-black uppercase tracking-widest">Home</span>
        </button>
        <button onClick={() => setActiveTab('pricing')} className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'pricing' ? 'text-indigo-400 scale-110' : 'text-slate-500'}`}>
          <span className="text-xl">💎</span>
          <span className="text-[8px] font-black uppercase tracking-widest">Packs</span>
        </button>
        <button onClick={() => setActiveTab('order')} className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'order' ? 'text-indigo-400 scale-110' : 'text-slate-500'}`}>
          <span className="text-xl">🛒</span>
          <span className="text-[8px] font-black uppercase tracking-widest">Order</span>
        </button>
        <button onClick={() => window.open(`https://wa.me/88${CONTACT_NUMBER.replace('-', '')}`)} className="flex flex-col items-center gap-1.5 text-slate-500 active:text-green-500">
          <span className="text-xl">💬</span>
          <span className="text-[8px] font-black uppercase tracking-widest">Chat</span>
        </button>
      </nav>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
