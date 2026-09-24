"use client";

import styles from "./production.module.css";

const SCENES = [
  {
    id: 0,
    name: "ARRIVAL",
    location: "Outside / Front Door",
    floor: "Exterior",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Participant arrives and waits in line outside. Bouncer checks the list. Called by name, quickly rushed inside by a producer to Station 1.",
    cast: ["P1 (Arrival Producer / Bouncer)"],
    props: [
      "Clipboard + printed guest list",
      "Labeled phone bags x30 (Sharpie + ziplock or drawstring bags)",
      "Velvet rope or stanchions (2–3)",
      "Printed waivers x30 + pens",
      "Flashlight or lantern (if no porch light)",
      "Bluetooth speaker + low mysterious playlist (outside ambience)",
      "Signage: 'You are expected.'",
    ],
    transition: "P1 checks them in, collects phone, rushes them to QVC set.",
    notes: "Set the tone immediately — they are expected, they are chosen. No small talk. Quick, confident energy. Phone is bagged and labeled here.",
  },
  {
    id: 1,
    name: "QVC",
    location: "Floor 1 — Living Room",
    floor: "1",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Participant is rushed onto a live QVC set. Double platinum saleswoman Kelly Ann Bowman puts them on camera to sell bizarre items. High energy, improvised, chaotic.",
    cast: ["Kelly Ann Bowman (QVC host)"],
    props: [
      "Camera on tripod (live feed to Hotline monitor)",
      "Ring light",
      "QVC-style backdrop (tablecloth, branded banner or poster)",
      "Display table for products",
      "Odd items to sell (5–8 rotating products)",
      "Clip-on mic or handheld mic for Kelly Ann",
      "Bluetooth speaker (receives caller audio from Hotline mic)",
      "'ON AIR' light sign",
      "Applause / sound effect button (optional — phone or tablet)",
      "Cell phone + speaker for upbeat QVC-style music (pre/post bits)",
    ],
    transition: "Kelly Ann dismisses them in character: 'Get off my set — go sit at that bar.' Participant walks to Sexy Cocktails on their own.",
    notes: "Camera feeds live to Station 8 (Hotline) monitor — same floor, short cable run. Kelly Ann handles both the on-set participant and the caller from Hotline via the mic receiver. Keep energy HIGH.",
  },
  {
    id: 2,
    name: "SEXY COCKTAILS",
    location: "Floor 1 — Kitchen / Bar Area",
    floor: "1",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Limited cocktail menu (alcoholic + non-alcoholic). Sexy bartender pours shots directly into their mouth or flirts while making their drink.",
    cast: ["Bartender"],
    props: [
      "Bar surface (counter, table, or cart)",
      "Cocktail menu (printed, on-brand — laminated)",
      "Shot glasses x30+",
      "Cocktail glasses x10 (reusable, washed between)",
      "Cocktail ingredients (liquor, mixers, garnishes)",
      "Non-alcoholic options (mocktail ingredients, sparkling water)",
      "Ice bucket + ice",
      "Shaker, jigger, muddler, bar spoon",
      "Cocktail napkins",
      "Tip jar",
      "LED candles or string lights (moody bar vibe)",
      "Cell phone + Bluetooth speaker (sexy/lounge playlist)",
    ],
    transition: "Bartender hands them their drink and points to a lit doorway: 'Take this with you. Through there.'",
    notes: "Keep it playful, not uncomfortable. Read the participant. This is a palate cleanser between chaos and luxury.",
  },
  {
    id: 3,
    name: "SPOONFED",
    location: "Floor 1 — Dining Area",
    floor: "1",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Participant is spoonfed caviar and gold flakes. Luxurious, absurd, intimate.",
    cast: ["Feeder (performer)"],
    props: [
      "Caviar (enough for 30 servings — ~2 oz tins x3)",
      "Edible gold flakes",
      "Small ornate spoon",
      "Cloth napkins (dark, luxurious)",
      "Plating (small ornate dish or shell per serving)",
      "Side table or tray (feeder holds or sets beside participant)",
      "Chair for participant (velvet or upholstered if possible)",
      "LED candles (warm glow, no open flame)",
      "Cell phone + small speaker (slow, classical or ambient playlist)",
      "Water glass (palate cleanser, offered after)",
    ],
    transition: "Feeder wipes their mouth, whispers 'upstairs' — P2 is waiting at the staircase to Floor 2.",
    notes: "Slow, deliberate energy. Contrast to the chaos of QVC. Eye contact. Make them feel like royalty.",
  },
  {
    id: 4,
    name: "PHOTOSHOOT",
    location: "Floor 2 — Bathroom",
    floor: "2",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Participant is quickly placed into a wig, put in a bathtub, and photographed. Fast-paced, glamorous, ridiculous.",
    cast: ["Photographer", "Stylist (wig placement)"],
    props: [
      "Wigs (variety — 6+ styles, bold colors)",
      "Bathtub (dry — styled with props inside)",
      "Bathtub props: rubber ducks, silk flowers, feather boas, confetti, fake pearls",
      "Robe or feather boa (participant wears into the tub)",
      "Sunglasses / oversized jewelry / accessories bin",
      "Photographer's camera (DSLR or Polaroid — Polaroid is a great takeaway)",
      "LED light bar or clip lights (dramatic photo lighting)",
      "Cell phone + Bluetooth speaker (high-energy pop/glam playlist)",
      "Mirror (participant sees themselves in the wig before getting in)",
      "Curtain or fabric over doorway to Drag room",
    ],
    transition: "Stylist says 'Keep the wig — go through that curtain.' Participant walks into Drag room.",
    notes: "Move fast. Make them feel like a star. Music playing. Send them photos after the show (great follow-up touchpoint).",
  },
  {
    id: 5,
    name: "DRAG",
    location: "Floor 2 — Bedroom",
    floor: "2",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Participant walks into a room (still wearing wig from photoshoot). Gets a private drag performance.",
    cast: ["Drag performer"],
    props: [
      "Cell phone + Bluetooth speaker (performer's playlist — bangers)",
      "LED light strip or color-changing bulb (pink/purple glow)",
      "Disco ball or mirror ball (small, handheld or hanging)",
      "Chair for participant (they're the audience of one)",
      "Open floor space for performer",
      "Fan (dramatic wind effect, optional but iconic)",
      "Confetti or glitter (small amount — scattered on floor pre-show)",
    ],
    transition: "Drag performer takes a final bow, opens a door — P3 is waiting at the stairs to Floor 3.",
    notes: "They still have the wig on from the photoshoot — lean into it. This is celebration energy. Let the performer read the room and adjust.",
  },
  {
    id: 6,
    name: "NICKEL",
    location: "Floor 3 — Quiet Room",
    floor: "3",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Participant is given a nickel. They must ask Pam for advice. One question, one answer.",
    cast: ["Pam"],
    props: [
      "Nickels x30 (one per participant — they keep it)",
      "Two chairs (facing each other, close)",
      "Single warm lamp or LED candle (only light source)",
      "Small rug between chairs",
      "No music — silence is the point",
      "Tissues (nearby, not obvious)",
    ],
    transition: "Pam stands, gestures to the next door. No words.",
    notes: "Stripped down. Intimate. This is the emotional pivot. Pam should be warm but direct. The nickel is the token — it means something.",
  },
  {
    id: 7,
    name: "FOUR HANDS",
    location: "Floor 3 — Master Bedroom",
    floor: "3",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Consent-based touch room. Participant can ask for anything non-sexual — a hug, head scratch, hand hold, shoulder massage, just sitting together.",
    cast: ["2 touch performers"],
    props: [
      "Floor mat or padded surface (yoga mat + blankets layered)",
      "Pillows (3–4, soft)",
      "Blankets (2–3, warm and clean)",
      "Consent cards x30 (printed checkboxes: hug, hand hold, head scratch, shoulder massage, just sit with me, etc.)",
      "Pen (for checking boxes)",
      "Cell phone + small speaker (very soft ambient / sound bath playlist)",
      "Essential oil diffuser or scented candle (lavender or similar — calming)",
      "Eye mask (offered, not required)",
      "Tissues (nearby)",
      "Warm dim lighting (fairy lights or single lamp)",
    ],
    transition: "Touch performers gently guide them to stand. P3 walks them all the way back down to Floor 1 for Hotline.",
    notes: "One of the touch performers explains consent and hands the card BEFORE beginning. Participant checks what they're comfortable with. Two performers = four hands. This is the emotional peak.",
  },
  {
    id: 8,
    name: "HOTLINE",
    location: "Floor 1 — Near QVC Set",
    floor: "1",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Participant sits at a monitor showing a LIVE feed of the QVC set — a new participant is on camera with Kelly Ann right now. They pick up the mic receiver and call in. Full circle: they started on that set, now they're the mysterious voice on the phone.",
    cast: ["None (solo — Kelly Ann is live on the QVC set nearby)"],
    props: [
      "Monitor / TV (live camera feed from QVC set — short cable run, same floor)",
      "Handheld mic receiver (old-school phone look, wireless to QVC speaker)",
      "Cozy chair or armchair",
      "Side table (mic sits on it, waiting to be picked up)",
      "Lamp (warm, den vibes)",
      "No music — silence makes the live feed surreal",
    ],
    transition: "Phone goes dead. P4 is waiting to walk them outside to Confessional.",
    notes: "The bookend. They were nervous and confused on that set an hour ago. Now they've been through everything and they're the voice on the phone. Simple setup: camera on QVC set feeds to this monitor (same floor = short cable). Mic sends audio to speaker on QVC set.",
  },
  {
    id: 9,
    name: "CONFESSIONAL",
    location: "Outside — Exit",
    floor: "Exterior",
    duration: "6 min block",
    activity: "5 min active",
    description:
      "Producer escorts participant back outside to a confessional booth. They must respond on camera to what they just experienced. No one answers questions. Show's over.",
    cast: ["P4 (Exit Producer)"],
    props: [
      "Camera on tripod (records their response)",
      "Chair or stool (single, centered)",
      "Single overhead light or clip light (spotlight on the chair — everything else dark)",
      "Fabric backdrop or curtain (creates enclosed confessional feel)",
      "Small sign or card on chair: 'What do you have to say?'",
      "Labeled phone bags (stored here for return — organized alphabetically)",
      "Tip jar or tip envelopes + sign: 'Tips for performers'",
    ],
    transition: "P4 hands back their phone. Show's over. No questions answered.",
    notes: "No debrief. No explanation. Just: what do you have to say? P4 returns their labeled phone bag and points to the tip jar. Then they're released back into the world.",
  },
];

export default function ProductionPage() {
  const entryInterval = "6 min";
  const totalExperience = "~60 min (10 stations × 6 min)";
  const maxConcurrent = "Up to 8";
  const lastEntry = "8:54 PM";
  const lastExit = "~9:54 PM";

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Magic Show — Cincinnati</h1>
        <p className={styles.subtitle}>Production Plan — CONFIDENTIAL</p>
        <div className={styles.meta}>
          <div>
            <span className={styles.metaLabel}>Date</span>
            <span className={styles.metaValue}>October 10, 2026</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Window</span>
            <span className={styles.metaValue}>6:00 PM – 10:00 PM</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Capacity</span>
            <span className={styles.metaValue}>30 participants</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Entry Interval</span>
            <span className={styles.metaValue}>{entryInterval}</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Total Per Person</span>
            <span className={styles.metaValue}>{totalExperience}</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Last Entry</span>
            <span className={styles.metaValue}>{lastEntry}</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Last Exit</span>
            <span className={styles.metaValue}>{lastExit}</span>
          </div>
          <div>
            <span className={styles.metaLabel}>Max Concurrent</span>
            <span className={styles.metaValue}>{maxConcurrent} in house</span>
          </div>
        </div>
      </header>

      {/* Flow overview */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Flow Overview</h2>
        <div className={styles.flowTrack}>
          {SCENES.map((scene, i) => (
            <div key={scene.id} className={styles.flowNode}>
              <span className={styles.flowNum}>{scene.id === 0 ? "→" : scene.id === 9 ? "←" : scene.id}</span>
              <span className={styles.flowName}>{scene.name}</span>
              <span className={styles.flowDur}>{scene.activity}</span>
            </div>
          ))}
        </div>
        <div className={styles.floorMap}>
          <div className={styles.floorBlock}>
            <span className={styles.floorLabel}>Floor 1</span>
            <span>QVC → Sexy Cocktails → Spoonfed → (return) Hotline</span>
          </div>
          <div className={styles.floorBlock}>
            <span className={styles.floorLabel}>Floor 2</span>
            <span>Photoshoot → Drag</span>
          </div>
          <div className={styles.floorBlock}>
            <span className={styles.floorLabel}>Floor 3</span>
            <span>Nickel → Four Hands</span>
          </div>
        </div>
        <p className={styles.arcNote}>
          Arc: Chaos → Glamour → Intimacy → Full Circle → Reflection
        </p>
      </section>

      {/* Scene cards */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Scene Breakdown</h2>
        {SCENES.map((scene) => (
          <div key={scene.id} className={styles.sceneCard}>
            <div className={styles.sceneHeader}>
              <span className={styles.sceneNum}>
                {scene.id === 0 ? "PRE" : scene.id === 9 ? "POST" : `0${scene.id}`}
              </span>
              <div>
                <h3 className={styles.sceneName}>{scene.name}</h3>
                <p className={styles.sceneLoc}>
                  {scene.location} · {scene.activity} · {scene.duration}
                </p>
              </div>
            </div>
            <p className={styles.sceneDesc}>{scene.description}</p>
            <div className={styles.sceneDetails}>
              <div>
                <p className={styles.detailLabel}>Cast</p>
                <ul className={styles.list}>
                  {scene.cast.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={styles.detailLabel}>Props</p>
                <ul className={styles.list}>
                  {scene.props.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            {scene.transition && (
              <p className={styles.sceneTransition}>{scene.transition}</p>
            )}
            <p className={styles.sceneNote}>{scene.notes}</p>
          </div>
        ))}
      </section>

      {/* Cast summary */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cast Summary</h2>
        <div className={styles.castGrid}>
          {[
            { role: "Kelly Ann Bowman", station: "QVC + Hotline (voice)" },
            { role: "Bartender", station: "Sexy Cocktails" },
            { role: "Feeder", station: "Spoonfed" },
            { role: "Photographer", station: "Photoshoot" },
            { role: "Stylist", station: "Photoshoot" },
            { role: "Drag Performer", station: "Drag" },
            { role: "Pam", station: "Nickel" },
            { role: "Touch Performer x2", station: "Four Hands" },
          ].map((c) => (
            <div key={c.role} className={styles.castRow}>
              <span className={styles.castRole}>{c.role}</span>
              <span className={styles.castStation}>{c.station}</span>
            </div>
          ))}
        </div>
        <p className={styles.castTotal}>
          9 performers + 4 producers = 13 total crew
        </p>
      </section>

      {/* Producer placement */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Producer Placement (4 Total)</h2>
        <div className={styles.castGrid}>
          {[
            { role: "P1", station: "Arrival — check list, collect phone, rush to QVC" },
            { role: "P2", station: "Floor 1 → 2 staircase — receives from Spoonfed, delivers to Photoshoot" },
            { role: "P3", station: "Floor 2 → 3 → 1 — receives from Drag, delivers to Nickel, then walks them back down to Hotline after Four Hands" },
            { role: "P4", station: "Exit — walks them out, confessional, returns phone" },
          ].map((c) => (
            <div key={c.role} className={styles.castRow}>
              <span className={styles.castRole}>{c.role}</span>
              <span className={styles.castStation}>{c.station}</span>
            </div>
          ))}
        </div>
        <div className={styles.sceneNote} style={{ marginTop: "1rem" }}>
          Within each floor, performers handle the handoff as part of the scene. Producers only needed at floor transitions, consent gate, and entry/exit. Participants never walk unguided between floors.
        </div>
      </section>

      {/* Gear / Tech list */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Gear / Technical List</h2>

        <h3 className={styles.gearCategory}>Video</h3>
        <div className={styles.castGrid}>
          {[
            { item: "Camera x2", note: "One on QVC set (live feed to Hotline), one for Confessional" },
            { item: "Monitor x1", note: "Hotline station — displays live QVC feed" },
            { item: "Tripods x2", note: "For both cameras" },
            { item: "HDMI cable", note: "QVC camera → Hotline monitor (same floor — short run)" },
          ].map((g) => (
            <div key={g.item} className={styles.castRow}>
              <span className={styles.castRole}>{g.item}</span>
              <span className={styles.castStation}>{g.note}</span>
            </div>
          ))}
        </div>

        <h3 className={styles.gearCategory}>Audio</h3>
        <div className={styles.castGrid}>
          {[
            { item: "Handheld mic receiver x1", note: "Old-school phone look — Hotline station. Wired or wireless to QVC speaker." },
            { item: "Bluetooth speaker (small) x1", note: "QVC set — plays caller's voice from Hotline mic" },
            { item: "Bluetooth speaker (medium) x3", note: "Drag room, Four Hands, and ambient music in hallways/transitions" },
            { item: "Playlist / music device", note: "Phone or laptop running playlists per room" },
          ].map((g) => (
            <div key={g.item} className={styles.castRow}>
              <span className={styles.castRole}>{g.item}</span>
              <span className={styles.castStation}>{g.note}</span>
            </div>
          ))}
        </div>

        <h3 className={styles.gearCategory}>Lighting</h3>
        <div className={styles.castGrid}>
          {[
            { item: "Ring light x1", note: "QVC set — makes it feel like real TV" },
            { item: "LED light bar / strip x2", note: "Photoshoot station + Drag room" },
            { item: "Accent light (lamp/bulb) x1", note: "Hotline — turns on above door as transition cue" },
            { item: "Dim / warm bulbs x2", note: "Nickel room + Four Hands — intimate mood" },
            { item: "LED candles or string lights", note: "Hallways / stairwells for wayfinding between floors" },
          ].map((g) => (
            <div key={g.item} className={styles.castRow}>
              <span className={styles.castRole}>{g.item}</span>
              <span className={styles.castStation}>{g.note}</span>
            </div>
          ))}
        </div>

        <h3 className={styles.gearCategory}>Operations</h3>
        <div className={styles.castGrid}>
          {[
            { item: "Phone collection bags x30", note: "Labeled with participant name — collected at Arrival, returned at Exit" },
            { item: "Clipboard + printed guest list", note: "P1 at Arrival" },
            { item: "Printed consent cards x30", note: "Four Hands — checkboxes for comfort level" },
            { item: "Printed waivers x30", note: "Signed at Arrival before entering" },
            { item: "Timer / watch per producer", note: "Keep the 6-min rotation on track" },
            { item: "Walkie-talkies or group text", note: "Producer communication — signal when to send next person" },
            { item: "Extension cords / power strips", note: "Each floor will need power for cameras, monitors, speakers, lights" },
            { item: "Gaff tape", note: "Cable management, floor arrows, marking stations" },
          ].map((g) => (
            <div key={g.item} className={styles.castRow}>
              <span className={styles.castRole}>{g.item}</span>
              <span className={styles.castStation}>{g.note}</span>
            </div>
          ))}
        </div>

        <h3 className={styles.gearCategory}>Set Dressing / Photoshoot</h3>
        <div className={styles.castGrid}>
          {[
            { item: "Wigs (variety) x6+", note: "Photoshoot + Drag — participant keeps wig between stations" },
            { item: "Camera (photo) x1", note: "Photographer's own camera for bathtub shoot" },
            { item: "QVC backdrop / set dressing", note: "Tablecloth, product display, signage — sell the bit" },
            { item: "Bathtub props", note: "Rubber ducks, flowers, robes, accessories — make it ridiculous" },
            { item: "Curtain or fabric", note: "Between Photoshoot → Drag doorway" },
          ].map((g) => (
            <div key={g.item} className={styles.castRow}>
              <span className={styles.castRole}>{g.item}</span>
              <span className={styles.castStation}>{g.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Ideas */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Brands to Consider</h2>
        <p className={styles.sceneDesc} style={{ marginBottom: "1.5rem" }}>
          Brands whose products could naturally live inside a scene — as the set, the prop, or the experience itself.
        </p>
        <div className={styles.castGrid}>
          {[
            { item: "Sexy Cocktails", note: "Sazerac (Jumpsuit client) — their spirits ARE the bar menu" },
            { item: "Spoonfed", note: "Local caviar or gourmet brand — their product is literally placed on tongues" },
            { item: "Photoshoot / Drag", note: "Pendleton — robes and towels for the bathtub, keeps it luxe" },
            { item: "Photoshoot / Drag", note: "A wig or beauty brand — participants wear the product, get photographed in it" },
            { item: "Four Hands", note: "A wellness / body oil brand — massage oils, candles, blankets" },
            { item: "QVC", note: "Any bold brand that wants their product sold live on a fake QVC set" },
            { item: "Confessional", note: "Polaroid or Fujifilm — instant camera, participant leaves with a branded photo" },
            { item: "Entire Show (future)", note: "Meta (Ray-Ban) — POV smart glasses as presenting sponsor. Participants wear them through the experience. 30 first-person journeys per show. Recording limits need to be solved first." },
          ].map((g) => (
            <div key={g.item} className={styles.castRow}>
              <span className={styles.castRole}>{g.item}</span>
              <span className={styles.castStation}>{g.note}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        CONFIDENTIAL — The Magic Show Cincinnati — A J.O.B. and Jumpsuit Production
      </footer>
    </div>
  );
}
