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


const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = "Wysyłanie...";

    // Simulate form submission
    setTimeout(() => {
        form.reset();
        submitButton.textContent = "Wysłano!";
    }, 2000);
    
    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Wyślij";
    }, 6000);
});



window.addEventListener("load", () => {
    const hero = document.querySelector("#hero");
    const h1 = document.querySelector("#hero h1");
    const p = document.querySelector("#hero p");
    const button = document.querySelector("#hero .button");

    hero.classList.add("visible");
    setTimeout(() => {
        h1.classList.add("visible");
        setTimeout(() => {
            p.classList.add("visible");
            setTimeout(() => {
                button.classList.add("visible");
            }, 500);
        }, 500);
    }, 500);
});
