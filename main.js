const numbers = document.querySelectorAll(".number");
const btn = document.getElementById("btn-submit");

function selectedNumber() {
  let currentSelectedValue = null;
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      const selectedValue = number.textContent;

      if (selectedValue === currentSelectedValue) {
        number.classList.remove("selected");
      } else {
        currentSelectedValue = selectedValue;
        numbers.forEach((num) => {
          num.classList.remove("selected");
          num.classList.add("unselected");
        });
        number.classList.add("selected");
        number.classList.remove("unselected");
      }
    });
  });
}
selectedNumber();

