const inputValeu = document.querySelector(".inputValeu");
const btn = document.querySelector(".btn");
const type = document.querySelector(".type");
const warning = document.querySelector(".warning");
const output = document.querySelector(".output");

btn.addEventListener("click", _ => {
  /* لو القيمه كانت رقم هيرجع نوعها نص بسبب ان الانبوت نوعه نص اصلا
  فبالتالي هحوله الي رقم واكمل شغل عادي لكن لو دخل رقم ومعاه حرف 
  هيبقي ناتج التحول نان فاكن مرجعش قيمه اصلا ولو دخل حروف لما اجي احولها هيرجع
  نان برده فاكن مفيش قيمه فبالتالي هينفذ الحاله الي جوه اف */

  let value = +inputValeu.value; 
  let selectValue = type.value;
  if(!value) {
    valid();
  }else{
    showData(value, selectValue);
  }
});
function valid() {
  warning.innerHTML = 'Please Provide a valid gram';
  setTimeout(()=> {
    warning.innerHTML = '';
    inputValeu.value = '';
  }, 1000);
  output.innerHTML = '';
};
function showData(value, selectValue) {
  if(value && selectValue === 'Pounds') {
    outputValue(value,0.002205, 'pound')
  }else if(value && selectValue === 'Kilograms') {
    outputValue(value, 0.001, 'Kg')
  }else if(value && selectValue === 'Ounces') {
    outputValue(value, 0.035274, 'Ounces')
  }else {
    outputValue(value, 0.00015747, 'Stones')
  }
};
function outputValue(value,number, type) {
  output.innerHTML = `${value} grams = ${(value * number).toFixed(3)} ${type}.`;
};
// 1 of gram = 0.002205 pound
// 1 Gram is =  0.001 Kilogram
// 1 gram = 0.035274 Ounces
// 1 gram = 0.00015747 Stones