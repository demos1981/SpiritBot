<<<<<<< HEAD
const {Markup,Composer,Scenes}= require('telegraf')
=======
const {Markup,Composer,Scenes, session}= require('telegraf')
>>>>>>> 2ca7119eb991769507b324f79bf51a32a4ff24eb
const startStep = new Composer()
startStep.on('text',async(ctx)=>{
    try{
       //ctx.wizard.state.data = {}
       //ctx.wizard.state.data.userName = ctx.message.from.username //имя пользователя
       //ctx.wizard.state.data.firstName = ctx.message.from.first_name //Имя
       //ctx.wizard.state.data.lastName = ctx.message.from.last_name //Фамилия
<<<<<<< HEAD
       await ctx.replyWithHTML("<b>Что вы ищете в жизни?</b>\n<i>Свободу,любовь,деньги</i>")
=======
       await ctx.replyWithHTML("<b>Вам выпал дом4 Мягкость и покладистось?</b>\n<i>Взвешенность и рассудительность</i>")
       //await ctx.reply("Хорошо ли иметь такой характер, как вы считаете?")
>>>>>>> 2ca7119eb991769507b324f79bf51a32a4ff24eb
       //return ctx.wizard.next()
    }catch(e){
        console.log(e)
    }
})

const home4Scene = new Scenes.WizardScene('home4Wizard',startStep)
module.exports = home4Scene