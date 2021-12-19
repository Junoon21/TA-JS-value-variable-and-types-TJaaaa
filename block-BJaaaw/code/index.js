// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num=Number(prompt("enter a number"));
if(num%2===0)
{
  alert(" number is even");
}
else {
  alert(" number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=Number(prompt("enter 1st number"));
let num2=Number(prompt("enter 2nd number"));
if (num1>num2)
{
  alert(`${num1} is greater`);
}
else {
  alert(`${num2} is greater`);
}

// 3. Convert the above code using`?` terniary operator
num1>num2 ? alert(`${num1} is greater`):alert(`${num2} is greater`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName =prompt("enter house name?");
if(houseName==="stark")
{
  alert("winter is coming");
}
else if (houseName==="lannister")
{
  alert("A lannister always pays his debt");
}
else {
  alert("all men must die!")
}

// 5. Convert the above code using`?` terniary operator
houseName==="stark"? alert("winter is coming"):houseName==="lannister"?alert("A lannister always pays his debt"):alert("all men must die!");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber=Number(prompt("the number of the month 1 to 12?"));
switch (monthNumber)
{
  case 1 : alert("month has 30 days");
  break;
  case 2 : alert("month has 31 days");
  break;
  case 3 : alert("month has 30 days");
  break;
  case 4 : alert("month has 31 days");
  break;
  case 5 : alert("month has 30 days");
  break;
  case 6 : alert("month has 31 days");
  break;
  case 7 : alert("month has 30 days");
  break;
  case 8 : alert("month has 31 days");
  break;
  case 9 : alert("month has 30 days");
  break;
  case 10 : alert("month has 31 days");
  break;
  case 11 : alert("month has 30 days");
  break;
  case 12 : alert("month has 31 days");

}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let Salary=Number(prompt("enter salary"));
switch (true)
{
  case Salary <= 20000: {
    let tax=(20000*10)/100;
  alert(`the in-hand amount is ${Salary-tax}`);
  break;
  }
  
  case Salary <= 40000: {
    let tax=(40000*20)/100;
    alert(`the in-hand amount is ${Salary-tax}`);
    break;
  }
  
  case Salary <= 50000: 
  {
    let tax=(50000*30)/100;
    alert(`the in-hand amount is ${Salary-tax}`);
    break;
  }
  
  default:alert("not valid");
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=Number(prompt("enter marks"));
if( marks>100)
{
  alert ("Marks can't be greater than 100");
}
else if(marks > 30 && marks < 50) {
  alert ("Grade C");
}
else if(marks > 50 && marks < 80) {
  alert("Grade b");
}
else if(marks > 80 && marks < 100) {
  alert("Grade a");
}
else {
  alert ("grad d");
}
switch (true)
{ case marks > 100 :
  alert("Marks can't be greater than 100");
  break;
  case marks > 30 && marks < 50 :
    alert ("Grade C");
  break;
  case marks > 50 && marks < 80 :
    alert("Grade b");
  break;
  case marks > 80 && marks < 100:
    alert("Grade a");
  break;
  default: alert("grade d ");
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt("What is the weather like outside?");
switch(weather) {
  case "sunny":alert("Wear a T-shirt");
  break;
  case "rainy":alert("Don't forget to take your raincoat");
  break;
  case "hot":alert("Get a hanky");
  break;
  case "freezing":alert("Get your sweeter on");
  break;
  default:alert("Not a valid input");
}
