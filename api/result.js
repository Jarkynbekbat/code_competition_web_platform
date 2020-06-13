import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/api/v1/check/";

async function getResultByCompetitionId(id) {
  try {
    let url = baseUrl + "by_competition/" + id;
    let response = await axios.get(url);
    debugger;
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}
async function getResultByUserAndCompetitionIds(userId, competitionId) {
  try {
    let url = baseUrl + "by_user_and_comp/" + userId + "/" + competitionId;
    let response = await axios.get(url);
    debugger;
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export { getResultByCompetitionId, getResultByUserAndCompetitionIds };
