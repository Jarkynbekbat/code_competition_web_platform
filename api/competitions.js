import axios from "axios";
let baseUrl = "https://codecompetition.herokuapp.com/";
let urls = {
  add: baseUrl + "api/v1/competition/",
  all: baseUrl + "api/v1/competition/all/"
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
async function getById(id) {
  try {
    let response = await axios.get(urls.add + id);

    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function getBySubjectId(id) {
  let url = urls.add + "by_subject/" + id;
  try {
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export { getAll, getById, getBySubjectId };
