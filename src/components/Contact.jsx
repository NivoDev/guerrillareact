import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet-async";
import "../styles/contact.css";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const message = watch("message") || "";
  const messageCharsLeft = 150 - message.length;
  const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const handleRecaptcha = useCallback((value) => {
    console.log("ReCAPTCHA value:", value);
    setIsVerified(!!value);
  }, []);

  const onSubmit = async (data) => {
    if (!isVerified) {
      setSubmitError("Please complete the ReCAPTCHA verification");
      return;
    }

    setIsLoading(true);
    setSubmitError("");
    generateContactNumber();

    try {
      const response = await Promise.race([
        sendForm(
          "service_y1gtueh",
          "template_yyxyh5a",
          "#contact-form"
        ),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error("Request timed out")), 10000)
        )
      ]);

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitError(
        error.message === "Request timed out"
          ? "Request timed out. Please try again."
          : "Failed to send message. Please try again later."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-container">
        <div className="success-message">
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Guerrilla - Booking & Collaboration Inquiries</title>
        <meta
          name="description"
          content="Get in touch with Guerrilla for bookings, collaborations, or any inquiries. We're always excited to connect with fans and fellow artists in the psytrance scene."
        />
        <meta name="keywords" content="Contact Guerrilla, psytrance booking, music collaboration, Guerrilla contact form, psytrance artist contact" />
        <meta property="og:title" content="Contact Guerrilla - Booking & Collaboration Inquiries" />
        <meta property="og:description" content="Get in touch with Guerrilla for bookings, collaborations, or any inquiries. We're always excited to connect with fans and fellow artists." />
        <meta name="twitter:title" content="Contact Guerrilla - Booking & Collaboration Inquiries" />
        <meta name="twitter:description" content="Get in touch with Guerrilla for bookings, collaborations, or any inquiries. We're always excited to connect with fans and fellow artists." />
      </Helmet>
      
      <div className="contact-container">
        <h1>Get in Touch</h1>
        
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="contact_number" value={contactNumber} />
          
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              type="text"
              {...register("user_name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters"
                }
              })}
            />
            {errors.user_name && (
              <div className="error-message visible">
                {errors.user_name.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              id="user_email"
              type="email"
              {...register("user_email", {
                required: "Email is required",
                pattern: {
                  value: email_regex,
                  message: "Please enter a valid email"
                }
              })}
            />
            {errors.user_email && (
              <div className="error-message visible">
                {errors.user_email.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", {
                required: "Message is required",
                maxLength: {
                  value: 150,
                  message: "Message cannot exceed 150 characters"
                }
              })}
            />
            {errors.message && (
              <div className="error-message visible">
                {errors.message.message}
              </div>
            )}
            <div className="char-count">
              {messageCharsLeft} characters remaining
            </div>
          </div>

          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6Lf7XUcbAAAAAIdi-1HVwY6mpPXpN08jhQKxoEfc"
              onChange={handleRecaptcha}
              theme="dark"
              onErrored={() => {
                console.error("reCAPTCHA error occurred");
                setSubmitError("Error loading reCAPTCHA. Please refresh the page.");
              }}
            />
          </div>

          {submitError && (
            <div className="error-message visible">
              {submitError}
            </div>
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
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </>
  );
};
