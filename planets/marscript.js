// light and dark mode
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
// --------------------------------------------------------------------------

// nav bar toggle menu
class Collapse {
  constructor(targetEl, triggerEl, options = {}) {
    this.targetElement = targetEl;
    this.triggerElement = triggerEl;
    this.options = {
      transition: options.transition || "height 0.3s ease",
      duration: options.duration || 300,
      timingFunction: options.timingFunction || "ease",
      onExpand: options.onExpand || null,
      onCollapse: options.onCollapse || null,
    };

    this.isCollapsed = true;

    this.init();
  }

  init() {
    this.triggerElement.addEventListener("click", () => this.toggle());
    this.updateStyle();
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.updateStyle();

    if (this.isCollapsed) {
      if (this.options.onCollapse) {
        this.options.onCollapse(this.targetElement);
      }
    } else {
      if (this.options.onExpand) {
        this.options.onExpand(this.targetElement);
      }
    }
  }

  updateStyle() {
    const { transition, duration, timingFunction } = this.options;
    this.targetElement.style.transition = transition;
    this.targetElement.style.transitionDuration = `${duration}ms`;
    this.targetElement.style.transitionTimingFunction = timingFunction;

    if (this.isCollapsed) {
      this.targetElement.style.height = "0";
    } else {
      this.targetElement.style.height = this.targetElement.scrollHeight + "px";
    }
  }
}

// Example usage:
const triggerButton = document.getElementById("triggerButton");
const targetElement = document.getElementById("targetElement");

const collapseOptions = {
  transition: "height 0.5s ease",
  duration: 500,
  timingFunction: "ease",
  onExpand: (element) => {
    console.log("Expanded:", element);
  },
  onCollapse: (element) => {
    console.log("Collapsed:", element);
  },
};

const myCollapse = new Collapse(targetElement, triggerButton, collapseOptions);
