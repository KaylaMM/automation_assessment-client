const fetcher = (url, method, body)=>
  fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body? JSON.stringify(body): undefined
  })
    .then(response => response.json())
    .catch((e) => {
      console.error(e)
      throw e;
    })



export default fetcher;