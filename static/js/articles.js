// articles.js

document.addEventListener("DOMContentLoaded", function() {
   
    var cardLinks = document.getElementsByClassName("card-link");
    for (var i = 0; i < cardLinks.length; i++) {
      cardLinks[i].addEventListener("click", handleCardLinkClick);
    }
  });
  
  
  function handleCardLinkClick(event) {
   
    event.preventDefault();
  
    
    var url = event.target.href;
  
    
    window.open(url, "_blank");
  }