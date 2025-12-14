function highlightAnchor() {
  // 1. Get the current "hash" from the URL (e.g., "#my-heading")
  const hash = window.location.hash;

  // Only proceed if there is actually a hash
  if (hash) {
    // 2. Select the HTML element that has that ID
    const targetElement = document.querySelector(hash);

    if (targetElement) {
      // 3. Add the CSS class we defined earlier
      targetElement.classList.add('active-highlight');

      // 4. Set a timer to remove the class after 2000 milliseconds (2 seconds)
      setTimeout(function() {
        targetElement.classList.remove('active-highlight');
      }, 2000);
    }
  }
}

// Run the function when the URL hash changes (user clicks the link)
window.addEventListener('hashchange', highlightAnchor);

// Also run it when the page first loads (in case the user visits the link directly)
window.addEventListener('load', highlightAnchor);