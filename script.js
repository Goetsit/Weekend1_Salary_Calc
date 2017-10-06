console.log('JS');

$(document).ready(readyNow);

function readyNow(){
  console.log('JQ READY');
  $('#submitBtn').on('click', submitBtnSelect);


}


function submitBtnSelect(){

  var $inputFieldValueFirst = $('#firstNameInput').val();
  var $inputFieldValueLast = $('#lastNameInput').val();
  var $inputFieldValueIdNum = $('#idNumInput').val();
  var $inputFieldValueJobTitle = $('#jobTitleInput').val();
  var $inputFieldValueAnnualSalary = $('#annualSalInput').val();
  var $btn = $(this);

  console.log($btn, $inputFieldValueFirst, $inputFieldValueLast, $inputFieldValueIdNum);
  console.log($btn, $inputFieldValueJobTitle, $inputFieldValueAnnualSalary);

  appendDom();

  function appendDom(){

    $('.userResults').append('<ul><li>First Name:'+' '+ $inputFieldValueFirst +'</li>');
    $('.userResults').append('<ul><li>Last Name:'+' '+ $inputFieldValueLast +'</li>');
    $('.userResults').append('<ul><li>ID Number:'+' '+ $inputFieldValueIdNum +'</li>');
    $('.userResults').append('<ul><li>Job Title:'+' '+ $inputFieldValueJobTitle +'</li>');
    $('.userResults').append('<ul><li>Annaul Salary'+' '+ $inputFieldValueAnnualSalary +'</li></ul><br>');


  }

}
