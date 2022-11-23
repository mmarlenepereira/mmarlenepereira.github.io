/*Module: Web Design and Client Side Scripting. Week 9 Lab - Loops and Repetitions
Student: Maria Marlene Pereira | Student Nr 22115234
Task: Create a web page that prints all of the lyrics to '99 bottles of beer' https://www.songfacts.com/lyrics/traditional/99-bottles-of-beer
*/


// for this exercise, we use a for loop with a nested if statement
function Lyrics(){ //function starts when it's called in the html file
    for(i =99; i>=0; i=i-1){
			if(i>2){
                document.getElementById("main").innerHTML+="<br> </><br> </>" +i+ " bottles of beer on the wall," ;
                document.getElementById("main").innerHTML+="<br> </>" +i+ " bottles of beer on the wall,"; 
                document.getElementById("main").innerHTML+="<br>Take one down,"; 
                document.getElementById("main").innerHTML+="<br>Pass it around,"; 
                document.getElementById("main").innerHTML+="<br> </>" +(i-1)+ " bottles of beer on the wall,";
			}
			else if(i==2){   // we use a else if to change the lyrics (singular 'bottle' ) when we get to number 2
                document.getElementById("main").innerHTML+="<br> </>" +i+ " bottles of beer on the wall,";
                document.getElementById("main").innerHTML+="<br> </>" +i+ " bottles of beer,";
                document.getElementById("main").innerHTML+="<br>Take one down,"; 
                document.getElementById("main").innerHTML+="<br>Pass it around,"; 
                document.getElementById("main").innerHTML+="<br> </>" +(i-1)+ " bottle of beer on the wall,";
			}
            else if(i==1){ // we use another else if to change the lyrics (singular 'bottle' ) when we get to number 1
                document.getElementById("main").innerHTML+="<br> </>" +i+ " bottle of beer on the wall,";
                document.getElementById("main").innerHTML+="<br> </>" +i+ " bottle of beer,";
                document.getElementById("main").innerHTML+="<br>Take one down,"; 
                document.getElementById("main").innerHTML+="<br>Pass it around,"; 
                document.getElementById("main").innerHTML+="<br> </>" +(i-1)+ " bottles of beer on the wall,";
            }
			document.getElementById("main").innerHTML+="<br> </>";
            document.getElementById("main").innerHTML+="-------------------------------------------------------------------------"; // this element prints out a dashed line everytime after each iteration of the loop
		}
		document.getElementById("main").innerHTML+="No more bottles of beer on the wall, no more bottles of beer";
    } // closes function
	
