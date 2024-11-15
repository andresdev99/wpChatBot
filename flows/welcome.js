const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const { start } = require('./idle-custom');
const flowMajagua = require('./majagua');
const flowMosaico = require('./mosaico');
const flowOporto = require('./oporto');
const flowAltobelo = require('./altobelo');
const flowAmatista = require('./amatista');
const flowLisboa = require('./lisboa');
const flowNuevoMilenio = require('./nuevoMilenio');
const flowParaiso = require('./paraiso');

const flowWelcome = addKeyword(EVENTS.WELCOME)
    .addAction(async (ctx, { gotoFlow }) => {
        start(ctx, gotoFlow, 600000); //Inicia el temporizador al entrar en el flujo
    })
    .addAnswer('¡Hola! 👋 Bienvenido a este *Chatbot*. ¡Espero que estés teniendo un gran día! 😊')
    .addAnswer([
        'Para empezar, por favor elige la unidad a la que perteneces:',
        '*1.* MAJAGUA 🏠',
        '*2.* MOSAICO 🏠',
        '*3.* OPORTO 🏠',
        '*4.* ALTOBELO 🏠',
        '*5.* AMATISTA 🏠',
        '*6.* LISBOA 🏠',
        '*7.* NUEVO MILENIO 🏠',
        '*8.* PARAISO 🏠',
    ], { capture: true }, async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
        const option = ctx.body.trim();
        if (option === '1' || option === 'MAJAGUA') {
            return gotoFlow(flowMajagua);
        } else if (option === '2' || option === 'MOSAICO') {
            return gotoFlow(flowMosaico);
        }else if (option === '3' || option === 'OPORTO') {
            return gotoFlow(flowOporto);
        }else if (option === '4' || option === 'ALTOBELO') {
            return gotoFlow(flowAltobelo);
        } else if (option === '5' || option === 'AMATISTA') {
            return gotoFlow(flowAmatista);
        } else if (option === '6' || option === 'LISBOA') {
            return gotoFlow(flowLisboa);
        } else if (option === '7' || option === 'NUEVO MILENIO') {
            return gotoFlow(flowNuevoMilenio);
        } else if (option === '8' || option === 'PARAISO') {
            return gotoFlow(flowParaiso);
        }
        else {
            await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
            return fallBack();
        }
});

module.exports = flowWelcome;