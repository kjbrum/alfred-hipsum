;(async () => {
    'use strict'

    const alfy = require('alfy')
    const alfredNotifier = require('alfred-notifier')

    // Check for updates
    alfredNotifier()

    const apiBase = 'https://hipsum.co/api'
    const type = 'hipster-centric'
    const startWithLorem = 0
    const numParagraphs = parseInt(alfy.input, 10) || 1
    const numSentences = parseInt(alfy.input, 10) || 1

    let items = []

    // Get paragraphs
    const paragraphs = await alfy.fetch(apiBase, {
        query: {
            type: type,
            startWithLorem: startWithLorem,
            paras: numParagraphs,
        },
    })
    items.push({
        title: `Hipsum paragraphs: ${numParagraphs}`,
        subtitle: 'Press enter to copy',
        arg: paragraphs.join('\r\n'),
    })

    // Get sentences
    const sentences = await alfy.fetch(apiBase, {
        query: {
            type: type,
            startWithLorem: startWithLorem,
            sentences: numSentences,
        },
    })
    items.push({
        title: `Hipsum sentences: ${numSentences}`,
        subtitle: 'Press enter to copy',
        arg: sentences.join('\r\n'),
    })

    alfy.output(items)
})()
