function toggleDetail(event) {
    const button = event.target;
    const expItem = button.closest(".about-exp-item");
    const detail = expItem.querySelector(".about-exp-item-detail");
  
    if (detail.style.display === "block") {
      detail.style.display = "none";
      button.textContent = "More Info";
      button.classList.remove("active");
    } else {
      detail.style.display = "block";
      button.textContent = "Less Info";
      button.classList.add("active");
    }
  }
  