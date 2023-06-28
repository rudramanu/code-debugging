// Code Conversion
const convertBtn = document.getElementById("convertBtn");
const codeInput = document.getElementById("codeInput");
const targetLanguage = document.getElementById("targetLanguage");
const convertedCode = document.getElementById("convertedCode");

convertBtn.addEventListener("click", () => {
  const codeInput = document.getElementById("codeInput").value;
  const targetLanguage = document.getElementById("targetLanguage").value;

  const requestBody = {
    code: codeInput,
    targetLanguage: targetLanguage,
  };
  console.log(requestBody);

  // fetch("/api/convert", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(requestBody),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.error) {
  //       console.error(data.error);
  //       return;
  //     }

  //     const convertedCode = data.convertedCode;
  //     document.getElementById("convertedCode").innerText = convertedCode;
  //   })
  //   .catch((error) => console.error("Error:", error));
});

// Code Debugging
const debugBtn = document.getElementById("debugBtn");
const debugCodeInput = document.getElementById("debugCodeInput");
const debugOutput = document.getElementById("debugOutput");

debugBtn.addEventListener("click", () => {
  const code = debugCodeInput.value;

  // Make an API request to the backend with the code for debugging
  // Process the response and update the debugOutput element
  // Example: You can use fetch() or Axios for making API requests
});

// Code Quality Check
const qualityCheckBtn = document.getElementById("qualityCheckBtn");
const qualityCodeInput = document.getElementById("qualityCodeInput");
const qualityCheckOutput = document.getElementById("qualityCheckOutput");

qualityCheckBtn.addEventListener("click", () => {
  const code = qualityCodeInput.value;

  // Make an API request to the backend with the code for quality check
  // Process the response and update the qualityCheckOutput element
  // Example: You can use fetch() or Axios for making API requests
});
