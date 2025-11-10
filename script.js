const result = document.getElementById("result"); 
const boutonns = document.querySelectorAll(".btn");
const body = document.getElementById("body"); 


const dateElement = document.getElementById("Date");
function updateTime() {
    const currentDate = new Date();
    dateElement.textContent = currentDate.toLocaleTimeString(); 

}
 setInterval(updateTime, 1000);

boutonns.forEach(boutn => {
  boutn.addEventListener("click", () => {
    let v = boutn.textContent;

    if (v === "<") {
      result.value = result.value.slice(0, -1);

      if (result.value === "100") {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }

      return;
    }

    if (v === "C") {
      result.value = "";
      body.classList.remove("dark"); 
      return;
    }

    if (v === "=" && result.value === "") {
      return;
    }

    const operators = "+-*/";
    const lastChar = result.value.slice(-1);

    if (operators.includes(v) && operators.includes(lastChar)) {
      result.value = result.value.slice(0, -1) + v;
      return;
    }

    if (v === "=") {
      result.value = eval(result.value);
      result.classList.add("flash");
      setTimeout(() => result.classList.remove("flash"), 500);
    } else {
      result.value += v;
    }

    if (result.value === "100") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  });
});