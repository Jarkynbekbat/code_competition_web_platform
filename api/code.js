import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let code = {
  add: baseUrl + "api/v1/code/",
  all: baseUrl + "api/v1/code/all/"
};

async function getAll(token) {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(code.all);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function getByTaskId(token, id) {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let url = code.add + "by_task/" + id;
    let response = await axios.get(url);
    return response.data ? response.data : null;
  } catch (error) {
    alert(error);
    return null;
  }
}
async function getById(token, id) {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(code.add + id);
    // debugger;

    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function add(item) {
  try {
    debugger;
    let response = await axios.post(code.add, item);
  } catch (error) {
    alert(error);
  }
}

async function edit(item) {
  try {
    let url = code.add + item.id;
    debugger;
    let response = await axios.post(url, item);
  } catch (error) {
    alert(error);
  }
}

async function remove(item) {
  try {
    let url = code.add + item.id;
    let response = await axios.delete(url);
  } catch (error) {
    alert(error);
  }
}

export { getAll, getById, getByTaskId, add, edit, remove };
