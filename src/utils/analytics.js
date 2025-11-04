import ReactGA from 'react-ga4';

const MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const initGA = () => {
    if (MEASUREMENT_ID && typeof window !== 'undefined') {
        ReactGA.initialize(MEASUREMENT_ID);
    }
};

export const trackPageView = (path) => {
    if (MEASUREMENT_ID && typeof window !== 'undefined') {
        ReactGA.send({ hitType: 'pageview', page: path });
    }
};

export const trackEvent = (eventName, eventParams = {}) => {
    if (MEASUREMENT_ID && typeof window !== 'undefined') {
        ReactGA.event(eventName, eventParams);
    }
};

