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
       await ctx.replyWithHTML("<b>Вам выпал дом счастья?</b>\n<i>вы цените отношение к себе</i>")
       //sawait ctx.reply("как вы думаете почему?")
>>>>>>> 2ca7119eb991769507b324f79bf51a32a4ff24eb
    }catch(e){
        console.log(e)
    }
})
const home2Scene = new Scenes.WizardScene('home2Wizard',startStep)
module.exports = home2Scene