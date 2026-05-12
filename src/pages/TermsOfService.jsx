import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const lastUpdated = "March 26, 2026";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-bg">
        {/* Minimal top bar */}
        <header className="px-5 pt-8 pb-4 md:px-12">
          <div className="mx-auto max-w-[860px]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-text-primary no-underline transition-opacity duration-200 hover:opacity-60"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to DialogueMagic
            </Link>
          </div>
        </header>

        <main className="px-5 pt-8 pb-24 md:px-12">
          <article className="mx-auto max-w-[860px]">
            <header className="mb-14">
              <h1 className="font-display text-[clamp(36px,5vw,56px)] uppercase leading-[0.92] tracking-tight text-text-primary">
                Terms of Service
              </h1>
              <p className="mt-4 text-[15px] text-text-secondary">
                Last updated: {lastUpdated}
              </p>
            </header>

            <div className="legal-content flex flex-col gap-10 text-[15px] leading-[1.8] text-text-secondary">
              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the DialogueMagic website and services (&ldquo;Services&rdquo;), you agree
                  to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these
                  Terms, please do not use our Services. These Terms constitute a legally binding agreement
                  between you and DialogueMagic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">2. Description of Services</h2>
                <p>
                  DialogueMagic provides AI-powered voice agent solutions, CRM integration services, and related
                  technology tools designed to help businesses manage customer communications. The specific
                  features and scope of Services may change over time as we improve and expand our offerings.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">3. Eligibility</h2>
                <p>
                  You must be at least 18 years of age and have the legal capacity to enter into a binding
                  agreement to use our Services. By using our Services, you represent and warrant that you
                  meet these requirements. If you are using the Services on behalf of a business or entity,
                  you represent that you have the authority to bind that entity to these Terms.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">4. User Accounts</h2>
                <p>
                  Certain features of our Services may require you to create an account. You are responsible
                  for maintaining the confidentiality of your account credentials and for all activities that
                  occur under your account. You agree to notify us immediately of any unauthorized use of
                  your account.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">5. Acceptable Use</h2>
                <p className="mb-3">When using our Services, you agree not to:</p>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Use the Services for any unlawful, fraudulent, or harmful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems or other users&rsquo; accounts</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services</li>
                  <li>Reverse-engineer, decompile, or attempt to extract the source code of our technology</li>
                  <li>Use the Services to transmit spam, malware, or other harmful content</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">6. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our Services &mdash; including but not limited to
                  text, graphics, logos, software, and technology &mdash; are the exclusive property of DialogueMagic
                  or our licensors and are protected by intellectual property laws. You may not reproduce,
                  distribute, modify, or create derivative works from any part of our Services without our
                  prior written consent.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">7. Payment and Billing</h2>
                <p>
                  If you subscribe to paid Services, you agree to pay all applicable fees as described at the
                  time of purchase. Fees are non-refundable except as expressly stated otherwise or as required
                  by applicable law. We reserve the right to modify pricing with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">8. Disclaimer of Warranties</h2>
                <p>
                  Our Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
                  warranties of any kind, either express or implied, including but not limited to implied
                  warranties of merchantability, fitness for a particular purpose, and non-infringement. We do
                  not warrant that the Services will be uninterrupted, error-free, or completely secure.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, DialogueMagic and its officers, directors,
                  employees, and agents shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
                  resulting from your use of our Services. Our total aggregate liability shall not exceed the
                  amount you paid to us in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless DialogueMagic and its affiliates from and
                  against any claims, liabilities, damages, losses, and expenses (including reasonable legal
                  fees) arising out of or related to your use of the Services, your violation of these Terms,
                  or your violation of any rights of a third party.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">11. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to our Services at our sole
                  discretion, with or without notice, for any reason, including if we believe you have violated
                  these Terms. Upon termination, your right to use the Services will immediately cease. Sections
                  of these Terms that by their nature should survive termination will remain in effect.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">12. Modifications to Terms</h2>
                <p>
                  We may revise these Terms from time to time at our discretion. Changes will be posted on this
                  page with an updated date. Your continued use of the Services after any modifications
                  constitutes acceptance of the revised Terms. We encourage you to review these Terms
                  periodically.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">13. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with applicable laws, without
                  regard to conflict of law principles. Any disputes arising from these Terms or your use of
                  our Services shall be resolved through good-faith negotiation, and if unresolved, through
                  binding arbitration or the courts of competent jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">14. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will
                  be limited or eliminated to the minimum extent necessary so that the remaining Terms will
                  remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">15. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-3 rounded-2xl border border-text-primary/[0.07] bg-white/50 px-6 py-5">
                  <p className="font-medium text-text-primary">DialogueMagic</p>
                  <p className="mt-1">
                    Email:{" "}
                    <a href="mailto:hello@dialoguemagic.com" className="text-text-primary underline transition-opacity hover:opacity-60">
                      hello@dialoguemagic.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
