/* 
  When sections come into view we can read what amount are visible.
*/
const intersectionHandler = (entries) => {
  // could also use entries.forEach(... but for of loops are newer, fancier :)
  for (const entry of entries) {
    // The section has entered the screen
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Sets a css variable to read in CSS for opacity etc...
      entry.target.style.setProperty(
        '--intersecting-ratio',
        entry.intersectionRatio
      );
    } else {
      entry.target.classList.remove('in-view');
      entry.target.removeAttribute('style');
    }
  }
};

/* 
  Creates an I.O. and sets a threshold option with 1 -> 100.
  This allows us to detect what % of the section is in view 1% <-> 100%.
*/
const observer = new IntersectionObserver(intersectionHandler, {
  threshold: Array.from({ length: 100 }, (ignore, i) => (i + 1) / 100),
});

// Observe all the section elements as the document scrolls
document.querySelectorAll('section:not(#intro)').forEach((section) => {
  observer.observe(section);
});
