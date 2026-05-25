/* Lovely Piano Pieces — render + filter */

(function () {
  const grid = document.getElementById("pieces-grid");
  const moodSelect = document.getElementById("filter-mood");
  const levelSelect = document.getElementById("filter-level");
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
      difficulty: escapeHtml(p.difficulty),
      length: escapeHtml(p.length),
      price: escapeHtml(p.price),
      description: escapeHtml(p.description),
      audio: encodeURI(p.audio),
      thumbnail: escapeHtml(p.thumbnail),
      youtubeId: encodeURIComponent(p.youtubeId || ""),
      gumroad: encodeURI(p.gumroad)
    };

    // The cover art stays visible the whole time.
    // The visitor plays the piece via a native HTML5 audio player below it —
    // no iframe, no Content ID issues, no leaving the site.
    const youtubeFallback = p.youtubeId
      ? `<a class="watch-link" href="https://www.youtube.com/watch?v=${safe.youtubeId}" target="_blank" rel="noopener">
           Or watch on YouTube &rarr;
         </a>`
      : "";

    return `
      <article class="piece-card">
        <div class="piece-cover">
          <img class="piece-thumb" src="${safe.thumbnail}" alt="${safe.title} cover art" loading="lazy" />
        </div>
        <div class="piece-body">
          <h3 class="piece-title">${safe.title}</h3>
          <p class="piece-meta">${safe.mood} &middot; ${safe.difficulty}</p>
          <p class="piece-desc">${safe.description}</p>
          <audio class="piece-audio" controls preload="metadata" src="${safe.audio}">
            Your browser does not support the audio element.
            <a href="${safe.audio}">Download the MP3.</a>
          </audio>
          <div class="piece-actions">
            <a class="btn btn-primary" href="${safe.gumroad}" target="_blank" rel="noopener">
              ${typeof BETA !== "undefined" && BETA
                ? `<span class="btn-main">Get score free</span>
                   <span class="btn-tag">Beta &middot; normally <s>${safe.price}</s></span>`
                : `Buy score &middot; ${safe.price}`}
            </a>
            ${youtubeFallback}
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    const mood = moodSelect.value;
    const level = levelSelect.value;

    const filtered = PIECES.filter(p =>
      (mood === "all" || p.mood === mood) &&
      (level === "all" || p.difficulty === level)
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
  levelSelect.addEventListener("change", render);

  render();
})();
