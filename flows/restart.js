const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');

const flowRestartFinish = addKeyword(EVENTS.ACTION)
    .addAnswer('¿Necesitas ayuda con algo más? 🤔 Escribe "8" para volver al menú anterior, "9" para volver al menú principal o "0" para terminar.', { capture: true }, async (ctx, { endFlow, gotoFlow, flowDynamic, fallBack }) => {
        reset(ctx, gotoFlow, 600000);  //Reinicia el temporizador
        const option = ctx.body.trim();
        switch (option) {
            case '0':
                stop(ctx); //Detener el temporizador cuando el flujo termina
                await flowDynamic('¡Gracias por usar este bot! 🙌 Que tengas un excelente día. 🌟');
                return endFlow(); //Termina la conversación
            case '8':
                await flowDynamic('Volviendo al menú anterior... ⬅️');
                return gotoFlow(lastFlow); //Vuelve al menú anterior
            case '9':
                await flowDynamic('Volviendo al menú principal... 🔄');
                return gotoFlow(require('./welcome')); //Vuelve al menú principal
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
});

module.exports = flowRestartFinish;