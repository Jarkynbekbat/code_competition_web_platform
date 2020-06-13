import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/api/v1/";
let baseUrl2 = baseUrl + "participant_answer";

async function add(participantAnswer) {
  // {
  //           "isCorrect": true,
  //           "option": "string",
  //           "participantId": 0,
  //           "taskId": 0
  //}

  try {
    let response = await axios.post(baseUrl2, participantAnswer);
    debugger;
    return response.data;
  } catch (error) {
    alert(error);

    return null;
  }
}

export { add };
