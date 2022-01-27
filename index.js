// Импорт Telegraf и Markup
const {
  Telegraf,
  Markup,
  Scenes,
  session
} = require('telegraf')

// Импорт dotenv для защиты API токена
require('dotenv').config()


// Импорт нашего модуля с константами
const my_const = require('./const')



// создание зависимостей сценариев
const home3Scene = require('./scenes/Home3.js')
const home1Scene = require('./scenes/Home1.js')
const home2Scene = require('./scenes/Home2.js')
const home4Scene = require('./scenes/Home4.js')





// Инициализация бота с помощью Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN)



//Логер
bot.use(Telegraf.log())



// Обработка команды /help
bot.help((ctx) => ctx.reply(my_const.commands))


// создание прототипа сценариев
const stage = new Scenes.Stage([home1Scene,home2Scene,home3Scene,home4Scene])

//middleware
bot.use(session())
bot.use(stage.middleware())

/*bot.hears('Home1', async (ctx)=>{
  try{
    await ctx.scene.enter('home1Wizard')
  }catch(e){
    console.log(e)
  }
})
  
bot.hears('Home2', async(ctx)=>{
  try{
   await ctx.scene.enter('home2Wizard')
  }catch(e){
    console.log(e)
  }
  })*/

bot.hears('Home1',ctx=>ctx.scene.enter('home1Wizard'))
bot.hears('Home2',ctx=>ctx.scene.enter('home2Wizard'))
bot.hears('Home3',ctx=>ctx.scene.enter('home3Wizard'))
bot.hears('Home4',ctx=>ctx.scene.enter('home4Wizard'))




// Обработка команды /start
bot.start(async(ctx) => {
  try{
    await ctx.reply( 'okey',Markup.keyboard(
      [
        ['Home1','Home2','Home3','Home4']
       
      ]).oneTime().resize())
    } catch(e){
    console.log(e)
  }
  try{
    await ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}! Давай попробуем разобраться в твоем внутреннем мире.Если ты готов то нажми кнопку внизу`,Markup.inlineKeyboard(
      [
        [Markup.button.callback('Готов', 'btn_0')]
      ]

     
    ))
    } catch(e){
      console.log(e)
    }
 
   
})
/*bot.on('menu',async (ctx)=>{
  try{
    await ctx.reply('Главное меню')
  }catch(e){
    comsole.error(e)
  }
})*/

// Обработка команды /button
/*bot.command('button', async (ctx) => {
  try {
    await ctx.reply('ok', Markup.keyboard(
      [
        ['Menu','Back','My']
       
      ]
    ).oneTime().resize())
  } catch (e) {
    console.error(e)
  }
})*/








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
/*const markup = Markup.inlineKeyboard([
  Markup.button.game('🎮 Play now!'),
  Markup.button.url('Telegraf help', 'http://telegraf.js.org')
])*/



// Обработчик кнопок с помощью функции
addActionBot('btn_1', './img/1.jpg', my_const.text1, true)
addActionBot('btn_0', './img/2.jpg', my_const.text2, true)
addActionBot('btn_5', './img/2.jpg', my_const.text5, true)
addActionBot('btn_4', false, my_const.text3, false)





// Запустить бота
bot.launch()

// Включить плавную остановку
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


/**
 *? Функция для отправки сообщения ботом
 *? @param {String} id_btn Идентификатор кнопки для обработки
 *? @param {String} src_img Путь к изображению, или false чтобы отправить только текст
 *? @param {String} text Текстовое сообщение для отправки
 * ?@param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
 */
