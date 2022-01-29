const {Markup,Composer,Scenes}= require('telegraf')
const startStep = new Composer()
startStep.on('text',async(ctx)=>{
    try{
       /*ctx.wizard.state.data = {}
       ctx.wizard.state.data.userName = ctx.message.from.username //имя пользователя
       ctx.wizard.state.data.firstName = ctx.message.from.first_name //Имя
       ctx.wizard.state.data.lastName = ctx.message.from.last_name //Фамилия*/
       await ctx.replyWithHTML("<b>Что вы ищете в жизни?</b>\n<i>Свободу,любовь,деньги</i>")
    }catch(e){
        console.log(e)
    }
})
const home2Scene = new Scenes.WizardScene('home2Wizard',startStep)
module.exports = home2Scene