import { paintBgImage } from "./bg.js";
import { paintQuote } from "./quote.js";
import { tickTime } from "./time.js";
import { getWeatherWithCoords } from "./weather.js";

function init() {
  paintBgImage();
  tickTime();
  paintQuote();
  getWeatherWithCoords();
}
init();
