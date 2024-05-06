const form = document.querySelector("form");
const ulEl = document.getElementById("list");
const messageEl = document.getElementById("message");

function getRow(name, author) {
  const li = document.createElement("li");

  const nameEl = document.createElement("h4");
  nameEl.textContent = name;

  const authorEl = document.createElement("h4");
  authorEl.textContent = author;

  const button = document.createElement("button");
  button.textContent = "Del";
  button.addEventListener("click", (event) => {
    li.remove();
    message(null, "책이 삭제 되었습니다.");
  });

  li.appendChild(nameEl);
  li.appendChild(authorEl);
  li.appendChild(button);

  return li;
}

function message(error, text = "책이 등록 되었습니다.") {
  const li = document.createElement("li");
  if (error) {
    li.textContent = "등록 실패 하였습니다.";
    li.classList.add("error");
  } else {
    li.classList.remove("error");
    li.textContent = text;
  }
  messageEl.appendChild(li);
  setTimeout(() => {
    li.remove();
  }, 3000);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const data = new FormData(event.target);

    const name = data.get("name");
    const author = data.get("author");

    console.log(name, author);

    const row = getRow(name, author);

    ulEl.appendChild(row);
    message();
  } catch (err) {
    message(err);
  }
});
