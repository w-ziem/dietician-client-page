const aboutLink = document.getElementById("about-link");
const servicesLink = document.getElementById("services-link");
const testimonialsLink = document.getElementById("testimonials-link");


aboutLink.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
servicesLink.addEventListener("click", () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});
testimonialsLink.addEventListener("click", () => {  
    document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" });
});

const contactButtons = document.querySelectorAll("#contact-button");

contactButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});