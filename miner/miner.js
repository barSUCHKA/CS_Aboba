const mines = document.querySelector(".mine");
const history_mi = document.querySelector(".history_mi");
const history_p = document.querySelector(".history_p");
const wallet = document.querySelector("#wallet");
const balance = document.querySelector("#balance");
const min_m = document.querySelector(".min_m");
const bet_m_input = document.querySelector(".bet_m_input");
const plus_m = document.querySelector(".plus_m");
const bet_m_btn = document.querySelectorAll(".bet_m_btn");
const bet_m_btn_down = document.querySelector(".bet_m_btn_down");
const bet_mi_input = document.querySelector(".bet_mi_input");
const bet_mi_btn = document.querySelectorAll(".bet_mi_btn");
const bet_mi_btn_down = document.querySelector(".bet_mi_btn_down");
const create_btn = document.querySelector(".create_btn");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal_close");
const alert = document.querySelector(".alert");
bet_m_input.value = 0 + "$";
let beaut_m = 0;
let flagIM = true;

bet_m_btn_down.addEventListener("click", (e) => {
  if (flagIM === true && e.target.dataset.value) {
    flagIM = false;
    const beaut_m1 = +bet_m_input.value.substring(
      0,
      bet_m_input.value.length - 1
    );
    let beaut_m2 = +bet_m_input.value.substring(
      0,
      bet_m_input.value.length - 1
    );
    if (+e.target.dataset.value > 0) {
      beaut_m = setInterval(() => {
        if (beaut_m2 === beaut_m1 + +e.target.dataset.value) {
          clearInterval(beaut_m);
          flagIM = true;
        } else {
          beaut_m2 += 1;
          bet_m_input.value = beaut_m2 + "$";
        }
      }, 10);
    } else {
      beaut_m = setInterval(() => {
        if (beaut_m2 === beaut_m1 + +e.target.dataset.value) {
          clearInterval(beaut_m);
          flagIM = true;
        } else {
          beaut_m2 -= 1;
          bet_m_input.value = beaut_m2 + "$";
        }
      }, 10);
    }
  }
});

let m_m = 0;

min_m.addEventListener("click", () => {
  if (flagIM === true) {
    flagIM = false;
    const m_m1 =
      +bet_m_input.value.substring(0, bet_m_input.value.length - 1) - 5;
    let m_m2 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1);
    m_m = setInterval(() => {
      if (m_m1 === m_m2) {
        clearInterval(m_m);
        flagIM = true;
      } else {
        m_m2--;
        bet_m_input.value = m_m2 + "$";
      }
    }, 10);
  }
});

let p_m = 0;

plus_m.addEventListener("click", () => {
  if (flagIM === true) {
    flagIM = false;
    const p_m1 =
      +bet_m_input.value.substring(0, bet_m_input.value.length - 1) + 5;
    let p_m2 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1);
    p_m = setInterval(() => {
      if (p_m1 === p_m2) {
        clearInterval(p_m);
        flagIM = true;
      } else {
        p_m2++;
        bet_m_input.value = p_m2 + "$";
      }
    }, 10);
  }
});

let flagIMI = true;
let beaut_mi = 0;
let beaut_mi2 = 0;

bet_mi_btn_down.addEventListener("click", (e) => {
  if (flagIMI === true && e.target.dataset.value) {
    flagIMI = false;
    const beaut_mi1 = +bet_mi_input.value;
    if (beaut_mi1 < +e.target.dataset.value) {
      beaut_mi = setInterval(() => {
        if (+beaut_mi2 === +e.target.dataset.value) {
          clearInterval(beaut_mi);
          flagIMI = true;
        } else {
          beaut_mi2 += 1;
          bet_mi_input.value = beaut_mi2;
        }
      }, 40);
    } else {
      beaut_mi = setInterval(() => {
        if (+beaut_mi2 === +e.target.dataset.value) {
          clearInterval(beaut_mi);
          flagIMI = true;
        } else {
          beaut_mi2 -= 1;
          bet_mi_input.value = beaut_mi2;
        }
      }, 40);
    }
  }
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function olert(text) {
  alert.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="alert_content">${text}</div>
  `
  );
  alert.classList.add("alert_active");
  setTimeout(() => {
    alert.classList.add("alert_delete");
  }, 2500);
  setTimeout(() => {
    alert.classList.remove("alert_delete");
    alert.classList.remove("alert_active");
  }, 3000);
}

function createTooltip(selector, text) {
  const elem = document.querySelector(selector);
  elem.style.position = "relative";

  elem.insertAdjacentHTML(
    "beforeend",
    `
    <div class="tooltip">${text}</div>
  `
  );

  const tooltip = elem.querySelector(".tooltip");

  elem.addEventListener("mouseenter", () => {
    tooltip.classList.add("show");
  });

  elem.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
}

createTooltip(".nick", "id: 777777");

function deleteLast(elem, num) {
  const e = document.querySelectorAll(elem);
  if (e.length > num) {
    e[num].remove();
  }
}

function animHistory_c(elem) {
  history_mi.classList.add("history_mi_anim");
  setTimeout(() => {
    history_mi.classList.remove("history_mi_anim");
    history_mi.insertAdjacentHTML("afterbegin", elem);
  }, 500);
}

function animHistory_p(elem) {
  history_p.classList.add("history_p_anim");
  setTimeout(() => {
    history_p.classList.remove("history_p_anim");
    history_p.insertAdjacentHTML("afterbegin", elem);
  }, 500);
}

const m1 = document.getElementById("1");
const m2 = document.getElementById("2");
const m3 = document.getElementById("3");
const m4 = document.getElementById("4");
const m5 = document.getElementById("5");
const m6 = document.getElementById("6");
const m7 = document.getElementById("7");
const m8 = document.getElementById("8");
const m9 = document.getElementById("9");
const m10 = document.getElementById("10");
const m11 = document.getElementById("11");
const m12 = document.getElementById("12");
const m13 = document.getElementById("13");
const m14 = document.getElementById("14");
const m15 = document.getElementById("15");
const m16 = document.getElementById("16");
const m17 = document.getElementById("17");
const m18 = document.getElementById("18");
const m19 = document.getElementById("19");
const m20 = document.getElementById("20");
const m21 = document.getElementById("21");
const m22 = document.getElementById("22");
const m23 = document.getElementById("23");
const m24 = document.getElementById("24");


function mines_add(elem) {
    m1.classList.add(elem);
    m2.classList.add(elem);
    m3.classList.add(elem);
    m4.classList.add(elem);
    m5.classList.add(elem)
    m6.classList.add(elem);
    m7.classList.add(elem);
    m8.classList.add(elem);
    m9.classList.add(elem);
    m10.classList.add(elem);
    m11.classList.add(elem);
    m12.classList.add(elem);
    m13.classList.add(elem);
    m14.classList.add(elem);
    m15.classList.add(elem);
    m16.classList.add(elem);
    m17.classList.add(elem);
    m18.classList.add(elem);
    m19.classList.add(elem);
    m20.classList.add(elem);
    m21.classList.add(elem);
    m22.classList.add(elem);
    m23.classList.add(elem);
    m24.classList.add(elem);
}

function mines_remove(elem) {
    m1.classList.remove(elem);
    m2.classList.remove(elem);
    m3.classList.remove(elem);
    m4.classList.remove(elem);
    m5.classList.remove(elem);
    m6.classList.remove(elem);
    m7.classList.remove(elem);
    m8.classList.remove(elem);
    m9.classList.remove(elem);
    m10.classList.remove(elem);
    m11.classList.remove(elem);
    m12.classList.remove(elem);
    m13.classList.remove(elem);
    m14.classList.remove(elem);
    m15.classList.remove(elem);
    m16.classList.remove(elem);
    m17.classList.remove(elem);
    m18.classList.remove(elem);
    m19.classList.remove(elem);
    m20.classList.remove(elem);
    m21.classList.remove(elem);
    m22.classList.remove(elem);
    m23.classList.remove(elem);
    m24.classList.remove(elem);
}

addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("modal_active");
  }
});

wallet.addEventListener("click", () => {
  modal.classList.add("modal_active");
});

modal_close.addEventListener("click", () => {
  modal.classList.remove("modal_active");
});

let flagCreate = true;

create_btn.addEventListener("click", () => {
  const number_m = +bet_m_input.value.substring(
    0,
    bet_m_input.value.length - 1
  );
  const number_mi = +bet_mi_input.value;
  let flagCreateM = true;
  let flagCreateMI = true;

  if (number_m <= 0) {
    olert("Your rate cannot be negative or equal to zero");
    flagCreateM = false;
  }
  if (balance.textContent < 0 || number_m > balance.textContent) {
    olert("You don't have enought money");
    flagCreateM = false;
  }
  if (number_mi === 0) {
    olert("Your mines cannot be negative or equal to zero");
    flagCreateMI = false;
  }

  if (
    flagCreateM === true &&
    flagCreateMI === true &&
    flagCreate === true &&
    flagIM === true &&
    flagIMI === true
  ) {
    flagCreate = false;
    flagCreateM = false;
    flagCreateMI = false;
    balance.textContent = balance.textContent - number_m;

    let chance_w = 0;
    
    if (number_mi === 3) {
        chance_w = 1875;
        console.log(chance_w);
    } else if (number_mi === 5) {
        chance_w = 1792;
        console.log(chance_w);
    } else if (number_mi === 10) {
        chance_w = 1583;
        console.log(chance_w);
    } else if (number_mi === 15) {
        chance_w = 1375;
        console.log(chance_w);
    } else if (number_mi === 20) {
        chance_w = 1167;
        console.log(chance_w);
    }
    
    mines_add("btn_m");
    
    addEventListener("click", (e) => {
        if (e.target.id && e.target.classList.contains("btn_m")) {
            let chance_l = random(1000,2000);
            console.log(e);
            
            if (chance_w - chance_l > 0) {
                e.target.classList.remove("mine_def");
                e.target.classList.remove("btn_m");
                e.target.classList.add("mine_wd");

                e.target.textContent = number_m * 1.1
            } else {
                e.target.classList.remove("mine_def");
                mines_remove("btn_m");
                e.target.classList.add("mine_red");



                setTimeout(() => {
                    mines_remove("mine_red");
                    mines_remove("mine_wd");
                    mines_add("mine_def");
                    flagCreate = true;
                }, 1000);
            }












        }
    });
  }
});