//Handle rendering of tools in the tool list
export function renderTools(tools: { name: string; description: string }[]) {
  const toolList = document.getElementById("tool-list") as HTMLElement;

  tools.forEach((tool) => {
    const item = document.createElement("div");
    item.className = "tool-card";
    item.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
    `;
    toolList.appendChild(item);
  });
}

// Handle theme toggle functionality
export function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")!;
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icon = themeToggle.querySelector("i");
    icon?.classList.toggle("fa-sun");
    icon?.classList.toggle("fa-moon");
  });
}
