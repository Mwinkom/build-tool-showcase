import { renderTools, setupThemeToggle } from "../app";

describe("renderTools", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="tool-list"></div>';
  });

  // Test for renderTools function
  it("renders tool cards into #tool-list", () => {
    const tools = [
      { name: "Webpack", description: "A module bundler" },
      { name: "Babel", description: "Transpile JS code" },
    ];

    renderTools(tools);

    const cards = document.querySelectorAll(".tool-card");
    expect(cards.length).toBe(2);
    expect(cards[0].innerHTML).toContain("Webpack");
    expect(cards[1].innerHTML).toContain("Babel");
  });
});

// Test for setupThemeToggle function
describe("setupThemeToggle", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="theme-toggle"><i class="fas fa-moon"></i></button>
    `;
  });

  it("toggles dark mode class on body", () => {
    setupThemeToggle();
    const toggle = document.getElementById("theme-toggle")!;
    toggle.click();
    expect(document.body.classList.contains("dark")).toBe(true);
  });

  it("toggles icon class on click", () => {
    setupThemeToggle();
    const icon = document.querySelector("i")!;
    const toggle = document.getElementById("theme-toggle")!;
    toggle.click();
    expect(icon.classList.contains("fa-sun")).toBe(true);
    expect(icon.classList.contains("fa-moon")).toBe(false);
  });
});
