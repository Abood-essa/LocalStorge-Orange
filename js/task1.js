const input = document.getElementById("name");
const button = document.getElementById("save");
const div = document.querySelector(".displayName");

button.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("name", input.value);
  div.textContent = `${localStorage.getItem("name")}`;
});
