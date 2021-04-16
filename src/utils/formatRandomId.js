const randomLetter = () => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
};

const randomNumber = () => {
  const numbers = '0123456789';
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const getRandomId = () => {
  const randomLetters = randomLetter() + randomLetter();
  const randomNumbers =
    randomNumber() + randomNumber() + randomNumber() + randomNumber();
  return randomLetters + randomNumbers;
};

export default getRandomId;
