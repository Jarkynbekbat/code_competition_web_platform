import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";

async function getResultByCompletedCompetitionId(id) {
  try {
    let url = baseUrl;
    debugger;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export { getResultByCompletedCompetitionId };
