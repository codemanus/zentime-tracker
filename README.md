## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styling with [`tailwindcss`](https://tailwindcss.com/docs/installation). Additional plugins were added to the `tailwindcss` configuration such as `@tailwindcss/typography` and `@tailwindcss/forms`. The databse used for the project is `@supabase` .
  
The project was created with the purpose of better hour tracking for the licensure of medical professions such as LMFT and more, instead of using excel spreadsheets.

## Components 

#### Framework : 
- Next.js - [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

#### CSS: 
- Tailwindcss - [`tailwindcss`](https://tailwindcss.com/docs/installation)
	- Plugins used: [`@tailwindcss/typography`](https://tailwindcss.com/docs/typography-plugin) [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms)

#### Database: 
- Supabase - [`@supabase/supabase-js`](https://supabase.com/docs/)

#### Auth: 
- Supabase Auth - [`@supabase/@supabase/auth-ui-react`](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)


## TODO:

- [x] Setup base skeleton

- [x] Implementation of Supabase Authentication - Partial Authentication completed

- [ ] Implementation of Supabase Database connection

- [ ] Fix sessions to allow persisted connections using state context

- [ ] Conifgure Hours form to input the hours and submit to supabase db

- [ ] Complete/Finish Auth implementation and Form

- [ ] Setup/Configure Profile page

- [ ] Setup/Configure Sites and Supervisors

- [ ] Figure out PDF Generation and output