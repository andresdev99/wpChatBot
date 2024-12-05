const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');

const flowLisboa = addKeyword(['LISBOA'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de LISBOA! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        // '*Estados de Cuenta:* 📑',
        // '*1.* Consulta de estados de cuenta.',
        // '*2.* Reclamación de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        // '*3.* Solicitud de factura.',
        // '*4.* Reportar novedad de facturación.',
        '*4.* Día de pago.',
        '*5.* Soporte de meses anteriores.',
        '*6.* Revisión estados de cuenta.',
        '*7.* Enviar soporte de pago mes actual.',
        '*8.* Medios de pago administración.',
        '*9.* Medios de pago otros servicios.',


        '\nℹ️ *Información sobre ENDOSOS*',
        '*10.* Solicitar el endoso del seguro para su crédito hipotecario.', //ok
        '*11.* Póliza de seguro LISBOA PH.', //ok
        '*12.* Instructivo para solicitar el seguro.', //ok
        '*13.* Paz y salvo del seguro.', //ok

        '\n*Información General:* ℹ️',
        '*14.* Paz y salvo.', //ok
        '*15.* Información de mudanza.', //ok
        '*16.* Información Autorización de reformas en bienes privados.', //ok
        '*17.* Horarios de atención administrativa.', //ok
        '*18.* Horarios de zonas comunes.', //ok
        '*19.* Enviar Reglamento de Propiedad Horizontal.', //ok
        '*20.* Enviar Manual de Convivencia.', //ok
        '*21.* Diligenciamiento censo poblacional.', //ok
        '*22.* Radicar derechos de petición.', //ok
        '*23.* Reservar salón social.', //ok
        '*24.* PQRSF.', //ok
        '*25.* Reportar novedades locativas.', //ok
        '*26.* Contactar con un asesor.', //ok
        '*27.* Contacto porteria.', //ok
        '*28.* Contacto Consejo de Administración.', //ok

        '\n*Opciones de Navegación:* 🧭',
        '*29.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
//             case '1':
//                 await flowDynamic(`Consulta tus estados de cuenta aquí: https://www.phenlinea.info/ 📊

// Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtjToG-BGmGgxJq8A?e=1KjneI `);
//                 break;
            // case '2':
            //     await flowDynamic('Realiza la reclamación de tus estados de cuenta aquí: https://forms.gle/r2nrjaACALUCTuzH9 🕵️‍♂️');
            //     break;
//             case '3':
//                 await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/ 🧾

// Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
//                 break;
            case '4':
                await flowDynamic(`⏳ Si paga después de la fecha de vencimiento de la factura, el pago se verá reflejado al siguiente mes.`);
                    break;
            case '5':
                await flowDynamic(
                    `📧 Por favor enviar un correo a urbanizacionlisboaph@gmail.com, con el número de apartamento y el mes de pago que se efectuó.`);
                break;
            case '6':
                await flowDynamic(
                    `📧 Por favor enviar un correo a urbanizacionlisboaph@gmail.com, con el número de apartamento. Especificar la novedad de facturación para la debida corrección, si es el caso.`);
                break;
            case '7':
                await flowDynamic(
                    `📧 Por favor enviar un correo a urbanizacionlisboaph@gmail.com, con el número de apartamento y el día de pago que se efectuó.`);
                break;
            case '8':
                await flowDynamic(`💳 MEDIOS DE PAGO - CUOTAS DE ADMINISTRACIÓN

*1*.Pago en línea por PSE
Ingresa al siguiente link para realizar tu pago por PSE:
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00022252&origen=buscar 🖱️
Recuerda que, al ingresar en el buscador, debes poner “Lisboa Propiedad Horizontal Calle 72 Sur 35 240”. En la casilla de referencia, escribe el número de tu apartamento. 🏢

*2*.Pago en oficina bancaria - Banco AV Villas
Dirígete a cualquier sucursal del Banco AV Villas y realiza el depósito en la cuenta de ahorros 503175416. 📄
Referencia: Número de tu apartamento. 🏠

*3*.Pago en Efecty
También puedes pagar en Efecty utilizando el convenio 4801 y como referencia, el número de tu apartamento. 🟡🏢

*4*.Redeban Soluciones de Pago
Usa Redeban ingresando el código 6709 y colocando como referencia el número de tu apartamento. 🏦💳`);
                break;
            case '9':
                await flowDynamic(
                    `🏢 SALÓN SOCIAL - MEDIOS DE PAGO

*1*.Pago en línea por PSE
Ingresa al siguiente link para realizar el pago:
https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00022252&origen=buscar 🖱️
Al ingresar, busca “Lisboa Propiedad Horizontal Calle 72 Sur 35 240” y coloca el número de tu apartamento en la casilla de referencia. 🏢

*2*.Pago en oficina bancaria - Banco AV Villas
Dirígete a una sucursal de Banco AV Villas y realiza el depósito en la cuenta de ahorros 503175416. 📄
Referencia: Número de tu apartamento. 🏠

*3*.Pago en Efecty
Puedes pagar en Efecty utilizando el convenio 4801 y colocando como referencia el número de tu apartamento. 🟡🏢

*4*.Redeban Soluciones de Pago
También puedes usar Redeban con el código 6709 y como referencia el número de tu apartamento. 🏦💳`);
                break;
            case '10':
                await flowDynamic(
                    `📧 Solicite el endoso del seguro para su aquí: https://www.hemisferica.co/endosos`);
                break;
            case '11':
                await flowDynamic(
                    `🛡️ Póliza de seguro LISBOA PH: https://drive.google.com/file/d/1r9JBLctywZUjrG3keNcItz8S3knk8wo-/view?usp=drive_link`);
                break;
            case '12':
                await flowDynamic(
                    `📄 Instructivo para solicitar el seguro: https://drive.google.com/file/d/1YS0Lm-NOGcqW_jqv1K-ayW9YPw84mToB/view?usp=drive_link`);
                break;
            case '13':
                await flowDynamic(
                    `📄 Paz y Salvo del Seguro
Consulta el documento de paz y salvo del seguro en el siguiente enlace:
https://drive.google.com/file/d/1d3qEubL8c47Nx6F7E5RyElHVXkvAV8hN/view?usp=drive_link 📋`);
                break;
            case '14':
                await flowDynamic(
                    `📧 Solicitud de Paz y Salvo

Para solicitar tu Paz y Salvo, envía un correo a urbanizacionlisboaph@gmail.com con la siguiente información:

-📛 Nombre completo
-🚗 Número de celda de parqueadero
-📦 Número de cuarto útil
-🆔 Cédula
-💸 Soporte de pago del mes en curso
Importante: El Paz y Salvo será enviado 3 días hábiles después de recibir tu solicitud y verificar la información. ¡Gracias por tu colaboración! ✅`);
                break;
            case '15':
                await flowDynamic(
                    `📦 Protocolo para Movimiento de Mudanza

En el siguiente enlace, podrás ver los deberes y el protocolo que debes seguir para realizar una mudanza:
https://drive.google.com/file/d/1UZrHVTBgAjFhLsBnHbUJCsFLbGRy7Y-l/view?usp=sharing 📋

Una vez diligencies el formato, envíalo al correo de la copropiedad: urbanizacionlisboaph@gmail.com ✉️

¡Gracias por tu colaboración para asegurar una mudanza ordenada y respetuosa con los protocolos! ✅`);
                break;
            case '16':
                await flowDynamic(
                    `🏠 Información sobre Reformas y/o Adecuaciones en los Apartamentos

Consulta toda la información necesaria sobre reformas y adecuaciones en el siguiente enlace:
https://drive.google.com/file/d/1gWSlH0qT3MXEjUIvsaMtBMXeuDuZQUFc/view?usp=drive_link 📋

Asegúrate de revisar los detalles para cumplir con los requisitos y protocolos establecidos. ¡Gracias por tu colaboración! ✅`);
                break;
            case '17':
                await flowDynamic(
                    `🕒 Horario de Administración

Lunes, Miércoles y Viernes:
🕐 1:00 PM a 6:00 PM

Martes y Jueves:
🕘 9:00 AM a 5:00 PM`);
                break;
            case '18':
                await flowDynamic(
                    `🏋️‍♂️ HORARIO GIMNASIO
Lunes a Viernes: 🕕 6:00 AM a 11:30 AM y de 12:00 PM a 9:00 PM
Fines de Semana: 🕗 8:00 AM a 11:30 AM y de 12:00 PM a 6:00 PM

🏊‍♂️ HORARIO PISCINA
Martes y Jueves: 🕚 11:00 AM a 6:50 PM
Miércoles y Viernes: 🕗 8:00 AM a 3:50 PM
Fines de Semana: 🕘 9:00 AM a 4:50 PM
Lunes de Mantenimiento 🛠️
Nota: Los lunes se realiza la limpieza profunda de la piscina. Si es festivo, la limpieza se traslada al martes.

🌡️ HORARIO TURCO
Martes y Jueves: 🕚 11:00 AM a 8:00 PM
Miércoles y Viernes: 🕗 8:00 AM a 8:00 PM
Fines de Semana: 🕘 9:00 AM a 8:00 PM
Nota: El uso del turco es por períodos de una hora máximo.

🎉 HORARIO SALÓN SOCIAL
Domingo a Viernes: 🕘 9:00 AM a 10:00 PM
Sábados: 🕘 9:00 AM a 11:59 PM
Domingo a Festivo: 🕘 9:00 AM a 11:59 PM

⚽ HORARIO CANCHA
Lunes a Domingo (Incluye festivos): 🕖 7:00 AM a 10:00 PM

🛝 HORARIO PARQUE INFANTIL
Lunes a Domingo (Incluye festivos): 🕗 8:00 AM a 10:00 PM`);
                break;
            case '19':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/file/d/10_fmp-lYAvvbYmUflfHI7AzSh1au-C_I/view?usp=drive_link 📘');
                break;
            case '20':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1kjSc5AjS1cUmMzX3mJB-6PuHwkPJhunW/view?usp=drive_link 📘')
                break;
            case '21':
                await flowDynamic('Diligencia el censo poblacional aquí: https://forms.gle/d2gUnnbU2F62Pxmk6 📝');
                break;
            case '22':
                await flowDynamic(`📧 Por favor enviar el derecho de petición al siguiente correo urbanizacionlisboaph@gmail.com`);
                break;
            case '23':
                await flowDynamic(
                    `🏢 RESERVA Y COSTO DEL SALÓN SOCIAL

• Reserva el salón social en el siguiente enlace: https://form.jotform.com/urbanizacionlisboaph/reservasalonsocial 📋
• Costo de alquiler: $120,000 COP, a consignar en la cuenta de la copropiedad al menos una semana antes del evento.
• Depósito de seguridad: El día del evento, se debe entregar un depósito de $200,000 COP en efectivo en portería, en caso de cualquier novedad.
• Equipamiento del salón: 45 sillas, 3 mesas rectangulares, 3 mesas cuadradas, cocineta, nevera y dotación de baños. 🪑🍽️
• Recuerda enviar el soporte de pago al correo electrónico de la administración. ✉️

ENTREGA DEL SALÓN SOCIAL
• Disponibilidad el día del evento: A partir de las 🕘 9:00 AM

• Horario de cierre:
Domingo a Viernes: Hasta las 🕙 10:00 PM
Sábado: Hasta las 🕛 11:59 PM

Nota: Los domingos, el horario se extiende hasta las 11:59 PM cuando el lunes es festivo.

Condiciones:
• El apartamento solicitante debe estar al día en las cuotas de administración para hacer uso del salón social. ✅
• El salón se entrega limpio y debe devolverse en las mismas condiciones. 🧹`);
                break;
            case '24':
                await flowDynamic(`📧 Por favor enviar un correo a urbanizacionlisboaph@gmail.com, con el número de apartamento, la situación presentada en la copropiedad y la evidencia de dicho suceso.`);
                break;
            case '25':
                await flowDynamic('📧 Por favor enviar un correo a urbanizacionlisboaph@gmail.com, con el número de apartamento, la novedad vista por su parte y la evidencia de dicho daño.');
                break;
            case '26':
                await flowDynamic('Te puedes contactar al número: 300 811 34 47  - Marco Salazar administrador delegado📞');
                break;
            case '27':
                await flowDynamic('Te puedes contactar al número: 6045671790 📞');
                break;
            case '28':
                await flowDynamic(`Contacto Consejo de Administración
📧 Correo: consejoadmonlisboa@gmail.com`);
                break;
            case '29':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        lastFlow = flowLisboa;
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowLisboa;