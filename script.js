//your JS code here. If required.
let btn = document.getElementById('btn');
let commentSection = document.getElementById('commentSection');
let commentShowTab = document.getElementById('commentShowingTab');
let name;
let date;
let dateSorting = [];

btn.addEventListener("click", function(){
	if(commentSection === '')
	{
		alert("Comment please");
	}
		
	else
	{ name = prompt("Enter Name ");
	 date = prompt("Enter Date");
	 dateSorting.push(date);
	commentShowTab.innerHTML = commentSection.value;
	const underline = document.createElement("U");
	commentShowTab.appendChild(underline);
     commentSection.value = "";
	commentShowTab.style.display = 'block';
	}
	
})