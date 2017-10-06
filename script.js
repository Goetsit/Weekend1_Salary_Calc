console.log('JS');

$(document).ready(readyNow);

function readyNow(){
  console.log('JQ READY');
  $('#firstNameBtn').on('click', firstNameVal);

}


function firstNameVal(){
  console.log($('#firstNameInput').val());
}
