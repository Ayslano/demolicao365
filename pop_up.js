function showErrorPopup(message) {
    var popup = document.getElementById("errorPopup");
    var popupContent = popup.querySelector(".popup-content");
    popupContent.textContent = message;
    popup.style.display = "block";
  }
  
  // Fechar o pop-up quando clicar fora dele
  window.onclick = function(event) {
    var popup = document.getElementById("errorPopup");
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
  