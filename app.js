require('dotenv').config()

const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

//Flows import
const flowMajagua = require('./flows/flowMajagua')

const flowWelcome = addKeyword(EVENTS.WELCOME)
    .addAnswer('¡Hola! 👋 Bienvenido a este *Chatbot*. ¡Espero que estés teniendo un gran día! 😊')
    .addAnswer([
        'Para empezar, por favor elige la unidad a la que perteneces:',
        '*1.* MAJAGUA 🏠'
    ], { capture: true }, async (ctx, { gotoFlow, flowDynamic }) => {
        const option = ctx.body.trim();
        if (option === '1' || option === 'MAJAGUA') {
            return gotoFlow(flowMajagua.main);
        } else {
            await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
            return gotoFlow(flowWelcome);
        }
    });

const flowRestartFinish = addKeyword(['RESTART', 'FINISH'], { sensitive: true })
    .addAnswer('¿Necesitas ayuda con algo más? 🤔 Escribe "9" para volver al menú principal o "0" para terminar.', { capture: true }, async (ctx, { endFlow, gotoFlow, flowDynamic, fallBack }) => {
        const option = ctx.body.trim();

        switch (option) {
            case '0':
                await flowDynamic('¡Gracias por usar este bot! 🙌 Que tengas un excelente día. 🌟');
                return endFlow(); // Termina la conversación
            case '9':
                await flowDynamic('Volviendo al menú principal... 🔄');
                return gotoFlow(flowWelcome); // Vuelve al menú principal
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); // Vuelve a presentar las opciones
        }
    });

const flows = [
    flowWelcome,
    flowMajagua.main,
    flowRestartFinish
]

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow(flows)
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()

module.exports = {flowWelcome, flowRestartFinish}