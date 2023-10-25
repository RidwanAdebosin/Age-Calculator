const btn = document.getElementById("btn");
const input = document.getElementById("birthday");
const resultEl = document.getElementById("result");

const calculateAge = () => {
  //getting the input information
  const birthdayValue = input.value;
  if (birthdayValue === "") {
    alert("Please enter your bithday value");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
};

const getAge = (birthdayValue) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
};

btn.addEventListener("click", calculateAge);

// input.addEventListener(CalculateAge, Age);
