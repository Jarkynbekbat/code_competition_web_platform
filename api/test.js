import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let test = {
  add: baseUrl + "api/v1/test/",
  all: baseUrl + "api/v1/test/all/"
};

async function getAll(token) {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(test.all);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function getByCodeId(token, id) {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let url = test.add + "by_code/" + id;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function getById(token, id) {
  try {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    let response = await axios.get(test.add + id);
    // debugger;

    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function add(item) {
  try {
    let response = await axios.post(test.add, item);
  } catch (error) {
    alert(error);
  }
}

async function edit(item) {
  try {
    let url = test.add + item.id;
    let response = await axios.post(url, item);
  } catch (error) {
    alert(error);
  }
}

async function remove(item) {
  try {
    let url = test.add + item.id;
    let response = await axios.delete(url);
  } catch (error) {
    alert(error);
  }
}

export { getAll, getById, getByCodeId, add, edit, remove };
