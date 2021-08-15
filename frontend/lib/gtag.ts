// next.js google analytics example
// https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://frontend-digest.com/using-nextjs-with-google-analytics-and-typescript-620ba2359dea
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};


// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
