/*Web Design and Client Side Scripting (HDSDEV_SEPBL_YR1)
Week 10 Lab Submission
Student: Maria Marlene Pereira / 22115234


Question 4
Create a preset array of numbers. Create a piece of code that chooses the largest number from that array */

//Declare and initialize the Array outside of the function
var numbers = ["45" , "54" , "958" , "47" , "6"];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);

//Functions
function showArray(){
    alert("These are the numbers in this array: " +numbers[0]+ ", "+numbers[1]+ ", "+numbers[2]+ ", "+numbers[3]+ ", "+numbers[4]);
}

function showMax(numbers) {
    alert("The largest number of the array is " +max);
  }

  function showMin(numbers) {
    alert("The largest number of the array is " +min);
  }
