let clockDisp = document.querySelector('#disclock');

let timer = () => {
  let date = new Date();
  let hrs = date.getHours().toString();
  let min = date.getMinutes().toString();
  let sec = date.getSeconds().toString();

  if (hrs.length == 1) {
    hrs = `0${hrs}`;
  }

  if (min.length == 1) {
    min = `0${min}`;
  }
  if (sec.length == 1) {
    sec = `0${sec}`;
  }

  clockDisp.innerHTML = `<i>${date.toDateString()}</i> <br> ${hrs} : ${min} : ${sec} `;
};

setInterval(timer, 1000);
