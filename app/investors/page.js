"use client";

import styles from "./investors.module.css";

export default function InvestorsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Investment Opportunity</p>
        <h1 className={styles.title}>The Magic Show</h1>
        <p className={styles.subtitle}>
          A phone-free, solo immersive experience company.
          <br />
          Every show is different. Every scene is a brand opportunity.
          <br />
          The content creates itself.
        </p>
      </header>

      {/* The Problem */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Problem</h2>
        <div className={styles.twoCol}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>For People</h3>
            <p className={styles.cardText}>
              We are more connected and more lonely than ever. People are desperate for real experiences that make them feel something. Not another concert. Not another show where they watch through a screen. Something that changes them.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>For Brands</h3>
            <p className={styles.cardText}>
              Brands spend billions on ads no one watches, sponsorships no one remembers, and influencer content that feels fake. They need authentic emotional moments with real humans — and they can't manufacture those.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Solution</h2>
        <p className={styles.bodyText}>
          The Magic Show is a <em>format</em>, not a fixed show. One person enters at a time. Phones are collected at the door. They move through a series of immersive scenes — each one designed to surprise, delight, challenge, or move them. At the end, they record a confessional on camera. No one answers their questions. Show's over.
        </p>
        <div className={styles.pillRow}>
          <span className={styles.pill}>Solo</span>
          <span className={styles.pill}>Phone-free</span>
          <span className={styles.pill}>Different every time</span>
          <span className={styles.pill}>Every station filmed</span>
          <span className={styles.pill}>Confessional content</span>
          <span className={styles.pill}>Post-show commerce</span>
          <span className={styles.pill}>Portable</span>
        </div>
      </section>

      {/* Why It Works */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why It Works</h2>
        <div className={styles.threeCol}>
          <div className={styles.statCard}>
            <p className={styles.statNum}>100%</p>
            <p className={styles.statLabel}>Attention</p>
            <p className={styles.statDesc}>No phone. No audience. No distractions. The participant is fully present for every second.</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statNum}>1:1</p>
            <p className={styles.statLabel}>Ratio</p>
            <p className={styles.statDesc}>Every participant gets a private experience with live performers. Not scalable in the traditional sense — and that's the point.</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statNum}>30+</p>
            <p className={styles.statLabel}>Content pieces per participant</p>
            <p className={styles.statDesc}>Every station is filmed. Reactions to products, performances, surprises — all captured. Plus a raw confessional at the end. Multiply by 30 participants per show.</p>
          </div>
        </div>
      </section>

      {/* What Could a Show Look Like */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Could a Show Look Like?</h2>
        <p className={styles.bodyText}>
          Every Magic Show is completely different. The only constants: solo, phone-free, immersive, confessional at the end. Everything else is a blank canvas. Here are three shows that could exist:
        </p>
        <div className={styles.threeCol} style={{ marginTop: "2rem" }}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>The Cincinnati Show</h3>
            <p className={styles.cardText}>
              A 3-story Airbnb during BLINK festival. You sell bizarre products on a live QVC set. A bartender pours a shot in your mouth. You're spoonfed caviar and gold. You get thrown in a bathtub in a wig and photographed. A drag queen performs just for you. A stranger gives you advice for a nickel. Two people hold you in silence. Then you call back into the QVC show and watch the next person go through what you just did.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>A Bourbon Brand Show</h3>
            <p className={styles.cardText}>
              A warehouse in Louisville during Derby week. You walk into a barrel room blindfolded. A master distiller puts bourbon on your lips and tells you its story. You paint a portrait of a stranger in 3 minutes. A gospel choir sings a song written about the answer to a question you whispered to a stranger. You slow dance with someone you've never met. You taste three bourbons and have to bet your shoes on which one was the sponsor's.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>A Corporate Show</h3>
            <p className={styles.cardText}>
              A hotel suite during a company retreat. You pitch your CEO a fake product on live TV. A fortune teller reads your performance review. You write a letter to yourself at 80. A comedian roasts your LinkedIn profile. Two strangers from your company wash your hands in silence. You leave through a door that says "Who are you now?"
            </p>
          </div>
        </div>
        <p className={styles.bodyText} style={{ marginTop: "2rem" }}>
          The scenes are infinite. The format is the IP — a portable, repeatable structure for creating experiences that make people feel something real.
        </p>
      </section>

      {/* Revenue Model */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Revenue Model</h2>
        <p className={styles.bodyText}>Four revenue streams per show, scaling with brand partnerships:</p>
        <div className={styles.twoCol}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>1. Ticket Sales</h3>
            <p className={styles.cardText}>
              $150–$500 per ticket depending on market and show. 20–40 participants per show. Premium pricing justified by the 1:1 nature of the experience.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>2. Brand Sponsorship</h3>
            <p className={styles.cardText}>
              Brands don't buy a logo — they become a scene. $2K–$25K per sponsor. Multiple sponsors per show. The brand's product IS the experience.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>3. Content + Commerce</h3>
            <p className={styles.cardText}>
              Every station is filmed — real people reacting to real products in real time. Confessional footage, photoshoot images, reaction clips. Licensed to sponsors for marketing. Plus post-show follow-up emails linking to every product they touched, tasted, or wore. The experience becomes a storefront.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>4. Private Shows</h3>
            <p className={styles.cardText}>
              Corporate retreats, team experiences, private events. $100K+ per private show. Fully custom scenes, dedicated cast, brand integration. The format works anywhere — homes, offices, warehouses, hotels.
            </p>
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Unit Economics</h2>
        <p className={styles.bodyText}>Three tiers of shows, each with a different economic profile:</p>

        <h3 className={styles.gearCategory} style={{ marginTop: "2rem" }}>Proof of Concept (Cincinnati)</h3>
        <p className={styles.statDesc} style={{ marginBottom: "1rem" }}>First shows run at or near break-even. The goal is content, proof, and testimonials — not profit.</p>
        <div className={styles.econTable}>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Ticket Revenue (30 × $222)</span>
            <span className={styles.econValue}>$6,660</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Tips</span>
            <span className={styles.econValue}>$810</span>
          </div>
          <div className={styles.econRowTotal}>
            <span className={styles.econLabel}>Gross Revenue</span>
            <span className={styles.econValue}>$7,470</span>
          </div>
          <div className={styles.econRowSpacer}></div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Venue</span>
            <span className={styles.econValueNeg}>−$10,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Cast + Producers (13 crew)</span>
            <span className={styles.econValueNeg}>−$6,500</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Props, Consumables, Gear</span>
            <span className={styles.econValueNeg}>−$2,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Marketing + Operations</span>
            <span className={styles.econValueNeg}>−$1,000</span>
          </div>
          <div className={styles.econRowTotal}>
            <span className={styles.econLabel}>Net</span>
            <span className={styles.econValueNeg}>−$12,030</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>What you get</span>
            <span className={styles.econValue}>900+ content pieces (every station filmed × 30 people), confessionals, photos, sizzle reel, testimonials</span>
          </div>
        </div>

        <h3 className={styles.gearCategory} style={{ marginTop: "3rem" }}>Sponsored Show</h3>
        <p className={styles.statDesc} style={{ marginBottom: "1rem" }}>Once proof exists, brands fund the production. Alumni volunteers reduce crew costs.</p>
        <div className={styles.econTable}>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Ticket Revenue (30 × $350)</span>
            <span className={styles.econValue}>$10,500</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Presenting Sponsor</span>
            <span className={styles.econValue}>$15,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Scene Sponsors (3 × $5K)</span>
            <span className={styles.econValue}>$15,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Content Licensing</span>
            <span className={styles.econValue}>$5,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>In-Kind (reduces costs)</span>
            <span className={styles.econValue}>$3,000</span>
          </div>
          <div className={styles.econRowTotal}>
            <span className={styles.econLabel}>Gross Revenue</span>
            <span className={styles.econValue}>$48,500</span>
          </div>
          <div className={styles.econRowSpacer}></div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Venue</span>
            <span className={styles.econValueNeg}>−$10,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Paid Cast (key performers only)</span>
            <span className={styles.econValueNeg}>−$5,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Alumni Volunteers</span>
            <span className={styles.econValue}>$0</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Props + Gear (offset by in-kind)</span>
            <span className={styles.econValueNeg}>−$1,500</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Marketing + Operations</span>
            <span className={styles.econValueNeg}>−$2,000</span>
          </div>
          <div className={styles.econRowTotal}>
            <span className={styles.econLabel}>Net Profit</span>
            <span className={styles.econValue}>~$30,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Margin</span>
            <span className={styles.econValue}>~62%</span>
          </div>
        </div>

        <h3 className={styles.gearCategory} style={{ marginTop: "3rem" }}>Private Show</h3>
        <p className={styles.statDesc} style={{ marginBottom: "1rem" }}>Fully custom, built for a single client. The highest margin product.</p>
        <div className={styles.econTable}>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Client Fee</span>
            <span className={styles.econValue}>$100,000+</span>
          </div>
          <div className={styles.econRowSpacer}></div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>All-in Production Cost</span>
            <span className={styles.econValueNeg}>−$25,000–$40,000</span>
          </div>
          <div className={styles.econRowTotal}>
            <span className={styles.econLabel}>Net Profit</span>
            <span className={styles.econValue}>$60,000–$75,000</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Margin</span>
            <span className={styles.econValue}>60–75%</span>
          </div>
        </div>
      </section>

      {/* The Volunteer Flywheel */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Volunteer Flywheel</h2>
        <p className={styles.bodyText}>
          The Magic Show builds its own workforce. Every participant who goes through the experience becomes a potential volunteer for the next one. They've already felt what it does — now they want to be on the other side, creating that feeling for someone else.
        </p>
        <p className={styles.bodyText} style={{ marginTop: "1.5rem" }}>
          This means crew costs <em>decrease over time</em> while quality <em>increases</em> — because volunteers are emotionally invested in the outcome in a way paid crew can't be. Key creative roles (performers, producers) stay paid. Everything else scales with alumni.
        </p>
        <div className={styles.arcFlow} style={{ marginTop: "2rem" }}>
          <div className={styles.arcNode}><span>Experience</span><small>Go through the show</small></div>
          <div className={styles.arcArrow}></div>
          <div className={styles.arcNode}><span>Evangelize</span><small>Tell everyone</small></div>
          <div className={styles.arcArrow}></div>
          <div className={styles.arcNode}><span>Volunteer</span><small>Help build the next one</small></div>
          <div className={styles.arcArrow}></div>
          <div className={styles.arcNode}><span>Lead</span><small>Run a show in their city</small></div>
        </div>
      </section>

      {/* Scale */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Scales</h2>
        <div className={styles.econTable}>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 1 — Proof of concept</span>
            <span className={styles.econValue}>4 shows / 3 cities</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 1 Revenue</span>
            <span className={styles.econValue}>$75K–$150K</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 1 Note</span>
            <span className={styles.econValue}>1 proof of concept + 2–3 sponsored shows. First private show inquiry.</span>
          </div>
          <div className={styles.econRowSpacer}></div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 2 — Sponsored + private shows</span>
            <span className={styles.econValue}>12–16 shows / 6–8 cities</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 2 Revenue</span>
            <span className={styles.econValue}>$500K–$1M</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 2 Note</span>
            <span className={styles.econValue}>2–4 private shows ($100K+ each), rest sponsored. Content licensing revenue begins.</span>
          </div>
          <div className={styles.econRowSpacer}></div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 3 — Scale + licensing</span>
            <span className={styles.econValue}>40+ shows / 15+ cities</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 3 Revenue</span>
            <span className={styles.econValue}>$2M–$5M</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 3 Note</span>
            <span className={styles.econValue}>Licensed producers run shows in new markets. Private show pipeline. Content library becomes recurring revenue.</span>
          </div>
          <div className={styles.econRowSpacer}></div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 5 — Platform</span>
            <span className={styles.econValue}>100+ shows / national + international</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 5 Revenue</span>
            <span className={styles.econValue}>$10M+</span>
          </div>
          <div className={styles.econRow}>
            <span className={styles.econLabel}>Year 5 Note</span>
            <span className={styles.econValue}>The Magic Show becomes a platform — brands book shows like they book billboards. Content library is a media company.</span>
          </div>
        </div>
        <p className={styles.bodyText} style={{ marginTop: "2rem" }}>
          The Trojan Horse: every brand that sponsors a scene gets invited to <em>go through the experience themselves</em>. A CMO who lives through The Magic Show doesn't just renew — they book a private show for their leadership team. That's how a $5K scene sponsorship turns into a $100K+ private show contract. The experience sells itself.
        </p>
        <p className={styles.bodyText} style={{ marginTop: "1rem" }}>
          One Fortune 500 retreat contract equals 15 public shows. As the content library and alumni network grow, margins expand and acquisition costs drop to near zero — every participant sells the next ticket.
        </p>
      </section>

      {/* Market */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Market</h2>
        <div className={styles.threeCol}>
          <div className={styles.statCard}>
            <p className={styles.statNum}>$12.5B</p>
            <p className={styles.statLabel}>Immersive experience market</p>
            <p className={styles.statDesc}>Growing 25% YoY. Meow Wolf, Sleep No More, and immersive Van Gogh proved demand. The Magic Show is the next evolution — solo, personal, transformative.</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statNum}>$65B</p>
            <p className={styles.statLabel}>Experiential marketing spend</p>
            <p className={styles.statDesc}>Brands are shifting budgets from digital ads to real-world experiences. The Magic Show gives them something no activation agency can: genuine emotion on camera.</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statNum}>0</p>
            <p className={styles.statLabel}>Competitors</p>
            <p className={styles.statDesc}>No one is doing solo, phone-free, brand-integrated immersive experiences with built-in content capture. This category doesn't exist yet.</p>
          </div>
        </div>
      </section>

      {/* Moat */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Moat</h2>
        <div className={styles.bodyText}>
          <p>
            The Magic Show's defensibility isn't technology — it's <em>creative infrastructure</em>:
          </p>
          <br />
          <p><em>The format</em> — solo, phone-free, immersive, confessional at the end. Anyone can create an immersive experience. No one else has a repeatable structure that works with any content, any venue, any brand.</p>
          <br />
          <p><em>The content engine</em> — every station is filmed. Every reaction is real. Every confessional is raw. Over time, this library becomes a media asset — and brands get content they could never produce in a studio. A person genuinely delighted by a cocktail, moved by a moment, surprised by a product. Plus a post-show commerce layer that turns the experience into a storefront.</p>
          <br />
          <p><em>The brand model</em> — once brands experience building a scene, they come back. Each partnership deepens. The switching cost is creative trust.</p>
          <br />
          <p><em>The network</em> — every participant becomes an evangelist. You can't explain The Magic Show — you can only say "you have to do it." Word of mouth is the only marketing channel that matters.</p>
        </div>
      </section>

      {/* Team */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Team</h2>
        <div className={styles.twoCol}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>J.O.B. (Joy of Being)</h3>
            <p className={styles.cardText}>
              The creative vision and community engine. J.O.B. brings the philosophy, the audience, and the "why" — creating experiences that remind humans what it feels like to be alive.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Jumpsuit Agency</h3>
            <p className={styles.cardText}>
              Creative production company with deep roots in experiential design, brand strategy, and live events. The operational backbone — casting, production, logistics, brand partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Cincinnati is the proof of concept.</h2>
        <p className={styles.ctaText}>
          October 10, 2026. 30 participants. 9 performers. 8 scenes. 1 person at a time.
          <br /><br />
          We're not asking you to imagine it. We're asking you to watch what happens.
        </p>
        <a href="mailto:nicole@jumpsuitagency.com" className={styles.ctaButton}>
          Let's Talk
        </a>
      </section>

      <footer className={styles.footer}>
        CONFIDENTIAL — The Magic Show — A J.O.B. and Jumpsuit Production
      </footer>
    </div>
  );
}
