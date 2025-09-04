let button = document.querySelector('input[type="checkbox"');
let info = document.querySelector('section:nth-of-type(3)')

button.addEventListener('change', function(){
  if(button.checked) {
    document.body.style.background = "#212121";
    info.style.background = "grey"
    console.log("Dark mode!");
  }
  else {
    document.body.style.background = "#CCCCFF"
     info.style.background = "white"
    console.log("Light mode!");
  }
})