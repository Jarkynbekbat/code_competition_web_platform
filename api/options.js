import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let option = {
  add: baseUrl + "api/v1/option/",
  all: baseUrl + "api/v1/option/all/"
};

async function getByTaskId(id) {
  try {
    let url = baseUrl + "api/v1/option/by_task/" + id;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    return null;
  }
}
async function getById(id) {
  try {
    let response = await axios.get(option.add + id);

    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export { getById, getByTaskId };
