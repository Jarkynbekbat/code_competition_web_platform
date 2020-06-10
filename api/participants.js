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
async function add(competitionId) {
  try {
    let participant = {
      userId: 3,
      competitionId: competitionId,
      startDate: "2020-06-10T06:53:10.471Z",
      endDate: "2020-06-15T06:53:10.471Z"
    };
    debugger;
    let response = await axios.post(urls.add, participant);
    let participantId = 3; // TODO get as a responce
    return participantId;
  } catch (error) {
    alert(error);
    debugger;
    return null;
  }
}
async function remove(competitionId) {
  try {
    // TODO remove participant by competitionId and userId
    competitionId;
    userId;
    debugger;
    //     let url = urls.add + item.id;
    //     let response = await axios.delete(url);
  } catch (error) {
    alert(error);
  }
}

export { getAll, add, remove };
