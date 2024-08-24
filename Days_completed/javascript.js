


let resetBtn = document.querySelector("#resetBtn");
let refresh = document.querySelector(".refresh");

function numberWithCommas(remainingWeeks) {
    return remainingWeeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");     //to put commons afetr thousand units..
}

function pageReset() {
    refresh.click();
    //reset the whole page on click
}


function calculateDate() {
    let resultAnswer = document.querySelector(".answer");
    resultAnswer.classList.add('active');
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var Difference_In_Time = new Date(endDate).getTime() - new Date(startDate).getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    result.innerHTML = numberWithCommas(Difference_In_Days);

    // console.log(startDate);
    // console.log(endDate);
    // console.log(Difference_In_Days);
    // console.log(Difference_In_Time);

}