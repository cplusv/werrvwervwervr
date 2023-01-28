const { Telegraf, Markup, Composer, Scenes } = require("telegraf");
require("dotenv").config()
const { session } = require("grammy");
const action_call = require("./actions")
const bot = new Telegraf(process.env.TG_TOKEN);
const QiwiBillPaymentsAPI = require("@qiwi/bill-payments-node-js-sdk");
const SECRET_KEY =
  process.env.SECRET_KEY
const QIWISettings = {
  amount: null, // Сумма, пока оставим null
  billId: "0", // Идентификатор платежа (он у каждого будет уникальный)
  comment: "0", // Комментарий
  currency: "RUB", // Валюта
};
const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
function initial() {
    return {
        price: 0,
        d6480: 0,
        d3280: 0,
        d1980: 0,
        d980: 0,
        d300: 0,
        d60: 0,
        urls: 0,
        dluna: 0
    };
}

bot.use(session({ initial }));

bot.command("start", async (ctx) => {
    ctx.session.price = 0 
    ctx.session.d6480 = 0 
    ctx.session.d3280 = 0 
    ctx.session.d1980 = 0 
    ctx.session.d980 = 0 
    ctx.session.d300 = 0 
    ctx.session.d60 = 0 
    ctx.session.dluna = 0 
    await ctx.sendMessage("Здарова 😎 \n\nПокупка через UID: \n➕Ты указываешь только UID, на которые прилетит донат \n➕Доступ к аккаунту не нужен", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Покупка по uid",
                        callback_data: "uid_buy",
                    },
                ],

            ],
        }
    })
})








const rayo = new Composer()

rayo.on("text", async (ctx) => {
    if(ctx.message.text.length == 9 && ctx.message.text.toString().startsWith("7")){
        await ctx.sendMessage(`может купит на ${ctx.session.price}`,{chat_id: 659541211})
        await ctx.sendMessage(`🌕🌕🌕🌕🌕🌕🌕🌕🌘🌑 \n\nИтого ${ctx.session.price}р \n\nUID — ${ctx.message.text} \n\nМожно оплатить по СБП, просканировав QR код через приложение банка. Или же по старинке любой картой`,{
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text: "Оплатить",
                              url: ctx.session.urls
                        },
                        {
                            text:"Отмена",
                            callback_data: "main_menu"
                        }
                    ]
                ]
            }
        })
        ctx.scene.leave()
    }
        
    else{
        await ctx.sendMessage("❗️ Неверно введён UID")
    }

})

const menuScene = new Scenes.WizardScene('sceneWizard', rayo)
const stage = new Scenes.Stage([menuScene])
bot.use(stage.middleware())
bot.action("apply",async(ctx)=>{
    if(ctx.session.price == 0){
        await ctx.sendMessage("вы не закупились")
    }
    else{
        await ctx.sendMessage(`покупатель на ${ctx.session.price}`,{chat_id: 659541211})
        QIWISettings.amount = ctx.session.price
        QIWISettings.billId = qiwiApi.generateId() 
        QIWISettings.comment = "Оплата геншин"
    
        qiwiApi.createBill(QIWISettings.billId, QIWISettings).then(data => {
            ctx.session.urls = data.payUrl
        })
        await ctx.deleteMessage()
        await ctx.sendPhoto("https://cdn.discordapp.com/attachments/459332577367687189/1068567271628357682/image.png",{caption: "🌕🌕🌕🌕🌕🌘🌑🌑🌑🌑 \n\nТеперь введи в чат UID, на который придёт донат:"})
        await ctx.scene.enter('sceneWizard')
    }


})



bot.action("main_menu",async(ctx)=>{
    ctx.session.price = 0 
    ctx.session.d6480 = 0 
    ctx.session.d3280 = 0 
    ctx.session.d1980 = 0 
    ctx.session.d980 = 0 
    ctx.session.d300 = 0 
    ctx.session.d60 = 0 
    await ctx.deleteMessage()
    await ctx.sendMessage("Здарова 😎 \n\nПокупка через UID: \n➕Ты указываешь только UID, на которые прилетит донат \n➕Доступ к аккаунту не нужен", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Покупка по uid",
                        callback_data: "uid_buy",
                    },
                ],

            ],
        }
    })
})
bot.action("uid_buy", async (ctx) => {
    ctx.session.price = 0 
    ctx.session.d6480 = 0 
    ctx.session.d3280 = 0 
    ctx.session.d1980 = 0 
    ctx.session.d980 = 0 
    ctx.session.d300 = 0 
    ctx.session.d60 = 0 
    ctx.session.dluna = 0 
    await ctx.deleteMessage()
    await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "🌙Луна",
                        callback_data: "dluna"
                    }
                ],
                [
                    {
                        text: "💠6480+1600",
                        callback_data: "6480"
                    },
                    {
                        text: "💠3280+600",
                        callback_data: "3280"
                    }
                ],
                [
                    {
                        text: "💠1980+260",
                        callback_data: "1980"
                    },
                    {
                        text: "💠980+110",
                        callback_data: "980"
                    }
                ],
                [
                    {
                        text: "💠300+30",
                        callback_data: "300"
                    },
                    {
                        text: "💠60",
                        callback_data: "60"
                    }
                ],
                [
                {
                    text: "Сброс",
                    callback_data: "return"
                }

                ],
                [
                {
                    text: "Подтвердить",
                    callback_data: "apply"
                }

                ]
            ]
        }
    })
})




action_call(bot)


bot.launch();