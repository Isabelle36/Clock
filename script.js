function clock() {
  let hours = document.querySelector(".cloak");
  let minutes = document.querySelector(".cloak1");
  let seconds = document.querySelector(".cloak2");
  let ampm = document.querySelector(".cloak3");

  let time = new Date();
  let currentTime = time.toLocaleTimeString({
    hour: "2-digit",
    minute: "2-digit", //03:34:27 pm
    second: "2-digit",
    hour12: true,
  });

  const [hrMinSec, period] = currentTime.split(" "); // 03:34:27  , pm
  const [hour, min, second] = hrMinSec.split(":"); // 03,34,27

  hours.textContent = hour;
  minutes.textContent = min;
  seconds.textContent = second;
  ampm.textContent = period;
  let intervaLTime = setInterval(clock, 1000);
}
clock();
