let firstTypePoints = sessionStorage.getItem("first");
let secondTypePoints = sessionStorage.getItem("second");
let thirdTypePoints = sessionStorage.getItem("third");
let fourthTypePoints = sessionStorage.getItem("fourth");
let fifthTypePoints = sessionStorage.getItem("fifth");
let sixthTypePoints = sessionStorage.getItem("sixth");
let seventhTypePoints = sessionStorage.getItem("seventh");
let eighthTypePoints = sessionStorage.getItem("eighth");
let ninthTypePoints = sessionStorage.getItem("ninth");
let tenthTypePoints = sessionStorage.getItem("tenth");
let eleventhTypePoints = sessionStorage.getItem("eleventh");



/*let one = document.getElementsByClassName("").innerHTML;
timrff = document.getElementsByClassName("tick").style.display ="none";
console.log(timrff)
console.log(one)*/
let mess;
let typo;
typo = "How Happy Are You?"
mess = [`1.Health & Vitality-${firstTypePoints}/10` , `2.Mindset & Emotional Mastery  - ${secondTypePoints + "/10"}`, `3.Romantic Love  - ${thirdTypePoints + "/10"}` , `4.Family   - ${fourthTypePoints + "/10"}` , `5.Friends & Social  - ${fifthTypePoints + "/10"}`,`6.Productivity & Performance  - ${sixthTypePoints + "/10"}`,`7.Career & Business  - ${seventhTypePoints + "/10"}`,`8.Wealth & Finances  - ${eighthTypePoints + "/10"}`,`9. Recreation & Lifestyle  - ${ninthTypePoints + "/10"}` ,`10.Leadership, Impact & Contribution   - ${tenthTypePoints + "/10"}`, `11. Spirituality   - ${eleventhTypePoints + "/10"}`]


const mao = mess.map((ms) => `<p>` + ms + `</p>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.classList.add("center-item");
//document.querySelector(".msghere").innerHTML = mao;

msgme.innerHTML = mao;
//document.getElementsByClassName("tick").style.display = "none";
//document.querySelector(".usertype").value = typo; 

//document.querySelector(".usertype").style.display = "none";

///////////////////social share

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hey there,Checkout my Results");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();




  
