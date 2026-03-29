const users = [
  { name: "Ahmad" },
  { name: "Ali" },
  { name: "Sara" },
  { name: "Lana" },
];

const search = document.getElementById("search");
const clearBtn = document.querySelector(".clearBtn");
const results = document.querySelector(".result");
const noResult = document.querySelector(".noresult");

localStorage.setItem("Users", JSON.stringify(users));

let retrivData = JSON.parse(localStorage.getItem("Users"));

function render(data) {
  results.innerHTML = "";

  data.forEach((user, index) => {
    const card = `
      <div class="card">
        <div class="profile">
          <img src="./src/download.png" class="proImage" />
          <h3 class="name">${user.name}</h3>
        </div>
        <button class="delBtn" data-index="${index}">Delete</button>
      </div>
    `;

    results.innerHTML += card;
  });
  if (data.length == 0) noResult.textContent = "NO Result Found";
  else noResult.textContent = "";
}

render(retrivData);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = retrivData.filter((user) =>
    user.name.toLowerCase().includes(value),
  );
  localStorage.setItem("filtered", JSON.stringify(filtered));

  render(filtered);
});

clearBtn.addEventListener("click", () => {
  search.value = "";
  //   render(retrivData);
});

results.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    const index = e.target.getAttribute("data-index");

    retrivData.splice(index, 1);

    localStorage.setItem("Users", JSON.stringify(retrivData));

    render(retrivData);
  }
});
