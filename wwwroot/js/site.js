// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// =========================================
// OCEAN PORTFOLIO - THEME TOGGLE
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (!themeToggle || !themeIcon) return;

    function applyTheme(theme) {

        document.body.dataset.theme = theme;

        themeIcon.textContent = theme === "dark" ? "☾" : "☀";

        const label = theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme";

        themeToggle.setAttribute("aria-label", label);
        themeToggle.setAttribute("title", label);
    }

    const savedTheme = localStorage.getItem("portfolio-theme");

    applyTheme(savedTheme === "dark" ? "dark" : "light");

    themeToggle.addEventListener("click", function () {

        const nextTheme =
            document.body.dataset.theme === "dark" ? "light" : "dark";

        applyTheme(nextTheme);

        localStorage.setItem("portfolio-theme", nextTheme);

    });

});
