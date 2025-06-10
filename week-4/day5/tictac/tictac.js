const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const tob = document.getElementById("tab");
const p = document.getElementById("bjn");

btn1.addEventListener("click", () => {
  tob.style.display = "table";
  p.style.display = "none";
  for (let i = 0; i < 9; i++) {
    let user = 1;
    let comp = 0;
    if (document.getElementById(i).innerHTML === "") {
      document.getElementById(i).addEventListener("click", () => {
        document.getElementById(i).innerHTML = "X";
        if (document.getElementById("4").innerHTML === "") {
          document.getElementById("4").innerHTML = "O";
        } else {
          document.getElementById("0").innerHTML = "O";
        }
        if (
          (document.getElementById("0").innerHTML != "" &&
            document.getElementById("4").innerHTML != "" &&
            document.getElementById("0").innerHTML ===
              document.getElementById("4").innerHTML) ||
          (document.getElementById("2").innerHTML != "" &&
            document.getElementById("5").innerHTML != "" &&
            document.getElementById("2").innerHTML ===
              document.getElementById("5").innerHTML) ||
          (document.getElementById("6").innerHTML != "" &&
            document.getElementById("7").innerHTML != "" &&
            document.getElementById("6").innerHTML ===
              document.getElementById("7").innerHTML)
        ) {
          if (document.getElementById("8").innerHTML == "") {
            document.getElementById("8").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("0").innerHTML != "" &&
          document.getElementById("3").innerHTML != "" &&
          document.getElementById("0").innerHTML ===
            document.getElementById("3").innerHTML
        ) {
          if (document.getElementById("6").innerHTML == "") {
            document.getElementById("6").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("1").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("1").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("7").innerHTML == "") {
            document.getElementById("7").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("0").innerHTML != "" &&
          document.getElementById("1").innerHTML != "" &&
          document.getElementById("0").innerHTML ===
            document.getElementById("1").innerHTML
        ) {
          if (document.getElementById("2").innerHTML == "") {
            document.getElementById("2").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("3").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("3").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("5").innerHTML == "") {
            document.getElementById("5").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("2").innerHTML != "" &&
          document.getElementById("1").innerHTML != "" &&
          document.getElementById("2").innerHTML ===
            document.getElementById("1").innerHTML
        ) {
          if (document.getElementById("0").innerHTML == "") {
            document.getElementById("0").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("5").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("5").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("3").innerHTML == "") {
            document.getElementById("3").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("2").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("2").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("6").innerHTML == "") {
            document.getElementById("6").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("8").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("8").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("0").innerHTML == "") {
            document.getElementById("0").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("3").innerHTML != "" &&
          document.getElementById("6").innerHTML != "" &&
          document.getElementById("3").innerHTML ===
            document.getElementById("6").innerHTML
        ) {
          if (document.getElementById("0").innerHTML == "") {
            document.getElementById("0").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("8").innerHTML != "" &&
          document.getElementById("7").innerHTML != "" &&
          document.getElementById("8").innerHTML ===
            document.getElementById("7").innerHTML
        ) {
          if (document.getElementById("6").innerHTML == "") {
            document.getElementById("6").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("6").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("6").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("2").innerHTML == "") {
            document.getElementById("2").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("5").innerHTML != "" &&
          document.getElementById("8").innerHTML != "" &&
          document.getElementById("5").innerHTML ===
            document.getElementById("8").innerHTML
        ) {
          if (document.getElementById("2").innerHTML == "") {
            document.getElementById("2").innerHTML = "O";
            comp++;
          }
        }
        if (
          document.getElementById("7").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("7").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("1").innerHTML == "") {
            document.getElementById("1").innerHTML = "O";
            comp++;
          }
        }
      });
    }
    user++;
  }
});

btn2.addEventListener("click", () => {
  tob.style.display = "table";
  p.style.display = "none";
  for (let i = 0; i < 9; i++) {
    let user = 1;
    let comp = 0;
    if (document.getElementById(i).innerHTML === "") {
      document.getElementById(i).addEventListener("click", () => {
        document.getElementById(i).innerHTML = "O";
        if (document.getElementById("4").innerHTML === "") {
          document.getElementById("4").innerHTML = "X";
        } else {
          document.getElementById("0").innerHTML = "X";
        }
        if (
          (document.getElementById("0").innerHTML != "" &&
            document.getElementById("4").innerHTML != "" &&
            document.getElementById("0").innerHTML ===
              document.getElementById("4").innerHTML) ||
          (document.getElementById("2").innerHTML != "" &&
            document.getElementById("5").innerHTML != "" &&
            document.getElementById("2").innerHTML ===
              document.getElementById("5").innerHTML) ||
          (document.getElementById("6").innerHTML != "" &&
            document.getElementById("7").innerHTML != "" &&
            document.getElementById("6").innerHTML ===
              document.getElementById("7").innerHTML)
        ) {
          if (document.getElementById("8").innerHTML == "") {
            document.getElementById("8").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("0").innerHTML != "" &&
          document.getElementById("3").innerHTML != "" &&
          document.getElementById("0").innerHTML ===
            document.getElementById("3").innerHTML
        ) {
          if (document.getElementById("6").innerHTML == "") {
            document.getElementById("6").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("1").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("1").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("7").innerHTML == "") {
            document.getElementById("7").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("0").innerHTML != "" &&
          document.getElementById("1").innerHTML != "" &&
          document.getElementById("0").innerHTML ===
            document.getElementById("1").innerHTML
        ) {
          if (document.getElementById("2").innerHTML == "") {
            document.getElementById("2").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("3").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("3").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("5").innerHTML == "") {
            document.getElementById("5").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("2").innerHTML != "" &&
          document.getElementById("1").innerHTML != "" &&
          document.getElementById("2").innerHTML ===
            document.getElementById("1").innerHTML
        ) {
          if (document.getElementById("0").innerHTML == "") {
            document.getElementById("0").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("5").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("5").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("3").innerHTML == "") {
            document.getElementById("3").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("2").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("2").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("6").innerHTML == "") {
            document.getElementById("6").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("8").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("8").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("0").innerHTML == "") {
            document.getElementById("0").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("3").innerHTML != "" &&
          document.getElementById("6").innerHTML != "" &&
          document.getElementById("3").innerHTML ===
            document.getElementById("6").innerHTML
        ) {
          if (document.getElementById("0").innerHTML == "") {
            document.getElementById("0").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("8").innerHTML != "" &&
          document.getElementById("7").innerHTML != "" &&
          document.getElementById("8").innerHTML ===
            document.getElementById("7").innerHTML
        ) {
          if (document.getElementById("6").innerHTML == "") {
            document.getElementById("6").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("6").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("6").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("2").innerHTML == "") {
            document.getElementById("2").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("5").innerHTML != "" &&
          document.getElementById("8").innerHTML != "" &&
          document.getElementById("5").innerHTML ===
            document.getElementById("8").innerHTML
        ) {
          if (document.getElementById("2").innerHTML == "") {
            document.getElementById("2").innerHTML = "X";
            comp++;
          }
        }
        if (
          document.getElementById("7").innerHTML != "" &&
          document.getElementById("4").innerHTML != "" &&
          document.getElementById("7").innerHTML ===
            document.getElementById("4").innerHTML
        ) {
          if (document.getElementById("1").innerHTML == "") {
            document.getElementById("1").innerHTML = "X";
            comp++;
          }
        }
      });
    }
    user++;
  }
});

// btn2.addEventListener("click", () => {
//   tob.style.display = "table";
//   p.style.display = "none";
//   for (let i = 0; i < 9; i++) {
//     if (document.getElementById(i).innerHTML === "") {
//       document.getElementById(i).addEventListener("click", () => {
//         document.getElementById(i).innerHTML = "O";
//       });
//     }
//   }
// });
