"use client";

import { useState } from "react";
import styles from "./page.module.css";
import SparkleTrail from "../components/SparkleTrail";

const TIME_PREFS = ["Early (6–7 PM)", "Mid (7–8 PM)", "Late (8–9 PM)", "Later (9–10 PM)", "Whenever — surprise me"];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrival_time: "",
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
      <SparkleTrail />
      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroSubtitle}>You have been chosen</p>
        <h1 className={styles.heroTitle}>The Magic Show</h1>
        <p className={styles.heroCity}>Cincinnati</p>
        <p className={styles.heroTagline}>
          A solo immersive experience.
          Whatever you think this is, it's not.
        </p>
        <a href="#rsvp" className={styles.ctaButton}>
          Claim Your Golden Ticket
        </a>
        <span className={styles.scrollHint}>SCROLL TO EXPLORE</span>
      </section>

      {/* Details */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Details</h2>
        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>When</p>
            <p className={styles.detailValue}>October 10, 2026</p>
            <p className={styles.detailSub}>6:00 PM - 10:00 PM</p>
            <p className={styles.detailSub}>A unique arrival time will be sent to you</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>Where</p>
            <p className={styles.detailValue}>1059 Celestial St</p>
            <p className={styles.detailSub}>Cincinnati, OH 45202</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>Duration</p>
            <p className={styles.detailValue}>~1 Hour</p>
            <p className={styles.detailSub}>Plan to lose track of time</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailLabel}>Investment</p>
            <p className={styles.detailValue}>$222</p>
            <p className={styles.detailSub}>+ tip for performers</p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What To Expect</h2>
        <div className={styles.expectList}>
          <div className={styles.expectItem}>
            <span className={styles.expectIcon}>1</span>
            <div>
              <p className={styles.expectTitle}>You go alone</p>
              <p className={styles.expectDesc}>
                This experience is designed for one person at a time. You will move through it completely solo.
              </p>
            </div>
          </div>
          <div className={styles.expectItem}>
            <span className={styles.expectIcon}>2</span>
            <div>
              <p className={styles.expectTitle}>Phones collected at the door</p>
              <p className={styles.expectDesc}>
                Your phone will be safely stored and returned when you exit. Be fully present.
              </p>
            </div>
          </div>
          <div className={styles.expectItem}>
            <span className={styles.expectIcon}>3</span>
            <div>
              <p className={styles.expectTitle}>Waiver required</p>
              <p className={styles.expectDesc}>
                You will sign a waiver upon arrival. Nothing dangerous — just trust the process.
              </p>
            </div>
          </div>
          <div className={styles.expectItem}>
            <span className={styles.expectIcon}>4</span>
            <div>
              <p className={styles.expectTitle}>Only 30 spots</p>
              <p className={styles.expectDesc}>
                First come, first served. When they are gone, they are gone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Surprise, You're The Magic.</h2>
        <p className={styles.aboutText}>
          Someone sent you this link for a reason.
          <br /><br />
          We can't tell you what happens inside. We can tell you that <em>you won't be the same after</em>.
        </p>

        <div className={styles.blinkCard}>
          <a href="https://www.blinkcincinnati.com/" target="_blank" rel="noopener noreferrer">
            <img src="/blink.jpg" alt="BLINK Cincinnati light festival" className={styles.blinkImage} />
          </a>
          <p className={styles.blinkTitle}>While You're Downtown</p>
          <p className={styles.blinkText}>
            The Magic Show takes place during{" "}
            <a href="https://www.blinkcincinnati.com/" target="_blank" rel="noopener noreferrer" className={styles.blinkLink}>BLINK</a>
            {" "}&mdash; Cincinnati's massive free light, art, and projection festival.
            Our venue is just 5 minutes from the action. Come for The Magic Show, stay for BLINK.
            <br /><br />
            Parking is limited downtown during the festival.
            We recommend <em>Uber, Lyft, or getting dropped off</em>.
          </p>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className={styles.rsvpSection}>
        <h2 className={styles.sectionTitle}>Claim Your Spot</h2>
        <p className={styles.rsvpSubtext}>30 spots. First come, first served.</p>

        {submitted ? (
          <div className={styles.successMessage}>
            <p className={styles.successTitle}>You're on the list.</p>
            <p className={styles.successText}>
              We'll be in touch soon to let you know if you've been accepted.
              If approved, you'll have 24 hours to complete payment and lock in your spot.
              <br /><br />
              Until then — trust the process.
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
                required
                placeholder="(555) 555-5555"
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="arrival_time">Preferred Arrival Time</label>
              <select
                id="arrival_time"
                name="arrival_time"
                className={styles.select}
                required
                value={formData.arrival_time}
                onChange={handleChange}
              >
                <option value="">Select a time</option>
                {TIME_PREFS.map((pref) => (
                  <option key={pref} value={pref}>{pref}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Reserve — $222"}
            </button>
            <p className={styles.formNote}>
              Payment details will be sent after registration. Your spot is held for 24 hours.
            </p>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        The Magic Show &mdash; Cincinnati &mdash; A J.O.B. and Jumpsuit Production
      </footer>
    </div>
  );
}
