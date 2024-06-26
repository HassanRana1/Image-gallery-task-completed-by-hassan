function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "flex"; // Display the modal as a flex container
  modalImg.src = img.src; // Set the modal image source to the clicked image source
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none"; // Hide the modal
}
