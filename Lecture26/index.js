const component = (photo, name, link) => {
  const box = document.createElement("a");
  box.className = "box";
  box.href = link;
  box.target = "_blank";

  const profilePhoto = document.createElement("img");
  profilePhoto.src = photo;

  const nameElement = document.createElement("span");
  nameElement.innerText = name;

  box.appendChild(profilePhoto);
  box.appendChild(nameElement);

  return box;
};

const users = [];
const body = document.body;

async function githubFetch() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  for (let { avatar_url, login, url } of data)
    body.appendChild(component(avatar_url, login, url));
}

githubFetch();

// const users = [];
// const data = githubFetch();

// data.array.forEach((element) => {
//   users.push(component(element.avatar_url, element.login, element.url));
// });

// const body = document.body();

// body.appendChild(users);
