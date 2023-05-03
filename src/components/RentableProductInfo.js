// src/components/RentableProductInfo.js
import React, { useState } from "react";

const RentableProductInfo = ({ product }) => {
  const [date, setDate] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState(null);

  const handleAvailabilityCheck = async () => {
    // Perform the check operation here (e.g., send a request to the API)
    console.log("Checked availability for:", date);

    // Replace the following mock API call with your actual API call using GraphQL
    const isAvailable = await mockCheckAvailabilityAPI(product.id, date);
    setAvailabilityStatus(isAvailable);
  };

  const mockCheckAvailabilityAPI = async (productId, date) => {
    // Simulate an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return a random availability status for demonstration purposes
    return Math.random() > 0.5;
  };

  return (
    <div className="rentable-product-info">
      <p>Rental Type: {product.rentalType}</p>
      <p>availability: {product.availability}</p>
      <hr></hr>
      <label>
        Check Availability:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button onClick={handleAvailabilityCheck}>Check Availability</button>
      {availabilityStatus !== null && (
        <p>
          {availabilityStatus
            ? "Available on the selected date"
            : "Not available on the selected date"}
        </p>
      )}
    </div>
  );
};

export default RentableProductInfo;
