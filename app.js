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
      audio: encodeURI(p.audio),
      thumbnail: escapeHtml(p.thumbnail),
      youtubeId: encodeURIComponent(p.youtubeId || ""),
      gumroad: encodeURI(p.gumroad)
    };

    // The cover art stays visible the whole time.
    // The visitor previews the piece via a native HTML5 audio player —
    // download menu item and right-click are disabled because the MP3
    // is a paid product on Gumroad. See memory: lpp-no-mp3-download.
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
          <p class="piece-meta">${safe.mood}</p>
          <p class="piece-desc">${safe.description}</p>
          <audio class="piece-audio" controls controlsList="nodownload" oncontextmenu="return false;" preload="metadata" src="${safe.audio}">
            Your browser does not support the audio element. Please use a modern browser to preview this piece.
          </audio>
          <div class="piece-actions">
            <a class="btn btn-primary" href="${safe.gumroad}" target="_blank" rel="noopener">
              <span class="btn-main">Buy MP3 + WAV</span>
              <span class="btn-tag">${safe.price}</span>
            </a>
            ${youtubeFallback}
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

  render();
})();
