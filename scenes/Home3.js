<<<<<<< HEAD
const {Markup,Composer,Scenes}= require('telegraf')
=======
const {Markup,Composer,Scenes,session}= require('telegraf')
>>>>>>> 2ca7119eb991769507b324f79bf51a32a4ff24eb
const startStep = new Composer()
startStep.on('text',async(ctx)=>{
    try{
       /*ctx.wizard.state.data = {}
       ctx.wizard.state.data.userName = ctx.message.from.username //имя пользователя
       ctx.wizard.state.data.firstName = ctx.message.from.first_name //Имя
       ctx.wizard.state.data.lastName = ctx.message.from.last_name //Фамилия*/
<<<<<<< HEAD
       await ctx.replyWithHTML("<b>Что вы ищете в жизни?</b>\n<i>Свободу,любовь,деньги</i>")
=======
       await ctx.replyWithHTML("<b>Вам выпал дом3.дом побед и стремлений?</b>\n<i>Вы  карьерист</i>")
       //await ctx.reply("Как далеко вы можете зайти?")
>>>>>>> 2ca7119eb991769507b324f79bf51a32a4ff24eb
    }catch(e){
        console.log(e)
    }
})
const home3Scene = new Scenes.WizardScene('home3Wizard',startStep)
module.exports = home3Scene