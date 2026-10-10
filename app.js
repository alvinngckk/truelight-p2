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

function timesMascot() {
  return `<svg class="times-mascot mascot-float" viewBox="0 0 140 120" role="img" aria-label="乘數小勇士火箭公仔">
    <defs>
      <linearGradient id="rocketBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ff8a4c"/>
        <stop offset="100%" stop-color="#ff5c7a"/>
      </linearGradient>
    </defs>
    <!-- rocket -->
    <ellipse cx="52" cy="28" rx="14" ry="18" fill="url(#rocketBody)"/>
    <rect x="38" y="28" width="28" height="42" rx="10" fill="url(#rocketBody)"/>
    <circle cx="52" cy="44" r="8" fill="#dff0ff" stroke="#fff" stroke-width="2"/>
    <path d="M38 55l-12 18h12z" fill="#7c5cff"/>
    <path d="M66 55l12 18H66z" fill="#7c5cff"/>
    <path d="M44 70c2 10 6 16 8 18 2-2 6-8 8-18z" fill="#ffb703"/>
    <path d="M48 72c1.5 7 3.5 11 4 12 0.5-1 2.5-5 4-12z" fill="#fff3bf"/>
    <!-- buddy face -->
    <circle cx="98" cy="58" r="28" fill="#FFE8B8"/>
    <circle cx="88" cy="52" r="5" fill="#2b241c"/>
    <circle cx="108" cy="52" r="5" fill="#2b241c"/>
    <circle cx="90" cy="50" r="1.8" fill="#fff"/>
    <circle cx="110" cy="50" r="1.8" fill="#fff"/>
    <path d="M90 66c5 7 15 7 20 0" fill="none" stroke="#e15b64" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="80" cy="62" rx="5" ry="3.5" fill="#ff9eb5" opacity=".75"/>
    <ellipse cx="116" cy="62" rx="5" ry="3.5" fill="#ff9eb5" opacity=".75"/>
    <!-- stars -->
    <circle cx="18" cy="22" r="5" fill="#ffb703"/>
    <circle cx="122" cy="20" r="4" fill="#3aa0ff"/>
    <circle cx="128" cy="48" r="3.5" fill="#2fbf71"/>
    <text x="52" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">×</text>
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

function getTimesZone() {
  return (data.specials || []).find(s => s.id === "times");
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function shuffleOptions(item) {
  const pairs = item.options.map((o, i) => ({ o: o, correct: i === item.a }));
  shuffleInPlace(pairs);
  return {
    q: item.q,
    why: item.why,
    options: pairs.map(function(p) { return p.o; }),
    a: pairs.findIndex(function(p) { return p.correct; })
  };
}

function uniqueDistractors(correct, makeWrong) {
  const opts = [correct];
  let guard = 0;
  while (opts.length < 3 && guard < 40) {
    guard += 1;
    const w = makeWrong();
    if (w !== correct && opts.indexOf(w) === -1 && w > 0) opts.push(w);
  }
  while (opts.length < 3) opts.push(correct + opts.length);
  return opts;
}

function makeMulQuestion(a, b) {
  const correct = a * b;
  const options = uniqueDistractors(correct, function() {
    const kinds = [
      a + b,
      a * (b + 1),
      a * Math.max(1, b - 1),
      (a + 1) * b,
      Math.max(1, a - 1) * b,
      correct + a,
      correct - a,
      correct + 2,
      correct - 2
    ];
    return kinds[Math.floor(Math.random() * kinds.length)];
  });
  const item = {
    q: a + " × " + b + " = ?",
    why: b + " 個 " + a + " 是 " + correct + "。",
    options: options,
    a: 0
  };
  return shuffleOptions(item);
}

function makeWordMulQuestion(a, b) {
  const correct = a * b;
  const templates = [
    { q: "每袋有 " + a + " 個，" + b + " 袋一共有幾個？", why: a + "×" + b + "=" + correct + "。" },
    { q: "「" + b + " 個 " + a + "」等於？", why: b + " 個 " + a + " = " + a + "×" + b + " = " + correct + "。" },
    { q: "每組有 " + a + " 人，" + b + " 組一共有幾人？", why: a + "×" + b + "=" + correct + "。" }
  ];
  const t = templates[Math.floor(Math.random() * templates.length)];
  const options = uniqueDistractors(correct, function() {
    const kinds = [a + b, a * (b + 1), (a + 1) * b, correct + a, correct - b, a * b + 1];
    return kinds[Math.floor(Math.random() * kinds.length)];
  });
  return shuffleOptions({ q: t.q, why: t.why, options: options, a: 0 });
}

function generateMixQuestions(count) {
  const factors = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seen = {};
  const out = [];
  let guard = 0;
  while (out.length < count && guard < 200) {
    guard += 1;
    const a = factors[Math.floor(Math.random() * factors.length)];
    const b = 2 + Math.floor(Math.random() * 8); // 2..9
    const key = a + "x" + b;
    if (seen[key]) continue;
    seen[key] = true;
    if (Math.random() < 0.3) out.push(makeWordMulQuestion(a, b));
    else out.push(makeMulQuestion(a, b));
  }
  while (out.length < count) {
    out.push(makeMulQuestion(2 + (out.length % 9), 2 + (out.length % 8)));
  }
  shuffleInPlace(out);
  return out;
}

function buildTimesQuiz(table) {
  let questions;
  if (table.id === "times-mix") {
    questions = generateMixQuestions(table.pick || 10);
  } else {
    const pool = (table.questions || []).map(function(q) {
      return { q: q.q, why: q.why, options: q.options.slice(), a: q.a };
    });
    shuffleInPlace(pool);
    const n = table.pick || pool.length;
    questions = pool.slice(0, Math.min(n, pool.length)).map(shuffleOptions);
  }
  return {
    id: table.id,
    title: table.title,
    badge: table.badge,
    color: table.color,
    questions: questions,
    roundId: Date.now() + "-" + Math.floor(Math.random() * 100000)
  };
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

  const times = getTimesZone();
  const timesBanner = times ? `
    <button class="times-banner" id="timesZone" type="button">
      <div class="times-banner-glow" aria-hidden="true"></div>
      <div class="times-banner-left">
        ${timesMascot()}
      </div>
      <div class="times-banner-body">
        <div class="times-chip">專區 · 迷你遊戲</div>
        <h2>${times.name}</h2>
        <p class="times-tagline">${times.tagline || times.blurb}</p>
        <p class="times-cta">撳入嚟揀乘數表 ✨ 有星星貼紙獎</p>
      </div>
      <div class="times-banner-arrow" aria-hidden="true">›</div>
    </button>` : "";

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
    ${timesBanner}
    ${decoStars()}
    <div class="grid">${cards}</div>
  `);
  const tz = document.getElementById("timesZone");
  if (tz) tz.onclick = () => { state = { view: "times" }; render(); };
  app.querySelectorAll("[data-subject]").forEach(b => {
    b.onclick = () => { state = { view: "subject", subject: b.dataset.subject }; render(); };
  });
}

function timesView() {
  const times = getTimesZone();
  if (!times) { state = { view: "home" }; render(); return; }
  const tiles = times.tables.map(t => {
    const countLabel = t.pick
      ? `每次 ${t.pick} 題 · 隨機`
      : `${t.questions.length} 題 · 隨機`;
    return `
    <button class="times-tile ${t.color || ""}" data-table="${t.id}" type="button">
      <span class="times-badge">${t.badge || "⭐"}</span>
      <span class="times-tile-title">${t.title}</span>
      <span class="times-tile-count">${countLabel}</span>
    </button>`;
  }).join("");
  el(`
    <button class="back" id="back">← 返回</button>
    <div class="times-lobby">
      <div class="times-lobby-hero">
        ${timesMascot()}
        <div>
          <h1>${times.name}</h1>
          <p class="sub">${times.blurb}</p>
        </div>
      </div>
      <div class="times-stickers" aria-hidden="true">
        <span>⭐</span><span>🚀</span><span>🍊</span><span>🌟</span><span>🏆</span>
      </div>
      <p class="times-pick">揀一組乘數表，開始挑戰！每次題目同選項都會隨機唔同。</p>
      <div class="times-grid">${tiles}</div>
    </div>
  `);
  document.getElementById("back").onclick = () => { state = { view: "home" }; render(); };
  app.querySelectorAll("[data-table]").forEach(b => {
    b.onclick = () => {
      const table = times.tables.find(t => t.id === b.dataset.table);
      state = {
        view: "quiz",
        subject: null,
        special: "times",
        tableId: table.id,
        quiz: buildTimesQuiz(table),
        i: 0,
        score: 0,
        picked: null,
        done: false,
        review: []
      };
      render();
    };
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
      state = { view: "quiz", subject: s.id, special: null, quiz, i: 0, score: 0, picked: null, done: false, review: [] };
      render();
    };
  });
}

function quizBackTarget() {
  if (state.special === "times") return () => { state = { view: "times" }; render(); };
  return () => { state = { view: "subject", subject: state.subject }; render(); };
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
  const headExtra = state.special === "times"
    ? `<span class="times-q-badge">${quiz.badge || "⭐"} ${quiz.title}${quiz.id === "times-mix" ? " · 本輪隨機" : " · 次序已打亂"}</span>`
    : "";
  el(`
    <button class="back" id="back">← 離開</button>
    <div class="quiz-head">
      <h1>${quiz.title}</h1>
      ${quizBuddy(mood)}
    </div>
    ${headExtra}
    <div class="progress"><div class="bar" style="width:${pct}%"></div></div>
    <div class="qbox ${state.special === "times" ? "qbox-times" : ""}">
      <div class="q-meta"><span>第 ${i+1} / ${quiz.questions.length} 題</span><span class="sparkle">✨</span></div>
      ${passage}
      <h2>${item.q}</h2>
      <div class="options">${opts}</div>
      ${feedback}
    </div>
  `);
  document.getElementById("back").onclick = quizBackTarget();
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
  const sticker = state.special === "times"
    ? `<div class="sticker-prize">${score / total >= 0.7 ? "🏅 贏得星星貼紙！" : "💫 再試一次攞貼紙！"}</div>`
    : "";
  const homeOrTimesLabel = state.special === "times" ? "回乘數樂園" : "回主頁";
  el(`
    <div class="qbox ${state.special === "times" ? "qbox-times" : ""}">
      <div class="result-hero">
        ${celebrateMascot()}
        <h1>完成！</h1>
        <div class="stars">${stars(score, total)}</div>
        ${sticker}
        <h2>${score} / ${total}</h2>
        <p>${quiz.title} · ${msg}</p>
      </div>
      ${decoStars()}
      <div class="btn-row">
        <button class="next" id="again">再做一次</button>
        <button class="back" id="home">${homeOrTimesLabel}</button>
      </div>
      <div class="why">${rows}</div>
    </div>
  `);
  document.getElementById("again").onclick = () => {
    if (state.special === "times" && state.tableId) {
      const times = getTimesZone();
      const table = times && times.tables.find(t => t.id === state.tableId);
      if (table) state.quiz = buildTimesQuiz(table);
    }
    state.i = 0; state.score = 0; state.picked = null; state.review = []; state.view = "quiz";
    render();
  };
  document.getElementById("home").onclick = () => {
    if (state.special === "times") state = { view: "times" };
    else state = { view: "home" };
    render();
  };
}

function render() {
  if (state.view === "home") home();
  else if (state.view === "times") timesView();
  else if (state.view === "subject") subjectView();
  else if (state.view === "quiz") quizView();
  else resultView();
}
render();
