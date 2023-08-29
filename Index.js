///////////////------------------------ Go back & Next step button
var GBack = document.getElementById("GBack");
var nextBTN = document.getElementById("NStep");
function activeFun(e) {
    var activEle = document.querySelector(".active");
    var activeTab = document.querySelector(".activeT")


    var IdList = ["personalInfo", "plan"];
    // console.log(IdList.indexOf(activEle.id));
    var index = IdList.indexOf(activEle.id);



    if (e == "next") {
        var nID = IdList[index + 1];

        GBack.style.display = 'initial';
    }
    else {

        var nID = IdList[index - 1];

        if ((index - 1) == 0) {
            GBack.style.display = 'none';
        }
        else {
            GBack.style.display = 'initial';
        }

    }
    if (nID != null) {
        activEle.classList.remove("active");
        activeTab.classList.remove("activeT");

        var ele = document.getElementById(nID);

        ele.classList.add("active");
        var tab = document.getElementById(nID + "T");
        tab.classList.add("activeT");

    }


}

nextBTN.addEventListener('click', () => { activeFun("next") });
GBack.addEventListener('click', () => { activeFun("back") });

//////////////////////-------------------Plan checkbox

var toggle = document.getElementById("toggle");
toggle.addEventListener('change',(e)=>{
let plan=document.querySelector(".plan--switch");
let planDetails=document.querySelectorAll(".rate");
let planDiv=document.querySelectorAll(".plan");
console.log(planDiv);


if(toggle.checked==true){
    plan.childNodes[1].style.color="var(--Coolgray)";
    plan.childNodes[9].style.color="var(--Marineblue)";
    planDetails[0].innerText="$90/mo";
    planDetails[1].innerText="$120/mo";
    planDetails[2].innerText="$150/mo";
    planDiv[0].innerHTML+="<p class='free' style='color:var(--Marineblue)'>2 months free</p>";
    planDiv[1].innerHTML+="<p class='free'  style='color:var(--Marineblue)'>2 months free</p>";
    planDiv[2].innerHTML+="<p class='free' style='color:var(--Marineblue)'>2 months free</p>";

}
else{
    plan.childNodes[9].style.color="var(--Coolgray)";
    plan.childNodes[1].style.color="var(--Marineblue)";
    planDetails[0].innerText="$9/mo";
    planDetails[1].innerText="$12/mo";
    planDetails[2].innerText="$15/mo";
    planDiv[0].removeChild(planDiv[0].lastElementChild);
    planDiv[1].removeChild(planDiv[1].lastElementChild);
    planDiv[2].removeChild(planDiv[2].lastElementChild);
}

});