const {Markup,Composer,Scenes,session}= require('telegraf')
const startStep = new Composer()
startStep.on('text',async(ctx)=>{
    try{
       //ctx.wizard.state.data = {}
       //ctx.wizard.state.data.userName = ctx.message.from.username //имя пользователя
       //ctx.wizard.state.data.firstName = ctx.message.from.first_name //Имя
       //ctx.wizard.state.data.lastName = ctx.message.from.last_name //Фамилия
       await ctx.replyWithHTML("<b>Вам выпал дом1?</b>\n<i>Значит вы цените свободу,</i>")
       await ctx.reply("Составте список своих желаний")
       return ctx.wizard.next()
    }catch(e){
        console.log(e)
    }
})

const home1Scene = new Scenes.WizardScene('home1Wizard',startStep)
module.exports = home1Scene