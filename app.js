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
      youtube: encodeURI(p.youtube),
      gumroad: encodeURI(p.gumroad),
      coverColor: escapeHtml(p.coverColor),
      coverInitial: escapeHtml(p.coverInitial)
    };

    return `
      <article class="piece-card">
        <div class="piece-cover" style="background: ${safe.coverColor};">
          <span>${safe.coverInitial}</span>
        </div>
        <div class="piece-body">
          <h3 class="piece-title">${safe.title}</h3>
          <p class="piece-meta">${safe.mood} &middot; ${safe.difficulty} &middot; ${safe.length}</p>
          <p class="piece-desc">${safe.description}</p>
          <div class="piece-actions">
            <a class="btn btn-youtube" href="${safe.youtube}" target="_blank" rel="noopener">
              <span class="yt-dot" aria-hidden="true"></span>
              Listen on YouTube
            </a>
            <a class="btn btn-primary" href="${safe.gumroad}" target="_blank" rel="noopener">
              Buy score &middot; ${safe.price}
            </a>
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
