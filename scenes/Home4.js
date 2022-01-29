
const {Markup,Composer,Scenes}= require('telegraf')

const {Markup,Composer,Scenes, session}= require('telegraf')

const startStep = new Composer()
startStep.on('text',async(ctx)=>{
    try{
       //ctx.wizard.state.data = {}
       //ctx.wizard.state.data.userName = ctx.message.from.username //имя пользователя
       //ctx.wizard.state.data.firstName = ctx.message.from.first_name //Имя
       //ctx.wizard.state.data.lastName = ctx.message.from.last_name //Фамилия

       await ctx.replyWithHTML("<b>Что вы ищете в жизни?</b>\n<i>Свободу,любовь,деньги</i>")

       await ctx.replyWithHTML("<b>Вам выпал дом4 Мягкость и покладистось?</b>\n<i>Взвешенность и рассудительность</i>")
       //await ctx.reply("Хорошо ли иметь такой характер, как вы считаете?")

       //return ctx.wizard.next()
    }catch(e){
        console.log(e)
    }
})

const home4Scene = new Scenes.WizardScene('home4Wizard',startStep)
module.exports = home4Scene