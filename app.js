/* Lovely Piano Pieces — render + filter */

(function () {
  const grid = document.getElementById("pieces-grid");
  const moodSelect = document.getElementById("filter-mood");
  const emptyState = document.getElementById("empty-state");
  const yearSpan = document.getElementById("year");

  yearSpan.textContent = new Date().getFullYear();

  // Populate mood filter from data
  const moods = Array.from(new Set(PIECES.map(p => p.mood))).sort();
  moods.forEach(mood => {
    const opt = document.createElement("option");
    opt.value = mood;
    opt.textContent = mood;
    moodSelect.appendChild(opt);
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderPiece(p) {
    const safe = {
      title: escapeHtml(p.title),
      mood: escapeHtml(p.mood),
      length: escapeHtml(p.length),
      price: escapeHtml(p.price),
      description: escapeHtml(p.description),
      thumbnail: escapeHtml(p.thumbnail),
      youtubeId: encodeURIComponent(p.youtubeId || ""),
      gumroad: encodeURI(p.gumroad)
    };

    // The cover art stays visible until the visitor clicks Play.
    // Clicking swaps the thumbnail for an embedded YouTube iframe that
    // plays in place (click-to-play keeps the page fast — the iframe
    // only loads on demand). The YouTube embed is the only preview;
    // the MP3 is a paid product on Gumroad and is not exposed here.
    const playButton = p.youtubeId
      ? `<button class="play-overlay" data-youtube="${safe.youtubeId}" aria-label="Play ${safe.title} on YouTube">
           <span class="play-icon" aria-hidden="true"></span>
         </button>`
      : "";

    // Cover art comes straight from YouTube's auto-generated thumbnail
    // (the 16:9 artwork from the uploaded 2K video) — no separate image
    // upload needed. Falls back to hqdefault if maxresdefault is missing,
    // then to any local thumbnail field for legacy entries.
    const coverImg = p.youtubeId
      ? `<img class="piece-thumb" src="https://img.youtube.com/vi/${safe.youtubeId}/maxresdefault.jpg"
             alt="${safe.title} cover art" loading="lazy"
             onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${safe.youtubeId}/hqdefault.jpg';" />`
      : `<img class="piece-thumb" src="${safe.thumbnail}" alt="${safe.title} cover art" loading="lazy" />`;

    return `
      <article class="piece-card">
        <div class="piece-cover">
          ${coverImg}
          ${playButton}
        </div>
        <div class="piece-body">
          <h3 class="piece-title">${safe.title}</h3>
          <p class="piece-meta">${safe.mood}</p>
          <p class="piece-desc">${safe.description}</p>
          <div class="piece-actions">
            <a class="btn btn-primary" href="${safe.gumroad}" target="_blank" rel="noopener">
              <span class="btn-main">Buy MP3 + WAV</span>
              <span class="btn-tag">${safe.price}</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    const mood = moodSelect.value;

    const filtered = PIECES.filter(p =>
      (mood === "all" || p.mood === mood)
    );

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      grid.innerHTML = filtered.map(renderPiece).join("");
    }
  }

  moodSelect.addEventListener("change", render);

  // Click-to-play: swap the cover thumbnail for an embedded YouTube
  // player that autoplays in place.
  grid.addEventListener("click", function (e) {
    const btn = e.target.closest(".play-overlay");
    if (!btn) return;
    const id = btn.getAttribute("data-youtube");
    if (!id) return;
    const cover = btn.closest(".piece-cover");
    if (!cover) return;
    cover.innerHTML =
      '<iframe class="piece-video" ' +
      'src="https://www.youtube.com/embed/' + id +
      '?autoplay=1&rel=0&modestbranding=1" ' +
      'title="YouTube video player" frameborder="0" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
      'allowfullscreen></iframe>';
  });

  render();
})();
