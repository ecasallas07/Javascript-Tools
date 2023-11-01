const d =document;

d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("enviando formulario")

    const $response=d.querySelector(".contact-form-response")
        $form=d.querySelector(".form")

    fetch("https://formsubmit.co/ajax/ecasallas07@gmail.com",{
        method:"POST",
        body: new FormData(e.target)
    }).then(res => {
        if (res.ok) {
         
            return res.json(); 
        } else {
            return res.text(); 
        }
    })
    .then(data => {
        console.log("Datos enviados:", new FormData(e.target));
        
        if (typeof data === 'object') {
            console.log(data); 
        } else {
            console.error(data); 
        }
        $response.classList.remove("none");
        $form.reset();
    })
    .catch(err => {
        console.log(err);
    });

})