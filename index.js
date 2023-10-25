const btn = document.getElementById("btn");
const input = document.getElementById("birthday");

const CalculateAge = () => {
  const birthdayValue = input.value;
  if (birthdayValue === "") {
    alert("Please enter your bithday value");
  } else {
    const age = getAge(birthdayValue);
  }
};

const getAge = () => {
  const currentDate = new Date();
  console.log(currentDate);
};

btn.addEventListener("click", CalculateAge);

// input.addEventListener();
