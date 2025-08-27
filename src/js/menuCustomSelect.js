document.addEventListener("DOMContentLoaded", () => {
  const listMenu = document.getElementById("menuDishs");
  const areaPriceMenu = document.getElementById("priceMenu");
  const wrapper = document.querySelector(".customSelectWrapper");
  const button = wrapper.querySelector("#custom-select-button");
  const optionsList = wrapper.querySelector("#custom-options-list");
  const options = Array.from(wrapper.querySelectorAll(".customSelectOption"));

  let isOpen = false;
  let focusedIndex = -1;

  function toggleList(open) {
    isOpen = open !== undefined ? open : !isOpen;
    button.setAttribute("aria-expanded", isOpen);
    if (isOpen) {
      wrapper.classList.add("open");
      optionsList.focus();
    } else {
      wrapper.classList.remove("open");
      focusedIndex = -1;
    }
  }

  function focusOption(index) {
    if (focusedIndex >= 0) options[focusedIndex].tabIndex = -1;
    focusedIndex = index;
    options[focusedIndex].tabIndex = 0;
    options[focusedIndex].focus();
  }

  function selectOption(index) {
    const selected = options[index];
    button.textContent = selected.textContent.trim();
    button.setAttribute("data-value", selected.getAttribute("data-value"));

    getMenu();
  }

  function getMenu() {
    const selectedValue = button.getAttribute("data-value");
    if (!selectedValue) return;

    const menuItem = listMenu.content.querySelector(`#${selectedValue}`);
    if (!menuItem) {
      areaPriceMenu.innerHTML = "Такое блюда не найдены";
      return;
    }

    areaPriceMenu.innerHTML = "";
    areaPriceMenu.scrollTop = 0;
    areaPriceMenu.style = "animation: slideUpFadeIn 0.45s ease forwards; ";
    areaPriceMenu.innerHTML = menuItem.innerHTML;
    areaPriceMenu.style.animation = "none";
  }

  button.addEventListener("click", () => toggleList());

  button.addEventListener("keydown", (e) => {
    if (["ArrowDown", "ArrowUp", " "].includes(e.key)) {
      e.preventDefault();
      toggleList(true);
      focusOption(0);
    }
  });

  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      selectOption(index);
      toggleList(false);
      button.focus();
    });
    option.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusOption((index + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        focusOption((index - 1 + options.length) % options.length);
      } else if (["Enter", " "].includes(e.key)) {
        e.preventDefault();
        selectOption(index);
        toggleList(false);
        button.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        toggleList(false);
        button.focus();
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) toggleList(false);
  });
});
