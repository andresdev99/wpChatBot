const { addKeyword } = require('@bot-whatsapp/bot');
const { reset, stop } = require('./idle-custom');
const flowRestartFinish = require('./restart');

const flowOceana = addKeyword(['NUEVOMILENIO'], { sensitive: true })
    .addAction(async (ctx, { gotoFlow }) => {
        reset(ctx, gotoFlow, 600000);
    })
    .addAnswer('¡Bienvenido a la sección de Nuevo Milenio! 🏡')
    .addAnswer('¿Qué te gustaría hacer hoy? 🤔')
    .addAnswer([
        '*Estados de Cuenta:* 📑',
        '*1.* Consulta de estados de cuenta.',//ok

        '\n*Facturación y Pagos:* 💳',
        '*2.* Reportar novedad de facturación.',//ok
        '*3.* Solicitud de factura.',//ok
        '*4.* Día de pago.',//ok
        '*5.* Enviar soporte de pago',//ok
        '*6.* Revisión estados de cuenta.',//ok
        '*7.* Medios de pago administración.',//ok
        '*8.* Medios de pago otros servicios.',//ok


        '\nℹ️ *Información sobre ENDOSOS*',
        '*9.* Solicitar el endoso del seguro para su crédito hipotecario.',//ok

        '\n*Información General:* ℹ️',
        '*10.* Paz y salvo.',//ok
        '*11.* Información de mudanza.',//ok
        '*12.* Información teatro',
        '*13.* Información billar',
        '*14.* Información BBQ',
        '*15.* Información salón de videojuegos',
        '*16.* Horarios de atención administrativa.',//ok
        '*17.* Horarios de zonas comunes.',//ok
        '*18.* Enviar Reglamento de Propiedad Horizontal.',//ok
        '*19.* Enviar Manual de Convivencia.',//ok
        '*20.* Diligenciamiento censo poblacional.',//ok
        '*21.* Radicar derechos de petición.',//ok
        '*22.* Información SALÓN SOCIAL.',//ok
        '*23.* PQRSF.',//ok
        '*24.* Reportar novedades locativas.',//ok
        '*25.* Contactar con un asesor.',//ok
        '*26.* Contacto porteria.',//ok
        '*27.* Número para solicitar retiro de escombros.',//ok

        '\n*Opciones de Navegación:* 🧭',
        '*28.* Volver al menú principal.',
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
                await flowDynamic(`💸 **NOVEDAD de Facturación** 💸

Por favor, envía tu solicitud a través del aplicativo “PROPIEDATA” 📲. Se te dará solución a la brevedad posible ⏳. Especifica la novedad de facturación para la corrección, si corresponde ✅.`);
                break;
            case '3':
                await flowDynamic(`Solicita tu factura aquí: https://www.phenlinea.info/ 🧾

Si deseas obtener más información o aprender cómo realizar el proceso, haz clic aquí para ver el video explicativo: https://1drv.ms/v/s!ApxrvRa6pSarhMtiSoKIZPaN7rAuIw?e=mcCioe`);
                break;
            case '4':
                await flowDynamic(`⏳ Si paga después de la fecha de vencimiento de la factura, el pago se verá reflejado al siguiente mes.`);
                    break;
            case '5':
                await flowDynamic(
                    `📧 Por favor, envía un correo a **conjuntooceana@gmail.com** indicando el número de tu apartamento 🏢.`);
                break;
            case '6':
                await flowDynamic(
                    `📄 **Revisión de Estados de Cuenta en PROPIEDATA** 📄

Por favor, envía tu solicitud a través del aplicativo “PROPIEDATA” 📲. Se te dará solución a la brevedad posible ⏳. Especifica la novedad de facturación para la corrección, si es el caso ✅.`);
                break;
            case '7':
                await flowDynamic(`💳 **MEDIOS DE PAGO CUOTAS DE ADMINISTRACIÓN** 💳

1️⃣ **Pago por PSE**: Usa el siguiente enlace para realizar el pago 👉 https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00017824&origen=buscar
Al ingresar en el buscador, escribe **"conj inmobiliario oceana et 1 t 1 y 2 cl 39 52 95"**. En la casilla de referencia, coloca el **número de tu apartamento** 🏢.

2️⃣ **Pago en Oficina Bancaria**: Realiza el pago directamente en una oficina del **Banco AV Villas**, cuenta corriente **502221401**, con referencia el **número de tu apartamento**.

3️⃣ **Pago con Datáfono**: Puedes pagar con datáfono directamente en la oficina de administración 💳.`);
                break;
            case '8':
                await flowDynamic(
                    `💼 **MEDIOS DE PAGO OTROS SERVICIOS** 💼

🏛️ **SALÓN SOCIAL**

1️⃣ **Pago por PSE**: Realiza el pago mediante el siguiente enlace 👉 https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00017824&origen=buscar
En el buscador, ingresa **"conj inmobiliario oceana et 1 t 1 y 2 cl 39 52 95"** y en la casilla de referencia coloca **4040**.

2️⃣ **Pago en Oficina Bancaria**: Dirígete a cualquier oficina del **Banco AV Villas**, cuenta corriente **502221401**, referencia **4040**.

3️⃣ **Pago con Datáfono**: Puedes pagar con datáfono directamente en la oficina de administración 💳.

🍖 **BBQ**

1️⃣ **Pago por PSE**: Realiza el pago mediante el siguiente enlace 👉 https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00017824&origen=buscar
En el buscador, ingresa **"conj inmobiliario oceana et 1 t 1 y 2 cl 39 52 95"** y en la casilla de referencia coloca **4040**.

2️⃣ **Pago en Oficina Bancaria**: Dirígete a cualquier oficina del **Banco AV Villas**, cuenta corriente **502221401**, referencia **4040**.

3️⃣ **Pago con Datáfono**: Puedes pagar con datáfono directamente en la oficina de administración 💳.`);
                break;
            case '9':
                await flowDynamic(
                    `📄 **Circular Informativa para Solicitar el Endoso del Seguro para Crédito Hipotecario** 📄

Por favor, revisa la circular informativa en el siguiente enlace:
https://drive.google.com/file/d/1pQP7ArafxQOmJk-3jd452yRzpPHSSOSX/view?usp=sharing

Para cualquier consulta, puedes comunicarte al correo **consultorvivaseguros@gmail.com** 📧.`);
                break;
            case '10':
                await flowDynamic(
                    `📧 **Solicitud de PAZ Y SALVO**

Para solicitar el **PAZ Y SALVO**, envía un correo a **conjuntooceana@gmail.com** con la siguiente información:

- **Nombre Completo** 👤
- **Número de Celda de Parqueadero** 🚗
- **Número de Cuarto Útil** 📦
- **Cédula** 🆔
- **Soporte de pago del mes en curso** 📄

🕒 Ten en cuenta que el PAZ Y SALVO será remitido después de cumplirse **3 días hábiles** desde la solicitud.`);
                break;
            case '11':
                await flowDynamic(
                    `🚚 **Información de MUDANZA** 🚚

1️⃣ **Autorización**: Si eres inquilino, la agencia o propietario debe enviar la carta de autorización para ingreso o salida.

2️⃣ **Depósito**: Se requiere un depósito de **$200,000** en efectivo, directamente en la administración, mínimo **2 días hábiles** antes de la mudanza.

3️⃣ **Programación del Espacio**: La disponibilidad es de **2 horas por apartamento**.

📅 **Horarios de Mudanza**:
   - **Lunes a Viernes**: 8:00 am a 5:00 pm
   - **Sábados**: 8:00 am a 12:00 pm

Pasos para realizar la mudanza:

- **Solicitar autorización**: Pide la autorización de mudanza al propietario o a la agencia del inmueble.
- **Notificar a la Administración**: Envía la notificación al correo **conjuntooceana@gmail.com** o al celular **3108947160**, mínimo **3 días antes** de la mudanza.
- **Registro de Ingreso**: Si es una mudanza de ingreso, recuerda diligenciar el **CENSO de residentes** para actualizar tus datos y facilitar la comunicación.

¡Gracias por tu colaboración! 😊`);
                break;
            case '12':
                await flowDynamic(
                    `🎭 **Información para el Uso del TEATRO** 🎭

- **Responsable**: El teatro solo puede ser utilizado bajo la responsabilidad de una persona mayor de edad, propietario o residente, previa solicitud.
- **Pagos al Día**: Es necesario estar al día con los pagos de las cuotas de administración.
- **Ingreso**: Solo se permite el ingreso de personas acompañadas por el solicitante del teatro.
- **Responsabilidad por Daños**: Cualquier daño ocasionado será facturado al propietario que solicitó la reserva.
- **Aforo**: El aforo máximo permitido es de 15 personas.
- **Prohibición de Mascotas**: No se permite el ingreso de mascotas.
- **Entrega y Condiciones**: El teatro se entregará con un acta al solicitante, quien debe devolverlo en las mismas condiciones en que se le entregó.
- **Uso de Equipos**: Ningún dispositivo o elemento del teatro debe ser retirado de esta área.

Asegúrate de seguir estas normas para un uso adecuado del teatro. 🎬`);
                break;
            case '13':
                await flowDynamic(
                    `🎱 **Información para el Uso de la Zona de BILLAR** 🎱

- **Elementos de Juego**: Los elementos deben reclamarse y entregarse en la portería principal, presentando un documento de identidad.
- **Normas de Cuidado**:
  - No te apoyes en la mesa mientras juegas.
  - Prohibido fumar en la zona de juegos.
  - Evita usar joyas que puedan engancharse o dañar la tela de la mesa.
  - Al poner tiza al taco, hazlo fuera de la mesa para evitar residuos sobre la tela.
  - No consumas licor ni alimentos sobre la mesa.
- **Supervisión**: Los menores de edad deben estar acompañados de un adulto responsable.
- **Tiempo de Uso**: La mesa de billar pool se presta por un máximo de una hora por apartamento.
- **Devolución**: Al finalizar, devuelve los elementos en buen estado en la portería principal.

Recuerda respetar estas normas para el cuidado y disfrute de todos. 😊`);
                break;
            case '14':
                await flowDynamic(
                    `🍖 **Información para el Uso de la Zona de BBQ** 🍖

- **Frecuencia de Uso**: La zona de BBQ puede ser utilizada una vez al día por cada familia para permitir la adecuada preparación del espacio entre turnos.

- **Horario**:
  - **Lunes a Jueves**: 10:00 am - 10:00 pm

- **Exclusividad para Residentes**: Solo residentes y sus invitados pueden utilizar la zona, acompañados por el solicitante; no se permite el acceso a personas externas.

- **Reservas**:
  - Cada apartamento puede reservar un espacio de BBQ con un cupo máximo de 10 personas (incluyendo menores de edad).
  - La reserva debe realizarse con al menos **3 días hábiles de anticipación** y previo pago de una tarifa de **$10,000** para cubrir consumos de energía, agua y reposición de elementos.
  - Mantener las obligaciones al día con la administración es requisito.

- **Comportamiento y Respeto**:
  - Mantener un ambiente de urbanidad y respeto, evitando gritos y equipos de sonido a alto volumen.
  - No se permite el uso de la zona para eventos con ánimo de lucro, salvo eventos organizados por la administración.

- **Condiciones de Entrega**:
  - La zona debe entregarse limpia y en condiciones funcionales. De no ser así, se aplicará una sanción de **$50,000** por falta de aseo evidente.
  - Preaviso de cancelación es necesario para permitir la reserva de otros residentes; no se realizan reembolsos a menos que exista una causa de fuerza mayor comprobable.

- **Reglas Adicionales**:
  - **Consumo de Alcohol**: Permitido con moderación.
  - **Sustancias Psicoactivas**: Prohibidas. Aplican multas según el Manual de Convivencia.
  - **Mascotas**: Permitidas, pero deben llevar correa.
  - **Responsabilidad por Daños**: El residente que reserva es responsable de cualquier daño y el costo de reparación se incluirá en la cuenta de administración.

- **Intervención de Vigilancia**: La empresa de vigilancia puede dar por finalizado el evento en caso de actos violentos, ruido excesivo, incumplimiento del horario o riesgo a la integridad física o la propiedad.

- **Sanciones**: El residente que realiza la reserva será responsable de las sanciones por comportamientos inadecuados de sus invitados.

Este reglamento tiene como objetivo promover un ambiente armonioso y seguro en la zona de BBQ del conjunto residencial.`);
                break;
            case '15':
                await flowDynamic(
                    `🎮 **Información del SALÓN DE VIDEOJUEGOS** 🎮

**Ubicación**: El salón de videojuegos se encuentra en el piso principal de la torre tres y está equipado con mobiliario, sonido, televisor, conexión a Internet y dos consolas Xbox. Es de uso exclusivo para los residentes de **OCEANA P.H.**, dedicado al encuentro, esparcimiento y entretenimiento.

**Reglamento**:

1. **Uso Exclusivo para Residentes**: Solo residentes del Conjunto Inmobiliario Oceana P.H. pueden acceder.
2. **Menores Acompañados**: Los menores de edad deben estar acompañados por un adulto responsable.
3. **Pagos al Día**: Los usuarios deben estar al día en el pago de las cuotas de administración.
4. **Reserva**: Las reservas deben ser realizadas por un adulto responsable registrado en el censo del apartamento.
5. **Uso Adecuado de Equipos**: Los equipos deben ser utilizados de manera responsable.
6. **Prohibido Retirar Equipos**: Ningún elemento puede ser retirado del salón.
7. **Sin Alimentos ni Bebidas**: No se permite el ingreso de alimentos o bebidas.
8. **Sin Mascotas**: No está permitido el ingreso de mascotas.
9. **Inventario y Revisión**: El salón debe ser recibido y entregado con inventario y revisión de equipos, supervisado por el personal de administración o vigilancia.
10. **Turnos Limitados**: Los turnos serán de máximo dos horas por persona.
11. **Responsabilidad por Daños**: Cualquier daño deberá ser asumido por la persona que reservó el turno.
12. **Horario de Uso**: 10:00 am a 10:00 pm.
13. **Prohibido Remover Elementos**: No se puede sacar ningún elemento del salón.
14. **Prohibiciones Específicas**: Está prohibido el consumo de cigarrillos, tabaco, bebidas alcohólicas, sustancias alucinógenas, alimentos y el ingreso de mascotas.
15. **Sustancias Peligrosas**: No se pueden ingresar sustancias inflamables o corrosivas.
16. **Contenido Apropiado**: Solo está permitido contenido adecuado para todos los públicos. Hay supervisión mediante circuito cerrado de TV.

**Conductas Sancionables**: Incluyen daños a los equipos, consumo de licor, no entrega de controles, obstrucción de cámaras de seguridad, lanzar objetos o basura, y cualquier conducta inapropiada que afecte el salón. Las sanciones y multas están regidas por el Manual de Convivencia.

Este reglamento tiene como objetivo mantener el orden y el buen uso del salón de videojuegos, garantizando un espacio seguro y agradable para todos los residentes.`);
                break;
            case '16':
                await flowDynamic(
                    `🏢 **Horario Administración** 🏢

- **Lunes, Martes, Miércoles y Viernes**
  - 8:00 am a 1:00 pm
  - 2:00 pm a 5:00 pm

- **Jueves**
  - 12:00 pm a 8:00 pm

- **Sábado** (1 cada 15 días)
  - 8:00 am a 12:00 pm`);
                break;
            case '17':
                await flowDynamic(
                    `🏢 **Horarios Zonas Comunes** 🏢

- **GIMNASIO** 🏋️
  Lunes a Domingo:
  - 5:00 am a 11:00 am
  - 12:00 pm a 10:00 pm (incluye festivos)

- **PISCINAS, SAUNA Y TURCO** 🏊‍♂️
  - Lunes: mantenimiento 🔧
  - Martes a Viernes: 10:00 am a 8:00 pm
  - Sábado: 9:00 am a 6:00 pm
  - Domingos y Festivos: 10:00 am a 6:00 pm

  *Nota:* Los lunes se realiza limpieza profunda de la piscina. Si el lunes es festivo, la limpieza se realiza el martes.

- **SALÓN DE VIDEOJUEGOS** 🎮
  Lunes a Domingo: 9:00 am a 10:00 pm (incluye festivos)

- **SALÓN DE LECTURA** 📚
  Lunes a Domingo: 9:00 am a 10:00 pm (incluye festivos)

- **TEATRO** 🎬
  Lunes a Domingo: 9:00 am a 10:00 pm (incluye festivos)

- **BILLAR** 🎱
  Lunes a Domingo: 10:00 am a 9:00 pm (incluye festivos)

- **COWORKING** 💼
  Lunes a Domingo: 6:00 am a 10:00 pm (incluye festivos)

- **BBQ** 🍖
  Lunes a Domingo: 6:00 am a 10:00 pm (incluye festivos)

- **SALÓN SOCIAL** 🎉
  Lunes a Domingo: 9:00 am a 12:00 pm (incluye festivos)`);
                break;
            case '18':
                await flowDynamic('Consulta el Reglamento de Propiedad Horizontal aquí: https://drive.google.com/file/d/1YD2S1WaUyFXoZiEI3WA5s0C0F4mOnsrB/view?usp=sharing 📘');
                break;
            case '19':
                await flowDynamic('Consulta el Manual de Convivencia aquí: https://drive.google.com/file/d/1KacO1jQL3DdJI0ACgYrzzcOmVwIvR-JA/view?usp=sharing 📘')
                break;
            case '20':
                await flowDynamic('Diligencia el censo poblacional aquí: https://forms.gle/JHoZwz26oALnXGH86 📝');
                break;
            case '21':
                await flowDynamic(`📧 Por favor, envía un correo a **conjuntooceana@gmail.com** indicando el **número de tu apartamento** 🏢.`);
                break;
            case '22':
                await flowDynamic(
                    `🎉 **Información SALÓN SOCIAL** 🎉

La reserva debe hacerse por la APP PROPIEDATA; en caso de no tener la APP, por favor acercarse a la administración y realizar el registro.

**Alquiler del salón social**:
- # 1 $ 200.000
- # 2 $ 200.000
- # 3 $ 250.000

1. El salón social es de uso exclusivo para residentes.
   **Costo**: Lunes a viernes $76.000 (Debe consignarse dentro del mes de la reserva del evento).
   Sábados, domingos y festivos tiene un costo de $107.000 (Debe consignarse dentro del mes de la reserva del evento).

2. El depósito tiene un valor de $200.000, en efectivo reembolsable en el momento que se valide que no hubo daños en las instalaciones.

**Horarios**: El horario de uso del salón social será de lunes a domingo de 9:00 a.m. hasta las 12:00 p.m.
   Sábados, domingos y festivos de 10:00 am a 12:00 pm.

**Dotación**: 12 mesas y 60 sillas con aforo de 60 personas aprox.

**Condiciones para el alquiler**:
- El apartamento debe encontrarse al día con la administración.
- El depósito y el comprobante de pago lo debe entregarse en la oficina de administración por lo menos con 3 días de anterioridad.
- Se debe dejar la lista de invitados un día antes en portería para permitir su ingreso, incluyendo la placa de vehículos.

**NOTA IMPORTANTE**:
- Está prohibido realizar algún tipo de asados fuera del salón social. No se permite el uso de inflables.
- No se permite juegos pirotécnicos, bengalas.
- No se permite afuera del salón social sillas u otros objetos (carrito de perros, carrito de mango, entre otros).
- La entrega del salón social debe ser al día siguiente antes de las 9:30 am para poder entregárselo a la siguiente persona que reserva y debe entregarse limpio (con el respectivo aseo).
- Deben de pasar lista de invitados con mínimo 3 días antes del evento (para dar la autorización en portería).
- El dueño del evento se hace responsable de los daños que causen sus invitados (dar claridad sobre el buen uso del parqueadero y el comportamiento en las zonas comunes cerca a los salones sociales; no se permite mascotas).
- El volumen de la música debe ser moderado; no es una discoteca. Recuerda que estás dentro de una unidad residencial y tus vecinos merecen descansar.
- No explotar las bombas de tu decoración; utiliza tijeras para estirar la bomba y cortar.`);
                break;
            case '23':
                await flowDynamic(`https://www.propiedata.com/`);
                break;
            case '24':
                await flowDynamic(`https://www.propiedata.com/`);
                break;
            case '25':
                await flowDynamic(`📞 **Comunicarse con un Asesor**

Para asistencia, puedes comunicarte con nuestra asistente administrativa:
**Estefanía Villa**
📲 **3108947160**`);
                break;
            case '26':
                await flowDynamic(`📞 **Números de Portería**

- **Portería Principal**:
  📲 3053356531
  📲 3166381488

- **Portería Peatonal**:
  📲 3044546613`);
                break;
            case '27':
                await flowDynamic(`📞 **Número para Solicitar Retiro de Escombros**

**INTERASEO** (Madera, escombros, muebles, electrodomésticos):
📲 **3012655557**`);
                break;
            case '28':
                return gotoFlow(require('./welcome')); //Redirige al flujo de reinicio
            case '0':
                stop(ctx);
                await flowDynamic('¡Gracias por usar nuestro servicio! 🙌 ¡Hasta luego! 👋');
                return endFlow(); //Termina la conversación
            default:
                await flowDynamic('❌ Opción no válida. Por favor, elige una opción válida.');
                return fallBack(); //Vuelve a presentar las opciones
        }
        lastFlow = flowOceana;
        return gotoFlow(flowRestartFinish);
    })

module.exports = flowOceana;