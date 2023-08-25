
function activeFun(e) {
    var activEle = document.querySelector(".active");
    console.log(activEle.id);

    var IdList = ["personalInfo", "plan"];
    console.log(IdList.indexOf(activEle.id));
    var index = IdList.indexOf(activEle.id);
    var nID = IdList.at(index + 1);
    if (nID != null) {
        activEle.classList.remove("active");
        console.log(nID);
        var ele = document.getElementById(nID);
        console.log(ele);
        ele.classList.add("active");
    }
}
var nextBTN = document.getElementById("NStep");
nextBTN.addEventListener('click', activeFun);