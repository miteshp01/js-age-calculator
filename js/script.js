let dob = document.getElementById("dob");
let cd = document.getElementById("cd");
let output = document.getElementById("output");
document.getElementById('cd').valueAsDate = new Date();

document.getElementById("btnCalculate").addEventListener("click", ()=> {
    if (dob.value == "" || cd.value == "") {
        output.innerHTML = ("Please Seclect The DAte..");
    }
    else {
        calcualteAgeDifference(dob.value, cd.value);
    } 
});

function calcualteAgeDifference(start, end) {
    console.log("Start : ", start);
    console.log("End: ", end);
    let dobYear = parseInt(start.substring(0,4), 10);
    let dobMonth = parseInt(start.substring(5,7), 10);
    let dobDay = parseInt(start.substring(8,10), 10);
    console.log(dobYear);
    console.log(dobMonth);
    console.log(dobDay);
    console.log("-----------------------");
    let cdYear = parseInt(end.substring(0,4), 10);
    let cdMonth = parseInt(end.substring(5,7), 10);
    let cdDay = parseInt(end.substring(8,10), 10);
    console.log(cdYear);
    console.log(cdMonth);
    console.log(cdDay);

    let yearAgeDiff;
    yearAgeDiff = cdYear - dobYear;

    let monthAgeDiff;
    if (cdMonth >= dobMonth) {
        monthAgeDiff = cdMonth - dobMonth;
    } else {
        yearAgeDiff--;
        monthAgeDiff = 12 + cdMonth - dobMonth;
    }

    let dayAgeDiff;
    let noOfDaysInDOB;
    if (cdDay >= dobDay) {
        dayAgeDiff = cdDay - dobDay;
    } else {
        monthAgeDiff--;
        noOfDaysInDOB = daysInMonth (dobMonth, dobMonth);
        dayAgeDiff = noOfDaysInDOB + cdDay - dobDay;

        if (monthAgeDiff<0) {
            monthAgeDiff=11
            yearAgeDiff--;
        }
    }

    console.log("No of Days in DOB : ", noOfDaysInDOB);
    console.log("-----------Age calculate------------");
    console.log(yearAgeDiff);
    console.log(monthAgeDiff);
    console.log(dayAgeDiff);

    output.innerHTML = yearAgeDiff + " Years, " + monthAgeDiff + " Months, " + dayAgeDiff + " Days";

}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}