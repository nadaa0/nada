// therapie.js


document.addEventListener("DOMContentLoaded", function() {
    
    var lireLaSuiteLinks = document.querySelectorAll('a[href^="https://"]');
    for (var i = 0; i < lireLaSuiteLinks.length; i++) {
      lireLaSuiteLinks[i].addEventListener("click", handleLireLaSuiteClick);
    }
  });
  
  
  function handleLireLaSuiteClick(event) {
    
    event.preventDefault();
  
    
    var url = event.target.href;
  
    
    window.open(url, "_blank");
  }