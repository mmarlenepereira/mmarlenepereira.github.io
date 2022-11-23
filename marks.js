/*Module: Web Design and Client Side Scripting. Week 9 Lab - Loops and Repetitions
Student: Maria Marlene Pereira | Student Nr 22115234
Task: Create a web page that asks a user how many subjects they take, and what marks they got in each subject. The application should then output their results
Bonus: Tell the user their grade from A-F based on their results */

//declare variables to store the user input    
// var numsubjects; 
//var mark;  
var total=0;
var avg;
        
        
function Subjects(){ // call the function
// Get user input, using the method Prompt() and store it in the variable numsubjects as an integer
var numsubjects=parseInt(prompt("How many subjects do you have?")); 

//for loop to get the marks of each subject (as an integer) and sum the value of each iteration and store it in the variable total.
for (i=0; i<=numsubjects-1; i=i+1){
var mark=parseInt(prompt("Please insert your mark for subject # " +(i+1))); 
total += mark;
} // close the lopp
alert("Your total is " +total);
avg=total/numsubjects; // once we get the total, calculate the average and return it to the user using the alert method
alert("Your avg result is " +avg);

// create an if statement to return the grade of the student based on the average result calculated above.
if(avg>=90&&avg<=100){
    alert("Your average grade is A.");
    }
else if(avg>=80&&avg<=89){
    alert("Your average grade is B.");
    }   
else if(avg>=70&&avg<=79){
    alert("Your average grade is C.");
    }
else if(avg>=60&&avg<=69){
    alert("Your average grade is D.");
    }
else if(avg<=59&&avg>=0){
    alert("Your average grade is F.");
    }
else{
    alert("Your average grade could not be calculated");
    }

}
