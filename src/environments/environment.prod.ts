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
    apiUrl: process.env.API_URL
};