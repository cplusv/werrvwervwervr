async function action_call(bot){
    bot.action("6480",async(ctx)=>{
        ctx.session.d6480 += 1
        ctx.session.price += 7450
        await ctx.deleteMessage()
        await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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










    bot.action("3280",async(ctx)=>{
        ctx.session.d3280 += 1
        ctx.session.price += 3720
        await ctx.deleteMessage()
        await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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



    bot.action("1980",async(ctx)=>{
        ctx.session.d1980 += 1
        ctx.session.price += 2515
        await ctx.deleteMessage()
        await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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



    bot.action("980",async(ctx)=>{
        ctx.session.d980 += 1
        ctx.session.price += 1179
        await ctx.deleteMessage()
        await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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



    bot.action("300",async(ctx)=>{
        ctx.session.d300 += 1
        ctx.session.price += 387
        await ctx.deleteMessage()
        await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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




    bot.action("60",async(ctx)=>{
        ctx.session.d60 += 1
        ctx.session.price += 81
        await ctx.deleteMessage()
        await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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

    

    bot.action("dluna",async(ctx)=>{
        ctx.session.dluna += 1
        ctx.session.price += 270
        await ctx.deleteMessage()
        await ctx.sendMessage(`🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑 \n\nЧто берём? Сумма ${ctx.session.price}р.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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

    bot.action("return",async(ctx)=>{
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
                            text: ctx.session.dluna === 0 ? "🌙Луна": `🌙Луна (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`💠6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "💠6480+1600": `💠6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d6480 === 0 ? "💠3280+600": `💠3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d6480 === 0 ? "💠1980+260": `💠1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d6480 === 0 ? "💠980+110": `💠980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d6480 === 0 ? "💠300+30": `💠300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d6480 === 0 ? "💠60": `💠60 (${ctx.session.d60})`,
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




}


module.exports = action_call