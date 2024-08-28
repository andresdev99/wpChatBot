require('dotenv').config()

const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { delay } = require('@whiskeysockets/baileys')
const { capture } = require('paypal-rest-sdk')

const flowWelcome = addKeyword(EVENTS.WELCOME)
    .addAnswer('Hola bienvenido a este *Chatbot*, espero te encuentres muy bien🤗.')
    .addAnswer([
        'Elige la unidad a la que perteneces:',
        '*1.* MAJAGUA'
    ], { capture: true }, async (ctx, { gotoFlow, flowDynamic }) => {
        const option = ctx.body.trim();
        if (option === '1' || option === 'MAJAGUA') {
            return gotoFlow(flowMajagua);
        } else {
            await flowDynamic('Opción no válida. Por favor, elige una opción válida.');
            return gotoFlow(flowWelcome);
        }
    });

const flowRestartFinish = addKeyword(['0', '0.', '9', '9.'])
    .addAnswer('¿Necesitas ayuda con algo más? Escribe "9" para volver al menú principal o "0" para terminar.', { capture: true }, async (ctx, { endFlow, gotoFlow, flowDynamic, fallBack }) => {
        const option = ctx.body.trim();

        switch (option) {
            case '0':
                await flowDynamic('Gracias por usar este bot, ¡Hasta pronto!');
                return endFlow(); // Termina la conversación
            case '9':
                await flowDynamic('Volviendo al menú principal...');
                return gotoFlow(flowWelcome); // Vuelve al menú principal
            default:
                await flowDynamic('Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); // Vuelve a presentar las opciones
        }
    })

const flowMajagua = addKeyword(['1', '1.', 'MAJAGUA'])
    .addAnswer('*Bienvenido a la MAJAGUA*')
    .addAnswer('¿Qué Deseas hacer?')
    .addAnswer([
        '*1.* Estados de cuenta',
        '*2.* Solicitud de factura',
        '*3.* Reportar novedad de facturación',
        '*4.* Soporte de pago',
        '*5.* Soportes de meses anteriores',
        '*6.* Revisión estados de cuenta',
        '*7.* Enviar soporte de pago',
        '*8.* Medios de Pago de administración',
        '*9.* Medios de Pago otros servicios',
        '*15.* Volver al menú principal',
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
                //https://form.jotform.com/urbanizacionlisboaph/reservasalonsocial
                await flowDynamic('Acá puedes reportar novedad de facturación: https://forms.gle/aGgFjHptEMPYWcGS9');
                break;
            case '4':
                await flowDynamic('Puedes solicitar tu soporte de pago Aqui: https://forms.gle/VfjMwbUJBC9FZdob8');
                break;
            case '5':
                await flowDynamic('Soportes de meses anteriores: https://forms.gle/XuKYRaR2ayHmeebw6');
                break;
            case '6':
                await flowDynamic('Revisión estados de cuenta: https://forms.gle/bp4y3q85n54aWMu4A');
                break;
            case '7':
                await flowDynamic('Enviar soporte de pago: [link]'); //TODO: Se puede cambiar por otra
                break;
            case '8':
                await flowDynamic(`MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN\n1.	Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Unidad Residencial Majagua”\nhttps://www.avalpaycenter.com/wps/portal/portal-de-pagos\n\n2.	Directamente en oficina bancario BANCO AV VILLAS cuenta corriente\n512171356 referencia número del apartamento.\n
                \n3.	Convenio Efecty 10691 referencia número del apartamento`);
                break;
            case '9':
                await flowDynamic(`*MEDIOS DE PAGO OTROS SERVICIOS*\n
MEDIOS DE PAGO PARA CHIP VEHICULAR\n
* Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Unidad Residencial Majagua” EN LA CASILLA APARTAMENTO INGRESAR EL CODIGO 002
https://www.avalpaycenter.com/wps/portal/portal-de-pagos\n\n
* Directamente en oficina bancario BANCO AV VILLAS cuenta corriente\n
512171356 referencia CODIGO 002\n\n
* Convenio Efecty 10691 referencia CODIGO 002\n\n
*MEDIOS DE PAGO PARA SALON SOCIAL*\n
* Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner “Unidad Residencial Majagua” EN LA CASILLA APARTAMENTO INGRESAR EL CODIGO 001
https://www.avalpaycenter.com/wps/portal/portal-de-pagos\n\n
* Directamente en oficina bancario BANCO AV VILLAS cuenta corriente\n
512171356 referencia CODIGO 001\n\n
* Convenio Efecty 10691 referencia CODIGO 001
`);
                break;
            case '15':
                return gotoFlow(flowWelcome); // Redirige al flujo de reinicio
            case '0':
                await flowDynamic('Gracias por usar nuestro servicio. ¡Hasta luego!');
                return endFlow(); // Termina la conversación
            default:
                await flowDynamic('Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); // Vuelve a presentar las opciones
        }
        // Después de cada acción, redirige al flujo de reinicio
        return gotoFlow(flowRestartFinish);
    });

const flows = [
    flowWelcome,
    flowMajagua,
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
