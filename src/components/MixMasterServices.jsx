import React, { useCallback, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm, Controller } from "react-hook-form";
import { sendForm } from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import Title from "./Title";
import BeforeAfterPlayer from "./BeforeAfterPlayer";
import { BEFORE_AFTER_TRACKS } from "../data/beforeAfterTracks";
import "../styles/contact.css";

const EMAIL_SERVICE = "service_y1gtueh";
const EMAIL_TEMPLATE = "template_yyxyh5a";
const RECAPTCHA_SITEKEY = "6Lf7XUcbAAAAAIdi-1HVwY6mpPXpN08jhQKxoEfc";

const email_regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SERVICE_OPTIONS = [
  { value: "mix-master", label: "Mixing + Mastering" },
  { value: "stem-master", label: "Stem Mastering" },
  { value: "stereo-master", label: "Stereo Mastering" },
];

const GENRE_OPTIONS = [
  { value: "psytrance", label: "Psytrance" },
  { value: "progressive", label: "Progressive Psytrance" },
  { value: "full-on", label: "Full-On" },
  { value: "dark", label: "Dark / Forest" },
  { value: "other", label: "Other electronic" },
];

const TRACK_STATUS_OPTIONS = [
  { value: "rough", label: "Rough mix / arrangement locked" },
  { value: "mixed", label: "Self-mixed, needs polish" },
  { value: "master-only", label: "Ready for mastering only" },
  { value: "unsure", label: "Not sure — need guidance" },
];

function buildEmailMessage(data) {
  return [
    `Service: ${data.service}`,
    `Genre: ${data.genre}`,
    `BPM: ${data.bpm}`,
    `Track status: ${data.track_status}`,
    `Number of stems: ${data.stem_count}`,
    `Reference track URL: ${data.reference_url || "—"}`,
    "",
    "Upload link: Please use Dropbox or Google Drive with “Anyone with the link” access.",
    "",
    "Message:",
    data.notes,
  ].join("\n");
}

export const MixMasterServices = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      service: "",
      genre: "",
      track_status: "",
      bpm: "",
      stem_count: "",
      reference_url: "",
      notes: "",
    },
  });

  const contactNumberRef = useRef(null);
  const messageHiddenRef = useRef(null);

  const handleRecaptcha = useCallback((value) => {
    setIsVerified(!!value);
  }, []);

  const onSubmit = async (data) => {
    if (!isVerified) {
      setSubmitError("Please complete the ReCAPTCHA verification");
      return;
    }

    setIsLoading(true);
    setSubmitError("");

    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    const contactNumber = numStr.substring(numStr.length - 6);
    const compiledMessage = buildEmailMessage(data);

    if (contactNumberRef.current) {
      contactNumberRef.current.value = contactNumber;
    }
    if (messageHiddenRef.current) {
      messageHiddenRef.current.value = compiledMessage;
    }

    try {
      const response = await Promise.race([
        sendForm(EMAIL_SERVICE, EMAIL_TEMPLATE, "#mix-master-services-form"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 10000)
        ),
      ]);

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      const detail =
        error && typeof error.text === "string" ? error.text : "";
      setSubmitError(
        error.message === "Request timed out"
          ? "Request timed out. Please try again."
          : "Failed to send message. Please try again later."
      );
      console.error("Form submission error:", error, detail || "");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageWrapper>
        <Helmet>
          <title>Mix &amp; Master Services | Guerrilla</title>
          <meta
            name="description"
            content="Professional psytrance mixing and mastering by Guerrilla — club-ready low-end, clean mixes, festival-grade loudness. 15+ years of experience."
          />
          <link
            rel="canonical"
            href="https://guerrillatrance.com/mix-master-services"
          />
        </Helmet>
        <SuccessBlock>
          <div className="success-message">
            <h2>Thank you</h2>
            <p>
              Your track inquiry was sent. We&apos;ll review it and get back to
              you shortly.
            </p>
          </div>
        </SuccessBlock>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Mix &amp; Master Services | Guerrilla</title>
        <meta
          name="description"
          content="Professional psytrance mixing & mastering — powerful low-end, clean stereo image, festival-grade loudness. 15+ years of experience. Book Guerrilla for club-ready masters."
        />
        <meta
          name="keywords"
          content="psytrance mixing, psytrance mastering, stem mastering, Guerrilla, progressive psytrance, club mix, festival master, Nutek Records"
        />
        <meta property="og:title" content="Mix & Master Services | Guerrilla" />
        <meta
          property="og:description"
          content="Club-ready psytrance mixes & masters — kick & bass, width, and loudness dialed for the floor. 15+ years of experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://guerrillatrance.com/mix-master-services"
        />
        <meta name="twitter:title" content="Mix & Master Services | Guerrilla" />
        <meta
          name="twitter:description"
          content="Professional psytrance mixing & mastering. Get your track club-ready with Guerrilla."
        />
        <link
          rel="canonical"
          href="https://guerrillatrance.com/mix-master-services"
        />
      </Helmet>

      <Main id="mix-master-main">
        <Hero>
          <HeroInner>
            <HeroHeadline>
              Professional Psytrance Mixing &amp; Mastering
            </HeroHeadline>
            <HeroSub>
              Get your track club-ready with powerful low-end, a clean mix, and
              festival-grade loudness.
            </HeroSub>
            <CredLine>15+ years of psytrance production experience</CredLine>
            <CtaAnchor href="#mix-master-contact">
              Get Your Track Mixed &amp; Mastered
            </CtaAnchor>
          </HeroInner>
        </Hero>

        <Strip>
          <StripText>
            Free track evaluation available · Trusted by psytrance artists
          </StripText>
        </Strip>

        <SectionBlock>
          <FrostedPanel>
            <PanelTitle>Built for the floor</PanelTitle>
            <BodyText>
              For over fifteen years we&apos;ve lived inside psytrance production
              — not generic EDM templates. We specialize in the relationship
              between kick and bass, stereo width that stays powerful on big
              systems, midrange clarity that cuts through the mud, and masters
              that translate from studio monitors to club stacks and festival
              PA.
            </BodyText>
          </FrostedPanel>
        </SectionBlock>

        <Title>Services</Title>
        <ServiceGrid>
          <ServiceCard>
            <ServiceCardTitle>Mixing + Mastering</ServiceCardTitle>
            <BulletList>
              <li>Full balance, EQ, dynamics &amp; space for your full mix</li>
              <li>Kick &amp; bass glue that holds on club systems</li>
              <li>Final master tuned for loudness &amp; translation</li>
            </BulletList>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardTitle>Stem Mastering</ServiceCardTitle>
            <BulletList>
              <li>More control when drums, bass &amp; music are split</li>
              <li>Ideal when you need surgical low-end or drum punch</li>
              <li>Delivered master plus aligned reference listening notes</li>
            </BulletList>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardTitle>Stereo Mastering</ServiceCardTitle>
            <BulletList>
              <li>Final polish for a finished stereo bounce</li>
              <li>Spectral &amp; dynamic shaping for release-ready tone</li>
              <li>Multiple formats for streaming &amp; download</li>
            </BulletList>
          </ServiceCard>
        </ServiceGrid>

        <Title>Hear the Difference</Title>
        <SectionSubtitle>
          A/B each example — same position is kept when you switch.
        </SectionSubtitle>
        <AudioGrid>
          {BEFORE_AFTER_TRACKS.map((t) => (
            <BeforeAfterPlayer
              key={t.id}
              title={t.title}
              beforeSrc={t.before}
              afterSrc={t.after}
            />
          ))}
        </AudioGrid>

        <Title>Pricing</Title>
        <FrostedPanel>
          <PriceLine>
            <strong>Mix + master</strong> — from <PriceEm>$180</PriceEm> per
            track (project-dependent)
          </PriceLine>
          <PriceLine>
            <strong>Stem master</strong> — from <PriceEm>$120</PriceEm>
          </PriceLine>
          <PriceLine>
            <strong>Stereo master</strong> — from <PriceEm>$65</PriceEm>
          </PriceLine>
          <FinePrint>
            Final quotes depend on stem count, length, and revision scope. No
            card is charged on this site — once we agree on the work, we send a
            secure payment link. We accept all major credit card issuers (Visa,
            Mastercard, American Express, and more).
          </FinePrint>
        </FrostedPanel>

        <Strip>
          <StripText>
            Pay when you&apos;re ready — secure link · Major cards accepted
          </StripText>
        </Strip>

        <Title>Process</Title>
        <ProcessCard>
          <ProcessList>
            <li>
              <StepNum>1</StepNum>
              <span>
                <strong>Send your track</strong> — stems or stereo, plus notes
                &amp; reference link.
              </span>
            </li>
            <li>
              <StepNum>2</StepNum>
              <span>
                <strong>Analysis</strong> — we listen for phase, low-end, and
                translation issues.
              </span>
            </li>
            <li>
              <StepNum>3</StepNum>
              <span>
                <strong>Mixing &amp; mastering</strong> — iterative passes
                toward club-ready sound.
              </span>
            </li>
            <li>
              <StepNum>4</StepNum>
              <span>
                <strong>Preview</strong> — you get a watermarked or limited
                preview to approve direction.
              </span>
            </li>
            <li>
              <StepNum>5</StepNum>
              <span>
                <strong>Revisions &amp; delivery</strong> — tweaks within the
                agreed scope, then masters. After approval we send a payment
                link for the balance; then final files.
              </span>
            </li>
          </ProcessList>
        </ProcessCard>

        <Title>FAQ</Title>
        <FaqStack>
          <FaqItem>
            <FaqSummary>What file formats should I send?</FaqSummary>
            <FaqAnswer>
              Stems and mixes: <strong>44.1 kHz, 16-bit WAV</strong> (or
              higher bit depth if you already work that way). Label tracks
              clearly; avoid MP3 for multitrack material.
            </FaqAnswer>
          </FaqItem>
          <FaqItem>
            <FaqSummary>How fast is turnaround?</FaqSummary>
            <FaqAnswer>
              Typical stereo master: a few business days. Full mixes with
              revisions depend on complexity — we&apos;ll quote a timeline with
              your project.
            </FaqAnswer>
          </FaqItem>
          <FaqItem>
            <FaqSummary>How do revisions work?</FaqSummary>
            <FaqAnswer>
              Each package includes a defined number of revision rounds within
              the quoted scope. Major arrangement changes may count as a new
              phase — we&apos;ll spell that out up front.
            </FaqAnswer>
          </FaqItem>
          <FaqItem>
            <FaqSummary>Why psytrance-focused?</FaqSummary>
            <FaqAnswer>
              Hypnotic grooves and rolling bass need different decisions than
              pop or techno templates. We mix and master with that context —
              so your track feels right on a psy floor.
            </FaqAnswer>
          </FaqItem>
          <FaqItem>
            <FaqSummary>What do I receive at the end?</FaqSummary>
            <FaqAnswer>
              Masters in <strong>WAV</strong> (and <strong>MP3</strong> for
              demos or streaming checks on request). Stems returned only if
              agreed in writing.
            </FaqAnswer>
          </FaqItem>
          <FaqItem>
            <FaqSummary>How does payment work?</FaqSummary>
            <FaqAnswer>
              Nothing is charged on this page. After we align on scope and
              price, we email a <strong>secure payment link</strong>. We accept
              all major credit card issuers.
            </FaqAnswer>
          </FaqItem>
        </FaqStack>

        <BottomCta>
          <BottomCtaHeadline>Ready for the club?</BottomCtaHeadline>
          <CtaAnchor href="#mix-master-contact">
            Get Your Track Mixed &amp; Mastered
          </CtaAnchor>
        </BottomCta>

        <FormSection id="mix-master-contact">
          <Title>Send Your Track</Title>
          <FormIntro>
            Use the form below. Upload your audio via Dropbox or Google Drive
            and set sharing to <strong>Anyone with the link</strong>, then paste
            the link in your message or reference field.
          </FormIntro>
          <FormOuter>
            <div className="contact-container">
              <h1 className="visually-hidden">Mix &amp; Master inquiry</h1>
              <form
                id="mix-master-services-form"
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <input
                  type="hidden"
                  name="contact_number"
                  ref={contactNumberRef}
                  defaultValue=""
                />
                <input
                  type="hidden"
                  name="message"
                  ref={messageHiddenRef}
                  defaultValue=""
                />
                <div className="form-group">
                  <label htmlFor="mm_user_name">Name</label>
                  <input
                    id="mm_user_name"
                    type="text"
                    autoComplete="name"
                    {...register("user_name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.user_name && (
                    <div className="error-message visible">
                      {errors.user_name.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="mm_user_email">Email</label>
                  <input
                    id="mm_user_email"
                    type="email"
                    autoComplete="email"
                    {...register("user_email", {
                      required: "Email is required",
                      pattern: {
                        value: email_regex,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.user_email && (
                    <div className="error-message visible">
                      {errors.user_email.message}
                    </div>
                  )}
                </div>

                {/* Fields below omit name= so EmailJS sendForm only receives user_name, user_email, contact_number, message (all other data is inside message). */}
                <div className="form-group">
                  <label htmlFor="mm_service">Service</label>
                  <Controller
                    name="service"
                    control={control}
                    rules={{ required: "Please select a service" }}
                    render={({ field }) => (
                      <select id="mm_service" value={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref}>
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.label}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.service && (
                    <div className="error-message visible">
                      {errors.service.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="mm_genre">Genre</label>
                  <Controller
                    name="genre"
                    control={control}
                    rules={{ required: "Please select genre" }}
                    render={({ field }) => (
                      <select id="mm_genre" value={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref}>
                        <option value="" disabled>
                          Select genre
                        </option>
                        {GENRE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.label}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.genre && (
                    <div className="error-message visible">
                      {errors.genre.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="mm_bpm">BPM</label>
                  <Controller
                    name="bpm"
                    control={control}
                    rules={{ required: "BPM is required" }}
                    render={({ field }) => (
                      <input
                        id="mm_bpm"
                        type="text"
                        inputMode="numeric"
                        placeholder="e.g. 138"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        ref={field.ref}
                      />
                    )}
                  />
                  {errors.bpm && (
                    <div className="error-message visible">
                      {errors.bpm.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="mm_track_status">Track status</label>
                  <Controller
                    name="track_status"
                    control={control}
                    rules={{ required: "Please select track status" }}
                    render={({ field }) => (
                      <select id="mm_track_status" value={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref}>
                        <option value="" disabled>
                          Select status
                        </option>
                        {TRACK_STATUS_OPTIONS.map((o) => (
                          <option key={o.value} value={o.label}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.track_status && (
                    <div className="error-message visible">
                      {errors.track_status.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="mm_stem_count">Number of stems</label>
                  <Controller
                    name="stem_count"
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <input
                        id="mm_stem_count"
                        type="text"
                        placeholder="e.g. 12 or N/A"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        ref={field.ref}
                      />
                    )}
                  />
                  {errors.stem_count && (
                    <div className="error-message visible">
                      {errors.stem_count.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="mm_reference_url">Reference track (URL)</label>
                  <Controller
                    name="reference_url"
                    control={control}
                    render={({ field }) => (
                      <input
                        id="mm_reference_url"
                        type="url"
                        placeholder="https://…"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        ref={field.ref}
                      />
                    )}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mm_notes">Message</label>
                  <Controller
                    name="notes"
                    control={control}
                    rules={{
                      required: "Message is required",
                      maxLength: {
                        value: 2000,
                        message: "Message cannot exceed 2000 characters",
                      },
                    }}
                    render={({ field }) => (
                      <textarea
                        id="mm_notes"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        ref={field.ref}
                      />
                    )}
                  />
                  {errors.notes && (
                    <div className="error-message visible">
                      {errors.notes.message}
                    </div>
                  )}
                </div>

                <div className="recaptcha-container">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITEKEY}
                    onChange={handleRecaptcha}
                    theme="dark"
                    onErrored={() => {
                      setSubmitError(
                        "Error loading reCAPTCHA. Please refresh the page."
                      );
                    }}
                  />
                </div>

                {submitError && (
                  <div className="error-message visible">{submitError}</div>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={!isVerified || isLoading}
                >
                  {isLoading ? (
                    <>
                      Sending
                      <span className="loading-spinner" />
                    </>
                  ) : (
                    "Send Your Track"
                  )}
                </button>
              </form>
            </div>
          </FormOuter>
        </FormSection>
      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Hero = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 2.5rem;
`;

const HeroInner = styled.div`
  text-align: center;
  max-width: 720px;
`;

const HeroHeadline = styled.h1`
  color: #fff;
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.2;
  margin: 0 0 1rem;
  text-shadow: 0 0 24px rgba(255, 255, 255, 0.12);
`;

const HeroSub = styled.p`
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0 0 1rem;
`;

const CredLine = styled.p`
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
  margin: 0 0 1.75rem;
  font-style: italic;
`;

const CtaAnchor = styled.a`
  display: inline-block;
  margin-top: 0.25rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: 3px;
  }
`;

const Strip = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0.5rem 0 1.5rem;
  padding: 0.85rem 1.25rem;
  text-align: center;
  background: rgba(13, 12, 34, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
`;

const StripText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.95rem;
`;

const SectionBlock = styled.section`
  width: 100%;
  max-width: 800px;
  margin-bottom: 0.5rem;
`;

const FrostedPanel = styled.div`
  background: rgba(13, 12, 34, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 1.75rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

const PanelTitle = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1rem;
  text-align: center;
`;

const BodyText = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 2rem;
  padding: 0 0.25rem;
`;

const ServiceCard = styled.div`
  background: rgba(13, 12, 34, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem 1.35rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const ServiceCardTitle = styled.h3`
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  text-align: center;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.92rem;
  line-height: 1.5;

  li {
    margin-bottom: 0.45rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  margin: -1rem 0 1.25rem;
  max-width: 560px;
`;

const AudioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 2.5rem;
`;

const PriceLine = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: 0 0 0.65rem;
  text-align: center;
`;

const PriceEm = styled.span`
  color: #fff;
  font-weight: 700;
`;

const FinePrint = styled.p`
  margin: 1.25rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.88rem;
  line-height: 1.55;
  text-align: center;
`;

const ProcessCard = styled(FrostedPanel)`
  max-width: 720px;
  margin: 0 auto 2.5rem;
`;

const ProcessList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    color: rgba(255, 255, 255, 0.88);
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const StepNum = styled.span`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.45) 0%,
    rgba(118, 75, 162, 0.45) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
`;

const FaqStack = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto 2.5rem;
`;

const FaqItem = styled.details`
  background: rgba(13, 12, 34, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin-bottom: 0.75rem;
  overflow: hidden;

  &[open] summary::after {
    content: "−";
  }
`;

const FaqSummary = styled.summary`
  cursor: pointer;
  padding: 1rem 2.5rem 1rem 1.25rem;
  color: #fff;
  font-weight: 600;
  list-style: none;
  position: relative;
  font-size: 0.98rem;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: "+";
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.55);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.45);
    outline-offset: -2px;
  }
`;

const FaqAnswer = styled.p`
  padding: 0 1.25rem 1.15rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.94rem;
  line-height: 1.55;
`;

const BottomCta = styled.section`
  text-align: center;
  margin: 1rem 0 2.5rem;
`;

const BottomCtaHeadline = styled.h2`
  color: #fff;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 1rem;
`;

const FormSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormIntro = styled.p`
  max-width: 520px;
  text-align: center;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: -0.5rem 0 1.25rem;
`;

const FormOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .contact-form {
    max-width: 520px;
  }

  .contact-container {
    max-width: 640px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const SuccessBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 4rem;
`;
