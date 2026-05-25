/*
  Lovely Piano Pieces — catalog data.

  To add a new piece, add an object to the PIECES array below.
  Each piece needs:
    title       — display name
    mood        — one short label (e.g. "Jazz", "Blues", "Neoclassic")
    difficulty  — "Beginner" | "Intermediate" | "Advanced"
    length      — "m:ss" string
    price       — display price (e.g. "SGD$15")
                  NOTE: while the site is in BETA, the button shows the
                  score as free. The price field still records the
                  post-beta price so we don't lose it. See app.js + the
                  BETA flag at the top of this file.
    description — one short sentence
    audio       — relative path to the MP3 file (e.g. "audio/glass-meadows.mp3")
                  Played directly on the page via a native HTML5 audio player.
    thumbnail   — relative path to the cover art image (e.g. "images/glass-meadows.jpg")
    youtubeId   — YouTube video ID for the "Watch on YouTube" fallback link
                  (the part after youtu.be/ or v= in the URL)
    gumroad     — full URL to the Gumroad product page for the score
*/

// While BETA is true, the buy button shows "Get free · Beta" with the
// regular price struck through. Flip to false once beta testing ends.
const BETA = true;

const PIECES = [
  {
    title: "Glass Meadows",
    mood: "Neoclassic",
    difficulty: "Beginner",
    length: "3:00",
    price: "SGD$15",
    description: "A gentle, beginner-friendly piece — light and crystalline, like sunlight on a meadow.",
    audio: "audio/glass-meadows.mp3",
    thumbnail: "images/glass-meadows.png",
    youtubeId: "4T-sbXPa0Ck",
    gumroad: "https://aceduworks.gumroad.com/l/glass-meadows"
  },
  {
    title: "Rooftop at Dusk",
    mood: "Jazz",
    difficulty: "Intermediate",
    length: "3:00",
    price: "SGD$15",
    description: "A smoky, late-evening jazz piece — city lights, a glass of wine, and a Steinway under the sky.",
    audio: "audio/rooftop-at-dusk.mp3",
    thumbnail: "images/rooftop-at-dusk.png",
    youtubeId: "HZ67wrzL9mc",
    gumroad: "https://aceduworks.gumroad.com/l/rooftop-at-dusk"
  },
  {
    title: "Slow Walk Home",
    mood: "Blues",
    difficulty: "Intermediate",
    length: "3:00",
    price: "SGD$15",
    description: "An easy, after-hours blues — slow steps down a quiet street, hands warm on the keys.",
    audio: "audio/slow-walk-home.mp3",
    thumbnail: "images/slow-walk-home.png",
    youtubeId: "-tALwWNb1JU",
    gumroad: "https://aceduworks.gumroad.com/l/slow-walk-home"
  }
];
