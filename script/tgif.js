// Close all dropdown lists if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn')) {
    Array.from(document.querySelectorAll('.dropdown')).forEach((elt) => {
      elt.classList.remove('show');
    });
  }
});

// set all dropdown buttons to open their associated dropdown list on click
Array.from(document.querySelectorAll('.dropdown-btn')).forEach((btn) => {
  const dropdown = btn.closest('.dropdown');
  if (dropdown) {
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        // Close all dropdown lists
        Array.from(document.querySelectorAll('.dropdown')).forEach((elt) => {
          elt.classList.remove('show');
        });

        // Toggle the current dropdown list
        dropdown.classList.toggle('show');
    });
  }
});

// Highlight active link based on the current page
document.addEventListener('DOMContentLoaded', function () {
  let currentPageId = document.body.id;

  // Find the corresponding nav link and add the "active" class
  let navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === './' + currentPageId + '.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Find the corresponding dropdown link and add the "active" class
  let dropdownLinks = document.querySelectorAll('.dropdown-item');
  dropdownLinks.forEach(function (link) {

    if (link.getAttribute('href') === './' + currentPageId + '.html') {
      link.classList.add('active');
      // If it's a dropdown link, also add the "show" class to its parent
      let dropdown = link.closest('.dropdown');
      if (dropdown) {
        dropdown.classList.add('show');
      }
    } else {
      link.classList.remove('active');
    }
  });
});

