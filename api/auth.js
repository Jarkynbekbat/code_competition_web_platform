import axios from "axios";
let baseUrl = "https://codecompetition.herokuapp.com/";

async function login(username, password) {
  try {
    let url = baseUrl + "api/v1/authenticate";
    let response = await axios.post(url, {
      username: username,
      password: password
    });
    let token = response.data.token;
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    window.localStorage.setItem("token", token);

    let parsed = parseJwt(token);
    let userData = await getUserByUsername(parsed.sub);

    saveUserToLocalStorage(
      userData.name,
      userData.surname,
      userData.username,
      userData.id
    );

    debugger;

    return true;
  } catch (error) {
    error;
    debugger;
    alert(error);
  }
}

async function register(name, surname, username, patronymic, password) {
  try {
    let url = baseUrl + "api/v1/register";
    let response = await axios.post(url, {
      name: name,
      surname: surname,
      username: username,
      patronymic: patronymic,
      password: password
    });
    return true;
  } catch (error) {
    error;
    debugger;
    alert(error);
  }
}
function logout() {
  window.localStorage.clear();
}
// internal methods
function saveUserToLocalStorage(name, surname, username, userId) {
  window.localStorage.setItem("name", name);
  window.localStorage.setItem("surname", surname);
  window.localStorage.setItem("username", username);
  window.localStorage.setItem("userId", userId);
}

async function getUserByUsername(username) {
  try {
    let url = baseUrl + "api/v1/user/by_login/" + username;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    debugger;
  }
}

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export { login, register, logout };
