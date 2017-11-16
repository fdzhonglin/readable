
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = (response) => {
  return response.json()
};

export default function fetchPosts() {
  return fetch(
    'http://localhost:3001/posts',
    {
      method: 'GET',
      headers: {
        Authorization: 'Johnny dev machin',
        'content-type': 'application/json',
      },
    }
  )
    .then(checkStatus)
    .then(parseJSON);
}
