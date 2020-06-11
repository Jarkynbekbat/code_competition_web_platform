import axios from "axios";
let baseUrl = "https://codecompetition.herokuapp.com/";
let answer = {
  add: baseUrl + "api/v1/answer/"
};

async function getByTaskId(id) {
  try {
    let url = answer.add + "by_task/" + id;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    debugger;
    return null;
  }
}

export { getByTaskId };
