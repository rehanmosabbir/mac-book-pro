function getBestPrice() {
  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  return bestPriceVal;
}

function updateTotalPrice(price) {
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = price;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = price;
}

function getDeliveryCost() {
  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);
  return deliveryCostVal;
}

document.getElementById("sixteen-gb-memory-btn").addEventListener("click", function () {
  // Extra Memory Cost Calculation
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText) + 180;
  extraMemoryCostEl.innerText = extraMemoryCostVal;

  // Extra Storage Cost Calculation
  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);

  // Delivery Cost Calculation
  const deliveryCostVal = getDeliveryCost();
  // Best Price Calculation
  const bestPriceVal = getBestPrice();
  // Total Price Calculation
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  updateTotalPrice(totalPrice);
});

document.getElementById("eight-gb-memory-btn").addEventListener("click", function () {
  // Extra Memory Cost Calculation
  let extraMemoryCostEl = document.getElementById("extra-memory-cost");
  extraMemoryCostEl.innerText = 0;
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);
  extraMemoryCostEl.innerText = extraMemoryCostVal;

  // Extra Storage Cost Calculation
  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);

  // Delivery Cost Calculation
  const deliveryCostVal = getDeliveryCost();

  // Best Price Calculation
  const bestPriceVal = getBestPrice();

  // Total Price Calculation
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  updateTotalPrice(totalPrice);
});

document.getElementById("two-hundred-fifty-six-storage-btn").addEventListener("click", function () {
  // Extra Memory Cost Calculation
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);

  // Extra Storage Cost Calculation
  let extraStorageCostEl = document.getElementById("extra-storage-cost");
  extraStorageCostEl.innerText = 0;
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);
  extraStorageCostEl.innerText = extraStorageCostVal;

  // Delivery Cost Calculation
  const deliveryCostVal = getDeliveryCost();

  // Best Price Calculation
  const bestPriceVal = getBestPrice();

  // Total Price Calculation
  const totalPrice = extraStorageCostVal + bestPriceVal + extraMemoryCostVal + deliveryCostVal;
  updateTotalPrice(totalPrice);
});

document.getElementById("five-hundred-twelve-storage-btn").addEventListener("click", function () {
  // Extra Memory Cost Calculation
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);

  // Delivery Cost Calculation
  const deliveryCostVal = getDeliveryCost();
  // Extra Storage Cost Calculation
  let extraStorageCostEl = document.getElementById("extra-storage-cost");
  extraStorageCostEl.innerText = 0;
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText) + 100;
  extraStorageCostEl.innerText = extraStorageCostVal;
  // Best Price Calculation
  const bestPriceVal = getBestPrice();
  // Total Price Calculation
  const totalPrice = extraStorageCostVal + bestPriceVal + extraMemoryCostVal + deliveryCostVal;
  updateTotalPrice(totalPrice);
});
document.getElementById("one-tb-storage-btn").addEventListener("click", function () {
  // Extra Memory Cost Calculation
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);
  // Extra Storage Cost Calculation
  let extraStorageCostEl = document.getElementById("extra-storage-cost");
  extraStorageCostEl.innerText = 0;
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText) + 180;
  extraStorageCostEl.innerText = extraStorageCostVal;

  // Delivery Cost Calculation
  const deliveryCostVal = getDeliveryCost();
  // Best Price Calculation
  const bestPriceVal = getBestPrice();
  // Total Price Calculation
  const totalPrice = extraStorageCostVal + bestPriceVal + extraMemoryCostVal + deliveryCostVal;
  updateTotalPrice(totalPrice);
});

document.getElementById("free-delivery-charge-btn").addEventListener("click", function () {
  // Delivery Cost Calculation
  let deliveryCostEl = document.getElementById("delivery-charge");
  deliveryCostEl.innerText = 0;
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);
  deliveryCostEl.innerText = deliveryCostVal;
  // Extra Storage Cost Calculation
  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);
  // Extra Memory Cost Calculation
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);
  // Best Price Calculation
  const bestPriceVal = getBestPrice();
  // Total Price Calculation
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  updateTotalPrice(totalPrice);
});
document.getElementById("delivery-charge-btn").addEventListener("click", function () {
  // Delivery Cost Calculation
  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText) + 20;
  deliveryCostEl.innerText = deliveryCostVal;
  // Extra Storage Cost Calculation
  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);
  // Extra Memory Cost Calculation
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);
  // Best Price Calculation
  const bestPriceVal = getBestPrice();
  // Total Price Calculation
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  updateTotalPrice(totalPrice);
});

document.getElementById("apply-promo-btn").addEventListener("click", function () {
  const inputPromoCode = document.getElementById("promo-code");
  const promoCodeText = inputPromoCode.value;
  const promoCodeTextLower = promoCodeText.toLowerCase();
  if (promoCodeTextLower === "stevekaku") {
    const totalPriceFinalEl = document.getElementById("total-price-final");
    const totalPriceFinalText = totalPriceFinalEl.innerText;
    const totalPriceFinalVal = parseFloat(totalPriceFinalText);
    const discountAmount = totalPriceFinalVal * 0.2;
    const finalPrice = totalPriceFinalVal - discountAmount;
    totalPriceFinalEl.innerText = finalPrice;
  }
  inputPromoCode.value = " ";
});
