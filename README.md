# SkollARS

Notes:

-   Using https://dashboard.emailjs.com/admin as Email as a Service.
-   Using gh-pages npm package to deploy on Github pages.

## Email Configuration Setup

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`
4. Copy your Service ID, Template ID, and Public Key
5. Copy `.env.example` to `.env` and add your credentials

## Installation and running

-   npm install
-   npm start

## Deploy to Production

-   npm run deploy
