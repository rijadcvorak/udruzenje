
AOS.init({
  offset: 120,
  delay: 0,
  duration: 900, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

document.addEventListener("DOMContentLoaded", function() {
  const navbarCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const dropdownToggle = document.getElementById('infoDropdown');


  function closeNavbar(event) {
      if (event.target !== dropdownToggle) {
          new bootstrap.Collapse(navbarCollapse).hide();
      }
  }


  navLinks.forEach(link => {
      link.addEventListener('click', closeNavbar);
  });
});


    const wordLimit = 20;


    function truncateText(text, wordLimit) {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    }

 
    document.addEventListener("DOMContentLoaded", function() {
        const paragraphs = document.querySelectorAll("#blog .row .team-member p");

        paragraphs.forEach(paragraph => {

            paragraph.textContent = truncateText(paragraph.textContent, wordLimit);
        });
    });


const form = document.querySelector('#contactForm');
const nameInput = document.querySelector('[name="firstName"]');
const surnameInput = document.querySelector('[name="surName"]');
const numberInput = document.querySelector('[name="number"]');
const emailInput = document.querySelector('[name="email"]');
const roleInput = document.querySelector('[name="role"]');  
const messageInput = document.querySelector('[name="message"]');

const serviceID = 'service_js8pylj';
const templateID = 'template_irfoop3';
const publicKey = 'QuNIESghtBoFpGOs1';

emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const roleValue = roleInput.value;  

  
  if (!roleValue) {
    alert('Molimo vas da odaberete svoju ulogu (Musterija ili Majstor).');
    return;
  }
  
  const inputData = {
    ime: nameInput.value,
    prezime: surnameInput.value,
    brojTel: numberInput.value,
    email: emailInput.value,
    role: roleValue,  
    message: messageInput.value,
  };

  emailjs.send(serviceID, templateID, inputData).then(
    () => {
      
      nameInput.value = '';
      surnameInput.value = '';
      numberInput.value = '';
      emailInput.value = '';
      roleInput.value = '';  
      messageInput.value = '';
      
      console.log('Uspjeh');  
      AlertNotification();    
    },
    (error) => {
      console.log(error); 
    }
  );
});

function AlertNotification() {
  alert("Uspješno ste poslali poruku");  
}




