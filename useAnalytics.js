import ReactGA from "react-ga";
import { useEffect } from "react";

export const initGA = () => {
  ReactGA.initialize("UA-157732787-3");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export const useAnalytics = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);
};
