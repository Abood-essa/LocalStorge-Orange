const saveBtn = document.getElementById("save");
const email = document.getElementById("email");
const name = document.getElementById("name");

const data = document.querySelector(".data");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = {
    name: name.value,
    email: email.value,
  };
  localStorage.setItem("data", JSON.stringify(formData));
  email.value = "";
  name.value = "";
  const data2 = localStorage.getItem("data");
  const parsedData = JSON.parse(data2);

  data.innerHTML = `
  <p><strong>Name:</strong> ${parsedData.name}</p>
  <p><strong>Email:</strong> ${parsedData.email}</p>
`;
});
