async function action_call(bot){
    bot.action("6480",async(ctx)=>{
        ctx.session.d6480 += 1
        ctx.session.price += 6900
        await ctx.deleteMessage()
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
                        callback_data: "apply"
                    }
    
                    ]
                ]
            }
        })
    })










    bot.action("3280",async(ctx)=>{
        ctx.session.d3280 += 1
        ctx.session.price += 3180
        await ctx.deleteMessage()
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
                        callback_data: "apply"
                    }
    
                    ]
                ]
            }
        })
    })



    bot.action("1980",async(ctx)=>{
        ctx.session.d1980 += 1
        ctx.session.price += 2210
        await ctx.deleteMessage()
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
                        callback_data: "apply"
                    }
    
                    ]
                ]
            }
        })
    })



    bot.action("980",async(ctx)=>{
        ctx.session.d980 += 1
        ctx.session.price += 1090
        await ctx.deleteMessage()
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
                        callback_data: "apply"
                    }
    
                    ]
                ]
            }
        })
    })



    bot.action("300",async(ctx)=>{
        ctx.session.d300 += 1
        ctx.session.price += 270
        await ctx.deleteMessage()
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
                        callback_data: "apply"
                    }
    
                    ]
                ]
            }
        })
    })




    bot.action("60",async(ctx)=>{
        ctx.session.d60 += 1
        ctx.session.price += 80
        await ctx.deleteMessage()
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
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
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d3280 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d1980 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d980 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d300 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d60 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
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
        await ctx.sendMessage(`ππππππππππ \n\nΠ§ΡΠΎ Π±Π΅ΡΡΠΌ? Π‘ΡΠΌΠΌΠ° ${ctx.session.price}Ρ.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: ctx.session.dluna === 0 ? "πΠΡΠ½Π°": `πΠΡΠ½Π° (${ctx.session.dluna})`,
                            callback_data: "dluna"
                        }
                    ],
                    [//`π 6480+1600 ( ${ctx.session.d6480} )`
                        {
                            text: ctx.session.d6480 === 0 ? "π 6480+1600": `π 6480+1600 (${ctx.session.d6480})`,
                            callback_data: "6480"
                        },
                        {
                            text: ctx.session.d6480 === 0 ? "π 3280+600": `π 3280+600 (${ctx.session.d3280})`,
                            callback_data: "3280"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d6480 === 0 ? "π 1980+260": `π 1980+260 (${ctx.session.d1980})`,
                            callback_data: "1980"
                        },
                        {
                            text: ctx.session.d6480 === 0 ? "π 980+110": `π 980+110 (${ctx.session.d980})`,
                            callback_data: "980"
                        }
                    ],
                    [
                        {
                            text: ctx.session.d6480 === 0 ? "π 300+30": `π 300+30 (${ctx.session.d300})`,
                            callback_data: "300"
                        },
                        {
                            text: ctx.session.d6480 === 0 ? "π 60": `π 60 (${ctx.session.d60})`,
                            callback_data: "60"
                        }
                    ],
                    [
                    {
                        text: "Π‘Π±ΡΠΎΡ",
                        callback_data: "return"
                    }
    
                    ],
                    [
                    {
                        text: "ΠΠΎΠ΄ΡΠ²Π΅ΡΠ΄ΠΈΡΡ",
                        callback_data: "apply"
                    }
    
                    ]
                ]
            }
        })
    })




}


module.exports = action_call