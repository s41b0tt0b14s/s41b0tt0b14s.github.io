document.getElementById("copy-button").addEventListener("click", function() {
    const emailText = document.getElementById("email-text").textContent;
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = emailText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    const copyIcon = document.getElementById("copy-icon");
    copyIcon.classList.add("animate-red");
  });
  