# NextUp Hoops

Production web platform for a youth basketball organization, supporting athlete registration, team information, tryouts, and public-facing content.

This project was built and deployed end-to-end as a full-stack system, with the frontend serving as the primary user experience and entry point to the platform.

---

## Live Site & Demo

- 🌐 **Live Site:** https://www.nextuphoops.ca  
- 🎥 **System Demo (Loom):** https://www.loom.com/share/a33a5d323d4c44009416b2ebdadb3789  

> The demo video walks through the full system, including authentication flows, admin functionality, payment processing, and email workflows that are intentionally gated off in the public deployment.

---

## About This Repository

This repository contains the production frontend for the NextUp Hoops platform.

The application is deployed publicly and showcases:
- real UI/UX
- responsive layouts
- live data integration
- production deployment practices

Authentication and admin features are fully implemented in the backend but intentionally disabled on the public site.  
---

## Platform Overview

The NextUp Hoops platform enables:
- public access to program, team, and tryout information
- implemented athlete and parent registration flows
- implemented payment-based registration workflows
- admin-controlled internal workflows (gated)
---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Framer Motion
- CSS / component-based styling
- Cloudinary (media hosting)
- Vercel (deployment)

### Backend (separate repository)
- Node.js + Express
- PostgreSQL
- JWT authentication
- Stripe payments
- Resend email service

---

## Key Features (Frontend)

- Responsive, mobile-first layouts
- Public program, team, and tournament pages
- Animated page transitions
- Secure form handling and validation
- Integration with REST APIs
- Optimized media delivery via Cloudinary
- Production deployment with environment-based configuration

---

## Media & Privacy Notes

- Images containing individuals are hosted externally via Cloudinary and excluded from source control.
- This repository contains no sensitive media or credentials.
- The public site intentionally exposes only user-facing features.

---

## Repositories

- **Frontend (this repository):** Public-facing application  
- **Backend (API showcase):**  
  https://github.com/Bader-alq4/next-up-showcase  

The backend repository demonstrates authentication, payments, admin tooling, and system architecture in detail.

---

## Notes

- This project is a real, deployed system.
- Some internal features are gated or disabled in the public deployment by design.
- The Loom demo provides full visibility into system behavior.

---

## Author

Built and maintained by **Bader Al Qasem**  
Full-stack development, architecture, deployment, and integration.
