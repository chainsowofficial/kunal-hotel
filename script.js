const inputs = document.querySelectorAll('input[type="number"]');
const orderSummary = document.getElementById('orderSummary');
const totalAmount = document.getElementById('totalAmount');

inputs.forEach(input => {
  input.addEventListener('input', updateBill);
});

function updateBill() {
  let total = 0;
  let summary = '';

  inputs.forEach(input => {
    const qty = parseInt(input.value);
    const name = input.dataset.name;
    const price = parseInt(input.dataset.price);

    if (qty > 0) {
      const itemTotal = qty * price;
      total += itemTotal;
      summary += `<div>${name} x ${qty} = Rs. ${itemTotal}</div>`;
    }
  });

  orderSummary.innerHTML = summary || "<div>No items selected.</div>";
  totalAmount.textContent = `Total: Rs. ${total}`;
}

function closeQR() {
  document.getElementById("qrModal").style.display = "none";
}

document.getElementById("payOnlineBtn").addEventListener("click", () => {
  document.getElementById("qrModal").style.display = "flex";
});
