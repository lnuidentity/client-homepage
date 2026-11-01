
document.addEventListener("DOMContentLoaded", function () {

  const toggleButton = document.querySelector(".toggle-menu-button");
  const headerSiteMenu = document.querySelector(".header-site-menu");

  toggleButton.addEventListener("click", function () {

    toggleButton.classList.toggle("is-show");
    headerSiteMenu.classList.toggle("is-show");

    const isOpen = toggleButton.classList.contains("is-show");

    toggleButton.setAttribute("aria-expanded", isOpen);
    toggleButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );

  });

  // メニュー内のリンクを押したら閉じる
  const menuLinks = headerSiteMenu.querySelectorAll("a");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {

      toggleButton.classList.remove("is-show");
      headerSiteMenu.classList.remove("is-show");

      toggleButton.setAttribute("aria-expanded", "false");
      toggleButton.setAttribute("aria-label", "メニューを開く");

    });
  });

});

