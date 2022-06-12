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
