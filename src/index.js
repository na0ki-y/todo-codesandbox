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

const myprof = {
  name_ob: "Alce",
  age_ob: 90,
};
console.log(`名前は${myprof.name}`);
const { name_ob, age_ob } = myprof; //keyと同じ名前
console.log(`名前は${name_ob}年齢は${age_ob}`);

const myporf2 = ["Alice", 99];
const [name_l, age_l] = myporf2; //順番に
console.log(`名前は${name_l}年齢は${age_l}`);

//defalut

const print_name = (name = "ゲスト") => {
  console.log(`こんにちは${name}`);
};
print_name("Bob");
print_name();

//スプレッド
const arr1 = [10, 20];
console.log(arr1);
console.log(...arr1); //展開

const sum_my = (a, b) => {
  console.log(a + b);
};
sum_my(10, 20);
sum_my(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [c1, c2, c3, c4, c5] = arr2;
console.log(c1, c2, c3);
const [cc1, cc2, ...cclist] = arr2; //まとめる　分割代入の結果を
console.log(cc1, cc2, cclist);

const arr4 = [10, 20];
const arr5 = [20, 40];
const arr6 = [...arr4]; //copy deep
const arr7 = [...arr4, ...arr5]; //copy deep
console.log(arr6);
console.log(arr7);
