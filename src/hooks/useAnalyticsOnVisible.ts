import { useEffect, useRef, type RefObject } from "react";
import { trackEvent } from "@/utils/analytics";

interface EventData {
  category: string;
  action: string;
  label: string;
}

export function useAnalyticsOnVisible<T extends HTMLElement>(
  elementRef: RefObject<T | null>,
  eventData: EventData,
  options: IntersectionObserverInit = { threshold: 0.3 }
) {
  const hasBeenTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenTracked.current) {
        trackEvent(eventData.category, eventData.action, eventData.label);
        hasBeenTracked.current = true;
        observer.disconnect();
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef, eventData, options]);
}
