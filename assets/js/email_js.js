function Email() {
    let emailsParms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(emailsParms.email)) {
        // Show error notification for invalid email
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
        return; // Stop execution if email is invalid
    }

    const service_ID = 'service_t04w3im';
    const temp_ID = 'template_mxwop0i';

    emailjs.send(service_ID, temp_ID, emailsParms).then(
        (res) => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log(res);

            // Create success notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Message was sent successfully, Thank you!';
            document.body.appendChild(notification);

            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);
        }
    ).catch((err) => {
        console.log(err);
        // Show error notification for sending failure
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
    });
}