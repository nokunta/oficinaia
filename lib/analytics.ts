// Analytics tracking utility
export interface AnalyticsEvent {
  event: string;
  data?: Record<string, any>;
  timestamp: string;
}

class Analytics {
  private events: AnalyticsEvent[] = [];

  track(eventName: string, data?: Record<string, any>) {
    const event: AnalyticsEvent = {
      event: eventName,
      data,
      timestamp: new Date().toISOString(),
    };

    this.events.push(event);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }

    // In production, you would send this to your analytics service
    // Example: send to Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, data);
    }

    // Store in localStorage for demo purposes
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics_events', JSON.stringify(this.events));
    }
  }

  getEvents(): AnalyticsEvent[] {
    return this.events;
  }

  getConversionRate(): { free: number; paid: number; total: number } {
    const offerClicks = this.events.filter(e => e.event === 'offer_selected');
    const freeClicks = offerClicks.filter(e => e.data?.type === 'free').length;
    const paidClicks = offerClicks.filter(e => e.data?.type === 'paid').length;
    const total = offerClicks.length;

    return {
      free: total > 0 ? (freeClicks / total) * 100 : 0,
      paid: total > 0 ? (paidClicks / total) * 100 : 0,
      total,
    };
  }
}

export const analytics = new Analytics();


