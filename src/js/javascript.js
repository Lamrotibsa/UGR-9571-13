document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');

    function sendMsg(e) {
        e.preventDefault();
        const f_name = document.querySelector('.f_name'),
            l_name = document.querySelector('.l_name'),
            email = document.querySelector('.email'),
            p_no = document.querySelector('.ph_no'),
            msg = document.querySelector('.msg');

        const bodyMessage = `First Name: ${f_name.value}<br> Last Name: ${l_name.value}<br> Email: ${email.value}<br> Phone Number: ${p_no.value}<br> Message: ${msg.value}`;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "laminatibsa@gmail.com",
            Password: "F9479DA51822E3B0EE61937006633093AF1B",
            To: 'laminatibsa@gmail.com',
            From: email.value,
            Subject: "Form Submission",
            Body: bodyMessage
        }).then(
            message => {
                console.log(message);
                alert("Email sent successfully!  Thank you for your suggestion!");
            }
        );
    }

    form.addEventListener('submit', sendMsg);
});
