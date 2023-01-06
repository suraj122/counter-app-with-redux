let h2 = document.querySelector("h2");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");

let step5 = document.querySelector(".step-5");
let step10 = document.querySelector(".step-10");
let step15 = document.querySelector(".step-15");

let store = Redux.createStore(reducer);
let counter = store.getState();

h2.innerText = counter;

// Add Steps
let step = 1;

step5.addEventListener("click", () => {
  step = 5;
});
step10.addEventListener("click", () => {
  step = 10;
});
step15.addEventListener("click", () => {
  step = 15;
});

inc.addEventListener("click", () => {
  store.dispatch({ type: "inc", step });
});

dec.addEventListener("click", () => {
  store.dispatch({ type: "dec", step });
});

reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
  step = 1;
});

store.subscribe(() => {
  counter = store.getState();
  h2.innerText = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + (action.step || 1);
    case "dec":
      return state - (action.step || 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}
