/*
  Lovely Piano Pieces — catalog data.

  To add a new piece, add an object to the PIECES array below.
  Each piece needs:
    title       — display name
    mood        — one short label (e.g. "Reflective", "Hopeful", "Cinematic")
    difficulty  — "Beginner" | "Intermediate" | "Advanced"
    length      — "m:ss" string
    price       — display price (e.g. "$4")
    description — one short sentence
    youtube     — full URL to the piece on your YouTube channel
    gumroad     — full URL to the Gumroad product page for the score
    coverColor  — any CSS color for the cover background (try warm muted tones)
    coverInitial — single character or short text shown on the cover (e.g. "C")
*/

const PIECES = [
  {
    title: "Childhood Memory",
    mood: "Reflective",
    difficulty: "Intermediate",
    length: "3:24",
    price: "$4",
    description: "A gentle melody that drifts between minor and major, the way old memories do.",
    youtube: "https://www.youtube.com/watch?v=REPLACE_ME",
    gumroad: "https://gumroad.com/l/REPLACE_ME",
    coverColor: "#b7a99a",
    coverInitial: "C"
  },
  {
    title: "First Light",
    mood: "Hopeful",
    difficulty: "Beginner",
    length: "2:48",
    price: "$3",
    description: "A short, bright piece in C major — the kind of music for the first cup of coffee.",
    youtube: "https://www.youtube.com/watch?v=REPLACE_ME",
    gumroad: "https://gumroad.com/l/REPLACE_ME",
    coverColor: "#d6c39a",
    coverInitial: "F"
  },
  {
    title: "Distant Storm",
    mood: "Cinematic",
    difficulty: "Advanced",
    length: "4:11",
    price: "$5",
    description: "Low rolling left-hand chords beneath a melody that arrives slowly, then all at once.",
    youtube: "https://www.youtube.com/watch?v=REPLACE_ME",
    gumroad: "https://gumroad.com/l/REPLACE_ME",
    coverColor: "#6a6f78",
    coverInitial: "D"
  },
  {
    title: "Evening Letter",
    mood: "Reflective",
    difficulty: "Intermediate",
    length: "3:02",
    price: "$4",
    description: "A slow waltz, written like a note you almost sent but kept for yourself.",
    youtube: "https://www.youtube.com/watch?v=REPLACE_ME",
    gumroad: "https://gumroad.com/l/REPLACE_ME",
    coverColor: "#9c8b7a",
    coverInitial: "E"
  },
  {
    title: "Garden in Spring",
    mood: "Hopeful",
    difficulty: "Beginner",
    length: "2:31",
    price: "$3",
    description: "Light arpeggios over a simple melody — easy on the hands, easy on the heart.",
    youtube: "https://www.youtube.com/watch?v=REPLACE_ME",
    gumroad: "https://gumroad.com/l/REPLACE_ME",
    coverColor: "#a8b59a",
    coverInitial: "G"
  },
  {
    title: "Night Train",
    mood: "Cinematic",
    difficulty: "Advanced",
    length: "4:48",
    price: "$5",
    description: "A driving ostinato that builds the way a long journey does — quietly, then with weight.",
    youtube: "https://www.youtube.com/watch?v=REPLACE_ME",
    gumroad: "https://gumroad.com/l/REPLACE_ME",
    coverColor: "#3e3a3a",
    coverInitial: "N"
  }
];
