const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');


const flowParaiso = addKeyword(['PARAISO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de PARAISO! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta de estados de cuenta.',
        '*2.* Reclamación de estados de cuenta.',

        '\n*Facturación y Pagos:* 💳',
        '*3.* Solicitud de factura.',
        '*4.* Reportar novedad de facturación.',
        '*5.* Medios de pago de administración.',
        '*6.* Medios de pago de otros servicios.',
        '*7.* Enviar soporte de pago.',
        '*8.* Fecha límite de pago.',

        '\n*Información General:* ℹ️',
        '*9*. Paz y salvo.',
        '*10*. Información de mudanza.',
        '*11*. Información de endosos',
        '*12*. Horarios de atención administrativa.',
        '*13*. Horarios de zonas comunes.',
        '*14*. Enviar Reglamento de Propiedad Horizontal.',
        '*15*. Enviar Manual de Convivencia.',
        '*16*. Diligenciamiento censo poblacional.',
        '*17*. Radicar derechos de petición.',
        '*18*. Reservar salón social.',
        '*19*. Reservar BBQ.',
        '*20*. Reservar canchas.',
        '*21*. Reservar piscina.',
        '*22*. PQRSF.',
        '*23*. Reportar novedades locativas.',
        '*24*. Contactar con un asesor.',
        '*25*. Comunícate con portería.',
        '*26*. Retiro de escombros.',

        '\n*Opciones de Navegación:* 🧭',
        '*27.* Volver al menú principal.',
        '*0.* Terminar la conversación.'
    ], { capture: true }, async (ctx, { flowDynamic, fallBack, endFlow, gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
        const option = ctx.body.trim();
        switch (option) {
            case '1':
                await flowDynamic(`Consulta tus estados de cuenta aquí: https://www.phenlinea.info/ 📊

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtjToG-BGmGgxJq8A?e=1KjneI `);
                break;
            case '2':
                await flowDynamic(`Realiza la reclamación envíando un correo a 📧 puertoparaisoph1@gmail.com con el número de tu apartamento. 🏠`);
                break;
            case '3':
                await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/🧾

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
                break;
            case '4':
                await flowDynamic(`Para reportar novedad de facturación, por favor, envía un correo a 📧 puertoparaisoph1@gmail.com con el número de tu apartamento 🏠 y asegúrate de especificar la novedad`);
                break;
            case '5':
                await flowDynamic(
                    `*MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN* 💰

1. Link para realizar pago por PSE, recuerda que al ingresar en el buscador debes poner *“ CONJUNTO RESIDENCIAL PUERTO PARAISO PH TV 38 A 57 10 BELLO”* y, en la casilla de referencia, debes escribir el *Número del Apartamento*. Ingresa aquí para realizar el pago: https://web-conjuntos.jelpit.com/zona-publica-pagos?utm_source=jelpit&utm_medium=header&utm_campaign=boton_flotante

2. Directamente en oficina bancaria *DAVIVIENDA*, cuenta de ahorro *038300062908 * referencia número del apartamento Nit: 901.543434-5 Puerto Paraíso.

*❗NOTA:* Si no se hace el pago por estos medios, deberá enviar los soportes de pago a través del correo 📧 puertoparaisoph1@gmail.com con el fin de verificarse el recibido.`);
                break;
            case '6':
                await flowDynamic(`*MEDIOS DE PAGO OTROS SERVICIOS* 💳

*FICHOS PARA PISCINA*
1. *Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“CONJUNTO RESIDENCIAL PUERTO PARAISO PH TV 38 A 57 10 BELLO”* y, en la casilla de referencia ingresar el número del *apartamento*. Ingresa aquí para realizar el pago: https://web-conjuntos.jelpit.com/zona-publica-pagos?utm_source=jelpit&utm_medium=header&utm_campaign=boton_flotante

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en * BANCO DAVIVIENDA * en la cuenta de ahorros *038300062908 Asegúrate de colocar el número del *apartamento* como referencia, Nit: 901.543434-5 Puerto Paraíso.

*SALÓN SOCIAL* 🎉
1. *Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“CONJUNTO RESIDENCIAL PUERTO PARAISO PH TV 38 A 57 10 BELLO”* y, en la casilla de referencia ingresar el número del *apartamento*. Ingresa aquí para realizar el pago: https://web-conjuntos.jelpit.com/zona-publica-pagos?utm_source=jelpit&utm_medium=header&utm_campaign=boton_flotante

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en * BANCO DAVIVIENDA * en la cuenta de ahorros *038300062908 *. Asegúrate de colocar el número del *apartamento* como referencia, Nit: 901.543434-5 Puerto Paraíso.

*BBQ * 🎉
1. **Link para pago por PSE* 💳: Recuerda que, al ingresar en el buscador, debes poner *“CONJUNTO RESIDENCIAL PUERTO PARAISO PH TV 38 A 57 10 BELLO”* y, en la casilla de referencia ingresar el número del *apartamento*. Ingresa aquí para realizar el pago: https://web-conjuntos.jelpit.com/zona-publica-pagos?utm_source=jelpit&utm_medium=header&utm_campaign=boton_flotante

2. Pago en Oficina Bancaria 🏦: Puedes hacerlo directamente en *BANCO AV VILLAS* en la cuenta de ahorros * BANCO DAVIVIENDA *. Asegúrate de colocar el número del *apartamento* como referencia, Nit: 901.543434-5 Puerto Paraíso.`);
                break;
            case '7':
                await flowDynamic('Envía tu soporte al correo 📧 puertoparaisoph1@gmail.com con el número de tu apartamento 🏠 ');
                break;
            case '8':
                await flowDynamic(`Si el pago de la factura se realiza después de la fecha de vencimiento, se reflejará en el próximo mes 📆. Para evitar retrasos, el pago debe efectuarse a más tardar el último día hábil del mes, antes de las *12:00 p.m.* 🕛. `);
                break;
            case '9':
                await flowDynamic(`*PAZ Y SALVO*
Para solicitar el Paz y Salvo, deben enviar un correo a *puertoparaisoph1@gmail.com* con la siguiente información:

📌 *Datos requeridos*:
        *	🧑‍💼 Nombre completo del propietario
        *	🚗 Número de celda de parqueadero
        *	📦 Número de cuarto útil
        *	🆔 Cédula
        *	💳 Soporte de pago del mes en curso
        *	Certificado de libertad y tradición

⚠️ *Importante:* El Paz y Salvo será remitido dentro de un plazo de *3 días hábiles* después de realizada la solicitud.`);
                break;
            case '10':
                await flowDynamic(`🚛 *INFORMACIÓN DE MUDANZAS*
1.	*Solicitud de Mudanza* 📝
Debes solicitar la mudanza con *2 días hábiles de anticipación*, enviando un correo a *puertoparaisoph1@gmail.com*.

2.	*Autorización de Ingreso o Salida* 📜
Si eres inquilino, solicita a la agencia inmobiliaria o al propietario la *carta de autorización* para la mudanza.

3.	*Depósito Reembolsable* 💵
Realizar un *depósito en efectivo de $100,000* directamente en la administración. Este monto es reembolsable.

4.	*Estar al Día con la Administración* ✅
Es necesario estar al día en los pagos con la administración.

5.	*Horarios Permitidos para la Mudanza* 🕗
    * *Lunes a viernes*: 8:00 a.m. a 5:00 p.m.
    * *Sábados*: 8:00 a.m. a 5:00 p.m.
    * *Domingos y festivos*: ❌ NO PERMITIDO

⚠️ *Importante*: El recibo del depósito es *OBLIGATORIO* para poder reclamar el dinero al finalizar la mudanza.`);
                break;
            case '11':
                await flowDynamic(`*ENDOSO DE SEGURO*

Para realizar el endoso de su seguro relacionado con su crédito hipotecario, por favor siga estos pasos:

1.	*Descargue la Circular Informativa* 📄
Puede acceder al documento a través del siguiente enlace: https://drive.google.com/file/d/10xoO49D68t6SdpMIbiunETCIRNYvC3VN/view?usp=drive_link

2.	*Envío de Solicitud* 📧
Envíe un correo electrónico a endosos@hemisferia.co solicitando el endoso de su seguro.`);
                break;
            case '12':
                await flowDynamic(`*HORARIOS DE ATENCIÓN ADMINISTRATIVA* 🕒

*Lunes, Martes, Miercoles y Viernes:* ⏰ 8:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 5:00 p.m.
*Jueves:* ⏰ 12:00 p.m. a 8:00 p.m.
*Sábados:* ⏰ 8:00 a.m. a 12:00 p.m.`);
                break;
            case '13':
                await flowDynamic(`*HORARIOS ZONAS COMUNES* 🏋️
🏋️‍♂️ *GIMNASIO*
*Lunes a viernes y domingo*: ⏰ 4:00 a.m. a 12:00 p.m. y 1:00 p.m. a 10:00 p.m.

🏊 *PISCINAS*
    * *Lunes*: Mantenimiento 🔧
    * *Martes a viernes*: ⏰ 10:00 a.m. a 1:00 p.m. y 2:00 p.m. a 8:00 p.m.
    * *Fines de semana y festivos*: ⏰10:00 a.m. a 12:00 p.m. y 2:00 p.m. a 8:00 p.m.

*Nota*❗: La limpieza profunda de la piscina se realiza los lunes. Si el lunes es festivo, esta limpieza se realizará el martes.

💦 *JACUZZI*
    * *Lunes*: Mantenimiento 🔧
    * *Martes a domingo y festivos*: ⏰11:30 a.m. a 1:00 p.m. y 5:00 p.m. a 7:30 p.m.

🌫️ *TURCO*
    * *Lunes*: Mantenimiento 🔧
    * *Martes a domingo y festivos*: ⏰10:30 a.m. a 12:00 p.m.
2:00 p.m. a 3:00 p.m. y 6:00 p.m. a 7:30 p.m.

⚽ *CANCHAS*
    * *Lunes a viernes y domingo*: ⏰9:00 a.m. a 8:00 p.m.

🥂 *SALÓN SOCIAL*
    * *Lunes a viernes y domingo*: 9:00 a.m. a 10:00 p.m.
    * *Sábados*: 9:00 a.m. a 12:00 p.m.

❗❗*Excepción*: Si el lunes es festivo, el domingo el salón social se puede utilizar hasta las 12:00 a.m.`)
                break;
            case '14':
                await flowDynamic(`'Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/file/d/1vlQbu-ZiwKm9YSbHxcuUCeYsGY6ds8_V/view?usp=drive_link📘`)
                break;
            case '15':
                await flowDynamic(`Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1J5lVpHc5G8lvOhfDYTicTDJtYGn_f2DU/view?usp=drive_link 📘`);
                break;
            case '16':
                await flowDynamic(`Diligencia el censo poblacional aquí: https://drive.google.com/file/d/1gs5r40OHLwG2MprEeyx4PTyeA0afC6VX/view?usp=drive_link📝`)
                break;
            case '17':
                await flowDynamic('Radica tu derecho de petición en el siguiente correo: puertoparaisoph1@gmail.com📧');
                break;
            case '18':
                await flowDynamic(`*RESERVA Y COSTO DEL SALÓN SOCIAL* 🎉

💲 *Costo y Pago*
    * *Costo del alquiler*: $90,000 (no reembolsables).
    * El pago debe realizarse a través de www.jelpit.com.
    * También puedes pagar a la cuenta ahorros *Davivienda* : *0383000062908 Puerto Paraíso NIT 901.453.434-5*.

📤 *Importante*: El soporte del pago debe enviarse a la administración para confirmar la reserva. Si no se envía, la reserva será cancelada y el espacio podrá ser utilizado por otra persona.

💵 *Depósito*
    * *Monto*: $100,000 (efectivo, reembolsable).
    * Debe entregarse *mínimo 3 días antes* de la reserva en la administración, durante los horarios de atención:
    * *Lunes a miércoles*: 8:00 a.m. - 1:00 p.m. y 2:00 p.m. - 5:00 p.m.
    * *Jueves*: 12:00 p.m. - 8:00 p.m.
    * *Viernes*: 8:00 a.m. - 1:00 p.m. y 2:00 p.m. - 5:00 p.m.

⚠️ Nota: El recibo del depósito es OBLIGATORIO para reclamar el dinero.

⏰ *Horario del Salón*
    * *Lunes a viernes y domingo*: 9:00 a.m. - 10:00 p.m.
    * *Sábados*: 9:00 a.m. - 12:00 p.m.

🪑 *Capacidad e Instalaciones*
    * *Mesas*: 8
    * *Sillas*: 40
    * *Aforo*: 40 a 50 personas aprox.

🧹 *Entrega de Instalaciones*
    * El salón debe ser entregado *limpio* al personal de vigilancia al finalizar el evento.
    * *Entrega formal*: Al día siguiente, antes de las *8:00 a.m*.

🚪 *Lista de Invitados*: Deja la lista de invitados en portería un día antes de la reserva, incluyendo las placas de los vehículos para su ingreso.`)
                break;
            case '19':
                await flowDynamic(`*RESERVA Y COSTO DEL BBQ* 🔥
💲 *Costo y Pago*
    * *Costo del alquiler*: $60,000 (no reembolsables).
    * El pago debe realizarse a través de www.jelpit.com.
    * También puedes pagar a la cuenta ahorros *Davivienda*: *0383000062908 Puerto Paraíso NIT 901.453.434-5*.
    *
📤 *Importante*: El soporte del pago debe enviarse a la administración para confirmar la reserva. Si no se envía, la reserva será cancelada y el espacio podrá ser utilizado por otra persona.

💵 *Depósito*
    * *Monto*: $100,000 (efectivo, reembolsable).
    * Debe entregarse *mínimo 3 días antes* de la reserva en la administración, durante los horarios de atención:
    * *Lunes a miércoles*: 8:00 a.m. - 1:00 p.m. y 2:00 p.m. - 5:00 p.m.
    * *Jueves*: 12:00 p.m. - 8:00 p.m.
    * *Viernes*: 8:00 a.m. - 1:00 p.m. y 2:00 p.m. - 5:00 p.m.

⚠️ *Nota*: El recibo del depósito es *OBLIGATORIO* para reclamar el dinero.

⏰ *Horario del Salón*
    * *Lunes a viernes y domingo*: 9:00 a.m. - 10:00 p.m.
    * *Sábados*: 9:00 a.m. - 12:00 p.m.

🪑 *Capacidad e Instalaciones*
    * *BBQ incluye*: 6 mesas y 30 sillas.
    * *Aforo*: 20 a 30 personas aprox.

🧹 *Entrega de Instalaciones*
    * El salón debe ser entregado *limpio* al personal de vigilancia al finalizar el evento.
    * *Entrega formal*: Al día siguiente, antes de las *8:00 a.m*.

🚪 *Lista de Invitados*: Deja la lista de invitados en portería *un día antes* de la reserva, incluyendo las placas de los vehículos para su ingreso.`);
                break;
            case '20':
                await flowDynamic(` ⚽*RESERVA Y COSTO DE LAS CANCHAS *⚽
📅 *Reservas*
    * *Lunes a viernes*: Realiza tu reserva con anticipación a través de los medios de comunicación oficiales.
    * *Domingos y festivos*: Las reservas se realizan con el personal de portería.

📌 *Importante*: La reserva se puede gestionar con la administración o la persona delegada por esta. El horario será definido previamente.

⏱️ *Duración de Turnos*
    * *Tiempo por turno*: 1 hora.
    * Los turnos comienzan y terminan exactamente a la hora fijada.

*Nota*: Si llegas tarde, perderás el tiempo correspondiente y no podrás exigir prolongación.

👥 *Normas de Uso*
1.	Cantidad de jugadores:
    * Máximo 10 personas (5 por equipo, incluyendo el arquero).
    * Debe haber al menos 1 residente o propietario presente en el equipo, quien será el responsable durante el turno.
2.	Cortesía y Responsabilidad:
    * *Desalojar puntualmente*: Al finalizar el turno, los jugadores deben desalojar la cancha para permitir el ingreso del siguiente grupo.
    * Si el siguiente equipo no está presente, igualmente debes liberar la cancha al final de tu tiempo.

⚠️ *Sanciones*: El incumplimiento de las normas, como no liberar la cancha a tiempo, puede ocasionar sanciones. Se solicita respeto y cumplimiento de los tiempos asignados.

👤 *Supervisión*: Una persona estará encargada de avisar cuando finalice el tiempo del turno.`);
                break;
            case '21':
                await flowDynamic(`*RESERVA Y COSTO DE FICHOS DE PISCINA* 🏊

💲 *Costo*: $10,000 por 4 fichos (por apartamento).

📤 *Opciones de Pago*
1.	*Transferencia bancaria*:
Cuenta de ahorros Davivienda:*038300062908* a nombre de *Puerto Paraíso*.

2.	*Pago en línea (PSE) *: A través del enlace: www.jelpit.com.

Por favor, realiza el pago y envía el soporte correspondiente a la administración para completar el proceso. 😊`);
                break;
            case '22':
                await flowDynamic(`PQRS: https://forms.gle/zHk3GzkfFRv2g8HJA`);
                break;
            case '23':
                await flowDynamic('Para reportar novedades locativas envía un correo a 📧 puertoparaisoph1@gmail.com');
                break;
            case '24':
                await flowDynamic('Te puedes contactar al número: 314 518 74 79 con Isleny González - Asistente de Administración📞');
                break;
            case '25':
                await flowDynamic('Te puedes contactar al número: 305 383 93 28 📞');
                break;
            case '26':
                await flowDynamic(`📞 *NÚMERO PARA SOLICITAR RETIRO DE ESCOMBROS* 📞

Para gestionar el retiro de escombros, madera, muebles o electrodomésticos, puedes contactar a *INTERASEO* al: 📲 301 265 55 57.`);
                break;
            case '27':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        lastFlow = flowParaiso;
        return gotoFlow(flowRestartFinish);
    });

module.exports = flowParaiso;