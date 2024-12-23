document.getElementById('copyEmailButton').addEventListener('click', function() {
  const email = "me@tobiasshaw.xyz";
  navigator.clipboard.writeText(email).then(() => {
      const message = document.getElementById('copyMessage');
      message.style.display = 'block'; // show success message
      setTimeout(() => message.style.display = 'none', 2000); // hide it after 2 seconds
  }).catch(err => {
      console.error('Failed to copy email: ', err);
  });
});
  