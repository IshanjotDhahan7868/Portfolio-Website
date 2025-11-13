// script.js

// Set footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    // ignore empty or "#" only
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Beat title/tag generator
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("beatInput");
  const btn = document.getElementById("generateBtn");
  const output = document.getElementById("demoOutput");

  if (btn && input && output) {
    // Predefined adjective and noun lists for demo purposes
    const adjectives = [
      "Chill",
      "Energetic",
      "Lush",
      "Dark",
      "Dreamy",
      "Soulful",
      "Upbeat",
      "Groovy",
      "Ambient",
      "Epic",
    ];
    const nouns = [
      "Vibes",
      "Beats",
      "Groove",
      "Flow",
      "Rhythm",
      "Tracks",
      "Harmony",
      "Loops",
      "Echoes",
      "Melodies",
    ];
    // Helper to pick a random element
    function rand(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    // Generate suggestions
    function generate() {
      const desc = input.value.trim();
      if (!desc) {
        output.innerHTML = `<p>Please enter a short description of your beat.</p>`;
        return;
      }
      const words = desc.split(/\s+/);
      const base = words[0] || "Beat";
      const title1 = `${rand(adjectives)} ${rand(nouns)}`;
      const title2 = `${rand(adjectives)} ${base.charAt(0).toUpperCase() + base.slice(1)}`;
      const title3 = `${base.charAt(0).toUpperCase() + base.slice(1)} ${rand(nouns)}`;
      const tags = [
        rand(adjectives),
        rand(adjectives),
        rand(nouns),
        rand(nouns),
        base.toLowerCase(),
      ].map((t) => t.toLowerCase());
      output.innerHTML = `
        <h4>Suggested Titles:</h4>
        <ul>
          <li>${title1}</li>
          <li>${title2}</li>
          <li>${title3}</li>
        </ul>
        <h4>Suggested Tags:</h4>
        <p>${tags.join(", ")}</p>
      `;
    }
    btn.addEventListener("click", generate);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        generate();
      }
    });
  }
});
