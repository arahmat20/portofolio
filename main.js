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
function onformsubmit(e) {
  e.preventDefault();
  const email = $("#inp_email");
  const subject = $("#inp_subject");
  const massage = $("#inp_message");

  if (!$(email).val()) {
    alert("email is required");
  } else if (!$(subject).val()) {
    alert("subject is required");
  } else if (!$(massage).val()) {
    alert("message is required");
  } else {
    alert("form submitted");
    $(email).val("");
    $(subject).val("");
    $(message).val("");
  }
}
