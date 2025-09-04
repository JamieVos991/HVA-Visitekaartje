let button = document.querySelector('input[type="checkbox"');

button.addEventListener('change', function(){
  if(button.checked) {
    document.body.style.background = "#212121";
    console.log("Dark mode!");
  }
  else {
    document.body.style.background = "#CCCCFF"
    console.log("Light mode!");
  }
})