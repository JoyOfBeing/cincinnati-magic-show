"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("RSVP failed:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroSubtitle}>You are invited</p>
        <h1 className={styles.heroTitle}>The Magic Show</h1>
        <p className={styles.heroCity}>Cincinnati</p>
        <p className={styles.heroTagline}>
          An immersive experience that will change the way you see everything.
          Step through the door.
        </p>
        <a href="#rsvp" className={styles.ctaButton}>
          Claim Your Seat
        </a>
        <span className={styles.scrollHint}>SCROLL TO EXPLORE</span>
      </section>

      {/* Details */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Details</h2>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>When</p>
            <p className={styles.detailValue}>October 9-11, 2026</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>Where</p>
            <p className={styles.detailValue}>Cincinnati, OH</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>Duration</p>
            <p className={styles.detailValue}>3 Hours</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>Capacity</p>
            <p className={styles.detailValue}>Limited</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Is This?</h2>
        <p className={styles.aboutText}>
          The Magic Show is not a performance. It is not a seminar. It is not
          what you think it is. It is an <em>immersive experience</em> designed
          to dissolve the boundaries between who you are and who you could be.
          <br /><br />
          You will not sit in the audience. There is no audience. There is only
          the experience — and <em>you are part of it</em>.
          <br /><br />
          This is an invite-only gathering. If you are here, someone believed
          you were ready.
        </p>
      </section>

      {/* RSVP */}
      <section id="rsvp" className={styles.rsvpSection}>
        <h2 className={styles.sectionTitle}>Reserve Your Spot</h2>

        {submitted ? (
          <div className={styles.successMessage}>
            <p className={styles.successTitle}>You're on the list.</p>
            <p className={styles.successText}>
              We'll be in touch with details. Until then — stay curious.
            </p>
          </div>
        ) : (
          <form className={styles.rsvpForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "RSVP Now"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        The Magic Show &mdash; Cincinnati &mdash; A Joy of Being Experience
      </footer>
    </div>
  );
}
