/*
  Lovely Piano Pieces — catalog data.

  To add a new piece, add an object to the PIECES array below.
  Each piece needs:
    title       — display name
    mood        — one short label (e.g. "Jazz", "Blues", "Neoclassic")
    length      — "m:ss" string
    price       — display price shown on the buy button (e.g. "SGD$5")
    description — one short sentence
    audio       — relative path to the MP3 file (e.g. "audio/glass-meadows.mp3")
                  Played directly on the page via a native HTML5 audio player.
    thumbnail   — relative path to the cover art image (e.g. "images/glass-meadows.png")
    youtubeId   — YouTube video ID for the "Watch on YouTube" fallback link
                  (the part after youtu.be/ or v= in the URL)
    gumroad     — full URL to the Gumroad product page for the score
*/

const BETA = false;

const PIECES = [
  {
    title: "Havana Rain Falls",
    mood: "Latin Jazz",
    length: "3:08",
    price: "SGD$5",
    description: "An original piano piece — a vibrant Latin Jazz instrumental with soulful Cuban rhythms, warm phrasing, and a sun-soaked, tropical-evening mood.",
    audio: "audio/latin-jazz-havana-rain-falls.mp3",
    thumbnail: "images/havana-rain-falls-7-4.png",
    youtubeId: "y1qFKbcy5Ts",
    gumroad: "https://aceduworks.gumroad.com/l/xsefl"
  },
  {
    title: "Whiskey and Rain",
    mood: "Blues",
    length: "3:27",
    price: "SGD$5",
    description: "An original piano piece — slow blues with a heartbeat, unhurried and honest.",
    audio: "audio/whiskey-and-rain.mp3",
    thumbnail: "images/whiskey-and-rain.png",
    youtubeId: "jRH_4xtNK4s",
    gumroad: "https://aceduworks.gumroad.com/l/jqhbjg"
  },
  {
    title: "Silver Nocturne",
    mood: "Classical",
    length: "2:14",
    price: "SGD$5",
    description: "An original piano piece — reflective, lyrical, and atmospheric.",
    audio: "audio/silver-nocturne.mp3",
    thumbnail: "images/silver-nocturne.png",
    youtubeId: "3lNwPzZJJyg",
    gumroad: "https://aceduworks.gumroad.com/l/cxnix"
  },
  {
    title: "Glass Meadows",
    mood: "Neoclassic",
    length: "3:00",
    price: "SGD$5",
    description: "A gentle piece — light and crystalline, like sunlight on a meadow.",
    audio: "audio/glass-meadows.mp3",
    thumbnail: "images/glass-meadows.png",
    youtubeId: "4T-sbXPa0Ck",
    gumroad: "https://aceduworks.gumroad.com/l/glass-meadows"
  },
  {
    title: "Rooftop at Dusk",
    mood: "Jazz",
    length: "3:00",
    price: "SGD$5",
    description: "A smoky, late-evening jazz piece — city lights, a glass of wine, and a Steinway under the sky.",
    audio: "audio/rooftop-at-dusk.mp3",
    thumbnail: "images/rooftop-at-dusk.png",
    youtubeId: "HZ67wrzL9mc",
    gumroad: "https://aceduworks.gumroad.com/l/rooftop-at-dusk"
  },
  {
    title: "Slow Walk Home",
    mood: "Blues",
    length: "3:00",
    price: "SGD$5",
    description: "An easy, after-hours blues — slow steps down a quiet street, hands warm on the keys.",
    audio: "audio/slow-walk-home.mp3",
    thumbnail: "images/slow-walk-home.png",
    youtubeId: "-tALwWNb1JU",
    gumroad: "https://aceduworks.gumroad.com/l/slow-walk-home"
  }
];
