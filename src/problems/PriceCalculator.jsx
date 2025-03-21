// This component solves the "Price Calculator" problem from TestDome.com

import { useState, useEffect } from 'react';

export default function PriceCalculator() {
  const [ weight, updateWeight ] = useState(10);
  const [ discountType, updateType ] = useState("standard");
  const [ price, updatePrice ] = useState(100);
  const [ discountedPrice, updateDiscountedPrice ] = useState(0);

  function handleType(event) {
    console.log(event.target.value)
    updateType(event.target.value);
  }
  function handleWeight(event) {
    updateWeight(event.target.value);
  }
  function handlePrice(event) {
    updatePrice(event.target.value);
  }
  function calculate() {
    if (discountType === "standard") { 
      updateDiscountedPrice(price*0.94)
    } else if (discountType === "seasonal") {
      updateDiscountedPrice(price*0.88)
    } else if (discountType === "weight" && weight <= 10) {
      updateDiscountedPrice(price*0.94)
    } else if (discountType === "weight" && weight > 10) {
      updateDiscountedPrice (price*0.82)
    }
  }

  useEffect(() => {
    calculate();
  }, [weight, discountType, price]);

  return (
    <div>
      <label htmlFor="type">Select Type:</label>
      <select id="type" name="type" value={discountType} onChange={handleType}>
        <option value="standard">Standard</option>
        <option value="seasonal">Seasonal</option>
        <option value="weight">Weight</option>
      </select>

      <label htmlFor="weight">Weight (kg):</label>
      <input type="number" id="weight" name="weight" step="0.01" value={weight} onChange={handleWeight}/>

      <label htmlFor="totalPrice">Total Price ($):</label>
      <input type="number" id="totalPrice" name="totalPrice" step="0.01" value={price} onChange={handlePrice}/>

      <div>Discounted price:<span id="discountedPrice">{discountedPrice}</span></div>
    </div>
  );
};