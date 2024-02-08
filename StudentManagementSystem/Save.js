let arrmail = [];

let add = () => {
  let mail = document.getElementById("mail").value;
  arrmail.push(mail);
};

let saveMail = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    to: arrmail,
    subject: document.getElementById("subject").value,
    text: document.getElementById("text").value,
    senderName: document.getElementById("name").value,
    senderAddress: document.getElementById("address").value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/mail", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
