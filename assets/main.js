let ticking = false;
const footer = document.querySelector("footer");

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const footerBottom = footer.getBoundingClientRect().bottom;
      const footerBottomPadding = parseInt(footer.style.paddingBottom) || 0;
      const viewportHeight = window.innerHeight;

      // We want to avoid the bottom of the scroll
      // being below the bottom of the footer
      const footerViewportDiff =
        Math.ceil(viewportHeight - footerBottom) * 4 + 10;

      // So if that ever happens we want to increase the height of the footer.
      if (footerViewportDiff > footerBottomPadding) {
        footer.style.paddingBottom = `${footerViewportDiff}px`;
      }

      ticking = false;
    });

    ticking = true;
  }
}

document.body.addEventListener("scroll", handleScroll, { passive: true });
