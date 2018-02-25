'use strict';

const alfy = require('alfy');

const api = 'http://hipsterjesus.com/api'
const type = 'hipster-centric';
const isHTML = 'false';
const numParagraphs = parseInt(alfy.input, 10) || 1;

alfy.fetch(api, {
    query: {
        type: type,
        html: isHTML,
        paras: numParagraphs
	}
}).then(data => {
    alfy.output([{
        title: `Hipsum Paragraphs: ${numParagraphs}`,
        subtitle: data.text,
        arg: data.text
    }]);
});
