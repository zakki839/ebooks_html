
const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    /***
     * 1. Get input values
     * 2. Validate input values
     * 3. If valid, submit the form
     * 4. If invalid, show error message
     */



    // Get form values from event object
    // const firstName = event.target.elements.firstName.value;
    // const lastName = event.target.elements.lastName.value;
    // const email = event.target.elements.email.value;
    // const mobile = event.target.elements.mobile.value;
    // const books = event.target.elements.books.value;
    // const message = event.target.elements.message.value;

    // Get form values from form element
    // const firstName = enquiryForm.elements.firstName.value;
    // const lastName = enquiryForm.elements.lastName.value;
    // const email = enquiryForm.elements.email.value;
    // const mobile = enquiryForm.elements.mobile.value;
    // const books = enquiryForm.elements.books.value;
    // const message = enquiryForm.elements.message.value;

    // Get form values from dom elements
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const book = document.getElementById("book");
    const message = document.getElementById("message");

    console.log(firstName.value, lastName.value, email.value, mobile.value, book.value, message.value);

    const alphabeticPattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    let isValid = true;
    const isFirstNameValid = alphabeticPattern.test(firstName.value);
    console.log(isFirstNameValid);

    if(firstName.value.length < 2 || !alphabeticPattern.test(firstName.value)) {
       firstName.classList.add("is-invalid");
       isValid = false;
    }
    else {
        firstName.classList.remove("is-invalid");
    }

    if(lastName.value.length < 2 || !alphabeticPattern.test(lastName.value)) {
        lastName.classList.add("is-invalid");
        isValid = false;
    }
    else {
        lastName.classList.remove("is-invalid");
    }

    if(!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        isValid = false;
    }
    else {
        email.classList.remove("is-invalid");
    }

    if(!mobilePattern.test(mobile.value)) {
        mobile.classList.add("is-invalid");
        isValid = false;
    }
    else {
        mobile.classList.remove("is-invalid");
    }

    if(book.value.length < 1) {
        book.classList.add("is-invalid");
        isValid = false;
    }
    else {
        books.classList.remove("is-invalid");
    }

    if(message.value.length < 1) {
        message.classList.add("is-invalid");
        isValid = false;
    }
    else {
        message.classList.remove("is-invalid");
    }

    if(isValid) {
        fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzNzA0M2Q1MjZlNTUzYzUxMzEi_pc", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                mobile: mobile.value,
                book: book.value,
                message: message.value
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            enquiryForm.reset();
            const successMessage = document.createElement("div");
            successMessage.classList.add("alert", "alert-success");
            successMessage.textContent = "Form submitted successfully";
            enquiryForm.appendChild(successMessage);
            setTimeout(() => {
                successMessage.remove();
            }, 6000);
        })
        .catch(error => {   
            console.error("Error:", error);
            const errorMessage = document.createElement("div");
            errorMessage.classList.add("alert", "alert-danger");
            errorMessage.textContent = "Error submitting form";
            enquiryForm.appendChild(errorMessage);
            setTimeout(() => {
                errorMessage.remove();
            }, 6000);
        });
        // enquiryForm.submit();
    }
    else {
        alert("Correct the errors and try again");
    }
});
