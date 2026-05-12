import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const lastUpdated = "March 26, 2026";

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              <p className="mt-4 text-[15px] text-text-secondary">
                Last updated: {lastUpdated}
              </p>
            </header>

            <div className="legal-content flex flex-col gap-10 text-[15px] leading-[1.8] text-text-secondary">
              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">1. Introduction</h2>
                <p>
                  DialogueMagic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is
                  committed to protecting the personal information you share with us. This Privacy Policy
                  explains how we collect, use, and safeguard information when you visit our website, use
                  our services, or interact with us in any way.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li><strong className="text-text-primary">Contact information:</strong> name, email address, phone number, and company name when you fill out forms, book a demo, or contact us.</li>
                  <li><strong className="text-text-primary">Usage data:</strong> information about how you interact with our website, including pages visited, time spent, browser type, device information, and IP address.</li>
                  <li><strong className="text-text-primary">Cookies and tracking technologies:</strong> we use cookies and similar technologies to improve your browsing experience and analyze site traffic.</li>
                  <li><strong className="text-text-primary">Communication data:</strong> records of correspondence if you contact us via email or other channels.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">3. How We Use Your Information</h2>
                <p className="mb-3">We use collected information for the following purposes:</p>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li>To provide, operate, and maintain our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To schedule demos and follow up on service interest</li>
                  <li>To send relevant updates, marketing communications, or service notifications (you may opt out at any time)</li>
                  <li>To improve our website, services, and user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">4. Information Sharing</h2>
                <p>
                  We do not sell, rent, or trade your personal information to third parties. We may share
                  information with trusted service providers who assist us in operating our website and
                  delivering our services (e.g., hosting providers, analytics tools, CRM platforms), provided
                  they agree to keep your information confidential. We may also disclose information if
                  required by law or to protect our rights.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">5. Data Security</h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards to protect
                  your personal information from unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or electronic storage is 100% secure,
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">6. Cookies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance functionality
                  and collect analytics data. You can control cookie preferences through your browser
                  settings. Disabling cookies may affect certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites or services. We are not responsible
                  for the privacy practices or content of those external sites. We encourage you to review
                  the privacy policies of any third-party services you interact with.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">8. Your Rights</h2>
                <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="ml-5 flex list-disc flex-col gap-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:hello@dialoguemagic.com" className="text-text-primary underline transition-opacity hover:opacity-60">
                    hello@dialoguemagic.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">9. Data Retention</h2>
                <p>
                  We retain personal information only for as long as necessary to fulfill the purposes
                  outlined in this policy, or as required by applicable law. When information is no longer
                  needed, we securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">10. Children&rsquo;s Privacy</h2>
                <p>
                  Our services are not directed at individuals under the age of 18. We do not knowingly
                  collect personal information from children. If we become aware that we have collected
                  information from a child, we will take steps to delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this
                  page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this
                  policy periodically. Your continued use of our services after changes are posted
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[20px] font-semibold text-text-primary">12. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
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
