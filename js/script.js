const themeToggle = document.getElementById('theme-toggle');
const fontSizeToggle = document.getElementById('font-size-toggle');
const htmlElement = document.documentElement;

// Load saved preferences from localStorage
const savedTheme = localStorage.getItem('themePreference');
const savedFontSize = localStorage.getItem('fontSizePreference');

if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no preference is saved, use system preference if available
    htmlElement.setAttribute('data-theme', 'dark');
}
if (savedFontSize) {
    htmlElement.setAttribute('data-font-size', savedFontSize);
}

// Theme Toggle
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        let currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('themePreference', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('themePreference', 'dark');
        }
    });
}

// Font Size Accessibility Toggle
if (fontSizeToggle) {
    fontSizeToggle.addEventListener('click', () => {
        let currentFontSize = htmlElement.getAttribute('data-font-size');
        if (currentFontSize === 'large') {
            htmlElement.removeAttribute('data-font-size');
            localStorage.setItem('fontSizePreference', 'normal');
        } else {
            htmlElement.setAttribute('data-font-size', 'large');
            localStorage.setItem('fontSizePreference', 'large');
        }
    });
}
