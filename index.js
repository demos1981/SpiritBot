// Импорт Telegraf и Markup
const {
  Telegraf,
  Markup,
  Scenes
} = require('telegraf')

// Импорт dotenv для защиты API токена
require('dotenv').config()


// Импорт нашего модуля с константами
const my_const = require('./const')

const backScene = require('./scenes/back.js')
const menuScene = require('./scenes/menu.js')
const myScene = require('./scenes/my.js')





// Инициализация бота с помощью Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN)
//Логер
bot.use(Telegraf.log())


/*bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))*/


// Обработка команды /help
bot.help((ctx) => ctx.reply(my_const.commands))

const stage = new Scenes.Stage([menuScene,backScene,myScene])
//bot.use(sessison())
bot.use(stage.middleware())


bot.hears('Menu',ctx=>ctx.scene.enter('menuWizard'))
bot.hears('Back',ctx=>ctx.scene.enter('backWizard'))
bot.hears('My',ctx=>ctx.scene.enter('myWizard'))

// Обработка команды /start
bot.start(async(ctx) => {
  try{
    await ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}! Давай попробуем разобраться в твоем внутреннем мире.Если ты готов то нажми кнопкувнизу`,Markup.inlineKeyboard(
      [
        [Markup.button.callback('Готов', 'btn_0')]
      ]
    ))
  } catch(e){
    console.log(e)
  }
   
})

// Обработка команды /button
bot.command('button', async (ctx) => {
  try {
    await ctx.reply('ok', Markup.keyboard(
      [
        ['Menu','Back','My']
       
      ]
    ).oneTime().resize())
  } catch (e) {
    console.error(e)
  }
})


/**
 *? Функция для отправки сообщения ботом
 *? @param {String} id_btn Идентификатор кнопки для обработки
 *? @param {String} src_img Путь к изображению, или false чтобы отправить только текст
 *? @param {String} text Текстовое сообщение для отправки
 * ?@param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
 */



function addActionBot(id_btn, src_img, text, preview) {
  bot.action(id_btn, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src_img !== false) {
        await ctx.replyWithPhoto({
          source: src_img
        })
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: preview
      })
    } catch (e) {
      console.error(e)
    }
  })
}



// Обработчик кнопок с помощью функции
addActionBot('btn_1', './img/1.jpg', my_const.text1, true)
addActionBot('btn_0', './img/2.jpg', my_const.text2, true)
addActionBot('btn_4', false, my_const.text3, false)

// Запустить бота
bot.launch()

// Включить плавную остановку
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))