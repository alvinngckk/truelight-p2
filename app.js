const app = document.getElementById("app");
const data = window.QUIZ_DATA;
let state = { view: "home" };

function stars(score, total) {
  const r = score / total;
  if (r >= 0.9) return "⭐⭐⭐";
  if (r >= 0.7) return "⭐⭐";
  if (r >= 0.5) return "⭐";
  return "再試一次也很好";
}

function el(html) { app.innerHTML = html; }

/* ---- Inline SVG mascots / icons ---- */
function svgStar(fill) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="${fill||"#ffb703"}" d="M12 2.5l2.7 6.2 6.8.6-5.2 4.5 1.6 6.6L12 16.8 6.1 20.4l1.6-6.6L2.5 9.3l6.8-.6L12 2.5z"/></svg>`;
}

function homeMascot() {
  return `<svg class="mascot mascot-float" viewBox="0 0 120 120" role="img" aria-label="開開心心的學習小精靈">
    <circle cx="60" cy="60" r="54" fill="#FFE8B8"/>
    <circle cx="60" cy="62" r="42" fill="#FFD59A"/>
    <ellipse cx="60" cy="78" rx="28" ry="18" fill="#fff"/>
    <circle cx="44" cy="56" r="7" fill="#2b241c"/>
    <circle cx="76" cy="56" r="7" fill="#2b241c"/>
    <circle cx="46" cy="54" r="2.2" fill="#fff"/>
    <circle cx="78" cy="54" r="2.2" fill="#fff"/>
    <path d="M48 72c6 8 18 8 24 0" fill="none" stroke="#e15b64" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="34" cy="68" rx="6" ry="4" fill="#ff9eb5" opacity=".7"/>
    <ellipse cx="86" cy="68" rx="6" ry="4" fill="#ff9eb5" opacity=".7"/>
    <path d="M28 38c8-14 24-18 32-8" fill="none" stroke="#ff8a4c" stroke-width="5" stroke-linecap="round"/>
    <path d="M92 38c-8-14-24-18-32-8" fill="none" stroke="#3aa0ff" stroke-width="5" stroke-linecap="round"/>
    <circle cx="96" cy="28" r="8" fill="#ffb703"/>
    <path fill="#fff" d="M96 23l1.5 3.4 3.7.3-2.8 2.5.9 3.6L96 30.8l-3.3 2 0.9-3.6-2.8-2.5 3.7-.3z"/>
  </svg>`;
}

function celebrateMascot() {
  return `<svg class="mascot lg mascot-float" viewBox="0 0 120 120" role="img" aria-label="慶祝公仔">
    <circle cx="60" cy="64" r="40" fill="#FFD59A"/>
    <circle cx="44" cy="58" r="6.5" fill="#2b241c"/>
    <circle cx="76" cy="58" r="6.5" fill="#2b241c"/>
    <circle cx="46" cy="56" r="2" fill="#fff"/>
    <circle cx="78" cy="56" r="2" fill="#fff"/>
    <path d="M45 74c7 10 23 10 30 0" fill="none" stroke="#e15b64" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M22 48c-8 4-12 14-8 22" fill="none" stroke="#7c5cff" stroke-width="4" stroke-linecap="round"/>
    <path d="M98 48c8 4 12 14 8 22" fill="none" stroke="#3aa0ff" stroke-width="4" stroke-linecap="round"/>
    <circle cx="28" cy="22" r="6" fill="#ff8a4c"/>
    <circle cx="92" cy="20" r="5" fill="#2fbf71"/>
    <circle cx="60" cy="14" r="5" fill="#ffb703"/>
    <path d="M18 90h84" stroke="#f0d8b8" stroke-width="6" stroke-linecap="round"/>
  </svg>`;
}

function subjectIcon(id) {
  if (id === "chi") {
    return `<svg class="subj-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="12" width="34" height="42" rx="4" fill="#ff8a4c"/>
      <rect x="14" y="16" width="26" height="34" rx="2" fill="#fff7ec"/>
      <path d="M20 28h14M20 36h10" stroke="#ff8a4c" stroke-width="3" stroke-linecap="round"/>
      <circle cx="48" cy="44" r="12" fill="#FFE8B8"/>
      <circle cx="44" cy="42" r="2.2" fill="#2b241c"/>
      <circle cx="52" cy="42" r="2.2" fill="#2b241c"/>
      <path d="M45 48c2.5 2.5 5.5 2.5 8 0" fill="none" stroke="#e15b64" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`;
  }
  if (id === "eng") {
    return `<svg class="subj-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="14" width="36" height="36" rx="8" fill="#3aa0ff"/>
      <text x="26" y="38" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" font-family="sans-serif">ABC</text>
      <circle cx="48" cy="46" r="12" fill="#FFE8B8"/>
      <circle cx="44" cy="44" r="2.2" fill="#2b241c"/>
      <circle cx="52" cy="44" r="2.2" fill="#2b241c"/>
      <path d="M45 50c2.5 2.5 5.5 2.5 8 0" fill="none" stroke="#e15b64" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`;
  }
  if (id === "math") {
    return `<svg class="subj-icon" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="28" cy="30" r="20" fill="#7c5cff"/>
      <text x="28" y="37" text-anchor="middle" font-size="20" font-weight="700" fill="#fff" font-family="sans-serif">123</text>
      <circle cx="48" cy="46" r="12" fill="#FFE8B8"/>
      <circle cx="44" cy="44" r="2.2" fill="#2b241c"/>
      <circle cx="52" cy="44" r="2.2" fill="#2b241c"/>
      <path d="M45 50c2.5 2.5 5.5 2.5 8 0" fill="none" stroke="#e15b64" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="42" y="8" width="14" height="14" rx="3" fill="#ffb703"/>
      <path d="M45 15h8M49 11v8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  }
  return `<svg class="subj-icon" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="28" cy="30" r="20" fill="#2fbf71"/>
    <ellipse cx="28" cy="30" rx="8" ry="18" fill="#1f9d55" opacity=".35"/>
    <path d="M10 30h36M28 12c6 6 6 24 0 36M28 12c-6 6-6 24 0 36" fill="none" stroke="#fff" stroke-width="2"/>
    <circle cx="48" cy="46" r="12" fill="#FFE8B8"/>
    <circle cx="44" cy="44" r="2.2" fill="#2b241c"/>
    <circle cx="52" cy="44" r="2.2" fill="#2b241c"/>
    <path d="M45 50c2.5 2.5 5.5 2.5 8 0" fill="none" stroke="#e15b64" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`;
}

function quizBuddy(mood) {
  // mood: idle | happy | encourage
  const mouth = mood === "happy"
    ? `<path d="M48 74c7 11 25 11 32 0" fill="none" stroke="#e15b64" stroke-width="3.5" stroke-linecap="round"/>`
    : mood === "encourage"
    ? `<path d="M52 78c6 4 18 4 24 0" fill="none" stroke="#e15b64" stroke-width="3" stroke-linecap="round"/>`
    : `<path d="M52 76c6 6 18 6 24 0" fill="none" stroke="#e15b64" stroke-width="3" stroke-linecap="round"/>`;
  const cheeks = mood === "happy"
    ? `<ellipse cx="40" cy="70" rx="6" ry="4" fill="#ff9eb5"/><ellipse cx="88" cy="70" rx="6" ry="4" fill="#ff9eb5"/>`
    : `<ellipse cx="40" cy="70" rx="5" ry="3.5" fill="#ff9eb5" opacity=".6"/><ellipse cx="88" cy="70" rx="5" ry="3.5" fill="#ff9eb5" opacity=".6"/>`;
  const eyes = mood === "encourage"
    ? `<path d="M42 56c3-4 8-4 11 0" fill="none" stroke="#2b241c" stroke-width="3" stroke-linecap="round"/>
       <path d="M75 56c3-4 8-4 11 0" fill="none" stroke="#2b241c" stroke-width="3" stroke-linecap="round"/>`
    : `<circle cx="48" cy="56" r="6" fill="#2b241c"/><circle cx="80" cy="56" r="6" fill="#2b241c"/>
       <circle cx="50" cy="54" r="2" fill="#fff"/><circle cx="82" cy="54" r="2" fill="#fff"/>`;
  const spark = mood === "happy"
    ? `<circle cx="20" cy="28" r="5" fill="#ffb703"/><circle cx="108" cy="32" r="4" fill="#3aa0ff"/>`
    : mood === "encourage"
    ? `<circle cx="20" cy="36" r="4" fill="#7c5cff" opacity=".8"/>`
    : "";
  const cls = mood === "happy" ? "buddy happy" : mood === "encourage" ? "buddy sad" : "buddy";
  return `<svg class="${cls}" viewBox="0 0 128 120" role="img" aria-label="答題小幫手">
    <ellipse cx="64" cy="108" rx="34" ry="8" fill="#f0d8b8"/>
    <circle cx="64" cy="62" r="40" fill="#FFE8B8"/>
    <path d="M34 40c8-16 20-20 30-10" fill="none" stroke="#ff8a4c" stroke-width="5" stroke-linecap="round"/>
    <path d="M94 40c-8-16-20-20-30-10" fill="none" stroke="#3aa0ff" stroke-width="5" stroke-linecap="round"/>
    ${eyes}${cheeks}${mouth}${spark}
  </svg>`;
}

function decoStars() {
  return `<div class="deco-row" aria-hidden="true">${svgStar("#ffb703")}${svgStar("#ff8a4c")}${svgStar("#3aa0ff")}${svgStar("#7c5cff")}${svgStar("#2fbf71")}</div>`;
}

function home() {
  const cards = data.subjects.map(s => `
    <button class="card ${s.id}" data-subject="${s.id}">
      <div class="icon-wrap">${subjectIcon(s.id)}</div>
      <div class="card-body">
        <h2>${s.name}</h2>
        <p>${s.blurb}</p>
      </div>
    </button>`).join("");
  el(`
    <div class="top">
      <div class="hero">
        ${homeMascot()}
        <div class="hero-text">
          <h1>大坑真光 · 小二挑戰</h1>
          <p class="sub">二年級上學期程度 · 練習站</p>
        </div>
      </div>
      <div class="pill">最新題目 ${data.updated}</div>
    </div>
    ${decoStars()}
    <div class="grid">${cards}</div>
  `);
  app.querySelectorAll("[data-subject]").forEach(b => {
    b.onclick = () => { state = { view: "subject", subject: b.dataset.subject }; render(); };
  });
}

function subjectView() {
  const s = data.subjects.find(x => x.id === state.subject);
  const list = s.quizzes.map(q => `
    <button class="quizbtn" data-quiz="${q.id}">
      <span>${q.title}</span><span class="count">${q.questions.length} 題</span>
    </button>`).join("");
  el(`
    <button class="back" id="back">← 返回</button>
    <div class="subj-head">
      <div class="icon-wrap" style="width:64px;height:64px;border-radius:16px;display:grid;place-items:center;background:#fff;border:3px solid var(--line)">${subjectIcon(s.id)}</div>
      <div>
        <h1>${s.name}</h1>
        <p class="sub">${s.blurb}</p>
      </div>
    </div>
    <div class="list">${list}</div>
  `);
  document.getElementById("back").onclick = () => { state = { view: "home" }; render(); };
  app.querySelectorAll("[data-quiz]").forEach(b => {
    b.onclick = () => {
      const quiz = s.quizzes.find(q => q.id === b.dataset.quiz);
      state = { view: "quiz", subject: s.id, quiz, i: 0, score: 0, picked: null, done: false, review: [] };
      render();
    };
  });
}

function quizView() {
  const { quiz, i, picked } = state;
  const item = quiz.questions[i];
  const pct = Math.round((i / quiz.questions.length) * 100);
  const passage = quiz.passage ? `<div class="passage">${quiz.passage}</div>` : "";
  const opts = item.options.map((o, idx) => {
    let cls = "opt";
    if (picked !== null) {
      if (idx === item.a) cls += " good";
      else if (idx === picked) cls += " bad";
    }
    return `<button class="${cls}" data-i="${idx}" ${picked!==null?"disabled":""}>${o}</button>`;
  }).join("");
  const mood = picked === null ? "idle" : (picked === item.a ? "happy" : "encourage");
  const feedback = picked === null ? "" : `
    <div class="why">${picked===item.a?"答對了！真棒！":"差一點，下次加油！"} ${item.why}</div>
    <button class="next" id="next">${i+1===quiz.questions.length?"看成績":"下一題"}</button>`;
  el(`
    <button class="back" id="back">← 離開</button>
    <div class="quiz-head">
      <h1>${quiz.title}</h1>
      ${quizBuddy(mood)}
    </div>
    <div class="progress"><div class="bar" style="width:${pct}%"></div></div>
    <div class="qbox">
      <div class="q-meta"><span>第 ${i+1} / ${quiz.questions.length} 題</span><span class="sparkle">✨</span></div>
      ${passage}
      <h2>${item.q}</h2>
      <div class="options">${opts}</div>
      ${feedback}
    </div>
  `);
  document.getElementById("back").onclick = () => { state = { view: "subject", subject: state.subject }; render(); };
  app.querySelectorAll(".opt").forEach(b => {
    b.onclick = () => {
      if (state.picked !== null) return;
      const idx = Number(b.dataset.i);
      state.picked = idx;
      const ok = idx === item.a;
      if (ok) state.score += 1;
      state.review.push({ q: item.q, ok, correct: item.options[item.a], yours: item.options[idx] });
      render();
    };
  });
  const next = document.getElementById("next");
  if (next) next.onclick = () => {
    if (state.i + 1 >= quiz.questions.length) state.view = "result";
    else { state.i += 1; state.picked = null; }
    render();
  };
}

function resultView() {
  const { quiz, score, review } = state;
  const total = quiz.questions.length;
  const rows = review.map((r, n) => `
    <div class="review-item">${n+1}. ${r.ok?"✅":"❌"} ${r.q}<br>正確答案：${r.correct}</div>`).join("");
  const msg = score / total >= 0.9 ? "太厲害了！" : score / total >= 0.7 ? "做得很好！" : score / total >= 0.5 ? "繼續加油！" : "再試一次，你會更棒！";
  el(`
    <div class="qbox">
      <div class="result-hero">
        ${celebrateMascot()}
        <h1>完成！</h1>
        <div class="stars">${stars(score, total)}</div>
        <h2>${score} / ${total}</h2>
        <p>${quiz.title} · ${msg}</p>
      </div>
      ${decoStars()}
      <div class="btn-row">
        <button class="next" id="again">再做一次</button>
        <button class="back" id="home">回主頁</button>
      </div>
      <div class="why">${rows}</div>
    </div>
  `);
  document.getElementById("again").onclick = () => {
    state.i = 0; state.score = 0; state.picked = null; state.review = []; state.view = "quiz";
    render();
  };
  document.getElementById("home").onclick = () => { state = { view: "home" }; render(); };
}

function render() {
  if (state.view === "home") home();
  else if (state.view === "subject") subjectView();
  else if (state.view === "quiz") quizView();
  else resultView();
}
render();
