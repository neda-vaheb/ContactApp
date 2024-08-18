const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const errorContainer = document.querySelectorAll("span");
const email = document.getElementById("email");
const queryItems = document.getElementsByName("query");
const message = document.getElementById("message");

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

      const checkQueryField = () => {
        let querySelected = false;
      
        queryItems.forEach((item) => {
          item.parentElement.classList.remove("query-item-check");
          if (item.checked) {
            querySelected = true;
            item.parentElement.classList.add("query-item-check");
          }
          return querySelected;
        });
        querySelected
          ? (errorContainer[3].innerText = "")
          : showError("A required field has been missed", 3);
      };

      const messageStatus = () => {
        const messageValue = message.value.trim();
        if (!messageValue) {
          showError("A required field has been missed", 4);
          message.className = "inputError";
        } else {
          message.classList.remove("inputError");
          errorContainer[4].innerText = "";
        }
      };

const buttonHandler = (event) => {
    event.preventDefault();
    checkField();
    emailValidation();
    checkQueryField();
    messageStatus();
};


button.addEventListener("click", buttonHandler);

