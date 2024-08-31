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
    .addAnswer('¿Qué deseas hacer?')
    .addAnswer([
        '*Estados de Cuenta:*',
        '*1.* Estados de cuenta.',
        '*2.* Revisión estados de cuenta.',

        '\n*Facturación y Pagos:*',
        '*3.* Solicitud de factura.',
        '*4.* Reportar novedad de facturación.',
        '*5.* Enviar Soporte de pago.',
        '*6.* Enviar Soportes de meses anteriores.',
        '*7.* Día de pago.',
        '*8.* Medios de Pago de administración.',
        '*9.* Medios de Pago otros servicios.',

        '\n*Información General:*',
        '*10.* Paz y salvo.',
        '*11.* Horarios zonas comunes.',
        '*12.* Horarios atención administración.',
        '*13.* Enviar RPH-Manual de Convivencia.',
        '*14.* Diligenciamiento censo poblacional.',
        '*15.* Radicar derechos de petición.',
        '*16.* Reservas salón social.',
        '*17.* PQRSF.',
        '*18.* Reporte novedades (locativas).',
        '*19.* Comunicarse con un asesor.',

        '\n*Opciones de Navegación:*',
        '*20.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic('Consulta tus estados de cuenta aquí: https://www.phenlinea.info/');
                break;
            case '2':
                await flowDynamic('Revisa tus estados de cuenta aquí: https://forms.gle/bp4y3q85n54aWMu4A');
                break;
            case '3':
                await flowDynamic('Solicita tu factura aquí: https://www.phenlinea.info/');
                break;
            case '4':
                //https://form.jotform.com/urbanizacionlisboaph/reservasalonsocial
                await flowDynamic('Reporta una novedad de facturación aquí: https://forms.gle/aGgFjHptEMPYWcGS9');
                break;
            case '5':
                await flowDynamic('Envía tu soporte de pago aquí: https://forms.gle/VfjMwbUJBC9FZdob8');
                break;
            case '6':
                await flowDynamic('Envía tus soportes de meses anteriores aquí: https://forms.gle/XuKYRaR2ayHmeebw6');
                break;
            case '7':
                await flowDynamic('El plazo maxímo para pagar es el *último día el mes hábil.*'); 
                break;
            case '8':
                await flowDynamic(
`*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN*

1. Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“Unidad Residencial Majagua”*
    https://www.avalpaycenter.com/wps/portal/portal-de-pagos

2. Directamente en oficina bancario *BANCO AV VILLAS* cuenta corriente *512171356* referencia número del apartamento.

3. Convenio Efecty *10691* referencia número del apartamento`
                );
                break;
            case '9':
                await flowDynamic(
`*MEDIOS DE PAGO OTROS SERVICIOS*

*MEDIOS DE PAGO PARA CHIP VEHICULAR*
* Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“Unidad Residencial Majagua”* EN LA CASILLA APARTAMENTO INGRESAR EL *CODIGO 002*
        https://www.avalpaycenter.com/wps/portal/portal-de-pagos
* Directamente en oficina bancario *BANCO AV VILLAS* cuenta corriente *512171356* referencia *CODIGO 002*
* Convenio Efecty *10691* referencia *CODIGO 002*

*MEDIOS DE PAGO PARA SALON SOCIAL*
* Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“Unidad Residencial Majagua”* EN LA CASILLA APARTAMENTO INGRESAR EL *CODIGO 001*
        https://www.avalpaycenter.com/wps/portal/portal-de-pagos
* Directamente en oficina bancario *BANCO AV VILLAS* cuenta corriente *512171356* referencia *CODIGO 001*
* Convenio Efecty *10691* referencia *CODIGO 001*
`);
                break;
            case '10':
                await flowDynamic('Envía los soportes de pago de los 2 últimos meses al correo majaguaph@gmail.com para generar el paz y salvo.');
                break;
            case '11':
                await flowDynamic(
`*HORARIO GIMNASIO*
Lunes, miércoles, viernes y domingo
5:00am a 10:00pm
Martes, jueves y sábado 
5:00am a 9:40 am y 10:40am a 10:00pm

*HORARIO PISCINA*
Martes, jueves, sábado, domingo y lunes (si es festivo)
10:00am a 5:00pm
Miércoles y viernes
1:00pm a 8:00pm
**NOTA:** Los días lunes se realiza la limpieza profunda de la piscina, si el lunes es festivo esta limpieza para a realizarse los días martes.

*HORARIO SALON SOCIAL*
Domingo a viernes
10:00am a 11:00pm
Sábados y domingo (si el lunes es festivo)
10:00am a 12:00m`);
                break;
            case '12': //TODO PREGUNTAR HORA DEL MARTES Y VIERNES
                await flowDynamic(
`*HORARIO ADMINISTRACIÓN*

*LUNES Y MIÉRCOLES*
8:00AM A 1:00PM 2:00PM A 3:00PM

*MARTES Y VIERNES*
10:00AM 1:00PM A 5:00PM

*JUEVES*
3:00PM A 8:00PM

*SABADO (1 cada 15 días)*
8:00AM A 12AM`
                );
                break;
            case '13':
                await flowDynamic('Consulta el RPH-Manual de Convivencia aquí: https://drive.google.com/drive/folders/1-ACT6WQ7fSWBmSjnrp1Ri6mNu4Yv9cWW');
                break;
            case '14':
                await flowDynamic('Diligencia el censo poblacional aquí:: https://drive.google.com/drive/folders/1ckvVak9NuU83vK_-RWfHRYzPKD-C7XpM');
                break;
            case '15':
                await flowDynamic('Radica tu derecho de petición aquí: https://docs.google.com/forms/d/e/1FAIpQLScTluPMs-yhv5HRfWmCOzm2qVC7PTqRmw2mupFEuDxZkPBjDw/viewform');
                break;
            case '16':
                await flowDynamic(
`*RESERVA Y COSTO DEL SALÓN SOCIAL*
* Según la disponibilidad en la fecha que se requiera, se debe pagar el valor de $30.000, según la información de pago.
* Pago de depósito en efectivo en la oficina por valor de $70.000.
* Los pagos se deben realizar a más tardar 3 días antes del evento; de no ser así, se perderá la reserva.

*ENTREGA*
* Se entrega el mismo día del evento a las 10:00 a.m. en la portería, inventariado.
* Se devuelve el salón al día siguiente a las 9:00 a.m. totalmente limpio y aseado.
* Si desea que el personal del aseo realice el aseo por usted, por favor informe con tiempo. Este aseo tiene un costo de $40.000, los cuales se sacan del depósito y se devuelve el resto.`
                );
                break;
            case '17':
                await flowDynamic('PQRS: https://docs.google.com/forms/d/e/1FAIpQLScOKQidh8PqPccCaJRmWywQjhuEkDGuN8jpl1v2gteFIoJrGA/viewform');
                break;
            case '18':
                await flowDynamic('Reporte de novedades locativas: https://docs.google.com/forms/d/e/1FAIpQLSdbJOKik7IISldFaOjUfWFHWRkI8-VtZOh5oFSHvo1iWKVuFQ/viewform');
                break;
            case '19':
                await flowDynamic('Te puedes contactar al número: 302 395 4343.');
                break;
            case '20':
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
