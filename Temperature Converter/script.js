"use strict";

document.querySelector(".btn-submit").addEventListener("click", function (e) {
  e.preventDefault();

  const inputTempValue = Number(
    document.querySelector(".input-temp-value").value
  );
  const inputTempUnit = document.querySelector(".input-temp-unit").value;
  const convertToUnit = document.querySelector(".convert-to-unit").value;

  const celsiusToFahrenheit = (C) => {
    return C * (9 / 5) + 32;
  };
  const fahrenheitToCelsius = (F) => {
    return (F - 32) * (5 / 9);
  };
  const celsiusToKelvin = (C) => {
    return C + 273.15;
  };
  const kelvinToCelsius = (K) => {
    return K - 273.15;
  };

  let result;
  // Same
  if (inputTempUnit === "°C" && convertToUnit === "Celsius °C") {
    result = inputTempValue;
  }
  if (inputTempUnit === "°F" && convertToUnit === "Fahrenheit °F") {
    result = inputTempValue;
  }
  if (inputTempUnit === "°K" && convertToUnit === "Kelvin °K") {
    result = inputTempValue;
  }
  // Different
  if (inputTempUnit === "°C" && convertToUnit === "Fahrenheit °F") {
    result = celsiusToFahrenheit(inputTempValue);
  }
  if (inputTempUnit === "°C" && convertToUnit === "Kelvin °K") {
    result = celsiusToKelvin(inputTempValue);
  }
  if (inputTempUnit === "°F" && convertToUnit === "Celsius °C") {
    result = fahrenheitToCelsius(inputTempValue);
  }
  if (inputTempUnit === "°K" && convertToUnit === "Celsius °C") {
    result = kelvinToCelsius(inputTempValue);
  }
  if (inputTempUnit === "°F" && convertToUnit === "Kelvin °K") {
    result = fahrenheitToCelsius(inputTempValue);
    result = celsiusToKelvin(result);
  }
  if (inputTempUnit === "°K" && convertToUnit === "Fahrenheit °F") {
    result = kelvinToCelsius(inputTempValue);
    result = celsiusToFahrenheit(result);
  }

  document.querySelector(".result").textContent = `${
    result % 1 === 0 ? result : result.toFixed(2)
  } ${convertToUnit.slice(-2)}`;

  console.log(inputTempValue, result);
});
