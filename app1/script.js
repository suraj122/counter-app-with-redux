let h2 = document.querySelector("h2");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");

let store = Redux.createStore(reducer);

let counter = store.getState();
h2.innerText = counter;

inc.addEventListener("click", () => {
  store.dispatch({ type: "inc" });
});
dec.addEventListener("click", () => {
  store.dispatch({ type: "dec" });
});
reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

store.subscribe(() => {
  counter = store.getState();
  h2.innerText = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
