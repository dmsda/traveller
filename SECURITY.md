# Security Policy

The Travellers project is dedicated to maintaining a safe, transparent, and secure experience for all developers and users.

---

## 🛡️ Supported Versions

| Version | Supported          | Status |
| :---    | :---:              | :---   |
| `0.1.x` (current) | :white_check_mark: | Active Open-Source Prototype |

---

## 🔒 Architectural Security Posture

- **Client-Side Prototype:** The Travellers application currently runs as a static Next.js frontend with simulated client-side interactions.
- **Zero Stored Secrets:** No API keys, database credentials, server private keys, or external secrets are stored or embedded in this repository.
- **Zero Tracking Cookies:** The site does not set third-party tracking or behavioral cookies.
- **Safe External Links:** All external links that open in new browser tabs use `rel="noopener noreferrer"`.
- **Sanitized Markup:** No raw HTML injection (`dangerouslySetInnerHTML`) or runtime string execution (`eval`) is utilized.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability or sensitive information exposure in this repository, **please do not create a public GitHub issue**.

Instead, please report it privately:

1. **GitHub Security Advisory:** Submit a private report via the [Security Advisory](https://github.com/dmsda/traveller/security/advisories) tab on GitHub.
2. **Alternative Contact:** If private advisories are unavailable, reach out directly to the repository maintainer through their official GitHub profile [@dmsda](https://github.com/dmsda).

### What to Include in Your Report
- A clear description of the issue and its potential impact.
- Step-by-step reproduction instructions or a minimal proof of concept.
- Affected files or components.

We will acknowledge receipt within 48 hours and work with you on a coordinated fix and credit disclosure.
