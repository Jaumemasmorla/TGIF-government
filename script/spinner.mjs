// Show spinner
export function showSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.display = 'block';
    }
  }
  
  // Hide spinner
 export  function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.display = 'none';
    }
  }