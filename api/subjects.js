import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let subject = {
  add: baseUrl + "api/v1/subject/",
  all: baseUrl + "api/v1/subject/all/"
};

async function getAll() {
  let token = window.localStorage.getItem("token");
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(subject.all);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export { getAll };
