document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("headerContainer");
  const headerNav = document.getElementById("headerNav");

  function toggleOpenNav() {
    headerNav.classList.toggle("openNav");
  }

  const callLink = document.createElement("a");
  callLink.classList.add("btn", "header__telLink");
  callLink.href = "tel:+79095085151";
  callLink.textContent = "Позвонить";

  if (window.innerWidth <= 576) {
    headerContainer.appendChild(callLink);

    if (headerNav) {
      headerNav.addEventListener("click", toggleOpenNav);
    }
  }

  function checkWidth() {
    if (window.innerWidth <= 576) {
      if (!headerContainer.contains(callLink)) {
        headerContainer.appendChild(callLink);
      }
    } else {
      if (headerContainer.contains(callLink)) {
        headerContainer.removeChild(callLink);
      }
    }
  }

  checkWidth();
  window.addEventListener("resize", checkWidth);
});
