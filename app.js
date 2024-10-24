function bill(){
   const none = document.getElementById('none');
   const contanir = document.getElementById('block').style.display = "none";
   const customer = document.getElementById('customer').value;
   const unit = document.getElementById('unit').value;
   const chargesPerUnit = 16;
   const latePaymentSurcharge = 350;

   let netAmount = (unit * chargesPerUnit).toFixed(2);
   let grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

   // Current Month
   let currentMonth = new Date().getMonth();
   let Month = ['January', 'February', 'March', 'Aprail', 'May', 'June', 'Jullu', 'August', 'September', 'October', 'November', 'December'];
   let totalMonth = Month[currentMonth];

   // result

   const result = document.getElementById('result-bill').innerHTML = `
   <div><strong>Customer Name:</strong> ${customer}</div>
   <div><strong>Current Month:</strong> ${totalMonth}</div>
   <div><strong>Number of Units:</strong> ${unit}</div>
   <div><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</div>
   <div><strong>Net Amount Payable (within Due Date):</strong> ${netAmount}</div>
   <div><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</div>
   <div><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmount}</div>
   `
   if(none.style.display = "none"){
      none.style.display = 'block'
   }
};

let btnR = document.getElementById('btnR');
btnR.addEventListener('click',() => {
   location.reload()
})



