function CalculateWage() {
    // Get input values
    const RegularHoursWorked = document.getElementById("RegularHoursWorked").valueAsNumber;
    const RegularHourlyPpayRate = document.getElementById("RegularHourlyPayRate").valueAsNumber;
    const OvertimeHours = document.getElementById("OvertimeHours").valueAsNumber
    const OvertimeHourlyPayRate = document.getElementById("OvertimeHourlyPayRate").valueAsNumber
    
    // Calculate regular wage
    const regularWage = RegularHoursWorked * RegularHourlyPpayRate;
    
    //Calculate overtime wage
    const overtimeWage = OvertimeHours * OvertimeHourlyPayRate;

    //Calculate total wage
    const totalWage = regularWage + overtimeWage

    //Display the results
    const regularWageResult = document.getElementById("regularWageResult");
    regularWageResult.innerHTML = `Regular Wage: $${regularWage.toFixed(2)}`;

    const overtimeWageResult = document.getElementById("overtimeWageResult");
    overtimeWageResult.innerHTML = `Overtime Wage: $${overtimeWage.toFixed(2)}`;

    const totalWageResult = document.getElementById("totalWageResult");
    totalWageResult.innerHTML = `Total wage: $${totalWage.toFixed(2)}`;
}




