
import { PricingPlan, PortfolioItem } from './types';

export const CONTACT_NUMBER = "01964-630680";
export const YT_BASE_SUBS = 124676;
export const YT_CHANNEL_NAME = "মিস্টার বাংলা Official";
export const YT_PROFILE_PIC = "https://cdn-icons-png.flaticon.com/512/3658/3658959.png";
export const YT_CHANNEL_URL = "https://youtube.com/@misterbanglaofficial";

export const CAPCUT_PRO_PLAN = {
  id: 'CAPCUT',
  title: 'Capcut Pro APK',
  price: 50,
  deliveryTime: '৫ মিনিট',
  badge: 'লাইফটাইম এক্সেস ♾️',
  color: 'from-emerald-600 to-teal-900',
  description: 'সব প্রো ফিচার আনলক করা লেটেস্ট ক্যাপকাট প্রো এপিকে। ১০০% সেফ।',
  features: [
    '✨ No Watermark (ওয়াটারমার্ক নেই)',
    '🔥 All Pro Effects Unlocked (সব প্রো এফেক্ট)',
    '🎥 4K Ultra HD Export (৪কে এক্সপোর্ট)',
    '🎭 Premium Transitions (প্রিমিয়াম ট্রানজিশন)',
    '🌈 Pro Color Grading Filters (কালার ফিল্টার)',
    '✂️ Multi-track Advanced Editing (মাল্টি-ট্র্যাক)',
    '🎙️ AI Text-to-Speech Pro (এআই ভয়েস প্রো)',
    '🖼️ Auto Background Remover (ব্যাকগ্রাউন্ড রিমুভ)',
    '⚡ Pro Speed Ramping (স্পিড র‍্যাম্পিং)',
    '🎶 Premium Music & SFX (প্রিমিয়াম মিউজিক)',
    '🧊 Exclusive 3D Zoom (৩ডি জুম এফেক্ট)',
    '🎞️ Pro Chroma Key (গ্রিন স্ক্রিন প্রো)',
    '✍️ Aesthetic Custom Fonts (কাস্টম ফন্ট)',
    '📱 No Lag, Smooth Performance (ল্যাগ ফ্রি)',
    '🛡️ 100% Safe & Secure File (নিরাপদ ফাইল)',
    '♾️ Lifetime Subscription (লাইফটাইম সুবিধা)'
  ]
};

export const PRICING_PLANS = [
  {
    id: 'TRIAL',
    title: 'বেসিক ট্রায়াল এডিট',
    price: 100,
    deliveryTime: '১ দিন',
    color: 'from-slate-700 to-slate-900',
    description: 'ভিডিওর কোয়ালিটি পরখ করতে এই প্যাকটি সেরা।',
    features: [
      '১৫-৩০ সেকেন্ড শর্টস এডিট',
      'বেসিক ট্রানজিশন ও কাট',
      'সিম্পল টেক্সট এনিমেশন',
      'ব্যাকগ্রাউন্ড মিউজিক সিঙ্ক',
      '১০৮০পি ফুল এইচডি এক্সপোর্ট',
      '১ টি ফ্রি রিভিশন সুবিধা'
    ]
  },
  {
    id: 'STANDARD',
    title: 'সুপার ভাইরাল প্যাক',
    price: 300,
    deliveryTime: '১-২ দিন',
    badge: 'অধিকাংশ মানুষ এটা কেনে 🔥',
    color: 'from-blue-600 to-indigo-900',
    isPopular: true,
    description: 'সোশ্যাল মিডিয়ায় ভাইরাল হওয়ার জন্য এতে ট্রেন্ডিং ইফেক্টস আছে। ১০৮০পি হাই-কোয়ালিটি।',
    features: [
      'সবচেয়ে আকর্ষণীয় ভাইরাল হুক এডিট',
      'ডাইনামিক কালারফুল সাবটাইটেল',
      '২০+ প্রিমিয়াম ট্রেন্ডিং ট্রানজিশন',
      'সিনেমাটিক সাউন্ড ডিজাইন (SFX)',
      'স্পিড র‍্যাম্পিং ও মোশন ব্লার',
      'ব্যাকগ্রাউন্ড মিউজিক লাইব্রেরি সাপোর্ট',
      'সব সোশ্যাল মিডিয়া রি-সাইজ সাপোর্ট',
      'নো ওয়াটারমার্ক গ্যারান্টি',
      'অ্যাডভান্সড স্পিড কন্ট্রোলিং',
      '২ টি রিভিশন সুবিধা'
    ]
  },
  {
    id: 'VIRAL',
    title: 'প্রিমিয়াম ভাইরাল প্রো',
    price: 500,
    deliveryTime: '২ দিন',
    badge: 'সেরা কোয়ালিটি চয়েস',
    color: 'from-amber-500 to-orange-800',
    description: '২কে (2K) রেজোলিউশনে প্রফেশনাল এডিট। এলিট ক্রিয়েটরদের জন্য সেরা।',
    features: [
      '২কে (2K) আল্ট্রা ক্লিয়ার এক্সপোর্ট',
      'হলিউড লেভেল কালার গ্রেডিং',
      'হাই-এন্ড অডিও নয়েজ রিমুভাল',
      'ডাইনামিক মোশন গ্রাফিক্স এলিমেন্টস',
      'কাস্টম ফন্ট ও টাইপোগ্রাফি স্টাইল',
      'ওভারলে এবং গ্রিন স্ক্রিন এডিট',
      'সিনেমাটিক ড্রামাটিক মিউজিক সিঙ্ক',
      'ভিজুয়াল ইফেক্টস (VFX) টাচআপ',
      'আনলিমিটেড টেক্সট পপ-আপস',
      'হাই-বিটরেট রেন্ডারিং',
      '৩ টি রিভিশন সুবিধা'
    ]
  },
  {
    id: 'CINEMATIC',
    title: 'সেলিব্রেটি এডিট',
    price: 800,
    deliveryTime: '৩ দিন',
    badge: 'মাস্টারপিস 💎',
    color: 'from-purple-600 to-pink-900',
    description: '৪কে (4K) সুপার সিনেমাটিক এডিট। যারা সেরাটি খুঁজছেন তাদের জন্য।',
    features: [
      '৪কে (4K Ultra HD) রেজোলিউশন',
      'মাস্টার লেভেল কালার গ্রেডিং',
      'ফুল সিনেমাটিক স্টোরিটেলিং এডিট',
      'অ্যাডভান্সড সাউন্ড ডিজাইন প্রো',
      'প্রিমিয়াম থাম্বনেইল ডিজাইন ফ্রি',
      'ব্র্যান্ড লোগো এনিমেশন ইন্ট্রো',
      'ম্যাচ কাট ও অ্যাডভান্সড মাস্কিং',
      'বিহাইন্ড দ্য সিন গ্রেডিং লুক',
      'ভিআইপি কাস্টমার সাপোর্ট',
      'আনলিমিটেড মাইনর রিভিশন'
    ]
  },
  {
    id: 'ELITE',
    title: 'রাজকীয় মেগা প্যাক',
    price: 1000,
    deliveryTime: '৩-৫ দিন',
    badge: 'সবচেয়ে প্রিমিয়াম 👑',
    color: 'from-rose-600 to-red-900',
    description: 'আপনার ভিডিওকে একটি মুভির রূপ দেবে এই ৪কে স্পেশাল প্যাক।',
    features: [
      '৪কে (4K) রাজকীয় সিনেমাটিক ফিনিশ',
      'পূর্ণাঙ্গ মুভি স্টাইল এডিটিং',
      'ড্রোন ফুটেজ কালার অপ্টিমাইজেশন',
      'イমোশনাল ব্যাকগ্রাউন্ড স্কোর সিঙ্ক',
      'মুভি পোস্টার ডিজাইন ফ্রি',
      'রাজকীয় ইন্ট্রো ও আউটরো',
      'সিনেমাটিক টেক্সট আর্ট এনিমেশন',
      'স্পেশাল ইভেন্ট ইফেক্টস মিক্সিং',
      'আনলিমিটেড রিভিশন সুবিধা',
      'লাইফটাইম ফাইল ব্যাকআপ সাপোর্ট'
    ]
  }
];

export const SONG_PLANS = [
  {
    id: 'SONG_BDAY',
    title: 'জন্মদিন স্পেশাল গান',
    price: 100,
    icon: '🎂',
    color: 'from-pink-500 to-purple-600',
    desc: 'যেকোনো নাম ও স্বভাব অনুযায়ী জন্মদিনের চমৎকার এআই গান।',
    features: ['✓ নির্দিষ্ট নাম উল্লেখ করে গান', '✓ পছন্দের মিউজিক স্টাইল', '✓ ১ দিনের দ্রুত ডেলিভারি']
  },
  {
    id: 'SONG_FRIEND',
    title: 'বন্ধুত্বের ফান সং',
    price: 100,
    icon: '🤝',
    color: 'from-cyan-500 to-blue-600',
    desc: 'বন্ধুদের নিয়ে মজার এবং স্মৃতিময় গান, যেমন চাইবেন তেমন।',
    features: ['✓ বন্ধুদের নাম উল্লেখ', '✓ হাই-এনার্জি বিটস', '✓ ফানি লিরিক্স সুবিধা']
  },
  {
    id: 'SONG_GF',
    title: 'প্রিয়তমার জন্য গান',
    price: 200,
    icon: '❤️',
    color: 'from-rose-500 to-red-600',
    desc: 'আপনার প্রিয়তমার নাম দিয়ে রোমান্টিক মেলোডি যা তাকে মুগ্ধ করবে।',
    features: ['✓ হার্ট টাচিং লিরিক্স', '✓ মিষ্টি ও নরম কন্ঠস্বর', '✓ নাম ও ভালোবাসা ফুটিয়ে তোলা']
  },
  {
    id: 'SONG_POLITICAL',
    title: 'রাজনীতি বা মিছিল',
    price: 300,
    icon: '📢',
    color: 'from-emerald-500 to-green-700',
    desc: 'নির্বাচন বা মিছিলের জন্য হাই-ভোল্টেজ ধামাকা গান।',
    features: ['✓ প্রার্থীর নাম ও মার্কা', '✓ কাস্টম স্লোগান ও লিরিক্স', '✓ হাই-ভোল্টেজ বিটস']
  },
  {
    id: 'SONG_WEDDING',
    title: 'বিয়ে/হলুদ ধামাকা',
    price: 500,
    icon: '💍',
    color: 'from-yellow-500 to-orange-600',
    desc: 'বিয়ে বা গায়ে হলুদের অনুষ্ঠানের জন্য রাজকীয় ধামাকা গান।',
    features: ['✓ বর-কনের নাম ও গুণাবলী', '✓ ডান্স মিউজিক স্টাইল', '✓ ৩টি রিভিশন সুবিধা']
  }
];

export const PORTFOLIO_VIDEOS: PortfolioItem[] = [
  {
    id: '1',
    title: 'মাস্টার প্যাকেজ',
    url: 'https://youtu.be/sQLTKpjASTU',
    thumbnail: 'https://img.youtube.com/vi/sQLTKpjASTU/maxresdefault.jpg',
    type: 'youtube'
  },
  {
    id: '2',
    title: '৫০০ টাকার প্যাকেজ',
    url: 'https://youtu.be/8khNNIsOkLo',
    thumbnail: 'https://img.youtube.com/vi/8khNNIsOkLo/maxresdefault.jpg',
    type: 'youtube'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61585781957435',
  youtube: 'https://youtube.com/@misterbanglaofficial',
  tiktok: 'https://www.tiktok.com/@mr..bangla.studio',
  telegram: 'https://t.me/MisterBanglaOfficeal'
};

export const LIVE_ACTIVITIES = [
  "🔥 শাকিল (ঢাকা) এইমাত্র ৩টি অর্ডারের কাজ দিয়েছেন",
  "✅ রানা (চট্টগ্রাম) তার ৫০০ টাকার ভিডিও বুঝে পেয়েছেন",
  "🚀 আরিফ (সিলেট) ১০০ টাকার গানের প্যাক নিয়েছেন",
  "🌹 রাজু (বরিশাল) ১০০০ টাকার বিয়ের প্যাক বুক করেছেন",
  "✨ ফাহিম (রাজশাহী) ৩০০ টাকার প্যাক অর্ডার করেছেন",
  "🎬 শুভ (কুমিল্লা) ৮০০ টাকার মাস্টারপিস অর্ডার করেছেন",
  "🔥 তপু (খুলনা) এইমাত্র ১টি ট্রায়াল এডিট বুক করেছেন",
  "✅ হাসান (নোয়াখালী) তার ১০০০ টাকার ডেলিভারি বুঝে পেয়েছেন",
  "🚀 সোহেল (বগুড়া) ৫০০ টাকার গানের অর্ডার দিয়েছেন",
  "🌹 মিম (ঢাকা) ২০০ টাকার প্রিয়তমা প্যাক নিয়েছেন"
];
