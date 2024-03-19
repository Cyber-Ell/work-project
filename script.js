 
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('shown') }
            else{
                entry.target.classList.remove('shown') 
            }
        }
    )
})

const hiddenElements = document.querySelectorAll('.fade-in');
hiddenElements.forEach((el) => observer.observe(el));

// Form script 

const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/eapwddpb", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}


// script for form submition 
