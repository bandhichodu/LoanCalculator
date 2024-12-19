function calculateloan(){
    const loanamount=document.getElementById("lamt").value;
    const loanintrest=document.getElementById("lint").value;
    const loanmonths=document.getElementById("lmnt").value;

    const intrest=(loanamount*(loanintrest*0.01))/loanmonths;

    const monthlypayment=(loanamount/loanmonths+intrest).toFixed(2);

    document.getElementById("monthly-payment").innerHTML = `Monthly Payment: ${monthlypayment}`;
}



