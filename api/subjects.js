import axios from "axios";

let baseUrl = "https://codecompetition.herokuapp.com/";
let subject = {
  add: baseUrl + "api/v1/subject/",
  all: baseUrl + "api/v1/subject/all/"
};

async function getAll() {
  try {
    let response = await axios.get(subject.all);
    return response.data;
  } catch (error) {
    // alert(error);
    return [];
  }
}

export { getAll };
