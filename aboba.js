const x = document.querySelector("#x");
const k = document.querySelector(".k");
const history_c = document.querySelector(".history_c");
const history_p = document.querySelector(".history_p");
const wallet = document.querySelector("#wallet");
const balance = document.querySelector("#balance");
const min_m = document.querySelector(".min_m");
const bet_m_input = document.querySelector(".bet_m_input");
const bet_x_input_clear_btn = document.querySelector(".bet_x_input_clear_btn");
const plus_m = document.querySelector(".plus_m");
const bet_m_btn_down = document.querySelector(".bet_m_btn_down");
const bet_x_input = document.querySelector(".bet_x_input");
const bet_x_btn_down = document.querySelector(".bet_x_btn_down");
const create_btn = document.querySelector(".create_btn");
const wd_btn = document.querySelector(".wd_btn");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal_close");
const alert = document.querySelector(".alert");
bet_m_input.value = 0 + "$";
let beaut_m = 0;
let flagIM = true;

bet_m_btn_down.addEventListener("click", (e) => {
  if (flagIM === true && e.target.dataset.value) {
    flagIM = false;
    const beaut_m1 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1);
    let beaut_m2 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1);
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
    const m_m1 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1) - 5;
    let m_m2 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1);
    m_m = setInterval(() => {
      if (m_m1 === m_m2) {
        clearInterval(m_m);
        flagIM = true;
      } else {
        m_m2 --;
        bet_m_input.value = m_m2 + "$";
      }
    }, 10);
  }
});

let p_m = 0;

plus_m.addEventListener("click", () => {
  if (flagIM === true) {
    flagIM = false;
    const p_m1 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1) + 5;
    let p_m2 = +bet_m_input.value.substring(0, bet_m_input.value.length - 1);
    p_m = setInterval(() => {
      if (p_m1 === p_m2) {
        clearInterval(p_m);
        flagIM = true;
      } else {
        p_m2 ++;
        bet_m_input.value = p_m2 + "$";
      }
    }, 10);
  }
});

let flagIX = true;
let beaut_x = 0;
let beaut_x2 = 0;
let beaut_x3 = 0;

bet_x_btn_down.addEventListener("click", (e) => {
  if (flagIX === true && e.target.dataset.value) {
    flagIX = false;
    const beaut_x1 = +bet_x_input.value.substring(1, bet_x_input.value.length);
    if (beaut_x1 < +e.target.dataset.value) {
      beaut_x = setInterval(() => {
        if (+beaut_x3 === +e.target.dataset.value) {
          clearInterval(beaut_x);
          flagIX = true;
        } else {
          beaut_x2 += 0.1;
          beaut_x3 = beaut_x2.toFixed(1);
          bet_x_input.value = "x" + beaut_x2.toFixed(1);
        }
      }, 20);
    } else {
      beaut_x = setInterval(() => {
        if (+beaut_x3 === +e.target.dataset.value) {
          clearInterval(beaut_x);
          flagIX = true;
        } else {
          beaut_x2 -= 0.1;
          beaut_x3 = beaut_x2.toFixed(1);
          bet_x_input.value = "x" + beaut_x2.toFixed(1);
        }
      }, 20);
    }
  }
});

let clear_x = 0;

bet_x_input_clear_btn.addEventListener("click", () => {
  const clear_x1 = +bet_x_input.value.substring(1, bet_x_input.value.length)
  if (flagIX === true && clear_x1 != 0) {
    flagIX = false;
    clear_x = setInterval(() => {
      if (+beaut_x3 === 0.1) {
        flagIX = true;
        bet_x_input.value = "";
        clearInterval(clear_x);
      } else {
        console.log(beaut_x3);
        beaut_x2 -= 0.1;
        beaut_x3 = beaut_x2.toFixed(1);
        bet_x_input.value = "x" + beaut_x2.toFixed(1);
      }
    }, 10);
  }
})

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function olert(text) {
  alert.insertAdjacentHTML("afterbegin", `
  <div class="alert_content">${text}</div>
  `)
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

  elem.insertAdjacentHTML("beforeend", `
    <div class="tooltip">${text}</div>
  `);

  const tooltip = elem.querySelector(".tooltip")

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
  history_c.classList.add("history_c_anim");
  setTimeout(() => {
    history_c.classList.remove("history_c_anim");
    history_c.insertAdjacentHTML("afterbegin",elem);
  }, 500);
}

function animHistory_p(elem) {
  history_p.classList.add("history_p_anim");
  setTimeout(() => {
    history_p.classList.remove("history_p_anim");
    history_p.insertAdjacentHTML("afterbegin",elem);
  }, 500);
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
  const number_m = +bet_m_input.value.substring(0, bet_m_input.value.length - 1);
  const number_x = +bet_x_input.value.substring(1, bet_x_input.value.length);
  let crash = random(1, 13);
  let current_x = 0;
  let flagWd = false;
  let flagCreateM = true;
  
  if (balance.textContent >= 100 && balance.textContent < 150) {
    current_x = random(101, 350) / 100;
  } else if (balance.textContent >= 150 && balance.textContent < 200) {
    current_x = random(101, 300) / 100;
  } else if (balance.textContent >= 200 && balance.textContent < 250) {
    current_x = random(101, 250) / 100;
  } else if (balance.textContent >= 250 && balance.textContent < 300) {
    current_x = random(101, 200) / 100;
  } else if (balance.textContent >= 300) {
    current_x = random(101, 150) / 100;
  } else if (balance.textContent >= 50 && balance.textContent < 100) {
    current_x = random(101, 400) / 100;
  } else if (balance.textContent < 50) {
    current_x = random(101, 500) / 100;
  }
  
  if (crash === 3) {
    current_x = 1.01;
  } else if (crash === 6) {
    current_x = 1.10;
  } else if (crash === 9) {
    current_x = 1.20;
  } else if (crash === 13 || crash === 7) {
    current_x = 10;
  }
  
  if (number_m <= 0) {
    olert("Your rate cannot be negative or equal to zero");
    flagCreateM = false;
  }
  if (balance.textContent < 0 || number_m > balance.textContent) {
    olert("You don't have enought money");
    flagCreateM = false;
  }
  
  if (flagCreateM === true && flagCreate === true && flagIM === true && flagIX === true) {
    let flagMoney = true;
    let timer = 0;
    let timer1 = 0;
    let speedTimer = 125;
    flagCreateM = false;
    flagCreate = false;
    flagWd = true;
    balance.textContent = balance.textContent - number_m;
    wd_btn.classList.add("btn");

    timer1 = setInterval(() => {
      if (!timer) {
        timer = setInterval(() => {
          x.textContent = (+x.textContent + 0.01).toFixed(2);
        }, speedTimer);
      }
      
      if (speedTimer != 80 && x.textContent >= 1.2 && x.textContent < 1.5) {
        clearInterval(timer);
        timer = null;
        speedTimer = 80;
      } else if ( speedTimer != 50 && x.textContent >= 1.5 && x.textContent < 2) {
        clearInterval(timer);
        timer = null;
        speedTimer = 50;
      } else if (speedTimer != 30 && x.textContent >= 2 && x.textContent < 5) {
        clearInterval(timer);
        timer = null;
        speedTimer = 30;
      } else if (speedTimer != 15 && x.textContent >= 5) {
        clearInterval(timer);
        timer = null;
        speedTimer = 15;
      }
      
      if (number_x != 0 && x.textContent >= number_x) {
        wd_btn.classList.remove("btn");
      }
      
      if (x.textContent >= current_x) {
        clearInterval(timer1);
        clearInterval(timer);
        k.classList.remove("crash_def");
        k.classList.add("crash_red");
        wd_btn.classList.remove("btn");
        setTimeout(() => {
          if (number_x != 0 && x.textContent >= number_x) {
            deleteLast(".people", 17);
            animHistory_p(`
            <div class="people win me">
            <div class="avatar_p"></div>
            <div class="nick_p">id: 777777</div>
            <div class="bet_p">${number_m}$</div>
            <div class="win_m_p">${(number_m * number_x).toFixed(2)}$</div>
            <div class="win_k_p">x${number_x}</div>
            </div>
            `);

            if (x.textContent <= 1.2) {
              animHistory_c(`<div class="history_cc show_w blue">${x.textContent}x</div>`);
            } else if (x.textContent > 1.2 && x.textContent <= 2) {
              animHistory_c(`<div class="history_cc show_w green">${x.textContent}x</div>`);
            } else if (x.textContent > 2 && x.textContent <= 5){
              animHistory_c(`<div class="history_cc show_w purple">${x.textContent}x</div>`);
            } else if (x.textContent > 5 && x.textContent <= 7) {
              animHistory_c(`<div class="history_cc show_w pink">${x.textContent}x</div>`);
            } else if (x.textContent > 7) {
              animHistory_c(`<div class="history_cc show_w gold">${x.textContent}x</div>`);
            }
          } else {
            animHistory_c(`<div class="history_cc show_l red">${x.textContent}x</div>`);
            deleteLast(".people", 17);
            animHistory_p(`
            <div class="people lose me">
            <div class="avatar_p"></div>
            <div class="nick_p">id: 777777</div>
            <div class="bet_p">${number_m}$</div>
            <div class="lose_m_p">0$</div>
            <div class="lose_k_p">x${number_x}</div>
            </div>
            `);
          }
          setTimeout(() => {
            deleteLast(".history_cc", 17);
            k.classList.remove("crash_red");
            k.classList.add("crash_def");
            x.textContent = "1.00";
            flagCreate = true;
          }, 500);
        }, 1500);
        flagWd = false;
      }
      
      if (number_x != 0 && x.textContent >= number_x && flagMoney === true) {
        balance.textContent = (+balance.textContent + number_m * number_x).toFixed(2);
        flagMoney = false;
      }
    }, 10);
    
    wd_btn.addEventListener("click", () => {
      if (flagWd === true && flagMoney === true) {
        balance.textContent = (+balance.textContent + number_m * x.textContent).toFixed(2);
        clearInterval(timer1);
        clearInterval(timer);
        k.classList.remove("crash_def");
        k.classList.add("crash_wd");
        wd_btn.classList.remove("btn");
        
        setTimeout(() => {
          if (x.textContent <= 1.2) {
            animHistory_c(`<div class="history_cc show_w blue">${x.textContent}x</div>`);
          } else if (x.textContent > 1.2 && x.textContent <= 2) {
            animHistory_c(`<div class="history_cc show_w green">${x.textContent}x</div>`);
          } else if (x.textContent > 2 && x.textContent <= 5){
            animHistory_c(`<div class="history_cc show_w purple">${x.textContent}x</div>`);
          } else if (x.textContent > 5 && x.textContent <= 7) {
            animHistory_c(`<div class="history_cc show_w pink">${x.textContent}x</div>`);
          } else if (x.textContent > 7) {
            animHistory_c(`<div class="history_cc show_w gold">${x.textContent}x</div>`);
          }

          deleteLast(".people", 17);
          animHistory_p(`
          <div class="people win me">
          <div class="avatar_p"></div>
          <div class="nick_p">id: 777777</div>
          <div class="bet_p">${number_m}$</div>
          <div class="win_m_p">${(number_m * x.textContent).toFixed(2)}$</div>
          <div class="win_k_p">x${x.textContent}</div>
          </div>
          `);

          setTimeout(() => {
            deleteLast(".history_cc", 17);
            k.classList.remove("crash_wd");
            k.classList.add("crash_def");
            x.textContent = "1.00";
            flagCreate = true;
          }, 500);
        }, 1500);
        
        flagWd = false;
        flagMoney = true;
      }
    });
  }
  console.log(current_x);
});

setInterval(() => {
  const wl_r = random(1,7);
  let wl = 0;
  let nick = 0;
  let bet_r = random(1,9);
  let bet = 0;
  let money = 0;
  let koef_r = random(1,25);
  let koef = 0;
  let wl_m = 0;
  let wl_k = 0;

  if (wl_r < 3) {
    wl = "lose"; 
  } else {
    wl = "win";
  }
  
  if (bet_r >= 1 && bet_r < 2) {
    bet = "25";
  } else if (bet_r >= 2 && bet_r < 3){
    bet = "50";
  } else if (bet_r >= 3 && bet_r < 4) {
    bet = "75";
  } else if (bet_r >= 4 && bet_r < 5) {
    bet = "100";
  } else if (bet_r >= 5 && bet_r < 6) {
    bet = "125";
  } else if (bet_r >= 6 && bet_r < 7) {
    bet = "150";
  } else if (bet_r >= 7 && bet_r < 8) {
    bet = "175";
  } else if (bet_r >= 8 && bet_r <= 9) {
    bet = "200";
  }
  
  if (koef_r >= 1 && koef_r < 3) {
    koef = "1.1";
  } else if (koef_r >= 3 && koef_r < 5) {
    koef = "1.5";
  } else if (koef_r >= 5 && koef_r < 7) {
    koef = "2";
  } else if (koef_r >= 7 && koef_r < 9) {
    koef = "3";
  } else if (koef_r >= 9 && koef_r < 11) {
    koef = "5";
  } else if (koef_r >= 11 && koef_r < 12) {
    koef = "1.15";
  } else if (koef_r >= 12 && koef_r < 13) {
    koef = "1.35";
  } else if (koef_r >= 13 && koef_r < 14) {
    koef = "1.69";
  } else if (koef_r >= 14 && koef_r <= 15) {
    koef = "1.98";
  } else if (koef_r >= 15 && koef_r <= 16) {
    koef = "2.58";
  } else if (koef_r >= 16 && koef_r <= 17) {
    koef = "2.93";
  } else if (koef_r >= 17 && koef_r <= 18) {
    koef = "3.67";
  } else if (koef_r >= 18 && koef_r <= 19) {
    koef = "4.42";
  } else if (koef_r >= 19 && koef_r <= 20) {
    koef = "4.74";
  } else if (koef_r >= 20 && koef_r <= 21) {
    koef = "5.28";
  } else if (koef_r >= 21 && koef_r <= 22) {
    koef = "5.6";
  } else if (koef_r >= 22 && koef_r <= 23) {
    koef = "7.47";
  } else if (koef_r >= 23 && koef_r <= 24) {
    koef = "8.93";
  } else if (koef_r >= 24 && koef_r <= 25) {
    koef = "10";
  }

  if (wl === "win") {
    money = +bet * +koef;
    wl_m = "win_m_p";
    wl_k = "win_k_p";
  } else {
    money = 0;
    wl_m = "lose_m_p";
    wl_k = "lose_k_p";
  }
  
  nick = random(1000, 1000000);
  
  deleteLast(".people", 17);
  animHistory_p(`
  <div class="people ${wl}">
  <div class="avatar_p"></div>
  <div class="nick_p">id: ${nick}</div>
  <div class="bet_p">${bet}$</div>
  <div class="${wl_m}">${money.toFixed(2)}$</div>
  <div class="${wl_k}">x${koef}</div>
  </div>
  `);
}, random(1000, 7500));
