//API Key: 5A2AC7E4-E57E-4DAA-B68C-A2772C2BE16A

const hamburger = document.querySelectorAll("#hamburger");
var click = 1;
if (click === 10){
  click = 1;
};

hamburger.forEach(item => {
  item.addEventListener("click", () => {
    click++
    if (click % 2 === 0) {
      document.getElementById("hamburger").style.opacity = "100%";
      openNav();
      return click;

    } if (click % 2 === 1) {
      document.getElementById("hamburger").style.opacity = null;
      closeNav();
      return click;
      
    }
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("main").style.marginRight = "400px";
  click++;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  click++;
}







