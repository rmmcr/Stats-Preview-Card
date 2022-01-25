const companies = document.querySelector("#companies");
const templates = document.querySelector("#templates");
const queries = document.querySelector("#queries");

let c = 0;
cCount = setInterval(() => {
  if (c < 10) {
    c++;
    companies.innerText = `${c}k+`;
  } else {
    clearInterval(cCount);
  }
}, 300);

let t = 0;
tCount = setInterval(() => {
  if (t < 314) {
    t++;
    templates.innerText = t;
  } else {
    clearInterval(tCount);
  }
}, 10);

let q = 0;
qCount = setInterval(() => {
  if (q < 12) {
    q++;
    queries.innerText = `${q}M+`;
  } else {
    clearInterval(qCount);
  }
}, 260);
