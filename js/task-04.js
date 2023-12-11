const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value.trim();
const password = form.elements.password.value.trim();
    if (login === "" || password === "") {
     return alert("All form fields must be filled in")
    }
    const obj = { [form.elements.email.name]: login, [form.elements.password.name]: password };
  console.log(obj);
  form.reset();
});