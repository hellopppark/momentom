const time = document.querySelector(".time");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  // 백틱(`)을 사용하여 변수를 문자열에 포함
  const parsedHours = hours < 10 ? `0${hours}` : hours;
  const parsedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // 시간 표시 포맷을 `시:분`으로 변경
  time.innerText = `${parsedHours}:${parsedMinutes}`;
}

export function tickTime() {
  getTime();
  setInterval(getTime, 1000);
}
