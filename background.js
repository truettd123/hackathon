document.addEventListener('DOMContentLoaded', () => {
  // isolate and assign the title tag to a variable
  let title = document.querySelector("title");
  // assign the inner text of the title tag to a variable
  let titleTextWithPrompt = `Tell me a story about ${title.innerText}`;
  console.log(titleTextWithPrompt)

  // IDEA: connect to chatGPT API and use the titleText as a search query
  let open_ai_response;
  let storyResponse;

  openai_test();

  console.log(storyResponse);


  async function openai_test() {

    let url = "https://api.openai.com/v1/completions";

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer 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");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        open_ai_response = xhr.responseText;
        console.log(open_ai_response);
        storyResponse = JSON.parse(open_ai_response);
        storyResponse = storyResponse.choices[0].text;
        console.log(storyResponse.choices[0].text);
      }
    };

    let data = {
      "model": "text-davinci-003",
      "prompt": `${titleTextWithPrompt}`,
      "temperature": 0.7,
      "max_tokens": 256,
      "top_p": 1,
      "frequency_penalty": 0.35,
      "presence_penalty": 0
    };

    xhr.send(JSON.stringify(data));
  }

  /*
  // build out the object to use in body of fetch request
  let fetchBody = {
    "model": "text-davinci-003",
    "prompt": titleText,
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0.35,
    "presence_penalty": 0
  }
  // fetch POST request to chatGPT API passing in the necessary information
  fetch('https://api.openai.com/v1/completions', {
    method: "POST",
    body: JSON.stringify(fetchBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    }
  })
    .then(data => data.json())
    .then(data => {
      // here we would add functionality to display the data in the body somewhere
      console.log(data);
    });

*/
});


//setRequestHeader("Content-Type", "application/json");
//xhr.setRequestHeader("Authorization", "Bearer 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");


/*
fetch(
        `https://api.openai.com/v1/completions`,
        {
            body: JSON.stringify({"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer  API_KEY_HERE",
            },
                }
    ).then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                terminal.echo(json);
            });
        }
    });
*/