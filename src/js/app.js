const button = document.getElementById("cta-btn");
const form = document.getElementById("contact-form");

button.addEventListener("click", () => {
    alert("¡Gracias por tu interés!");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente!");
    form.reset();
});