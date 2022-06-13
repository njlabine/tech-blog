const loginFormHandler = async (e) => {
  e.preventDefault();
  console.log("button worked");
  const name = document.querySelector("#user-name").value.trim();
  const password = document.querySelector("#user-password").value.trim();

  if (name && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document.addEventListener("submit", loginFormHandler);
