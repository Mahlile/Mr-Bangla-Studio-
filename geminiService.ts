
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "./types";
import { CONTACT_NUMBER } from "./constants";

export const getGeminiResponse = async (history: ChatMessage[], message: string) => {
  // Correctly initialize with named apiKey parameter using process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `তুমি "Mr Bangla Studio"-এর একজন এলিট সেলস ম্যানেজার।
        
        আমাদের পরিচয়: 
        - আমাদের ১ লক্ষ ২৪ হাজার সাবস্ক্রাইবার বিশিষ্ট ভেরিফাইড ইউটিউব চ্যানেল আছে। 
        - আমরা দীর্ঘ সময় ধরে কন্টেন্ট ক্রিয়েটরদের সাথে কাজ করছি। আমাদের কাজ বিশ্বস্ত এবং প্রফেশনাল।
        
        সার্ভিস ও প্রাইসিং:
        1. বেসিক ট্রায়াল (৳১০০): ১-২ দিনের ডেলিভারি, ১৫-৩০ সেকেন্ডের ভিডিও, Simple Edit (সিম্পল এডিট)।
        2. স্ট্যান্ডার্ড এডিট (৳৩০০): সোশ্যাল মিডিয়া শর্টস এর জন্য সেরা। এতে ১৫টি বিশেষ ট্রেন্ডিং ইফেক্টস দেওয়া হয়।
        3. ভাইরাল প্যাক (৳৫০০): প্রমিয়াম ভাইরাল ইফেক্টস এবং কালার গ্রেডিং।
        4. প্রিমিয়াম ক্রিয়েটর (৳৮০০): সিনেমাটিক গ্রেডিং ও হাই-কোয়ালিটি এডিট।
        5. সিনেমাটিক ইভেন্ট (৳১০০০): বিয়ে বা জন্মদিনের সিনেমাটিক ভিডিও।
        6. এলিট মেগা (৳১৫০০+): বড় ইউটিউব ভিডিও বা কমার্শিয়াল কাজ।
        
        কথোপকথনের নিয়ম:
        - কাস্টমারকে পেমেন্টের (Send Money) পর TrxID নিয়ে হোয়াটসঅ্যাপে রিডাইরেক্ট হতে বলবে।
        - ১০০ এবং ৩০০ টাকার প্যাকেজগুলো বাজেট ফ্রেন্ডলি হিসেবে প্রমোট করবে।
        - ভেরিফাইড ইউটিউব চ্যানেলের কথা উল্লেখ করে বিশ্বস্ততা তৈরি করবে।
        - অর্ডারের জন্য ৫০% অগ্রিম বা ফুল পেমেন্ট নেওয়া হয়। অবশ্যই সেন্ড মানি করতে হবে।`,
      },
    });
    // Access response.text as a property, not a method
    return response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "একটি ত্রুটি ঘটেছে। আমাদের ভেরিফাইড টিমের সাথে হোয়াটসঅ্যাপে যোগাযোগ করুন: " + CONTACT_NUMBER;
  }
};
