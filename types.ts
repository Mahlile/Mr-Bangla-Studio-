export type ServiceType = 'TRIAL' | 'STANDARD' | 'VIRAL' | 'CINEMATIC' | 'EVENT' | 'ELITE';

export interface PricingPlan {
  id: ServiceType;
  title: string;
  price: number;
  description: string;
  deliveryTime: string;
  features: string[];
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  type: 'youtube' | 'facebook';
}

export interface OrderDetails {
  customerName: string;
  serviceType: ServiceType;
  duration: number;
  instructions: string;
  trxId: string;
  paymentMethod: 'BKASH' | 'NAGAD';
  paymentType: 'FULL' | 'ADVANCE'; 
}

/**
 * Added to fix the missing export error in geminiService.ts.
 * Follows the standard role naming convention for the Google GenAI SDK.
 */
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}