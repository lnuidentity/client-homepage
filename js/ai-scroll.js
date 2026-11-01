// キャラクターを取得
const aiCharacter = document.querySelector(".ai-character-wrap");

if (aiCharacter) {
  let currentY = 0;
  let targetY = 0;
  let scrollTimer;

  // スクロールした位置に応じて移動量を決める
  window.addEventListener("scroll", () => {
    targetY = Math.min(window.scrollY * 0.5, 600);

    // スクロール中はタイマーをリセット
    clearTimeout(scrollTimer);

    // スクロールが止まったら定位置に戻す
scrollTimer = setTimeout(() => {
  targetY = 0;
}, 500);
  });

  // 少し遅れて追いつく動き
  function animateCharacter() {
    currentY += (targetY - currentY) * 0.015;

    aiCharacter.style.transform = `translateY(${-currentY}px)`;

    requestAnimationFrame(animateCharacter);
  }

  animateCharacter();
}