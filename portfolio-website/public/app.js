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
const logoLink = document.querySelector('.link');
const width = window.innerWidth;

window.addEventListener('resize', setNavigationVisible);
window.onload(setNavigationVisible);

function setNavigationVisible() {
  if (window.innerWidth>500) {
      footer.style.display = 'none';
      navigationLinks.style.display = 'flex';
  } else {
      logoLink.style.justifyContent = 'center';
      footer.style.display = "block";
      navigationLinks.style.display = 'none';
  }
}