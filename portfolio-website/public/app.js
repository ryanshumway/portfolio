function setUpTabs() {
  document.querySelectorAll('').forEach((button) => {
    button.addEventListener('click', () => {
      const controls = button.parentElement;
      const control = controls.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabActivate = tabs.querySelector(`.tab-content[data-tab="${tabNumber}]`);
    });
  });
}

const footer = document.getElementById('footerID');
const footerWidth = footer.offsetWidth;
const navigationLinks = document.getElementById('navigationLinks');

window.onload = setNavigationVisible();

function setNavigationVisible() {
  if (footerWidth > 451) {
    console.log("Width is " + footerWidth + "px")
    footer.style.display = 'none'
    footer.style.opacity = 'none'
    navigationLinks.style.display = 'flex'
  } else if (footerWidth < 450) {
    footer.style.display = "block"
    footer.style.opacity = '100%'
    navigationLinks.style.display = 'none'
  }
}