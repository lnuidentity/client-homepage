// ふわっと表示させたい要素を取得
const fadeElements = document.querySelectorAll(".fade-in");

// 画面に入ったかどうかを監視
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

// それぞれの要素を監視する
fadeElements.forEach((element) => {
  observer.observe(element);
});