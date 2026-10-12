# Travellers — Legal & Policy Review Checklist

This checklist documents items requiring confirmation by the product owner, management, and legal counsel prior to commercial launch and publication of final legal documents.

---

## 1. Document Review Status
- **Current Legal Status:** `DRAFT FOR REVIEW`
- **Applicable Documents:**
  - `/privacy` (Privacy Policy)
  - `/terms` (Terms of Service)
- **Banner Display:** Both legal pages feature prominent amber alert banners stating that the text reflects prototype capabilities and awaits formal legal ratification.

---

## 2. Privacy Policy Review Checklist

| Checkpoint | Current Draft Assumption | Required Confirmation / Action | Status |
| :--- | :--- | :--- | :--- |
| **Legal Entity Identity** | Travellers Community Platform | Provide full legal corporate entity name, jurisdiction of incorporation, and registered business address. | PENDING OWNER |
| **Data Controller / DPO** | `privacy@travellers.community` | Appoint official Data Protection Officer (DPO) or privacy lead; configure live MX records for privacy email. | PENDING OWNER |
| **Newsletter Service Provider** | Client-side demo simulation | Select and integrate email service provider (e.g. Resend, Sendgrid, Postmark); sign Data Processing Addendum (DPA). | PENDING IMPLEMENTATION |
| **Analytics & Telemetry** | 0 tracking cookies active | If adding Google Analytics, PostHog, or Mixpanel, implement compliant cookie consent banner with prior consent opt-in. | VERIFIED CLEAN |
| **Data Retention Periods** | Unspecified duration for inactive accounts | Establish formal retention schedule (e.g., 24 months of account inactivity prior to soft deletion). | PENDING LEGAL |
| **Age Requirement** | 18+ (or legal majority) | Confirm whether 13+ or 16+ with parental consent will be permitted under COPPA/GDPR-K. | PENDING OWNER |
| **Cross-Border Transfers** | Standard hosting region | Detail international data transfer mechanisms (e.g., EU Standard Contractual Clauses) once global database is deployed. | PENDING ARCHITECTURE |

---

## 3. Terms of Service Review Checklist

| Checkpoint | Current Draft Assumption | Required Confirmation / Action | Status |
| :--- | :--- | :--- | :--- |
| **Governing Law & Jurisdiction** | Tagged as Pending Confirmation | Select governing law (e.g., State of Delaware, England & Wales, Singapore, or Indonesia) and forum of dispute resolution. | PENDING LEGAL |
| **Outdoor Activity Disclaimer** | Full liability disclaimer for hiking/trekking | Review wording with insurance counsel to ensure compliance with local negligence and recreation statutes. | PENDING LEGAL |
| **User Content License** | Non-exclusive, royalty-free, worldwide | Confirm license scope covers marketing, community showcases, and social previews without overreaching creator rights. | APPROVED DRAFT |
| **Electronic Consent Mechanism** | Informal review draft | Integrate affirmative "I agree to Terms & Privacy" checkbox at user registration point. | PENDING ACCOUNT FEATURE |
| **Community Guidelines & Moderation** | Mutual respect, no automated moderation claimed | Formulate community guidelines and report/flagging procedures for inappropriate behavior. | PENDING FEATURE |
| **Payment Terms & Subscriptions** | Conceptual pricing tiers ($29, $99, $129) | Once billing provider (Stripe, LemonSqueezy) is integrated, insert explicit renewal, cancellation, and refund policies. | PENDING BILLING |
