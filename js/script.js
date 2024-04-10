document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        var firstName = document.getElementById('first-name').value;
        var lastName = document.getElementById('last-name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        // Compose the email message
        var fullMessage = 'Name: ' + firstName + ' ' + lastName + '\nEmail: ' + email + '\n\n' + message;
        
        // Configure SMTP.js with host and password
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "mumvekerichidochashe@gmail.com",
            Password: "BBEFF01DD4325A765FEC0AB6E16E43E3D40F",
            To: 'mumvekerichidochashe@gmail.com', // Replace with the recipient's email address
            From: email,
            Subject: 'New message from your website',
            Body: fullMessage
        }).then(
            function() {
                // Email sent successfully
                alert('Your message has been sent!');
                // Optionally, you can redirect the user to a thank you page or clear the form
            },
            function(error) {
                // An error occurred
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
            }
        );
    });



