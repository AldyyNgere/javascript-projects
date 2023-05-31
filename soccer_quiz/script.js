const dbUsername = [];

// push username
document.forms["start-form"].onsubmit = (e) => {
  let username = document.forms["start-form"]["username"].value;
  dbUsername.push(username);

  alert(`Welcome ${username} enjoy the game`);
  e.preventDefault();
  document.forms["start-form"].reset();
  quest1();
};

function quest1() {
  document.querySelector(".container-start").style.display = "none";
  document.querySelector(".quest1-cont").style.display = "block";
}
