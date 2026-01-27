
import { PricingPlan, PortfolioItem } from './types';

export const CONTACT_NUMBER = "01964-630680";
export const YT_SUBSCRIBERS = "১২৪,০০০+";
export const YT_CHANNEL_NAME = "মিস্টার বাংলা Official";
export const YT_PROFILE_PIC = "https://raw.githubusercontent.com/MisterBangla/Assets/main/profile.jpg";
export const YT_CHANNEL_URL = "https://youtube.com/@misterbanglaofficial";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'TRIAL',
    title: 'সহজ এন্ট্রি প্যাক',
    price: 100,
    deliveryTime: '১ থেকে ২ দিন',
    description: 'ভিডিওর স্বাদ নিতে অল্প বাজেটে এই প্যাকেজটি শুরু করতে পারেন।',
    features: [
      '✓ ১৫ থেকে ৩০ সেকেন্ডের ভিডিও',
      '✓ Simple Edit (সিম্পল এডিট)',
      '✓ Normal Cut (নরমাল কাট)',
      '✓ Basic Transitions (ট্রানজেকশন)',
      '✓ Simple Effects (ইফেক্ট)',
      '✘ No Advanced Grading',
      '✘ No Viral Subtitles',
      '✘ No Revision'
    ]
  },
  {
    id: 'STANDARD',
    title: 'সুপার ভাইরাল মাস্টারক্লাস (অফার)',
    price: 300,
    deliveryTime: '১ থেকে ৩ দিন',
    badge: 'সবচেয়ে বেশি জনপ্রিয় 🔥',
    description: 'অফারে থাকা এই প্যাকেজটিই সবচেয়ে বেশি মানুষ বেছে নিচ্ছে। সব ভাইরাল ফিচার এতেই আছে।',
    features: [
      '✓ ১৫টি বিশেষ ট্রেন্ডিং ইফেক্টস',
      '✓ Advanced Color Grading',
      '✓ Dynamic Transitions',
      '✓ Viral Subtitles (Bengali/English)',
      '✓ Audio EQ & Noise Removal',
      '✓ Full HD 1080p Export',
      '✓ ২ টি রিভিশন',
      '✓ Premium Sound Effects (SFX)',
      '✓ Viral Hook Optimization'
    ]
  },
  {
    id: 'VIRAL',
    title: 'স্মার্ট ক্রিয়েটর চয়েস',
    price: 500,
    deliveryTime: '২ দিন',
    badge: 'প্রিমিয়াম ভাইরাল',
    description: 'আপনার কন্টেন্টকে এক ধাপ এগিয়ে রাখতে এই প্যাকেজটি অতুলনীয়।',
    features: [
      '✓ Pro Color Grading (Cinematic)',
      '✓ Custom Seamless Transitions',
      '✓ Animated Viral Subtitles',
      '✓ Premium SFX & Background Music',
      '✓ Full HD High Bitrate',
      '✓ ৩ টি রিভিশন',
      '✓ Motion Graphics Elements',
      '✓ Object Tracking & Zoom',
      '✓ Eye-Catchy Hook Edit'
    ]
  },
  {
    id: 'CINEMATIC',
    title: 'প্রো সিনেমাটিক বস',
    price: 800,
    deliveryTime: '২-৩ দিন',
    description: 'অ্যালেক্স হরমোজি বা বড় ক্রিয়েটরদের মতো প্রফেশনাল এডিট।',
    features: [
      '✓ Hormozi Style Subtitles',
      '✓ Cinematic LUTS Grading',
      '✓ 3D Kinetic Text Animation',
      '✓ Advanced Audio Mastering',
      '✓ 4K Support (If needed)',
      '✓ ৪ টি রিভিশন',
      '✓ Visual Storytelling Mastery',
      '✓ Premium Overlay Assets',
      '✓ Fast-Paced Engagement Edit'
    ]
  },
  {
    id: 'EVENT',
    title: 'রাজকীয় ইভেন্ট স্পেশাল',
    price: 1000,
    deliveryTime: '৩-৫ দিন',
    badge: 'সেরা উপহার',
    description: 'বিয়ে বা বড় ইভেন্টের জন্য স্টোরিটেলিং ভিডিও।',
    features: [
      '✓ Multi-Cam Sync Editing',
      '✓ Film-Look Color Grading',
      '✓ Emotional Audio Mixing',
      '✓ Royal Title Animations',
      '✓ Full 4K Quality',
      '✓ ৫ টি রিভিশন',
      '✓ Skin Tone Correction',
      '✓ Highlight Reel Design',
      '✓ Full Length Story Edit'
    ]
  },
  {
    id: 'ELITE',
    title: 'এলিট মেগা অথোরিটি',
    price: 1500,
    deliveryTime: '৫-৭ দিন',
    description: 'আপনার ব্র্যান্ডকে বড় করার জন্য প্রফেশনাল সলিউশন।',
    features: [
      '✓ Full Brand Identity Color',
      '✓ Exclusive Custom Motion FX',
      '✓ Copyright-Free Music Hunt',
      '✓ Unlimited Revisions',
      '✓ 4K Master Export',
      '✓ VIP Direct Line Support',
      '✓ Thumbnail Strategy Help',
      '✓ Source File (Project File)',
      '✓ Priority Delivery Forever'
    ]
  }
];

export const PORTFOLIO_VIDEOS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Viral Shorts Magic',
    url: 'https://youtu.be/sQLTKpjASTU',
    thumbnail: 'https://img.youtube.com/vi/sQLTKpjASTU/maxresdefault.jpg',
    type: 'youtube'
  },
  {
    id: '2',
    title: 'Cinematic Masterpiece',
    url: 'https://youtu.be/8khNNIsOkLo',
    thumbnail: 'https://img.youtube.com/vi/8khNNIsOkLo/maxresdefault.jpg',
    type: 'youtube'
  },
  {
    id: '3',
    title: 'Premium Motion Graphics',
    url: 'https://youtu.be/4aEWW7OoGl8',
    thumbnail: 'https://img.youtube.com/vi/4aEWW7OoGl8/maxresdefault.jpg',
    type: 'youtube'
  }
];

export const LIVE_ACTIVITIES = [
  "ঢাকা থেকে শরিফ ৩০০ টাকার সুপার ভাইরাল প্যাক নিয়ে ফুল পেমেন্ট করেছেন",
  "কুমিল্লা থেকে রায়হান ৩০০ টাকার অফার প্যাক নিয়ে হাফ পেমেন্ট করেছেন",
  "চট্টগ্রাম থেকে মিম ৫০০ টাকার স্মার্ট চয়েস প্যাক নিয়ে ফুল পেমেন্ট করেছেন",
  "সিলেট থেকে জিসান ৩০০ টাকার সার্ভিস নিয়ে ফুল পেমেন্ট করেছেন",
  "বগুড়া থেকে আকাশ ৫০০ টাকার ভাইরাল প্যাক নিয়ে ফুল পেমেন্ট করেছেন",
  "বরিশাল থেকে ফাহিম ৩০০ টাকার প্যাক নিয়ে হাফ পেমেন্ট করেছেন"
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61585781957435',
  youtube: 'https://youtube.com/@misterbanglaofficial',
  tiktok: 'https://www.tiktok.com/@mr..bangla.studio',
  telegram: 'https://t.me/MisterBanglaOfficeal'
};
