function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var body = "Name : " + name + "<br> Email : " + email + "<br> Contact Number : " + phone + "<br> Message : " + message;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hackhound.srm@gmail.com",
    Password: "3EB18B8C3F0BEA991DA25275482DE40B3C42",
    To: 'hackhound.srm@gmail.com',
    From: "hackhound.srm@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body: body
  }).then(
    message => alert("Message Sent Successfully")
  );
}