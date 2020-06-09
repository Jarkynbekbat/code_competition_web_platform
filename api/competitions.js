import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let token = window.localStorage.getItem("token");
let urls = {
  add: baseUrl + "api/v1/competition/",
  all: baseUrl + "api/v1/competition/all/"
};

async function getAll() {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(urls.all);

    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}
async function getById(id) {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(urls.add + id);
    // debugger;

    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function getBySubjectId(id) {
  let url = urls.add + "by_subject/" + id;
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export { getAll, getById, getBySubjectId };
