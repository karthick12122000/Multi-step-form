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