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

function home() {
  const cards = data.subjects.map(s => `
    <button class="card" data-subject="${s.id}">
      <div class="emoji">${s.emoji}</div>
      <h2>${s.name}</h2>
      <p>${s.blurb}</p>
    </button>`).join("");
  el(`
    <div class="top">
      <div>
        <h1>大坑真光 · 小二挑戰</h1>
        <p class="sub">二年級上學期程度 · 練習站</p>
      </div>
      <div class="pill">最新題目 ${data.updated}</div>
    </div>
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
      <span>${q.title}</span><span>${q.questions.length} 題</span>
    </button>`).join("");
  el(`
    <button class="back" id="back">← 返回</button>
    <h1>${s.emoji} ${s.name}</h1>
    <p class="sub">${s.blurb}</p>
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
  const why = picked === null ? "" : `<div class="why">${picked===item.a?"答對了！":"差一點。"} ${item.why}</div>
    <button class="next" id="next">${i+1===quiz.questions.length?"看成績":"下一題"}</button>`;
  el(`
    <button class="back" id="back">← 離開</button>
    <h1>${quiz.title}</h1>
    <div class="progress"><div class="bar" style="width:${pct}%"></div></div>
    <div class="qbox">
      <p>第 ${i+1} / ${quiz.questions.length} 題</p>
      ${passage}
      <h2>${item.q}</h2>
      <div class="options">${opts}</div>
      ${why}
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
  const rows = review.map((r, n) => `<p>${n+1}. ${r.ok?"✅":"❌"} ${r.q}<br>正確答案：${r.correct}</p>`).join("");
  el(`
    <h1>完成！</h1>
    <div class="qbox">
      <div class="stars">${stars(score, total)}</div>
      <h2>${score} / ${total}</h2>
      <p>${quiz.title}</p>
      <button class="next" id="again">再做一次</button>
      <button class="back" id="home" style="margin-left:12px">回主頁</button>
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
