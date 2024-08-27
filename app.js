function buttons() {
  const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

  let a = 0;

  plus.addEventListener("click", () => {
    a++; // increment
    num.innerText = a;
    console.log(a);
  });

  minus.addEventListener("click", () => {
    if (a > 0) {
      a--; // decrement
      num.innerText = a;
    }
    console.log(a);
  });
}
buttons(); // call the function
