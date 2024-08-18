const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const errorContainer = document.querySelectorAll("span");

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
const buttonHandler = (event) => {
    event.preventDefault();
   
};

button.addEventListener("click", buttonHandler);

