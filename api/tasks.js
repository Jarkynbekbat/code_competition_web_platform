import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let tasks = {
  add: baseUrl + "api/v1/task/",
  all: baseUrl + "api/v1/task/all/"
};

async function getById(id) {
  try {
    let response = await axios.get(tasks.add + id);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}
async function getByCompetitionId(id) {
  try {
    let url = tasks.add + "by_competition/" + id;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export { getById, getByCompetitionId };
