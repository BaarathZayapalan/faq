const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".question");
  const answer = item.querySelector(".answer");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Close every FAQ item
    faqItems.forEach((faq) => {
      faq.classList.remove("open");
      faq.querySelector(".question").setAttribute(
        "aria-expanded",
        "false"
      );
      faq.querySelector(".answer").hidden = true;
      faq.querySelector(".icon").textContent = "+";
    });

    // Open the clicked item if it was closed
    if (!isOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
      answer.hidden = false;
      icon.textContent = "−";
    }
  });
});