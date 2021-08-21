document.getElementById("sixteen-gb-memory-btn").addEventListener("click", function () {
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText) + 180;
  extraMemoryCostEl.innerText = extraMemoryCostVal;

  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);

  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);

  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = totalPrice;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = totalPrice;
});

document.getElementById("eight-gb-memory-btn").addEventListener("click", function () {
  let extraMemoryCostEl = document.getElementById("extra-memory-cost");
  extraMemoryCostEl.innerText = 0;
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);
  extraMemoryCostEl.innerText = extraMemoryCostVal;

  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);

  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);

  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = totalPrice;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = totalPrice;
});

document.getElementById("two-hundred-fifty-six-storage-btn").addEventListener("click", function () {
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);

  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);

  let extraStorageCostEl = document.getElementById("extra-storage-cost");
  extraStorageCostEl.innerText = 0;
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);
  extraStorageCostEl.innerText = extraStorageCostVal;

  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  const totalPrice = extraStorageCostVal + bestPriceVal + extraMemoryCostVal + deliveryCostVal;
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = totalPrice;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = totalPrice;
});
document.getElementById("five-hundred-twelve-storage-btn").addEventListener("click", function () {
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);

  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);

  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText) + 100;
  extraStorageCostEl.innerText = extraStorageCostVal;

  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  const totalPrice = extraStorageCostVal + bestPriceVal + extraMemoryCostVal + deliveryCostVal;
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = totalPrice;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = totalPrice;
});
document.getElementById("one-tb-storage-btn").addEventListener("click", function () {
  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);

  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText) + 180;
  extraStorageCostEl.innerText = extraStorageCostVal;

  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);

  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  const totalPrice = extraStorageCostVal + bestPriceVal + extraMemoryCostVal + deliveryCostVal;
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = totalPrice;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = totalPrice;
});

document.getElementById("free-delivery-charge-btn").addEventListener("click", function () {
  let deliveryCostEl = document.getElementById("delivery-charge");
  deliveryCostEl.innerText = 0;
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText);
  deliveryCostEl.innerText = deliveryCostVal;

  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);

  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);

  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = totalPrice;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = totalPrice;
});
document.getElementById("delivery-charge-btn").addEventListener("click", function () {
  const deliveryCostEl = document.getElementById("delivery-charge");
  const deliveryCostText = deliveryCostEl.innerText;
  const deliveryCostVal = parseInt(deliveryCostText) + 20;
  deliveryCostEl.innerText = deliveryCostVal;

  const extraStorageCostEl = document.getElementById("extra-storage-cost");
  const extraStorageCostText = extraStorageCostEl.innerText;
  const extraStorageCostVal = parseInt(extraStorageCostText);

  const extraMemoryCostEl = document.getElementById("extra-memory-cost");
  const extraMemoryCostText = extraMemoryCostEl.innerText;
  const extraMemoryCostVal = parseInt(extraMemoryCostText);

  const bestPriceEl = document.getElementById("best-price");
  const bestPriceText = bestPriceEl.innerText;
  const bestPriceVal = parseInt(bestPriceText);
  const totalPrice = extraMemoryCostVal + bestPriceVal + extraStorageCostVal + deliveryCostVal;
  const totalPriceEl = document.getElementById("total-price");
  totalPriceEl.innerText = totalPrice;
  const totalPriceFinalEl = document.getElementById("total-price-final");
  totalPriceFinalEl.innerText = totalPrice;
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
});
