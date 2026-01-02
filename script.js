document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  // Handle all interactive images
  const interactiveImages = document.querySelectorAll(".img-card img, .interactive-img");

  interactiveImages.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  // Close modal on click outside image
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal on close button click
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal on Escape key
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
});

// Optional: expose closeModal globally if needed
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
