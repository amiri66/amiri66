// var inpur = document.geEelementById('input_id');
// var button = document.getElementById('btn_id')
// var text = document.getElementById('teksti_id')



// button.onclick = function(){
//     text.innerHTML = input.value;
// }

// var input1 = ducument.querySelector('#input_id');
// var input1 = ducument.querySelector('#input2_id');
// var ans = document.querySelector('#answer');

// GamepadButton.addEventListner('click',function(){})

var text = "The best school in the world is Ditigal School";
var result = text.search('Ditigal School');
document.getElementById('result1').innerHTML = result;


var text = "The best school in the world is Ditigal School";
var result = text.replace('Ditigal School', 'Another School');
document.getElementById('result2').innerHTML = result;


var text2 = "abcdef";
var regex = new RegExp('abc')
document.getElementById('result3').innerHTML = regex.test(text2);

var text3 = "My school is the best school in the world";
var regex = /o/g;
document.getElementById('result4').innerHTML = text3.match(regex);

var text4 ="Ditigal school is the best school in the world!!";
var regex = /[abc]/g
document.getElementById('result5').innerHTML = text.match(regex);
 

var text5 = "Ditigal School is in the top 10 best schools in the world";
var regex = /[0-9]/g;
document.getElementById('result6').innerHTML = text5.match(regex);

var text6 ="100 percent asjkdhaldhaldhaldhaldhaldhaldhaldhadladal";
var regex =/\d/g;
document.getElementById('result7').innerHTML =text6.match(regex)

