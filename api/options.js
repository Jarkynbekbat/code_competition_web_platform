import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let option = {
  add: baseUrl + "api/v1/option/",
  all: baseUrl + "api/v1/option/all/"
};

async function getByTaskId(id) {
  try {
    let response = await axios.get(option.all);
    if (response.data.lenght != 0) {
      return response.data.filter(a => a.taskId == id);
    } else return null;
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
