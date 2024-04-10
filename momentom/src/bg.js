import { getRandomInt, getRandomIt } from "./util";

const body = document.querySelector("body");

const IMG_NUMBER = 8;

export function paintBgImage() {
  const imgNumber = getRandomInt(IMG_NUMBER);
  body.style.background = `url('image/bg/${imgNumber}.jpg') no-repeat center center / cover`;
}
