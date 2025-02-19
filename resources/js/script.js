function k2c () {
let textElement = document.querySelector('#kelvin-box');
let calcKelvin = textElement.value;

let celsius = calcKelvin - 273;
let celsiusSpan = document.getElementById('celsius');

let fahrenheit = Math.floor(celsius * (9/5)+32);
console.log(fahrenheit);

let fahrenheitSpan = document.getElementById('fahrenheit');

document.getElementById('celsius-box').value=celsius;
document.getElementById('fahrenheit-box').value=fahrenheit;
}


function clickClear() {

document.getElementById('kelvin-box').value="";
document.getElementById('celsius-box').value="";
document.getElementById('fahrenheit-box').value=""
}


function c2f () {
let enteredValue = document.getElementById('celsius-box');
let celsius = enteredValue.value;
console.log(celsius);

let fahrenheit = Math.floor(celsius * (9/5)+32);
console.log(fahrenheit);
let kelvin = parseInt(celsius) + 273;

document.getElementById('fahrenheit-box').value=fahrenheit;
document.getElementById('kelvin-box').value=kelvin;

}

function f2k() {
let enteredValue = document.getElementById('fahrenheit-box');
fahrenheit = parseInt(enteredValue.value);
console.log(fahrenheit);

let celsius = Math.floor((fahrenheit - 32) * 5/9);
console.log(celsius);
let kelvin = celsius + 273;


document.getElementById('celsius-box').value=celsius;
document.getElementById('kelvin-box').value=kelvin;
}


//remember you can't extract values from an element directly. First make it a variable within the function. then you can use .value. if addition is resulting in concatenation, use parseInt() or parseFloat(). because parseInt was used, it is inferior to having used parseFloat with Math.floor.

function d2h() {
let earthYears = document.getElementById('dog-years');
let years = parseFloat(earthYears.value);
console.log(years);

if (years <=2 && years >=0) {
let dogYears = years *10.5;
document.querySelector('.dog').textContent=`They are ${dogYears} dog years old.`;
}
else if (years >=2){
let dogYears = 21 + 4*(years-2);
document.querySelector('.dog').textContent= `They are ${dogYears} dog years old.`;
}else {
document.querySelector('.dog').textContent="Enter a realistic number";
}
}

function a2d() {
let age = parseFloat(document.getElementById('age').value);

if (age <=21 && age >=0) {
dogAge= age/10.5;
document.querySelector('.years').textContent=`Your age, measured in dog-years, is the same as that of a ${dogAge.toFixed(2)}-year-old dog.`
}else if (age >21) {
dogAge = (age -21)/4 +2;
document.querySelector('.years').textContent=`Your age, measured in dog-years, is the same as that of a ${dogAge.toFixed(2)}-year-old dog.`;
} else {
document.querySelector('.years').textContent="Please Enter a realistic number.";
}
}

//.toFixed() method returns a string to the decimal place value entered as the parameter.

function shake() {
	let triangle = Math.floor(Math.random()*8);
	let eightBall;
	
	switch (triangle) {
		case 0 :eightball = 'It is certain';
		break
		case 1 : eightBall = 'It is decidedly so';
	  break
	  case 2 : eightBall = 'Replay hazy. Try again';
	  break 
	  case 3 : eightBall = 'Cannot predict now';
	  break
	  case 4 : eightBall = 'Do not count on it';
	  break
	  case 5 : eightBall = 'My sources say no';
	  break
	  case 6 : eightBall = 'Outlook not so good';
	  break
	  case 7 : eightBall = 'Signs point to yes';
	  break
	  default:
	  console.log('impossible outcome')
	  break
	}	
document.querySelector('.response').textContent=eightBall;
}

function spin(){
	let result = Math.floor(Math.random()*6);
	let outcome ="";
	switch (result) {
		case 0 : outcome= 'Toma Uno';
		break
		case 1 : outcome = 'Toma dos';
		break
		case 2 : outcome = 'Spin Again';
		break
		case 3 : outcome = 'Pon Uno';
		break 
		case 4 : outcome = 'Pon Dos';
		break
		case 5 : outcome = 'Toma Todo';
		break
	}
	document.querySelector('.outcome').textContent=outcome;
}

function go (user) {
	let num = Math.floor(Math.random() * 3);
	let comp = ""
	switch (num) {
		case 0 : comp = 'paper';
		break
		case 1 : comp = 'rock';
		break;
		case 2 : comp = "scissors";
		break
		default : comp = 'error';
	}
	console.log(comp)
	let userInput = user;
	console.log(userInput);
	let userChoice =""
		switch (userInput) {
		case 0 : userChoice = 'paper';
		break
		case 1 : userChoice = 'rock';
		break;
		case 2 : userChoice = "scissors";
		break
		default : userChoice = 'error';
		}
	
	document.querySelector('.cpu').textContent=comp;
	
	let computerChoice = comp;
		
	function bo() {
	
	if (userChoice === computerChoice) {
    return 'tie'
    } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
    return 'win'
    } else {
      return 'lose'
    }
  } else if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'lose'}
      else {return 'win'
    }
  } else if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'lose'
    }else {return 'win'
    }
  } else if(userChoice === 'bomb') {
    return 'win'
  }else {
  return 'error in determineWinner'
}
	}
	let results= bo();
	document.querySelector('.go-outcome').textContent=results;
}
	
function calcSleep(){
	let mon = parseFloat(document.querySelector('#mon').value);
	let tues = parseFloat(document.querySelector('#tues').value);
	let wed = parseFloat(document.querySelector('#wed').value);
	let thurs = parseFloat(document.querySelector('#thurs').value);
	let fri = parseFloat(document.querySelector('#fri').value);
	let sat = parseFloat(document.querySelector('#sat').value);
	let sun = parseFloat(document.querySelector('#sun').value);
	
	let ideal = parseFloat(document.getElementById('ideal').value);
	
	let monCalc = mon - ideal;
	let tuesCalc = tues - ideal;
	let wedCalc = wed - ideal;
	let thursCalc = thurs - ideal;
	let friCalc = fri - ideal;
	let satCalc = sat - ideal;
	let sunCalc = sun - ideal;
	document.querySelector('.mon-calc').textContent=monCalc;
	document.querySelector('.tues-calc').textContent=tuesCalc;
	document.querySelector('.wed-calc').textContent=wedCalc;
	document.querySelector('.thurs-calc').textContent=thursCalc;
	document.querySelector('.fri-calc').textContent=friCalc;
	document.querySelector('.sat-calc').textContent=satCalc;
	document.querySelector('.sun-calc').textContent=sunCalc;	
	
	const getIdealSleepHours = (ideal) => {
		var idealHours = ideal;
		return idealHours *7
	}
	console.log(getIdealSleepHours(ideal));
	
	let actualSleepHours = mon + tues + wed + thurs + fri + sat + sun;
	console.log(actualSleepHours);
	
	let debt = ideal*7 - actualSleepHours;
	
	if (actualSleepHours == ideal*7) {
    document.querySelector('.comments').textContent=`You slept exactly the perfect amount of sleep. Your sleep debt is: ${debt}`;
  } else if (actualSleepHours < ideal*7){
    document.querySelector('.comments').textContent=`You should get more rest. Your sleep debt is: ${debt} hour(s)`;
  } else if (actualSleepHours > ideal*7){
	      document.querySelector('.comments').textContent=`You got more sleep than needed. You over-slept ${Math.abs(debt)} hour(s).`;
    }
}
	
const calculateWeight = () =>{
	let earthWeight = parseFloat(document.getElementById('weight').value);
	let planet = document.getElementById('planet').value;
	
	function calculate (earthWeight, planet) {
	  switch (planet){
		case 'Mercury' : return earthWeight *  0.378;
		break;
		case 'Venus' : return earthWeight * 0.907;
		break;
		case 'Mars' : return earthWeight * 0.377;
		break;   
		case 'Jupiter' : return earthWeight * 2.36;
		break;
		case 'Saturn' : return earthWeight * 0.916;
		break;
		default: return 'cannot be calculated. Invalid planet entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn. Don\'t blame me if Pluto is not a planet.'
	  }
	}
	
	let newWeight = calculate(earthWeight, planet)
	console.log(newWeight);
	document.querySelector('.planetary').textContent = `Your weight on ${planet} is ${newWeight}.`;
}

const tipCalculator = (quality, total) => {
  switch (quality){
	case 'terrible' : return .01;
	break;
    case 'bad' : return total*.05;
    break;
    case 'ok' : return total *.1;
    break;
    case 'good' : return total*.15;
    break;
    case 'excellent' : return total *.2;
    break;
    default: return total*.18;
  }
}
function tipGen(quality){
	total= document.querySelector('#total').value;
	amount = tipCalculator(quality, total);
	document.querySelector('.tip-amount').textContent=`Calculated Tip: ${amount.toFixed(2)}`;
}

function runHack()=> {
	console.log("hi")
}
