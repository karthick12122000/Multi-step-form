///////////////------------------------ Go back & Next step button
var GBack = document.getElementById("GBack");
var nextBTN = document.getElementById("NStep");
var toggle = document.getElementById("toggle");

function activeFun(e) {
    let activEle = document.querySelector(".active");
    let activeTab = document.querySelector(".activeT");


    var IdList = ["personalInfo", "plan", "addons", "summary"];
    // console.log(IdList.indexOf(activEle.id));
    var index = IdList.indexOf(activEle.id);

    //////////////////////////////-----------index
    if (e == "next") {
        var name = document.getElementById("name");

        var lable = document.querySelectorAll(".labeldiv")
        if (name.value == "") {
            lable[0].querySelector("span").innerText = "This field is required";
            name.style = "border-color: var(--Strawberryred)";

        }
        else {
            lable[0].querySelector("span").innerText = "";
            name.style = "border-color: var(--Lightgray)";

        }
        var email = document.getElementById("email");

        if (email.value == "") {
            lable[1].querySelector("span").innerText = "This field is required";
            email.style = "border-color: var(--Strawberryred)";

        }
        else {
            lable[1].querySelector("span").innerText = "";
            email.style = "border-color: var(--Lightgray)";

            var flag = false;
            let regex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

            if (regex.test(email.value) == false) {
                lable[1].querySelector("span").innerText = "Please enter valid email";
                email.style = "border-color: var(--Strawberryred)";
                flag = true;
            }
            else {
                lable[1].querySelector("span").innerText = "";
                email.style = "border-color: var(--Lightgray)";
            }
        }

        var Pnumber = document.getElementById("Pnumber");

        if (Pnumber.value == "") {
            lable[2].querySelector("span").innerText = "This field is required";
            Pnumber.style = "border-color: var(--Strawberryred)";
        }
        else {
            lable[2].querySelector("span").innerText = "";
            Pnumber.style = "border-color: var(--Lightgray)";

            const re = /^\(?([0-9]{1,5})\)?([0-9]{10})$/g;
            let regex = new RegExp(re);
            if (regex.test(Pnumber.value.toString()) == false) {
                lable[2].querySelector("span").innerText = "Please enter valid number";
                Pnumber.style = "border-color: var(--Strawberryred)";
                flag = true;
               
            } else {
              
                lable[2].querySelector("span").innerText = "";
                Pnumber.style = "border-color: var(--Lightgray)";

            }
        }
        if (flag == true) {
            return false;
        }
        if (Pnumber.value == "" || email.value == "" || name.value == "") {
            return false;
        }

        var nID = IdList[index + 1];
        GBack.style.display = 'initial';

        //////------------------------------------ final page

        if ((index + 1) == 4) {

            document.querySelector(".btn").style.display = "none";

            activEle.classList.remove("active");
            let ele = document.getElementById("thankYou");
            ele.classList.add("active");
        }



        if ((index + 1) == 3) {
            ///////////////////////-----------------Confirm BTN
            nextBTN.innerText = "Confirm";
            nextBTN.style = "background: var(--Purplishblue)";
            //////////////---------------summary
            var planDetails = document.querySelector(".plan--details");

            if (planDetails.hasChildNodes("table")) {
                planDetails.firstChild.remove();
            }


            var selectedPlan = document.querySelector("[name='plan']:checked");
            let plan = document.createElement("table");
            let pack = "Monthly";
            let totalPER = "per month";
            let per = "mo";
            if (toggle.checked == true) {
                pack = "Yearly";
                totalPER = "per year";
                per = "yr";
            }

            let total_Rate = 0;

            let rate = document.getElementById(selectedPlan.value.toLowerCase()).children[1].children[1];
            plan.style = "border-collapse:collapse";

            let rateS = rate.innerText;
            rateS = rateS.slice(rateS.indexOf("$") + 1, rateS.indexOf("/"));
            total_Rate += Number(rateS);
            plan.innerHTML = `<tbody><tr style="color: var(--Marineblue);font-family: 'ubuntu-bold';"><td style="width:350px; padding-top: 0px; border-bottom: 1px solid var(--Coolgray);"><p style="margin-top: 0px;">${selectedPlan.value} (${pack})</p><a href="#" id="change" onclick="change()">Change</a><br></td><td style="      padding-top: 0px;  border-bottom: 1px solid var(--Coolgray);">${rate.innerText}</td></tr>`;


            var selectedAddon = document.querySelectorAll("[name='addonI']");

            for (let i = 0; i < selectedAddon.length; i++) {

                let v = selectedAddon[i];

                let selectedValue = document.querySelector(`#${v.id}`);
                if (selectedValue.checked) {

                    let addonRate = document.querySelector(`#${selectedValue.id.substring(0, selectedValue.id.length - 1)}`).children[2];
                    let rateA = addonRate.innerText;
                    rateA = rateA.slice(rateA.indexOf("$") + 1, rateA.indexOf("/"));
                    total_Rate += Number(rateA);
                    plan.innerHTML += `<tr><td style="color: var(--Coolgray);">${selectedValue.value}</td><td style="color: var(--Marineblue);">${addonRate.innerText}</td></tr>`;
                }
            }
            plan.innerHTML += "</tbody>"
            planDetails.appendChild(plan);
            let summaryF = document.querySelector(".summary--fields");
            summaryF.lastChild.remove()
            summaryF.innerHTML += `<div><p>Total (${totalPER})</p><p>$${total_Rate}/${per}</p></div>`
        }



    }
    else {
        nextBTN.innerText = "Next Step";
        nextBTN.style = "background:var(--Marineblue)";
        var nID = IdList[index - 1];

        if ((index - 1) == 0) {
            GBack.style.display = 'none';
        }
        else {
            GBack.style.display = 'initial';
        }


    }


    ///////////////------------active
    if (nID != null) {
        activEle.classList.remove("active");
        activeTab.classList.remove("activeT");
        let ele = document.getElementById(nID);
        ele.classList.add("active");
        let tab = document.getElementById(nID + "T");
        tab.classList.add("activeT");

    }


}

nextBTN.addEventListener('click', () => { activeFun("next") });
GBack.addEventListener('click', () => { activeFun("back") });

//////////////////////-------------------Plan checkbox


toggle.addEventListener('change', (e) => {
    let plan = document.querySelector(".plan--switch");
    let planDetails = document.querySelectorAll(".rate");
    let planDiv = document.querySelectorAll(".plan");
    let addonDetails = document.querySelectorAll(".rateA");


    /////////---------------yearly
    if (toggle.checked == true) {
        plan.childNodes[1].style.color = "var(--Coolgray)";
        plan.childNodes[9].style.color = "var(--Marineblue)";
        planDetails[0].innerText = "$90/yr";
        planDetails[1].innerText = "$120/yr";
        planDetails[2].innerText = "$150/yr";
        planDiv[0].querySelector("div").innerHTML += "<p class='free' style='color:var(--Marineblue)'>2 months free</p>";
        planDiv[1].querySelector("div").innerHTML += "<p class='free'  style='color:var(--Marineblue)'>2 months free</p>";
        planDiv[2].querySelector("div").innerHTML += "<p class='free' style='color:var(--Marineblue)'>2 months free</p>";


        addonDetails[0].innerText = "+$10/yr";
        addonDetails[1].innerText = "+$20/yr";
        addonDetails[2].innerText = "+$20/yr";

    }
    ////////--------monthly
    else {
        plan.childNodes[9].style.color = "var(--Coolgray)";
        plan.childNodes[1].style.color = "var(--Marineblue)";
        planDetails[0].innerText = "$9/mo";
        planDetails[1].innerText = "$12/mo";
        planDetails[2].innerText = "$15/mo";
        planDiv[0].querySelector("div").removeChild(planDiv[0].querySelector("div").lastElementChild);
        planDiv[1].querySelector("div").removeChild(planDiv[1].querySelector("div").lastElementChild);
        planDiv[2].querySelector("div").removeChild(planDiv[2].querySelector("div").lastElementChild);
        addonDetails[0].innerText = "+$1/mo";
        addonDetails[1].innerText = "+$2/mo";
        addonDetails[2].innerText = "+$2/mo";
    }

});
////------------------change

var change = function () {

    ///////////////------------active

    let activEle = document.querySelector(".active");
    let activeTab = document.querySelector(".activeT");
    activEle.classList.remove("active");
    activeTab.classList.remove("activeT");
    let ele = document.getElementById("plan");
    ele.classList.add("active");
    let tab = document.getElementById("planT");
    tab.classList.add("activeT");
    nextBTN.innerText = "Next Step"
    nextBTN.style = "background: var(--Marineblue)";


};