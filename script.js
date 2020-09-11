const calcy = () => {

    let s1 = document.getElementById("s1").value
    let s2 = document.getElementById("s2").value
    let s3 = document.getElementById("s3").value
    let s4 = document.getElementById("s4").value
    let grades;

    let totalGrades = parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4);

    let perce = (totalGrades / 400) * 100;
    let percentage = perce.toFixed(2);


    if (percentage <= 100 && percentage >= 80) {
        grades = 'A';
    } else if (percentage <= 79 && percentage >= 60) {
        grades = 'B';
    } else if (percentage <= 59 && percentage >= 40) {
        grades = 'C';
    } else {
        grades = 'F';
    }

    if (percentage >= 39.5) {
        document.getElementById("showdata").innerHTML = `Out of 400 your total is ${totalGrades} and percentage is
    ${percentage}%.Your grade is ${grades}.<br> You are PASS.`

    } else {
        document.getElementById("showdata").innerHTML = `Out of 400 your total is ${totalGrades} and percentage is
    ${percentage}%.Your grade is ${grades}.<br> You are FAIL!`
    }

}

function reset() {
    document.getElementById("myform").reset();
    document.getElementById("showdata").style.display = "none";
}
