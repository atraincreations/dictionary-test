const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


const meaningResult = document.getElementById('meaning-text');

const meaningButton = document.getElementById('meaning-btn');

meaningButton.addEventListener('click', getMeaning);

function getMeaning() {
    var word = document.getElementById('input-text').value;
    console.log(word);
	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
		.then(res => res.json())
		.then(data => {
			meaningResult.innerHTML = JSON.stringify(data[0].meanings[0].definitions[0].definition)
		});
}