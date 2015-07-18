var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];

function censor(inStr) {
	for(var idx in censoredWords) {
		inStr.replace(censoredWords[idx], "****");
	}
	return idx;
}

function addCensoredWord(word) {
	customCensoredWords.push(word);
}

function getCensoredWords() {
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
