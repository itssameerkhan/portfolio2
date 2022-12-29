
if (window.screen.availWidth<=760){
    console.log('sameer');
    hi1=document.getElementById('hi');
    sameer1=document.getElementById('sameer');
    resume1=document.getElementById('resume');
    home_image=document.getElementById('home_image');
    hi1.classList.add("hi2");
    sameer1.classList.add('sameer2');
    console.log('hi sameer');
    resume1.classList.add('resume2');
    home_image.classList.add('home_image2')

}

// let index = document.getElementById('navbar');
// window.addEventListener('scroll', function () {
//     if (window.pageYOffset >= 100) {
//         index.classList.add('sticky');
//     } else {
//         index.classList.remove('sticky');
//     }
// })
//nav bar for pc
let nav_bar=document.getElementById('nav_bar');
window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 490) {
            nav_bar.classList.add('sticky');
        } else {
            nav_bar.classList.remove('sticky');
        }
    })

    //nav bar for mobile
function myFunction() {
        var x = document.getElementById("same");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

let second_menu=document.getElementById('second_menu');
window.addEventListener('scroll',function(){
    if (window.pageYOffset >= 50 && window.pageYOffset <= 2100){
        second_menu.style.display='block';
    }else{
        second_menu.style.display='none';
    }
})

// PROJECTS CLICK EVENT
let contenor = document.getElementById('contenor')
let movie = document.getElementById('movie');
let human = document.getElementById('human');
let player = document.getElementById('player');
let irish = document.getElementById('irish_classification');
let titanic = document.getElementById('titanic');
let sale = document.getElementById('sale');
let number_predic = document.getElementById('number_prediction');
let keras_image_prediction = document.getElementById('keras_image_prediction');
let text_Detection=document.getElementById('text_detection');
function remov() {
    human.classList.remove('display_all');
    player.classList.remove('display_all');
    irish.classList.remove('display_all');
    movie.classList.remove('display_all');
    titanic.classList.remove('display_all');
    sale.classList.remove('display_all');
    number_predic.classList.remove('display_all');
    keras_image_prediction.classList.remove('display_all');
    text_Detection.classList.remove('display_all');

    human.classList.remove('display_none');
    player.classList.remove('display_none');
    irish.classList.remove('display_none');
    movie.classList.remove('display_none');
    titanic.classList.remove('display_none');
    sale.classList.remove('display_none');
    number_predic.classList.remove('display_none');
    keras_image_prediction.classList.remove('display_none');
    text_Detection.classList.remove('display_none');
}
function all_project() {
    remov();
    human.classList.add('display_all');
    player.classList.add('display_all');
    irish.classList.add('display_all');
    movie.classList.add('display_all');
    titanic.classList.add('display_all');
    sale.classList.add('display_all');
    number_predic.classList.add('display_all');
    keras_image_prediction.classList.add('display_all');
    text_Detection.classList.add('display_all');
}


function machine_learning_Project() {
    remov();
    human.classList.add('display_none');
    player.classList.add('display_none');
    irish.classList.add('display_none');
    number_predic.classList.add('display_none');
    keras_image_prediction.classList.add('display_none');
    text_Detection.classList.add('display_none');
}

function github_project() {
    remov();
    movie.classList.add('display_none');
    titanic.classList.add('display_none');
    sale.classList.add('display_none');
}
function other() {
    remov();
    titanic.classList.add('display_none');
    sale.classList.add('display_none');
    human.classList.add('display_none');
    player.classList.add('display_none');
    irish.classList.add('display_none');
    number_predic.classList.add('display_none');
    keras_image_prediction.classList.add('display_none');
}

// ngo
let content=document.getElementsByClassName('ngo');
console.log(content)
content[0].style.display = 'none';
content[1].style.display = 'none';
content[2].style.display = 'none';
content[3].style.display = 'none';
content[4].style.display = 'none';
content[5].style.display = 'none';
content[6].style.display = 'none';
content[7].style.display = 'none';
content[0].style.display = 'block';
let y = 1;
function prev() {
    if (y <= 7 & y > 0) {

        content[0].style.display = 'none';
        content[1].style.display = 'none';
        content[2].style.display = 'none';
        content[3].style.display = 'none';
        content[4].style.display = 'none';
        content[5].style.display = 'none';
        content[6].style.display = 'none';
        content[7].style.display = 'none';
        //content[8].style.display = 'none';
        y = y - 1;
        content[y].style.display = 'block';
        return y;
    }

}

function next() {
    if (y >= 0 & y < 7) {

        content[0].style.display = 'none';
        content[1].style.display = 'none';
        content[2].style.display = 'none';
        content[3].style.display = 'none';
        content[4].style.display = 'none';
        content[5].style.display = 'none';
        content[6].style.display = 'none';
        content[7].style.display = 'none';
       // content[8].style.display = 'none';
        y = y + 1;
        content[y].style.display = 'block';
    }
}


// contact me

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_uxljsji";
    const templateID = "template_amb6gnw";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
      console.log('hi sameer');
  
  }


