// Function to simulate typing effect
function typeWriterLoop(textArray, element, interval) {
    let arrayIndex = 0;
    let textIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentText = textArray[arrayIndex];
      if (isDeleting) {
        element.textContent = currentText.substring(0, textIndex);
        textIndex--;
      } else {
        element.textContent = currentText.substring(0, textIndex + 1);
        textIndex++;
      }
  
      if (!isDeleting && textIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, interval * 2);
      } else if (isDeleting && textIndex === 0) {
        isDeleting = false;
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(type, interval);
      } else {
        setTimeout(type, isDeleting ? interval / 2 : interval);
      }
    }
  
    type();
  }
  
  // Start the typing loop when the page loads
  window.addEventListener("load", () => {
    const nameElement = document.getElementById("name-highlight");
    const jobTitleElement = document.getElementById("job-title");
    const textArray = ["Sahil Solanki", "a Cloud Engineer"];
    const typingInterval = 150; // Adjust the interval (in milliseconds) for typing speed
    typeWriterLoop(textArray, nameElement, typingInterval);
  });
  