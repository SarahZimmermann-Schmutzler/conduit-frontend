declare const process: {
    env: {
        API_URL: string;
    };
};

export const environment = {
    production: true,
    apiUrl: process.env.API_URL
};