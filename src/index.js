import './css/styles.css';
import SolarAge from './js/solar-age.js';
import FutureBirthday from './js/future-birthday.js';

function handleSubmit(event) {
  event.preventDefault();

  const earthAgeInput = document.getElementById('earth-age').value;
  const futureAgeInput = document.getElementById('future-age').value;
  const birthdayAge = parseFloat(document.getElementById('birthdayAge').value);

  const solarAgeCalculator = new SolarAge(parseFloat(earthAgeInput));
  const futureBirthdayCalculator = new FutureBirthday(parseFloat(earthAgeInput));

  const mercuryAge = solarAgeCalculator.calculateMercuryAge();
  const venusAge = solarAgeCalculator.calculateVenusAge();
  const marsAge = solarAgeCalculator.calculateMarsAge();
  const jupiterAge = solarAgeCalculator.calculateJupiterAge();

  document.getElementById('mercury-age').textContent = mercuryAge.toFixed(2);
  document.getElementById('venus-age').textContent = venusAge.toFixed(2);
  document.getElementById('mars-age').textContent = marsAge.toFixed(2);
  document.getElementById('jupiter-age').textContent = jupiterAge.toFixed(2);

  const futureAge = parseFloat(futureAgeInput);
  const yearsToFutureBirthday = futureBirthdayCalculator.yearsToFutureBirthday(futureAge);

  document.getElementById('mercury-years-to-future').textContent = yearsToFutureBirthday.Mercury.toFixed(2);
  document.getElementById('venus-years-to-future').textContent = yearsToFutureBirthday.Venus.toFixed(2);
  document.getElementById('mars-years-to-future').textContent = yearsToFutureBirthday.Mars.toFixed(2);
  document.getElementById('jupiter-years-to-future').textContent = yearsToFutureBirthday.Jupiter.toFixed(2);

  const yearsPassed = solarAgeCalculator.yearsPassedSinceBirthday(birthdayAge);

  document.getElementById('yearsPassedEarth').textContent = yearsPassed.toFixed(2);
  document.getElementById('yearsPassedMercury').textContent = (yearsPassed / SolarAge.MERCURY_YEAR_RATIO).toFixed(2);
  document.getElementById('yearsPassedVenus').textContent = (yearsPassed / SolarAge.VENUS_YEAR_RATIO).toFixed(2);
  document.getElementById('yearsPassedMars').textContent = (yearsPassed / SolarAge.MARS_YEAR_RATIO).toFixed(2);
  document.getElementById('yearsPassedJupiter').textContent = (yearsPassed / SolarAge.JUPITER_YEAR_RATIO).toFixed(2);
}

document.getElementById('age-form').addEventListener('submit', handleSubmit);
