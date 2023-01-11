import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  JSからも変更できる。
</div>
`;
let v = "1";
const var1 = "aaaa";
console.log(var1);
const name = "Alice";
const age = 20;
// テンプレート文字列
const m1 = "名前は" + name + "年齢は" + age;
console.log(m1);
const m2 = `名前は${name}年齢は${age}`;
console.log(m2);

// アロー関数

function func1(str) {
  return str;
}
const func11 = function (str) {
  return str;
};
console.log(func1("func1です"));
console.log(func11("func11です"));
const func2 = (s) => {
  return s;
};

console.log(func2("func2です"));

const add_my = (a, b) => {
  return a + b;
};
console.log(add_my(10, 20));
