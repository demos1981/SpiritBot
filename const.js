const { Composer, Markup, Scenes } = require("telegraf")

// Команды бота
const commands = `
/start - Перезапустить бота
/help - Помощь
/button - Menu
`


 
// Текстовые константы
const text1 = `
 <a href="https://youtube.com/">Крути барабан</a>
`
const text2 = `
<a href="https://youtube.com/">Выбери себе дом, и возвращайся в игру -> Жми</a>
<i>После того как выберешь дом, напиши слово <b>okey</b> и следуй инструкции</i>
`


const text5 = `
3 <u>Подчёркнутый Текст</u> >Жми на свой дом</a>
`
// Экспорт констант
module.exports.commands = commands
module.exports.text1 = text1
module.exports.text2 = text2
module.exports.text5 = text5


