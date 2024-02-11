const calculateTemp = () => {
  setTimeout(() => {
    // Declration of Element

    const numberTemp = document.querySelector(".temp").value;

    const valueTemp = document.querySelector("#tempdiffid_1").value;

    const valueTemp_2 = document.querySelector("#tempdiffid_2").value;

    // Celsius to Fahrenheit Function

    celtoFah = (cel) => {
      let fahrenheit = ((cel * 9) / 5 + 32).toFixed(3);

      return fahrenheit;
    };

    // Celsius to Kelvin Function

    celtoKel = (cel) => {
      let kelvin = (cel * 1 + 273.15).toFixed(3);

      console.log(kelvin);

      return kelvin;
    };

    // Fahrenheit to Celsius Function

    fahtoCel = (fah) => {
      let celsius = (((fah - 32) * 5) / 9).toFixed(3);

      return celsius;
    };

    // Fahrenheit to Kelvin Function

    fahtoKel = (fah) => {
      let kelvin = (((fah - 32) * 5) / 9 + 273.15).toFixed(3);

      return kelvin;
    };

    // Kelvin to Celsius Function

    keltoCel = (kel) => {
      let celsius = (kel - 273.15).toFixed(3);

      return celsius;
    };

    // Kelvin to Fahrenheit Function

    keltoFah = (kel) => {
      let fahrenheit = ((9 / 5) * (kel - 273.15) + 32).toFixed(3);

      return fahrenheit;
    };

    // If and Else Condition

    // Celsius to Fahrenheit :

    if (valueTemp == "cel" && valueTemp_2 == "fahren") {
      let result = celtoFah(numberTemp);

      document.querySelector(
        "#resultContainer"
      ).innerHTML = `<i>${numberTemp}</i> Celsius is Equal to <i>${result}</i> Fahrenhiet`;
    }

    // Celsius to Kelvin :
    else if (valueTemp == "cel" && valueTemp_2 == "kel") {
      let result = celtoKel(numberTemp);

      document.querySelector(
        "#resultContainer"
      ).innerHTML = `${numberTemp} Celsius is Equal to ${result} Kelvin`;
    }

    // Fahrenhiet to Celsius :
    else if (valueTemp == "fahren" && valueTemp_2 == "cel") {
      let result = fahtoCel(numberTemp);

      document.querySelector(
        "#resultContainer"
      ).innerHTML = `${numberTemp} Fahrenhiet is Equal to ${result} Celsius`;
    }

    // Fahrenhiet to Kelvin :
    else if (valueTemp == "fahren" && valueTemp_2 == "kel") {
      let result = fahtoKel(numberTemp);

      document.querySelector(
        "#resultContainer"
      ).innerHTML = `${numberTemp} Fahrenhiet is Equal to ${result} Kelvin`;
    }

    // Kelvin to Celsius :
    else if (valueTemp == "kel" && valueTemp_2 == "cel") {
      let result = keltoCel(numberTemp);

      document.querySelector(
        "#resultContainer"
      ).innerHTML = `${numberTemp} Kelvin is Equal to ${result} Celsius`;
    }

    // Kelvin to Fahrenheit :
    else if (valueTemp == "kel" && valueTemp_2 == "fahren") {
      let result = keltoFah(numberTemp);

      document.querySelector(
        "#resultContainer"
      ).innerHTML = `${numberTemp} Kelvin is Equal to ${result} Fahrenhiet`;
    }

    // None :
    else {
      alert("Please Select Proper Unit");
    }
  }, 1);
};

// Submit Function

let submitbtn = document.querySelector(".submitsec");

submitbtn.addEventListener("click", submitbtnfunction);

function submitbtnfunction(e) {
  e.preventDefault();

  const numberTemp = document.querySelector(".temp").value;

  if (numberTemp == "") {
    alert("Please enter a Number");
  } else {
    calculateTemp();
  }
}

// Reset Function

let reset = document.querySelector("#resetsecid");

reset.addEventListener("click", resetFunction);

function resetFunction() {
  const numberTemp = document.querySelector(".temp").value;

  if (numberTemp == "") {
    alert("Field is empty, Please enter a Number");
  } else {
    let b = confirm("This will Delete your Input and Output Data");

    if (b) {
      let numberTemp = (document.querySelector(".temp").value = " ");

      resultContainer.textContent = "";

      return numberTemp;
    } else {
    }
  }
}
