(function () {
  emailjs.init("1auR7dJBJX6ICHFgc");

  const forms = document.querySelectorAll("form");
  const popup = document.getElementById("myPopup");
  const popupTitle = document.getElementById("popupTitle");
  const popupMessage = document.getElementById("popupMessage");
  const closePopup = document.getElementById("closePopup");
  const overlay = document.getElementById("overlay");
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.querySelector("input[name=name]").value;
      const phone = form.querySelector("input[name=phone]").value;

      if (name === "") {
        alert("Please enter your name.");
        return false;
      }

      if (phone === "") {
        alert("Please enter your phone number.");
        return false;
      }

      emailjs
        .send("service_aura", "template_aura", {
          from_name: name,
          from_phone: phone,
        })
        .then(
          function (response) {
            form.reset();
            document.body.classList.remove("show-popup");
            modal.classList.remove("active");
            overlay.classList.remove("active");
            window.location.href = "thankYou.html";
            // popupTitle.textContent = "Форма надіслана";
            // popupMessage.textContent =
            //   "Дякуємо вам. Наш спеціаліст зв'яжеться з вами найближчим часом.";
            // popup.classList.remove("hidden");
          },
          function (error) {
            document.body.classList.remove("show-popup");
            modal.classList.remove("active");
            overlay.classList.remove("active");
            popupTitle.textContent = "Помилка";
            popupMessage.textContent =
              "Сталась помилка при спробі надіслати вашу заявку. Спробуйте пізніше";
            popup.classList.remove("hidden");
          }
        );
    });
    closePopup.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  });
})();
