function random() {
  let input01 = document.getElementById("input01");
  input01.value = Math.floor(Math.random() * 10);
  let input02 = document.getElementById("input02");
  input02.value = Math.floor(Math.random() * 10);
}
function match() {
  let a = document.getElementById("input01").value;
  let b = document.getElementById("input02").value;
  let c = document.getElementById("input03").value;
  let sum = Number(a) + Number(b);
  if (sum == Number(c)) {
    alert("Зөв байна");
  } else {
    alert("Буруу байна");
  }
}
