// Getting GrossSalary
let netSalary, grossSalary, benefits, NHIFDeductions, PAYEE, NSSFDeduction = 0

grossSalary =500000;
benefits = 2000


// PAYEE Finder function finds a persons payable tax from their gross salary
function PAYEEFinder(grossSalary){
    if(grossSalary<=24000) return PAYEE = grossSalary*0.1
    if(grossSalary<=32333) return PAYEE = grossSalary*0.25
    if(grossSalary<=500000) return PAYEE = grossSalary*0.3
    if(grossSalary<=800000) return PAYEE = grossSalary*0.325
    return PAYEE = grossSalary*0.35
}

// NHIF Deductions finder 
function NHIFDeductionsFinder(grossSalary){
    if(grossSalary<=5999) return NHIFDeductions = 150
    if(grossSalary<=7999) return NHIFDeductions = 300
    if(grossSalary<=11999) return NHIFDeductions = 400
    if(grossSalary<=14999) return NHIFDeductions = 500
    if(grossSalary<=19999) return NHIFDeductions = 600
    if(grossSalary<=24999) return NHIFDeductions = 750
    if(grossSalary<=29999) return NHIFDeductions = 900
    if(grossSalary<=39999) return NHIFDeductions = 950
    if(grossSalary<=44999) return NHIFDeductions = 1000
    if(grossSalary<=49999) return NHIFDeductions = 1100
    if(grossSalary<=59999) return NHIFDeductions = 1200
    if(grossSalary<=69999) return NHIFDeductions = 1300
    if(grossSalary<=79999) return NHIFDeductions = 1400
    if(grossSalary<=89999) return NHIFDeductions = 1500
    if(grossSalary<=99999) return NHIFDeductions = 1600
    return NHIFDeductions = 1700
}

// NSSF 
function NSSFDeductionFinder(grossSalary){
    return NSSFDeduction= grossSalary * 0.06
}


function netSalaryFinder(grossSalary){

    PAYEEFinder(grossSalary)
    NHIFDeductionsFinder(grossSalary)
    NSSFDeductionFinder(grossSalary)

    totalDeductions = NHIFDeductions + NSSFDeduction + PAYEE
    netSalary = (grossSalary - totalDeductions)+benefits



    console.log(` The gloss Salary: ${grossSalary} \n Payable tax: ${PAYEE} \n NHIF Dduction: 
        ${NHIFDeductions} \n NSSF Deductions : ${NSSFDeduction} \n 
        Total deductions: ${totalDeductions} \n NET SALARY: ${netSalary}`)
}
netSalaryFinder(grossSalary)