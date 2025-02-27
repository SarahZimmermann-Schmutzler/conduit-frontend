// Declare the process object to avoid TypeScript errors.
// This is a workaround since process.env is not natively available in the browser.

declare const process: {
    env: {
        API_URL: string;
    };
};

// Define the environment configuration for the production build.
// API_URL is set in .env
export const environment = {
    production: true,
    // for manual deployment without deployment.yml 
    apiUrl: process.env.API_URL
    //for deployment with deployment.yml
    // apiUrl: "API_URL_PLACEHOLDER"
};