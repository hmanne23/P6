/*
 * FetchModel - Fetch a model from the web server.
 *   url - string - The URL to issue the GET request.
 * Returns: a Promise that should be filled
 * with the response of the GET request parsed
 * as a JSON object and returned in the property
 * named "data" of an object.
 * If the requests have an error, the promise should be
 * rejected with an object containing the properties:
 *    status:  The HTTP response status
 *    statusText:  The statusText from the xhr request
 */
function FetchModel(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve({ data: response });
        } catch (error) {
          reject({ status: xhr.status, statusText: xhr.statusText });
        }
      } else {
        reject({ status: xhr.status, statusText: xhr.statusText });
      }
    };

    xhr.onerror = () => {
      reject({ status: xhr.status, statusText: xhr.statusText });
    };

    xhr.send();
  });
}

// Export the FetchModel function
export default FetchModel;