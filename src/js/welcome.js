document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const sectionMap = document.getElementById("map_container");

  const welcome = document.createElement("p");
  welcome.textContent = "Добро пожаловать!";
  welcome.classList.add("map__welcome");
  welcome.style = `  
                    display: flex;  
                    flex-direction: column;  
                    align-items: center;  
                    gap: 25px;
                    transform: scale(0);
                    opacity: 0;
                    animation: fadeWelcomeIn 0.9s 0.2s ease forwards;`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!sectionMap.contains(welcome)) {
            sectionMap.appendChild(welcome);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(footer);
});
