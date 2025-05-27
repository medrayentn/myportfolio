//Contact sending mail
function Email() {
    let emailsParms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    const service_ID = 'service_t04w3im';
    const temp_ID = 'template_mxwop0i';

    emailjs.send(service_ID, temp_ID, emailsParms).then(
        (res) => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log(res);

            // Create notification div
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Message was sent successfully, Thank you!';
            document.body.appendChild(notification);

            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500); // Wait for fade-out animation to complete
            }, 3000);
        }
    ).catch((err) => {
        console.log(err);
        // Optionally, show error notification
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
