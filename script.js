
$(document).ready(readyNow);

var employees = [];  //empty array

function readyNow(){

  console.log('JQ READY');
  $('#submitBtn').on('click', submitBtnSelect);
  $('#removeBtn').on('click',removeButton);
  $('#submitBtn').on('click', appendDom);

} //event listeners

function submitBtnSelect(){

  var $inputFieldValueFirst = $('#firstNameInput').val();
  var $inputFieldValueLast = $('#lastNameInput').val();
  var $inputFieldValueIdNum = $('#idNumInput').val();
  var $inputFieldValueJobTitle = $('#jobTitleInput').val();
  var $inputFieldValueAnnualSalary = parseInt($('#annualSalInput').val());
  //Set variables for all input fields
  var employee = new Employee
  ($inputFieldValueFirst
    ,$inputFieldValueLast
    ,$inputFieldValueIdNum
    ,$inputFieldValueJobTitle
    ,$inputFieldValueAnnualSalary);
    employees.push(employee); //push into empty array


    totals(); //run totals for monthly expenses
  }


  function Employee(firstNameIn,lastNameIn,idNumberIn,jobTitleIn,annualSalaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
  }


  function totals() {

    var yearly = 0;
    var monthly = 0;
    for(var i = 0; i < employees.length; i += 1){
      yearly += employees[i].annualSalary;
    }
    monthly = yearly / 12;

    $('#total').text(monthly.toFixed());

  }

  function appendDom(){
    for(var i = 0; i < employees.length; i += 1) {
      $('#empTable').append(newRow(employees[i],i));
    } //loop through employees array to append table
  }//calls newRow function to add row


  function newRow(employees,i){
    var rowInsert = '<tr>';
    rowInsert += '<td>' + employees.firstName +'</td>';
    rowInsert += '<td>' + employees.lastName + '</td>';
    rowInsert += '<td>' + employees.idNumber + '</td>';
    rowInsert += '<td>' + employees.jobTitle + '</td>';
    rowInsert += '<td class = "yearlySal">' + employees.annualSalary + '</td>';
    rowInsert += '</tr>';
    $newRow = $(rowInsert);
    return $newRow;
  } //append rows to existing #empTable

  function removeButton(){
    $('tr:last').remove();

  }  //buttons removes last list item
