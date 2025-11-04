# SkollARS

## Tech stack:
- React (frontend framework)
- EmailJS (client-side email sending)
- Vercel (hosting & deployment)

## Installation and Running

- npm install
- npm start

### Email Configuration Setup
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`
4. Copy your Service ID, Template ID, and Public Key to your environment variables

## Automatic Deployments
- Every push to `main`/`master` branch automatically deploys to production in Vercel.
- Production domain: https://skollars.dev
