require('dotenv').config()

const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { delay } = require('@whiskeysockets/baileys')

// Variable para mantener el estado del flujo
let currentFlow = 'welcome';

const flowWelcome = addKeyword(EVENTS.WELCOME).addAnswer(
    'Hola bienvenido a este *Chatbot*, espero te encuentres muy bien🤗.')
    .addAnswer(
        [
            'Elige la unidad a la que perteneces:',
            '*1.* MAJAGUA'
        ],
    )

const flowMajagua = addKeyword(['1', '1.', 'MAJAGUA'])
    .addAnswer('*Bienvenido a la MAJAGUA*')
    .addAnswer('¿Qué Deseas hacer?')
    .addAnswer([
        '*1.* Estados de cuenta',
        '*2.* Solicitud de factura',
        '*3.* Reportar novedad de facturación',
        '*4.* Día de pago',
        '*5.* Soportes de meses anteriores',
        '*6.* Revisión estados de cuenta',
        '*7.* Enviar soporte de pago',
        '*8.* Medios de Pago de administración',
        '*9.* Volver al menú principal',
        '*0.* Terminar la conversación'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic('Acá puedes consultar tus estados de cuenta: https://www.phenlinea.info/');
                break;
            case '2':
                await flowDynamic('Acá puedes consultar tu solicitud de factura: https://www.phenlinea.info/');
                break;
            case '3':
                await flowDynamic('Acá puedes reportar novedad de facturación: https://form.jotform.com/urbanizacionlisboaph/reservasalonsocial');
                break;
            case '4':
                await flowDynamic('Si pagas después de la fecha de vencimiento de la factura, el pago se verá reflejado al siguiente mes. Consulta tu día de pago: https://www.phenlinea.info/');
                break;
            case '5':
                await flowDynamic('Soportes de meses anteriores: [link]');
                break;
            case '6':
                await flowDynamic('Revisión estados de cuenta: [link]');
                break;
            case '7':
                await flowDynamic('Enviar soporte de pago: [link]');
                break;
            case '8':
                await flowDynamic('Medios de Pago de administración: [link]');
                break;
            case '9':
                currentFlow = 'welcome'; // Cambia el estado del flujo a 'welcome'
                await flowDynamic('Volviendo al menú principal...');
                return flowWelcome; // Vuelve al menú principal
            case '0':
                await flowDynamic('Gracias por usar nuestro servicio. ¡Hasta luego!');
                return;
            default:
                await flowDynamic('Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); // Vuelve a presentar las opciones
        }

        // Después de cada acción, pregunta si el usuario necesita algo más
        await flowDynamic('¿Necesitas ayuda con algo más? Escribe "9" para volver al menú principal o "0" para terminar.');
        return gotoFlow(flowMajagua);
        // return endFlow({body: '¿Necesitas ayuda con algo más? Escribe "9" para volver al menú principal o "0" para terminar.'});
    })

const flows = [
    flowWelcome,
    flowMajagua
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
