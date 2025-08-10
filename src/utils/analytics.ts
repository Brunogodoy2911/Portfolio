import ReactGA from "react-ga4";
import { GA_ID } from "@/utils/keys";

export const initGA = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
    console.log("---- Google Analytics initialized ----");
  }
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
  if (GA_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};
