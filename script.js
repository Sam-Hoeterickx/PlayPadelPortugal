let htmlString = '';
const ctx = document.querySelector('.contact-sheet');

(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("ZRGJd-nD_nZKHfEei");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Send form using EmailJS
        emailjs.sendForm('service_m7m2d3d', 'template_bhoh2qw', this)
            .then(() => {
                console.log('SUCCESS!');
                // alert('Email is succesvol verzonden');
                alertSucces();
            }, (error) => {
                console.log('FAILED...', error);
                alertFail();
            });
    });
}

function alertSucces(){
    htmlString = `
        <div id="alertbox" class="alertbox">
            <div class="alert">
                <div class="status"><h1 id="succes">✔</h1></div>
                <p>Je e-mail is succesvol verzonden! Bedankt voor je bericht.</p>
                <input type="button" id="close" value="Home">
            </div>
        </div>
    ` 
    ctx.insertAdjacentHTML("beforebegin", htmlString);
    
    document.querySelector('#close').addEventListener('click', function(close){
        window.location.href = "https://playpadelportugal.be"
    })  
}
function alertFail(){
    htmlString = `
        <div id="alertbox" class="alertbox">
            <div class="alert">
                <div class="status"><h1 id="succes">X</h1></div>
                <p>Er is een fout opgetreden, probeer het nog eens</p>
                <input type="button" id="close" value="sluiten">
            </div>
        </div>
    ` 
    ctx.innerHTML += htmlString
    
    document.querySelector('#close').addEventListener('click', function(close){
        window.location.href = "https://playpadelportugal.be/contact.html"
    })  
}
