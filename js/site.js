let questions = [
  { id: 1, question: "On a scale from 1-10 HOW HAPPY are you with your current Health & Vitality?",},
  { id: 2, question: "On a scale from 1-10 HOW HAPPY are you with your current Mindset & Emotional Mastery?",},
  { id: 3, question: "On a scale from 1-10 HOW HAPPY are you in the area of Romantic Love?",},
  { id: 4, question: "On a scale from 1-10 HOW HAPPY are you in the area of Family?",},
  { id: 5, question: "On a scale from 1-10 HOW HAPPY are you with your Friends & Social Life?",},
  { id: 6, question: "On a scale from 1-10 HOW HAPPY are you with your Productivity & Performance?",},
  { id: 7, question: "On a scale from 1-10 HOW HAPPY are you with your Career & Business ?",},
  { id: 8, question: "On a scale from 1-10 HOW HAPPY are you with your Wealth & Finances?",},
  { id: 9, question: "On a scale from 1-10 HOW HAPPY are you with your Lifestyle / Recreation?",},
  { id: 10, question: "On a scale from 1-10 HOW HAPPY are you with your Leadership, Impact & Contribution?",},
  { id: 11, question: "On a scale from 1-10 HOW HAPPY are you with your Spirituality?",},
 
];

let question_count = 0;

Max_Questions = 11;

window.onload = function () {
  show(question_count);
};




function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }
   
 const  user_answer = document.querySelector(".optionsingle.active").innerHTML;
 // let user_answer = document.querySelector("option.active").innerHTML;
 //check answer
 
  if(question_count == 0){
         
    sessionStorage.setItem("first" , user_answer)
  }
  else if(question_count == 1){
    sessionStorage.setItem("second" , user_answer)
  }
  else if(question_count == 2){
    sessionStorage.setItem("third" , user_answer)
  }
  else if(question_count == 3){
    sessionStorage.setItem("fourth" , user_answer)
  }
  else if(question_count == 4){
    sessionStorage.setItem("fifth" , user_answer)
  }
  else if(question_count == 5){
    sessionStorage.setItem("sixth" , user_answer)
  }
  else if(question_count == 6){
    sessionStorage.setItem("seventh" , user_answer)
  }
  else if(question_count == 7){
    sessionStorage.setItem("eighth" , user_answer)
  }
  else if(question_count == 8){
    sessionStorage.setItem("ninth" , user_answer)
  }
  else if(question_count == 9){
    sessionStorage.setItem("tenth" , user_answer)
  }
  else if(question_count == 10){
    sessionStorage.setItem("eleventh" , user_answer)
  }
  


  question_count++;
  show(question_count);
  toggleActive();
  /*//Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`; */
}

function show(count) {
  
  /*progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`; */

  let question = document.getElementById("questions");
 

  question.innerHTML = `
  <h2>${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span> <span class="optionsingle">1</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 2</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span> <span class="optionsingle"> 3</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 4</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 5</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 6</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 7</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 8</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 9</span></span></li>
  <li ><span class="option"><span class="tick"><i class="far fa-check-circle " id="tick" ></i></span>  <span class="optionsingle"> 10</span></span></li>
</ul> 
  `;
  let tickIcon = document.getElementById("tick")
 // tickIcon.style.display = "none";
 //tickIcon.style.visibility = "hidden"
  let option = document.querySelector(".option");

   // tickIcon.classList.add("faro")

    //tickIcon.style.visibility = "visible";
  
  option.addEventListener("mouseout" , function(){
    tickIcon.classList.remove("faro")
   // tickIcon.style.visibility = "hidden";
  }

 
   ) 
  toggleActive();
}

function toggleActive() {
 

  let optionsingle = document.querySelectorAll(".optionsingle");
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < optionsingle.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < optionsingle.length; i++) {
        if (optionsingle[i].classList.contains("active")) {
          optionsingle[i].classList.remove("active");
        }
      }
      optionsingle[i].classList.add("active");
    };
  }

 
}
