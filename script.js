// prcess de name to first cap and array if there are more thann one
console.log("History Time");
const inputEl = document.getElementById("user-input");
const h1El = document.querySelector("h1");
const h3El = document.querySelector("h3");
const labelEl = document.getElementById("label");
const btnEl = document.getElementById("btn");
const newBtnEl = document.getElementById("newBtn");
const loopEl = document.getElementById("loop");
const endEl = document.getElementById("end");
const chessEl = document.getElementById("chess");
const loopNumEl = document.getElementById("loopNum");
const chessBoardEl = document.getElementById("chessBoard");
const gridContainerEL = document.getElementById("gridContainer");

btn.addEventListener("click", setNames);

function setNames(e) {
  //convert de first cap
  function convertWordCase(str) {
// let arr=str.split(" ");
// let cap =arr.map(nombre=>nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase());
//     let joinNames=cap.join(", ");
//     return joinNames;




    return str
      .split(" ")
      .map((w) => {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      })
      .join(", ");
  }
  const names = convertWordCase(inputEl.value);
  console.log(names);
  console.log(typeof names); //String
  //----------------------
  // //greting and invite to the history time
  console.log(names);
  h1El.textContent = `Hello ${names}. Welcome!`;
  h3El.innerHTML = `Are you ready to learn about loops?<br></br>History time.`;
  labelEl.textContent = "";
  //NEW BUTTON
  btnEl.innerHTML = "";
  // e.preventDefault();
  newBtnEl.innerHTML = '<button  onclick=" next()">Next!</button>';
}

//history context

newBtnEl.addEventListener("click", next);

function next(e) {
  h1El.textContent = `Chess Legend`;
  h3El.innerHTML =
    "<h4>A wise man invented chess and asked the king for a reward of rice grains that would double on each of the 64 squares of the chessboard.<br></br>The king, surprised by the apparent modesty of the request, agreed without realizing that the total amount of rice would be astronomical.<br></br>How do we calculate the amount of rice in each square? </h4>";
  chessEl.innerHTML =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnd1vXzYduh77H_BndoSzPTltygeYH-VtHMJHHj4lrg&s" alt="chess"></img>';
  newBtnEl.innerHTML = "";
  loopEl.innerHTML = '<button  onclick=" loop()">Loop!</button>';
  // console.log(h1El.value);
}

//loops
loopEl.addEventListener("click", loop);

function loop(e) {
  // console.log(names);
  h1El.textContent = `Answer: "Loop For" + "array.push"`;
  h3El.innerHTML = ` const chessNum = [];<br></br>
  let number = 1;<br></br>
  for (let i = 1; i < 64; i++) {<br></br>
    chessNum.push(number);<br></br>
    number *= 2;<br></br>
  }`;
  chessEl.innerHTML = "";
  // e.preventDefault();
  newBtnEl.innerHTML = "";
  loopEl.innerHTML = "";
  endEl.innerHTML = '<button  onclick="theEnd()">Thanks!</button>';
  //create array with numbers
  const chessNum = [];
  let number = 1;
  for (let i = 1; i < 64; i++) {
    chessNum.push(number);
    number *= 2;
  
  }  
  console.log(chessNum)
  // Make a list with this elements
  const numbersListEl = document.getElementById("numbers-list");
  // const gridContainerEl = document.getElementById("gridContainer");
  chessNum.forEach((number) => {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    numbersListEl.appendChild(listItem);
      e.preventDefault();
  });
  console.log()
}

//----------------------
function theEnd(e) {
  const chessNum = "";
  // console.log(names);
  h1El.textContent = `Thanks!`;
  h3El.textContent = "";
  chessEl.innerHTML = "";
  // e.preventDefault();
  newBtnEl.innerHTML = "";
  loopEl.innerHTML = "<p>Georges Fetis</p><p>2024</p>";
  // listItem.innerHTML = "";
  // number.innerHTML = "";
  endEl.innerHTML = "";
  // numbersListEl.innerHTML=' ';
  // chessNum.innerHTML=''
  gridContainerEL.innerHTML = "<p></p>";
}

// Dark Mode
document
  .getElementById("toggleDarkMode")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      this.textContent = "Ligth Mode";
    } else {
      this.textContent = "Dark Mode";
    }
  });
