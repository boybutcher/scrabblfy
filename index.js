const body = document.body;
let results = [];

const form = document.createElement('form');
form.onsubmit = (e) => {
  e.preventDefault();
  fetch('/', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({query: lettersInput.value}),
  })
    .then(response => (
      response.json()
    ))
    .then(readable => {
      console.log('readable: ', readable)
    })
    .catch(error => {
      console.error('error: ', error)
    })
}

const lettersInput = document.createElement(`input`);

const submissionButton = document.createElement(`button`);
submissionButton.innerHTML = `submit`;

form.appendChild(lettersInput);
form.appendChild(submissionButton);

const resultsContainer = document.createElement('ul');
resultsContainer.innerHTML = `Results: ${results.length} items`;

const createResultItem = (item) => {
  const resultItem = document.createElement('li');
  resultItem.innerHTML = item;
  return resultItem;
}

const appendResultItem = (item) => {
  resultsContainer.append(item);
}

const appendItems = () => {
  for (var i = 0; i < results.length; i++) {
    appendResultItem(results[i]);
  }
}

body.appendChild(form);
body.appendChild(resultsContainer);
