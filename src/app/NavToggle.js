let toggleClickedFlag = false;

const handleToggleClick = (toggleBtn, navLinks) => {
  !toggleClickedFlag ? toggleBtn.classList.add('toggled') : toggleBtn.classList.remove('toggled');
  toggleClickedFlag = !toggleClickedFlag;

  navLinks.classList.toggle('nav-links-mobile');
};

export default handleToggleClick;
