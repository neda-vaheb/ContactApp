const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const errorContainer = document.querySelectorAll("span");
const email = document.getElementById("email");
const queryItems = document.getElementsByName("query");
const message = document.getElementById("message");
const checkBox = document.getElementById("checkbox");
const successMassage = document.getElementById("successMassage");
 let isAccept = false; 

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
      const checkBoxStatus = () => {
        const isCheck = checkBox.checked;
        isCheck
          ? (errorContainer[5].innerText = "")
          : showError("To submit this form,Please consent to beaning contacted", 5);
      };
      

const buttonHandler = (event) => {
    event.preventDefault();
    checkField();
    emailValidation();
    checkQueryField();
    messageStatus();
    checkBoxStatus();
    errorContainer.forEach((error) => {
        if(error.innerText) {
            isAccept= false;
            return isAccept;
        }else{
            return isAccept=true;
        }
            
      });
      if(isAccept){
        
        successMassage.style.display = "block";
        setTimeout(()=>{
            successMassage.style.display = "none";
            inputs.forEach(input=>{
                input.value ="";
                message.value ="";
                form.reset();
            })
        },3000)
    }
};


button.addEventListener("click", buttonHandler);

