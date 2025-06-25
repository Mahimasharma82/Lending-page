
window.onload = function () {
    alert("Welcome to Real Trust 🏠");
};
const whySection = document.querySelector(".why");
if (whySection) {
    whySection.addEventListener("mouseenter", () => {
        whySection.style.backgroundColor = "#f2f2f2";
    });
    whySection.addEventListener("mouseleave", () => {
        whySection.style.backgroundColor = "white";
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const ctaBtn = document.getElementById("cta-btn");

    if (ctaBtn) {
        ctaBtn.addEventListener("click", () => {
            alert("✅ Thank you! Our team will reach out to you shortly.");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-section form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert("❗ Please fill in all fields before submitting.");
        return;
      }

      // Optional: simple email validation
      if (!email.includes("@") || !email.includes(".")) {
        e.preventDefault();
        alert("❗ Please enter a valid email address.");
        return;
      }

      // Optional: Confirmation before submission
      const confirmSubmit = confirm("✅ Are you sure you want to send this message?");
      if (!confirmSubmit) {
        e.preventDefault();
      }
    });
  }
});

