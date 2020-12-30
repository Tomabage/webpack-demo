import x from "./x.js";
import png from "./assets/1.png";

const app2 = document.getElementById("app2");
app2.innerHTML = `
    <img src="${png}" alt="这是一个太阳">
`;
console.log(x);

const app1 = document.getElementById("app1");
const button = document.createElement("button");
app1.appendChild(button);
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
