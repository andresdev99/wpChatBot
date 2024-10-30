require('dotenv').config()

const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { delay } = require('@whiskeysockets/baileys')
const { capture } = require('paypal-rest-sdk')

const flowWelcome = require('./flows/welcome');
const flowRestartFinish = require('./flows/restart');
const flowMajagua = require('./flows/majagua');
const flowMosaico = require('./flows/mosaico');
const flowOporto = require('./flows/oporto');
const flowAltobelo = require('./flows/altobelo');
const flowAmatista = require('./flows/amatista');
const flowLisboa = require('./flows/lisboa');
const { idleFlow } = require('./flows/idle-custom');

const flows = [
    flowWelcome,
    flowMajagua,
    flowMosaico,
    flowOporto,
    flowAltobelo,
    flowAmatista,
    flowLisboa,
    flowRestartFinish,
    idleFlow
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