const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const errorContainer = document.querySelectorAll("span");
const email = document.getElementById("email");

const showError = (text, index) => {
    errorContainer[index].innerText = text;
    errorContainer[index].style.display = "inline-block";
  };
  
  const checkField = () => {
      inputs.forEach((input, index) => {
        input.classList.remove("inputError");
        if (!input.value) {
          showError("A required field has been missed", index);
          input.className = "inputError";
        } else {
          errorContainer[index].innerText = "";
        }
      });
    }; 

    const emailValidation = () => {
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!emailPattern.test(email.value)) {
          showError("Please enter the valid email", 2);
        }
      };
const buttonHandler = (event) => {
    event.preventDefault();
    checkField();
};


button.addEventListener("click", buttonHandler);

