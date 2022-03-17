const time = document.querySelector("#timer"),
<<<<<<< HEAD
    greeting = document.querySelector("#greeting"),
    name = document.querySelector("#name"),
    enter = document.querySelector("#enter");
=======
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  enter = document.querySelector("#enter");
>>>>>>> 6b1d3bd9dbe6d54a196286d995ba378419eb8faa

const lookAmPa = true;

const lookTime = () => {
<<<<<<< HEAD
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
    )} ${amPm} `;

    setTimeout(lookTime, 1000);
=======
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm} `;

  setTimeout(lookTime, 1000);
>>>>>>> 6b1d3bd9dbe6d54a196286d995ba378419eb8faa
};

const addZero = (number) => (number < 10 ? "0" + number : number);

const setBg = () => {
<<<<<<< HEAD
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning,";
        document.body.style.backgroundImage = 'url("./img/morning.jpg")';
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon,";
        document.body.style.backgroundImage = 'url("./img/afternoon.jpg")';
    } else {
        greeting.textContent = "Good Evening,";
        document.body.style.backgroundImage = 'url("./img/evening.jpg")';
    }
};

const setName = (e) => {
    if (e.type === "keypress") {
        if (e.key === "Enter") {
            localStorage.setItem("name", e.target.innerHTML);
            name.blur();
        }
        localStorage.setItem("name", e.target.innerHTML);
    }
};
const getName = () => {
    if (
        localStorage.getItem("name") === null ||
        localStorage.getItem("name").length === 0
    ) {
        name.textContent = "[Enter name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
};


const setFocus = (e) => {
    if (e.type === "keypress") {
        if (e.which === 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur()
            getFocus();
        } else {
            localStorage.setItem("focus", e.target.innerText);
        }
    };
}
const getFocus = () => {
    if (
        localStorage.getItem("focus") === null ||
        localStorage.getItem("focus").length === 0
    ) {
        focus.textContent = "[Enter focus]";
    } else {
        focus.textContent = localStorage.getItem("focus")
    }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
name.addEventListener("keypress", setFocus);
lookTime();
setBg();
getName();
getFocus();
=======
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning,";
    document.body.style.backgroundImage = 'url("./img/morning.jpg")';
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon,";
    document.body.style.backgroundImage = 'url("./img/afternoon.jpg")';
  } else {
    greeting.textContent = "Good Evening,";
    document.body.style.backgroundImage = 'url("./img/evening.jpg")';
  }
};

const setName = (e) => {
  if (e.type === "keypress") {
    if (e.key === "Enter") {
      localStorage.setItem("name", e.target.innerHTML);
      name.blur();
    }
    localStorage.setItem("name", e.target.innerHTML);
  }
};
const getName = () => {
  if (
    localStorage.getItem("name") === null ||
    localStorage.getItem("name").length === 0
  ) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};
name.addEventListener("keypress", setName);

lookTime();
setBg();
getName();
>>>>>>> 6b1d3bd9dbe6d54a196286d995ba378419eb8faa
