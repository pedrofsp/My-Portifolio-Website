function isMobile() {
  const mobileMaxWidth = 767; // Adjust this value to define your mobile breakpoint
  return window.innerWidth <= mobileMaxWidth;
}

export { isMobile };
