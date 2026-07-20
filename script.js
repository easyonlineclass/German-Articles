function calculateQuiz(){

let questions=document.querySelectorAll(".question");

let score=0;


questions.forEach(function(question){

let answer=question.dataset.answer;

let selected=question.querySelector(
"input[type='radio']:checked"
);


let options=question.querySelectorAll(".option");


options.forEach(function(o){
o.classList.remove("correct");
o.classList.remove("wrong");
});


if(selected){

if(selected.value===answer){

score++;

selected.parentElement.classList.add("correct");

}

else{

selected.parentElement.classList.add("wrong");


options.forEach(function(o){

if(o.querySelector("input").value===answer){

o.classList.add("correct");

}

});

}

}

});


let result=document.querySelector(".result");


if(result){

result.style.display="block";

result.innerHTML=
"🎉 Quiz Complete!<br><br>⭐ Score: "
+score+
" / "
+questions.length;

}

}


function resetQuiz(){

location.reload();

}