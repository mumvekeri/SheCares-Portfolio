const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `First Name: ${firstName.value}<br>Last Name: ${lastName.value}<br>Email: ${email.value}<br>Message: ${message.value}`;

    Email.send({
        SecureToken: "ddc50a80-1797-4aef-8ba1-8c75863b642e",
        To: 'ericwizkid4@gmail.com',
        From: "ericwizkid4@gmail.com",
        Subject: "Message from Contact Form",
        Body: bodyMessage,
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error"
                });
            }
        }
    );
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission
    sendEmail();
});

