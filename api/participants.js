import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let urls = {
  add: baseUrl + "api/v1/participant/",
  all: baseUrl + "api/v1/participant/all/"
};

async function getAll() {
  try {
    let response = await axios.get(urls.all);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function isAllowed(competitionId, userId) {
  try {
    let url = urls.add + `by_competition_and_user/${competitionId}/${userId}`;
    let response = await axios.get(url);
    return !response.data.isEmpty;
  } catch (error) {
    alert(error);
    return null;
  }
}

async function add(competitionId) {
  try {
    let userId = window.localStorage.getItem("userId");
    let participant = {
      userId: userId,
      competitionId: competitionId,
      startDate: "2020-06-10T06:53:10.471Z",
      endDate: "2020-06-15T06:53:10.471Z"
    };
    let response = await axios.post(urls.add, participant);
    return response.data;
  } catch (error) {
    alert(error);
    debugger;
    return null;
  }
}

export { getAll, add, isAllowed };
