import axios from "axios";
let baseUrl = "https://codecompetition.herokuapp.com/";

async function login(username, password) {
  try {
    let url = baseUrl + "api/v1/authenticate";
    debugger;
    let response = await axios.post(url, {
      username: username,
      password: password
    });
    let token = response.data.token;
    window.localStorage.setItem("token", token);
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
    response.data;
    saveUserToLocalStorage(name, surname, patronymic);

    debugger;
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
function saveUserToLocalStorage(name, surname, patronymic) {
  window.localStorage.setItem("name", name);
  window.localStorage.setItem("surname", surname);
  window.localStorage.setItem("patronymic", patronymic);
}

export { login, register, logout };
