
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  PRICING_PLANS, 
  SONG_PLANS,
  CAPCUT_PRO_PLAN,
  CAPCUT_PRO_MAX_PLAN,
  INSHOT_PRO_PLAN,
  SOCIAL_MEDIA_SERVICES,
  CONTACT_NUMBER, 
  YT_BASE_SUBS,
  YT_CHANNEL_NAME, 
  YT_CHANNEL_URL, 
  YT_PROFILE_PIC,
  PORTFOLIO_VIDEOS,
  SOCIAL_LINKS,
  LIVE_ACTIVITIES
} from './constants';
import { OrderDetails } from './types';

const LiveSubscriberCounter = () => {
  const [subs, setSubs] = useState(YT_BASE_SUBS);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.random() > 0.5 ? 1 : -1;
      setSubs(prev => prev + change);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-1.5">
        <span className="text-lg font-black text-white tabular-nums drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] tracking-tight">{subs.toLocaleString()}</span>
        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
      </div>
      <p className="text-[7px] text-yellow-500 font-bold uppercase mt-0.5 opacity-90 tracking-tight">Active Community</p>
    </div>
  );
};

const GracefulParticles = () => {
  const particles = useMemo(() => Array.from({ length: 14 }).map((_, i) => ({
    icon: ['✂️', '🎥', '🎬', '🎵', '🎞️', '📸', '✨', '🚀', '🔥'][i % 9],
    duration: `${20 + Math.random() * 25}s`,
    delay: `${Math.random() * -15}s`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: 10 + Math.random() * 8,
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div 
          key={i}
          className="absolute animate-float-graceful opacity-30 text-white"
          style={{ 
            top: p.top, 
            left: p.left, 
            fontSize: `${p.size}px`,
            animationDuration: p.duration,
            animationDelay: p.delay
          }}
        >
          {p.icon}
        </div>
      ))}
    </div>
  );
};

const ThreeDLogo = () => (
  <div className="relative flex flex-col items-center justify-center py-4">
    <div className="absolute inset-0 bg-yellow-400/5 blur-[70px] rounded-full scale-110 -z-10 animate-pulse"></div>
    <GracefulParticles />
    
    <div className="cinematic-badge-container-mobile cursor-pointer active:scale-95 transition-all" onClick={() => window.open(YT_CHANNEL_URL, '_blank')}>
      <div className="badge-ring-1 border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-spin-slow"></div>
      <div className="badge-core-mobile">
        <div className="badge-core-inner bg-slate-950 border-[3px] border-yellow-400 shadow-xl">
          <img src={YT_PROFILE_PIC} alt="Logo" className="w-10 h-10 object-contain brightness-125" />
        </div>
      </div>
    </div>
    
    <div className="mt-4 z-30 text-center">
      <div onClick={() => window.open(YT_CHANNEL_URL, '_blank')} className="bg-gradient-to-b from-yellow-300 to-amber-600 px-4 py-2 rounded-xl shadow-[0_8px_15px_rgba(217,119,6,0.3)] border border-yellow-100/30 inline-flex items-center gap-2 cursor-pointer active:scale-95 transition-all">
        <h2 className="text-sm font-black text-slate-950 tracking-tight uppercase">মিস্টার বাংলা স্টুডিও</h2>
        <svg className="w-3.5 h-3.5 text-blue-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div className="mt-3">
        <LiveSubscriberCounter />
      </div>
    </div>
  </div>
);

const NotificationTicker = () => {
  const names = ['শাকিল', 'রানা', 'আরিফ', 'রাজু', 'ফাহিম', 'শুভ', 'তপু', 'হাসান', 'সোহেল', 'মিম', 'রাফি', 'জিসান', 'আয়ান', 'সিয়াম', 'মাহিন', 'তৌসিফ', 'নাবিল', 'সামিন', 'আরমান', 'সজল', 'রাসেল', 'পার্থ', 'আকাশ', 'মিরাজ', 'শাকওয়াত'];
  const places = ['ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'রাজশাহী', 'খুলনা', 'বরিশাল', 'কুমিল্লা', 'নোয়াখালী', 'বগুড়া', 'ময়মনসিংহ', 'গাজীপুর', 'রংপুর'];
  
  const generalActions = [
    'এইমাত্র ৩টি অর্ডারের কাজ দিয়েছেন',
    'তার ৫০০ টাকার ভিডিও বুঝে পেয়েছেন',
    '১০০ টাকার গানের প্যাক নিয়েছেন',
    '১০০০ টাকার বিয়ের প্যাক বুক করেছেন',
    '৩০০ টাকার প্যাক অর্ডার করেছেন',
    '৮০০ টাকার মাস্টারপিস অর্ডার করেছেন',
    'এইমাত্র ১টি ট্রায়াল এডিট বুক করেছেন',
    'তার ১০০০ টাকার ডেলিভারি বুঝে পেয়েছেন',
    '৫০০ টাকার গানের অর্ডার দিয়েছেন',
    '২০০ টাকার প্রিয়তমা প্যাক নিয়েছেন'
  ];

  const capcutActions = [
    '৯৯ টাকার Capcut Pro APK অর্ডার করেছেন',
    'এইমাত্র Chinese Capcut Pro Max প্যাক নিয়েছেন',
    'Capcut Pro Max বুঝে পেয়েছেন এবং খুশি',
    '১২৫ টাকার ক্যাপকাট প্রো ম্যাক্স অর্ডার করেছেন'
  ];

  const [current, setCurrent] = useState("");
  const usedNamesRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const generateMessage = () => {
      const isCapcutActivity = Math.random() > 0.5;
      
      let randomName = names[Math.floor(Math.random() * names.length)];
      if (usedNamesRef.current.has(randomName) && usedNamesRef.current.size < names.length) {
        const available = names.filter(n => !usedNamesRef.current.has(n));
        if (available.length > 0) {
          randomName = available[Math.floor(Math.random() * available.length)];
        }
      }
      
      usedNamesRef.current.add(randomName);
      if (usedNamesRef.current.size >= names.length - 2) { 
        usedNamesRef.current.clear();
      }

      const randomPlace = places[Math.floor(Math.random() * places.length)];
      const actionPool = isCapcutActivity ? capcutActions : generalActions;
      const randomAction = actionPool[Math.floor(Math.random() * actionPool.length)];
      const icon = isCapcutActivity ? '🚀' : ['🔥', '✅', '🚀', '🌹', '✨', '🎬'][Math.floor(Math.random() * 6)];
      
      return `${icon} ${randomName} (${randomPlace}) ${randomAction}`;
    };

    setCurrent(generateMessage());
    const timer = setInterval(() => {
      setCurrent(generateMessage());
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 py-1.5 mb-1 sticky top-[52px] z-[140]">
      <div className="bg-slate-950/85 backdrop-blur-3xl border border-yellow-500/40 px-3 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-slide-down pointer-events-none min-h-[40px]">
        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
        <p className="text-[9px] font-black text-white truncate uppercase tracking-tight leading-none">{current}</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'pricing' | 'order' | 'songs' | 'capcut' | 'inshot' | 'socialMedia'>('home');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [orderDetails, setOrderDetails] = useState<Partial<OrderDetails>>({
    customerName: '',
    paymentMethod: 'BKASH',
    paymentType: 'ADVANCE',
    trxId: '',
  });
  const [copied, setCopied] = useState(false);

  // Social Media State
  const [smPlatform, setSmPlatform] = useState<string | null>(null);
  const [smCategory, setSmCategory] = useState<any>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderDetails.customerName?.trim() || !selectedPlan || !orderDetails.trxId?.trim()) {
      alert("সব তথ্য দিন!");
      return;
    }
    const isSpecial = ['CAPCUT', 'CAPCUT_MAX', 'INSHOT', 'SOCIAL'].includes(selectedPlan.type || selectedPlan.id);
    const finalPaymentType = isSpecial ? 'FULL' : orderDetails.paymentType;
    const payAmountVal = finalPaymentType === 'ADVANCE' ? Math.ceil((selectedPlan?.price || 0) * 0.5) : (selectedPlan?.price || 0);
    const payLabel = finalPaymentType === 'ADVANCE' ? `৫০% অগ্রিম (৳${payAmountVal})` : `ফুল পেমেন্ট (৳${payAmountVal})`;
    
    const waMessage = `✨ New Order: Mr Bangla Studio ✨
👤 অর্ডার ডিটেইলস:
👤 নাম: ${orderDetails.customerName}
📦 প্যাকেজ: ${selectedPlan.title}
💰 মোট মূল্য: ৳${selectedPlan.price}
💳 পেমেন্ট মেথড: ${orderDetails.paymentMethod}
💸 পেমেন্ট টাইপ: ${payLabel}
🧾 TrxID: ${orderDetails.trxId}
📌 *আমি নিচে পেমেন্ট স্ক্রিনশট পাঠিয়ে দিচ্ছি। দ্রুত চেক করুন।*`;

    window.open(`https://wa.me/88${CONTACT_NUMBER.replace('-', '')}?text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  const isSpecialSelected = selectedPlan?.id === 'CAPCUT' || selectedPlan?.id === 'CAPCUT_MAX' || selectedPlan?.id === 'INSHOT' || selectedPlan?.type === 'SOCIAL';
  const payableAmount = (isSpecialSelected || orderDetails.paymentType === 'FULL') ? (selectedPlan?.price || 0) : Math.ceil((selectedPlan?.price || 0) * 0.5);

  const platformLogos: any = {
    facebook: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
    youtube: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    tiktok: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
    instagram: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#01040f] text-slate-100 pb-20">
      <header className="relative z-[150] bg-slate-950/98 backdrop-blur-3xl border-b border-white/5 py-2.5 px-4 flex justify-between items-center sticky top-0 shadow-xl">
        <div onClick={() => window.open(YT_CHANNEL_URL, '_blank')} className="flex items-center gap-2 cursor-pointer active:scale-95 transition-all">
           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 p-0.5 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
             <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center overflow-hidden">
               <img src={YT_PROFILE_PIC} className="w-5 h-5" alt="Icon" />
             </div>
           </div>
           <div>
             <h1 className="text-[10px] font-black text-white leading-none uppercase tracking-tight">মিস্টার বাংলা Official</h1>
             <p className="text-[6px] text-yellow-500 font-bold uppercase mt-0.5 tracking-tight">Elite Studio</p>
           </div>
        </div>
        <button onClick={() => window.open(`https://wa.me/88${CONTACT_NUMBER.replace('-', '')}`, '_blank')} className="bg-green-600 px-3 py-1.5 rounded-lg text-[8px] font-black shadow-lg border-b-[4px] border-green-800 active:translate-y-0.5 active:border-b-0 uppercase text-white tracking-tight">
          Message 💬
        </button>
      </header>

      <NotificationTicker />

      <main className="relative z-10 flex-grow px-3.5 py-1">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="text-center">
              <ThreeDLogo />
              <div className="mt-4 space-y-3">
                <h2 className="text-lg font-black text-white px-1 leading-snug tracking-tight">
                  এবার আপনিও সোশ্যাল মিডিয়া <span className="gradient-text">কাঁপাবেন</span>, <br/>
                  <span className="text-sm mt-1 block opacity-90 text-yellow-400 tracking-tight">স্মৃতিগুলোকে রেখে দিবেন চিরস্মরণীয় করে।</span>
                </h2>
                <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 shadow-lg">
                  <p className="text-yellow-400 text-xs font-black mb-2 leading-relaxed italic tracking-tight uppercase">
                    "বানিয়ে দেবো আপনার প্রিয়জনকে নিয়ে চমৎকার একটি গান"
                  </p>
                  <p className="text-slate-300 text-[11px] font-medium leading-relaxed tracking-tight">
                    আপনার যেকোনো ভিডিও আমাদেরকে দিন আমরা সেটাকে অনেক সুন্দর ভাবে এডিট করে দেবো কিংবা চাইলে আপনার নামে বানিয়ে দিব গান।
                  </p>
                </div>
              </div>
              
              {/* Unified Home Page Buttons with High-Energy Neon Lighting */}
              <div className="mt-8 flex flex-col gap-6 px-1.5">
                <button 
                  onClick={() => setActiveTab('pricing')} 
                  className="relative group bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 w-full py-5 rounded-[2rem] font-black shadow-[0_0_35px_rgba(234,179,8,0.3)] text-slate-950 text-lg border-b-[10px] border-amber-900 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-[0.1em] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-glint-bar pointer-events-none"></div>
                  <span className="flex items-center justify-center gap-2 drop-shadow-md">
                    <span>এডিটিং প্যাকেজ</span>
                    <span className="text-2xl drop-shadow-[0_0_8px_white]">💎</span>
                  </span>
                </button>

                <button 
                  onClick={() => setActiveTab('songs')} 
                  className="relative group bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 w-full py-5 rounded-[2rem] font-black shadow-[0_0_35px_rgba(6,182,212,0.3)] text-white text-lg border-b-[10px] border-blue-900 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-[0.1em] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-glint-bar pointer-events-none"></div>
                  <span className="flex items-center justify-center gap-2 drop-shadow-md">
                    <span>গানের প্যাকেজ</span>
                    <span className="text-2xl drop-shadow-[0_0_8px_cyan]">🎵</span>
                  </span>
                </button>

                <button 
                  onClick={() => { setSmPlatform(null); setActiveTab('socialMedia'); }} 
                  className="relative group bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 w-full py-5 rounded-[2rem] font-black shadow-[0_0_40px_rgba(79,70,229,0.4)] text-white text-lg border-b-[10px] border-indigo-950 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-[0.1em] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-glint-bar pointer-events-none"></div>
                  <span className="flex items-center justify-center gap-2 drop-shadow-md">
                    <span>সোশ্যাল মিডিয়া সার্ভিস</span>
                    <span className="text-2xl drop-shadow-[0_0_8px_indigo]">⚡</span>
                  </span>
                </button>

                <button 
                  onClick={() => setActiveTab('capcut')} 
                  className="relative group bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-700 w-full py-5 rounded-[2rem] font-black shadow-[0_0_40px_rgba(16,185,129,0.4)] text-white text-lg border-b-[10px] border-emerald-950 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-[0.1em] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-glint-bar pointer-events-none"></div>
                  <span className="flex items-center justify-center gap-2 drop-shadow-md">
                    <span>Capcut Pro APK</span>
                    <span className="text-2xl drop-shadow-[0_0_8px_emerald]">🚀</span>
                  </span>
                </button>

                <button 
                  onClick={() => setActiveTab('inshot')} 
                  className="relative group bg-gradient-to-r from-pink-500 via-rose-600 to-pink-700 w-full py-5 rounded-[2rem] font-black shadow-[0_0_40px_rgba(244,63,94,0.4)] text-white text-lg border-b-[10px] border-rose-950 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-[0.1em] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-glint-bar pointer-events-none"></div>
                  <span className="flex items-center justify-center gap-2 drop-shadow-md">
                    <span>InShot Pro APK</span>
                    <span className="text-2xl drop-shadow-[0_0_8px_pink]">✨</span>
                  </span>
                </button>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                <h3 className="text-sm font-black text-white uppercase tracking-tight">কেন আমাদের থেকে নেবেন?</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: '👑', title: '৫০০০+ সফল কাজ সম্পন্ন', desc: 'আমরা বিশ্বস্ততার সাথে প্রজেক্ট ডেলিভারি দিয়েছি।' },
                  { icon: '🛡️', title: 'ভেরিফাইড ইউটিউব চ্যানেল', desc: '১.২৪ লাখ সাবস্ক্রাইবার বিশিষ্ট অফিসিয়াল চ্যানেল।' },
                  { icon: '⚡', title: 'দ্রুততম ডেলিভারি', desc: 'অর্ডারের ২৪-৪৮ ঘণ্টার মধ্যে কোয়ালিটি নিশ্চিত।' },
                  { icon: '🎥', title: 'সিনেমাটিক ভাইরাল এডিট', desc: 'আধুনিক কালার গ্রেডিং ও ভাইরাল ইফেক্ট দিয়ে সাজানো।' },
                  { icon: '🎤', title: 'কাস্টম এআই মিউজিক', desc: 'আপনার নামে বা প্রিয়জনের গল্পে ইউনিক গান তৈরি।' },
                  { icon: '💎', title: 'প্রিমিয়াম সাপোর্ট', desc: 'কাজের রিভিশন এবং কাস্টমার সাপোর্ট ২৪/৭ পাওয়া যাবে।' },
                  { icon: '✨', title: 'সন্তুষ্টির নিশ্চয়তা', desc: 'আপনার পছন্দ না হওয়া পর্যন্ত আমরা কাজ সংশোধন করি।' },
                  { icon: '✅', title: 'সুরক্ষিত পেমেন্ট', desc: 'বিকাশ ও নগদে ভেরিফাইড পার্সোনাল নাম্বারে পেমেন্ট।' }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel p-5 rounded-[1.5rem] flex gap-5 items-center shadow-xl border-l-[6px] border-l-yellow-500 hover:scale-[1.03] transition-all duration-300">
                    <div className="bg-slate-950 p-4 rounded-2xl text-3xl shadow-inner border border-white/5 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-black text-[14px] text-white tracking-tight uppercase leading-none mb-1.5">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 font-medium tracking-tight leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 pb-8 pt-4">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                 <h3 className="text-sm font-black text-white uppercase tracking-tight">রয়্যাল পোর্টফোলিও</h3>
               </div>
               <div className="grid grid-cols-1 gap-5">
                 {PORTFOLIO_VIDEOS.map((video) => (
                   <div key={video.id} onClick={() => window.open(video.url, '_blank')} className="relative glass-panel overflow-hidden rounded-[1.5rem] border-white/10 shadow-2xl group cursor-pointer active:scale-95 transition-all">
                     <div className="aspect-video relative">
                       <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500" />
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.7)] border border-white/20 group-hover:scale-110 transition-transform">
                           <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                         </div>
                       </div>
                       <div className="absolute bottom-4 left-5 right-5">
                         <h4 className="font-black text-base text-white drop-shadow-lg tracking-tight uppercase italic">{video.title}</h4>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </section>
          </div>
        )}

        {activeTab === 'socialMedia' && (
          <div className="space-y-8 animate-fade-in pb-12 pt-1">
            <h2 className="text-3xl font-black text-center mb-6 italic uppercase tracking-tighter">
              সোশ্যাল মিডিয়া <span className="gradient-text">সার্ভিস</span>
            </h2>
            
            {!smPlatform && (
              <div className="flex flex-col gap-5 px-1">
                {Object.keys(SOCIAL_MEDIA_SERVICES).map((key) => {
                  const platform = SOCIAL_MEDIA_SERVICES[key];
                  return (
                    <button 
                      key={key} 
                      disabled={platform.isClosed}
                      onClick={() => { setSmPlatform(key); setSmCategory(null); }}
                      className={`group relative p-7 rounded-[2.5rem] bg-gradient-to-r ${platform.color} border-2 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex items-center gap-7 active:scale-[0.97] transition-all overflow-hidden ${platform.isClosed ? 'opacity-60 grayscale-[0.5] cursor-not-allowed' : ''}`}
                    >
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center p-4 shadow-inner border border-white/20 relative z-10 group-hover:scale-110 transition-transform">
                        <img 
                          src={platformLogos[key]} 
                          alt={key} 
                          className="w-full h-full object-contain drop-shadow-2xl filter brightness-110" 
                        />
                      </div>
                      
                      <div className="flex flex-col items-start relative z-10">
                        <span className="font-black text-white text-2xl uppercase tracking-tighter italic drop-shadow-md">{platform.label}</span>
                        <span className="text-[10px] text-white/70 font-black uppercase tracking-[0.25em] mt-2">
                          {platform.isClosed ? 'Temporarily Closed 🚫' : 'Premium Elite Service'}
                        </span>
                      </div>

                      <div className="ml-auto relative z-10 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                        {platform.isClosed ? (
                          <span className="text-white font-black text-[10px] bg-red-600 px-3 py-1 rounded-full shadow-lg">CLOSED</span>
                        ) : (
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7"/></svg>
                        )}
                      </div>

                      {!platform.isClosed && <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-glint-bar pointer-events-none`}></div>}
                    </button>
                  );
                })}
              </div>
            )}

            {smPlatform && !smCategory && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <button onClick={() => setSmPlatform(null)} className="w-12 h-12 bg-white/5 border border-white/15 rounded-2xl flex items-center justify-center active:scale-90 transition-all shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"/></svg>
                   </button>
                   <div>
                      <h3 className="text-lg font-black text-slate-300 uppercase tracking-widest italic">{SOCIAL_MEDIA_SERVICES[smPlatform].label}</h3>
                      <p className="text-[11px] text-yellow-500 font-bold uppercase tracking-widest">সার্ভিস ক্যাটাগরি বেছে নিন</p>
                   </div>
                </div>
                <div className="grid grid-cols-1 gap-5">
                  {SOCIAL_MEDIA_SERVICES[smPlatform].categories.map((cat: any) => (
                    <button 
                      key={cat.id} 
                      onClick={() => setSmCategory(cat)}
                      className="relative p-7 rounded-[2rem] bg-slate-900/60 border-2 border-white/10 flex justify-between items-center group active:scale-[0.98] transition-all shadow-2xl overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 w-2 h-full bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.7)]"></div>
                      <span className="font-black text-lg text-white uppercase tracking-tight italic drop-shadow-md">{cat.label}</span>
                      <div className="w-12 h-12 bg-yellow-500 text-slate-950 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.5)] group-hover:rotate-12 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 4v16m8-8H4"/></svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {smPlatform && smCategory && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <button onClick={() => setSmCategory(null)} className="w-12 h-12 bg-white/5 border border-white/15 rounded-2xl flex items-center justify-center active:scale-90 transition-all shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"/></svg>
                   </button>
                   <div>
                      <h3 className="text-lg font-black text-slate-300 uppercase tracking-widest italic">{smCategory.label}</h3>
                      <p className="text-[11px] text-yellow-500 font-bold uppercase tracking-widest">পরিমাণ সিলেক্ট করুন</p>
                   </div>
                </div>
                <div className="glass-panel p-7 rounded-[3rem] border-2 border-yellow-500/30 shadow-[0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-10 opacity-10">
                      <img src={platformLogos[smPlatform]} className="w-40 h-40 grayscale brightness-200" alt="bg" />
                   </div>
                   
                   <div className="grid grid-cols-1 gap-5 max-h-[450px] overflow-y-auto pr-2 scrollbar-hide py-3">
                      {smCategory.quantities.map((q: any, i: number) => {
                        const price = q.value ? Math.round((q.value / 1000) * smCategory.basePrice) : smCategory.basePrice;
                        return (
                          <button 
                            key={i} 
                            onClick={() => {
                              setSelectedPlan({
                                id: smCategory.id + '_' + q.value,
                                type: 'SOCIAL',
                                title: `${SOCIAL_MEDIA_SERVICES[smPlatform].label} ${smCategory.label} - ${q.label}`,
                                price: price,
                                color: SOCIAL_MEDIA_SERVICES[smPlatform].color
                              });
                              setActiveTab('order');
                            }}
                            className="group bg-slate-950/80 border-2 border-white/10 p-6 rounded-[2rem] flex justify-between items-center hover:border-yellow-400/50 transition-all active:scale-95 shadow-2xl relative overflow-hidden"
                          >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 animate-glint-bar"></div>
                            <span className="font-black text-base text-white uppercase tracking-tighter italic drop-shadow-md">{q.label}</span>
                            <div className="bg-yellow-500 px-6 py-2.5 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.5)] border border-yellow-300">
                              <span className="text-lg font-black text-slate-950 tabular-nums tracking-tighter">৳{price}</span>
                            </div>
                          </button>
                        );
                      })}
                   </div>
                </div>
              </div>
            )}
            
            <button onClick={() => setActiveTab('home')} className="w-full py-5 text-slate-500 font-black text-[12px] uppercase tracking-[0.5em] bg-white/5 rounded-3xl border border-white/10 mt-8 active:scale-95 transition-all">← Return to Home</button>
          </div>
        )}

        {activeTab === 'capcut' && (
          <div className="space-y-8 animate-fade-in pb-12 pt-2">
            <h2 className="text-xl font-black text-center italic uppercase text-white tracking-tighter">Capcut <span className="gradient-text">Pro Collection</span></h2>
            
            <div className={`p-8 rounded-[2.5rem] border-4 border-emerald-400/60 bg-gradient-to-br from-emerald-900 via-slate-950 to-emerald-900 shadow-[0_0_80px_rgba(16,185,129,0.4)] relative overflow-hidden group active:scale-[0.98] transition-all`}>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[glint-bar_3s_infinite] -skew-x-12"></div>
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/30 rounded-full blur-[100px] animate-pulse"></div>
               <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]">Capcut Pro <span className="text-emerald-400">APK</span></h3>
                    <p className="text-[10px] text-emerald-300 font-black mt-1 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 inline-block">Limited Offer Edition</p>
                  </div>
                  <div className="bg-slate-950/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border-2 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] relative">
                    <div className="absolute inset-0 bg-emerald-500/20 animate-pulse rounded-2xl"></div>
                    <span className="text-2xl font-black text-white relative z-10 tabular-nums">৳৯৯</span>
                  </div>
               </div>
               <p className="text-[12px] text-slate-100 font-black mb-6 leading-relaxed italic border-l-4 border-emerald-400 pl-4 bg-emerald-500/10 py-3 rounded-r-2xl drop-shadow-md">"{CAPCUT_PRO_PLAN.description}"</p>
               <div className="space-y-3 mb-8 relative z-10">
                  <p className="text-[9px] font-black text-emerald-300 uppercase tracking-widest text-center mb-2 animate-pulse">✨ ২০+ প্রিমিয়াম ফিচার আনলক (স্ক্রোল করুন)</p>
                  <div className="bg-black/60 p-5 rounded-[2rem] border-2 border-emerald-500/20 shadow-inner max-h-[160px] overflow-y-auto scrollbar-hide space-y-3">
                    {CAPCUT_PRO_PLAN.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 py-1.5 border-b border-white/5 last:border-0 hover:translate-x-1 transition-transform">
                        <span className="text-xl animate-bounce">{f.split(' ')[0]}</span>
                        <span className="text-[11px] font-black text-emerald-500 uppercase tracking-tight">{f.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <button onClick={() => { setSelectedPlan(CAPCUT_PRO_PLAN); setActiveTab('order'); }} className="w-full bg-emerald-500 text-slate-950 py-5 rounded-[2.5rem] font-black text-xl border-b-[10px] border-emerald-900 active:translate-y-1 active:border-b-0 uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:brightness-125 transition-all">অর্ডার দিন 🚀</button>
            </div>

            <div className={`p-8 rounded-[3rem] border-4 border-indigo-400/70 bg-gradient-to-br from-indigo-900 via-slate-950 to-indigo-900 shadow-[0_0_100px_rgba(79,70,229,0.5)] relative overflow-hidden group scale-[1.02] active:scale-100 transition-all`}>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[glint-bar_2s_infinite] -skew-x-12 opacity-40"></div>
               <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/40 rounded-full blur-[120px] animate-pulse"></div>
               <div className="text-center relative z-10">
                 <div className="inline-block px-5 py-2 bg-indigo-500 text-white text-[10px] font-black uppercase rounded-full mb-5 shadow-[0_0_25px_rgba(79,70,229,0.8)] tracking-widest animate-bounce">
                    Highly Recommended 👑
                 </div>
                 <h2 className="text-4xl font-black text-white mb-2 uppercase italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Chinese Capcut <span className="text-indigo-400">Pro Max</span></h2>
               </div>
               <div className="bg-black/70 backdrop-blur-3xl p-7 rounded-[2.5rem] border-2 border-indigo-400 shadow-[0_0_40px_rgba(79,70,229,0.6)] flex justify-between items-center mb-8 relative z-10">
                  <div className="relative z-10">
                    <p className="text-[11px] font-black text-indigo-400 uppercase tracking-widest">VIP Elite Price:</p>
                    <h3 className="text-5xl font-black text-white tabular-nums tracking-tighter">৳১২৫</h3>
                  </div>
                  <div className="text-indigo-400 relative z-10 animate-spin-slow">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  </div>
               </div>
               <div className="space-y-4 mb-10 relative z-10 text-center">
                  <p className="text-[13px] font-black text-white italic px-5 leading-relaxed bg-indigo-950/60 py-4 rounded-3xl border-2 border-indigo-400/30">"{CAPCUT_PRO_MAX_PLAN.description}"</p>
                  <div className="bg-black/80 p-6 rounded-[2.5rem] border-2 border-indigo-500/30 shadow-inner max-h-[200px] overflow-y-auto scrollbar-hide space-y-4">
                    {CAPCUT_PRO_MAX_PLAN.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-5 py-2 border-b border-white/5 last:border-0 hover:translate-x-2 transition-all">
                        <span className="text-2xl animate-pulse">{f.split(' ')[0]}</span>
                        <span className="text-[12px] font-black text-indigo-100 uppercase tracking-tight">{f.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <button onClick={() => { setSelectedPlan(CAPCUT_PRO_MAX_PLAN); setActiveTab('order'); }} className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 py-4.5 rounded-xl text-lg font-black shadow-lg text-slate-950 uppercase border-b-[10px] border-amber-900 active:translate-y-1 active:border-b-0 transition-all tracking-tight">অর্ডার দিন 🚀</button>
            </div>
            <button onClick={() => setActiveTab('home')} className="w-full py-4 text-slate-500 font-black text-[11px] uppercase tracking-[0.4em] bg-white/5 rounded-2xl border border-white/10 mt-6 active:scale-95 transition-all">← Return to Home</button>
          </div>
        )}

        {activeTab === 'inshot' && (
          <div className="space-y-8 animate-fade-in pb-12 pt-2">
            <h2 className="text-xl font-black text-center italic uppercase text-white tracking-tighter">InShot <span className="gradient-text">Pro Collection</span></h2>
            
            <div className={`p-8 rounded-[2.5rem] border-4 border-pink-400/60 bg-gradient-to-br from-pink-900 via-slate-950 to-pink-900 shadow-[0_0_80px_rgba(244,63,94,0.4)] relative overflow-hidden group active:scale-[0.98] transition-all`}>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[glint-bar_3s_infinite] -skew-x-12"></div>
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/30 rounded-full blur-[100px] animate-pulse"></div>
               <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]">InShot Pro <span className="text-pink-400">APK</span></h3>
                    <p className="text-[10px] text-pink-300 font-black mt-1 uppercase tracking-widest bg-pink-500/10 px-2 py-0.5 rounded-md border border-pink-500/20 inline-block">Premium Edition</p>
                  </div>
                  <div className="bg-slate-950/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border-2 border-pink-400 shadow-[0_0_20px_rgba(244,63,94,0.5)] relative">
                    <div className="absolute inset-0 bg-pink-500/20 animate-pulse rounded-2xl"></div>
                    <span className="text-2xl font-black text-white relative z-10 tabular-nums">৳৯৯</span>
                  </div>
               </div>
               <p className="text-[12px] text-slate-100 font-black mb-6 leading-relaxed italic border-l-4 border-pink-400 pl-4 bg-pink-500/10 py-3 rounded-r-2xl drop-shadow-md">"{INSHOT_PRO_PLAN.description}"</p>
               <div className="space-y-3 mb-8 relative z-10">
                  <p className="text-[9px] font-black text-pink-300 uppercase tracking-widest text-center mb-2 animate-pulse">✨ প্রিমিয়াম ফিচার আনলক (স্ক্রোল করুন)</p>
                  <div className="bg-black/60 p-5 rounded-[2rem] border-2 border-pink-500/20 shadow-inner max-h-[160px] overflow-y-auto scrollbar-hide space-y-3">
                    {INSHOT_PRO_PLAN.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 py-1.5 border-b border-white/5 last:border-0 hover:translate-x-1 transition-transform">
                        <span className="text-xl animate-bounce">{f.split(' ')[0]}</span>
                        <span className="text-[11px] font-black text-pink-500 uppercase tracking-tight">{f.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <button onClick={() => { setSelectedPlan(INSHOT_PRO_PLAN); setActiveTab('order'); }} className="w-full bg-pink-500 text-slate-950 py-5 rounded-[2.5rem] font-black text-xl border-b-[10px] border-pink-900 active:translate-y-1 active:border-b-0 uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:brightness-125 transition-all">অর্ডার দিন 🚀</button>
            </div>
            <button onClick={() => setActiveTab('home')} className="w-full py-4 text-slate-500 font-black text-[11px] uppercase tracking-[0.4em] bg-white/5 rounded-2xl border border-white/10 mt-6 active:scale-95 transition-all">← Return to Home</button>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-6 animate-fade-in pb-12 pt-1">
            <h2 className="text-lg font-black text-center mb-4 italic uppercase tracking-tight">এডিটিং <span className="gradient-text">প্যাকেজ</span></h2>
            {PRICING_PLANS.map(p => (
              <div 
                key={p.id} 
                onClick={() => { setSelectedPlan(p); setActiveTab('order'); }} 
                className={`p-6 rounded-2xl border transition-all shadow-2xl bg-gradient-to-br ${p.color} relative overflow-hidden group cursor-pointer active:scale-[0.98] 
                  ${p.isPopular ? 'border-yellow-400 border-[3px] scale-[1.03] shadow-[0_0_35px_rgba(234,179,8,0.4)]' : 'border-white/20 border-2'}`}
              >
                {p.badge && (
                  <div className={`absolute -top-1 right-4 font-black px-4 py-2 rounded-b-xl shadow-2xl uppercase text-[9px] z-20 tracking-tight flex items-center gap-1.5
                    ${p.isPopular ? 'bg-yellow-400 text-slate-950 animate-bounce' : 'bg-white text-slate-950'}`}>
                    {p.isPopular && <span>🔥</span>}
                    {p.badge}
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div className="max-w-[70%]">
                    <h3 className="font-black text-xl text-white leading-tight uppercase tracking-tight drop-shadow-lg">{p.title}</h3>
                  </div>
                  <div className="bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-2xl">
                    <span className="text-2xl font-black text-white tracking-tight tabular-nums">৳{p.price}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                    {p.features.map((f, i) => (
                      <div key={i} className="text-[11px] font-black flex items-center gap-2.5 text-white/90">
                        <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 text-white text-[9px]">✓</span>
                        <span className="tracking-tight uppercase leading-tight">{f}</span>
                      </div>
                    ))}
                </div>

                <button className="w-full py-4.5 rounded-xl font-black text-lg transition-all shadow-2xl uppercase tracking-widest border-b-[8px] active:border-b-0 bg-yellow-400 text-slate-950 border-amber-800">বুকিং দিন →</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'songs' && (
          <div className="space-y-6 animate-fade-in pb-12 pt-1">
            <h2 className="text-lg font-black text-center mb-4 italic uppercase tracking-tight">গানের <span className="gradient-text">প্যাকেজ</span></h2>
            <div className="grid grid-cols-1 gap-5">
              {SONG_PLANS.map((item, idx) => (
                <div key={idx} onClick={() => { setSelectedPlan(item); setActiveTab('order'); }} className={`p-5 rounded-xl border border-white/10 border-2 active:translate-y-1 transition-all shadow-xl bg-gradient-to-br ${item.color} relative overflow-hidden cursor-pointer`}>
                  <div className="flex justify-between items-start mb-5 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-white/15 p-2.5 rounded-lg shadow-md border border-white/15 backdrop-blur-md">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <h3 className="font-black text-sm text-white tracking-tight uppercase leading-none">{item.title}</h3>
                    </div>
                    <div className="bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="text-base font-black text-white tracking-tight">৳{item.price}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {item.features.map((f, i) => (
                      <div key={i} className="text-[10px] font-black flex items-center gap-2.5 text-white/90">
                        <span className="w-3.5 h-3.5 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 text-white text-[8px]">✓</span>
                        <span className="tracking-tight uppercase">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-white text-slate-900 py-3.5 rounded-xl font-black text-base border-b-[8px] border-slate-300 relative z-10 shadow-lg uppercase tracking-tight">অর্ডার দিন 🔥</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'order' && (
          <div className="animate-fade-in pb-12 pt-2">
            <div className="glass-panel p-5 rounded-xl shadow-lg border-white/10 border-2">
              <h2 className="text-lg font-black mb-6 text-center italic uppercase text-white tracking-tight">অর্ডার <span className="gradient-text">প্রসেসিং</span></h2>
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="space-y-2.5">
                  <p className="text-[10px] font-black text-slate-400 px-1 uppercase tracking-tight">আপনার নাম</p>
                  <input type="text" required placeholder="নাম টাইপ করুন" value={orderDetails.customerName} onChange={(e) => setOrderDetails({...orderDetails, customerName: e.target.value})} className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 outline-none font-black text-sm text-white focus:border-yellow-500 shadow-inner tracking-tight" />
                </div>
                
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-slate-400 text-center uppercase tracking-tight">পেমেন্ট মেথড</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentMethod: 'BKASH'})} className={`py-3 rounded-xl border-2 font-black transition-all text-base tracking-tight ${orderDetails.paymentMethod === 'BKASH' ? 'bg-[#D12053] border-rose-400 text-white border-b-[8px] border-rose-900 shadow-md' : 'bg-slate-900/40 border-white/5 opacity-50'}`}>বিকাশ</button>
                    <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentMethod: 'NAGAD'})} className={`py-3 rounded-xl border-2 font-black transition-all text-base tracking-tight ${orderDetails.paymentMethod === 'NAGAD' ? 'bg-[#F7941D] border-orange-400 text-white border-b-[8px] border-orange-900 shadow-md' : 'bg-slate-900/40 border-white/5 opacity-50'}`}>নগদ</button>
                  </div>
                </div>

                <div className="space-y-3">
                   <p className="text-[10px] font-black text-slate-400 text-center uppercase tracking-tight">পেমেন্ট টাইপ</p>
                   <div className="grid grid-cols-2 gap-3">
                     {!isSpecialSelected && (
                       <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentType: 'ADVANCE'})} className={`py-3 rounded-xl border-2 font-black transition-all text-[9px] tracking-tight ${orderDetails.paymentType === 'ADVANCE' ? 'bg-yellow-500 border-yellow-300 text-slate-950 shadow-md border-b-[8px] border-amber-800' : 'bg-slate-900/40 border-white/5 opacity-50'}`}>হাফ (৫০%)</button>
                     )}
                     <button type="button" onClick={() => setOrderDetails({...orderDetails, paymentType: 'FULL'})} className={`py-3 rounded-xl border-2 font-black transition-all text-[9px] tracking-tight ${orderDetails.paymentType === 'FULL' || isSpecialSelected ? 'bg-green-600 border-green-300 text-white shadow-md border-b-[8px] border-green-950' : 'bg-slate-900/40 border-white/5 opacity-50'} ${isSpecialSelected ? 'col-span-2' : ''}`}>ফুল (১০০%)</button>
                   </div>
                </div>

                <div className="p-5 bg-slate-950 rounded-xl border border-yellow-500/30 text-center space-y-4 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 animate-glint-bar"></div>
                  <div className="flex flex-col items-center">
                    <p className="text-[10px] font-black uppercase tracking-tight text-yellow-500 animate-pulse mb-1">সেন্ড মানি পার্সোনাল</p>
                    <p className="text-xl font-black text-white tracking-tight select-all">{CONTACT_NUMBER}</p>
                  </div>
                  <div className="flex flex-col items-center gap-4 pt-1">
                    <button type="button" onClick={handleCopy} className="bg-yellow-500 text-slate-950 px-5 py-3 rounded-lg text-[10px] font-black uppercase border-b-[8px] border-yellow-800 active:translate-y-1 active:border-b-0 transition-all shadow-md tracking-tight w-full">{copied ? 'কপি হয়েছে ✅' : 'নাম্বার কপি করুন'}</button>
                    <div className="w-full flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                      <span className="text-[8px] font-black text-slate-500 uppercase tracking-tight">মোট পে:</span>
                      <span className="text-lg font-black text-yellow-500 tracking-tight">৳{payableAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                   <p className="text-[10px] font-black text-slate-400 text-center uppercase tracking-tight">Transaction ID (TrxID)</p>
                   <p className="text-[9px] text-yellow-500/80 text-center font-bold mb-1 tracking-tight italic">ট্রানজেকশন এর স্ক্রিনশট (Screenshot) তুলে রাখলে এই ঘরে শুধু "ss" লিখলেই হবে</p>
                   <input type="text" required placeholder="TrxID দিন অথবা ss লিখুন" value={orderDetails.trxId} onChange={(e) => setOrderDetails({...orderDetails, trxId: e.target.value})} className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-mono text-xl text-center text-yellow-400 focus:border-yellow-500 shadow-xl tracking-tight" />
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-amber-600 py-4.5 rounded-xl text-lg font-black shadow-lg text-slate-950 uppercase border-b-[10px] border-amber-900 active:translate-y-1 active:border-b-0 transition-all tracking-tight">কনফার্ম করুন 🚀</button>
              </form>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-[200] bg-slate-950/98 backdrop-blur-3xl border-t border-white/15 px-6 py-3.5 flex justify-between items-center rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {[
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'pricing', label: 'Packs', icon: '💎' },
          { id: 'songs', label: 'Songs', icon: '🎵' },
          { id: 'order', label: 'Order', icon: '🛒' }
        ].map(btn => (
          <button 
            key={btn.id}
            onClick={() => setActiveTab(btn.id as any)} 
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === btn.id ? 'text-yellow-400 scale-110 drop-shadow-[0_0_12px_rgba(234,179,8,0.6)]' : 'text-slate-500 hover:text-slate-400'}`}
          >
            <span className="text-xl">{btn.icon}</span>
            <span className="text-[8px] font-black uppercase tracking-tight">{btn.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
