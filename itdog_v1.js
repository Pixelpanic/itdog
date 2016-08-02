'use strict'

var tg = require('telegram-node-bot')('TOKEN HERE')
var count = 0
console.log('Listening to messages...')

tg.router.
    when(['IT狗'], 'DogController').
    when(['dogpic'], 'DogController').
    when(['win'], 'WindowsController').
    when(['Windows'], 'WindowsController').
    when(['Window'], 'WindowsController').
    when(['amd'], 'AMDController').
    when(['AMD'], 'AMDController').
    when(['入行'], 'ITController').
    when(['好想返工'], 'ITController').
    when(['(笑'], 'ITController').
    when(['吾'], 'MKController').
    when(['系'], 'MKController')




tg.controller('DogController', ($) => {
    tg.for('IT狗', () => {
        $.sendMessage('🐕汪!')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)

    })
    tg.for('dogpic', () => {
        $.sendPhotoFromUrl('http://holland.pk/uptow/i4/60024a494ba842f54b58707e4136e46e.jpg')
        count++
        console.log("Responsed, usage count:", count)
  console.log($.message, $.chat)
    })

})

tg.controller('WindowsController', ($) => {
    tg.for('win', () => {
        $.sendMessage('john Linux la DLLM 🙄')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })
    tg.for('Windows', () => {
        $.sendMessage('john Linux la DLLM 🙄')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })
    tg.for('Window', () => {
        $.sendMessage('john Linux la DLLM 🙄')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })

})

tg.controller('AMDController', ($) => {
    tg.for('AMD', () => {
        $.sendMessage('AMD狗都唔屌')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })
    tg.for('amd', () => {
        $.sendMessage('AMD狗都唔屌')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })

})
tg.controller('ITController', ($) => {
    tg.for('入行', () => {
        $.sendMessage('HKNOIT🙄')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })
    tg.for('好想返工', () => {
        $.sendSticker('BQADAwADEwADcgg0CPNDGUvSumxOAg')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })
    tg.for('(笑', () => {
        $.sendSticker('BQADBQADFgUAApNrKwTqz9VfFxwEfAI')
        count++
        console.log("Responsed, usage count:", count)
  console.log($.message, $.chat)
    })

})

tg.controller('MKController', ($) => {

        tg.for('吾', () => {
        $.sendMessage('吾你老母🖕')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })

        tg.for('系', () => {
        $.sendMessage('系你老母🖕')
        count++
        console.log("Responsed, usage count:", count)
	console.log($.message, $.chat)
    })


})
