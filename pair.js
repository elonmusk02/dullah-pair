const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Ibrahim_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function IBRAHIM_TECH_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Ibrahim_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Ibrahim_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code__Ibrahim_King.ev.on('creds.update', saveCreds)
            Pair_Code__Ibrahim_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Ibrahim_King.sendMessage(Pair_Code__Ibrahim_King.user.id, { text: '' + b64data });

               let IBRAHIM_TECH_TEXT = `
*_Pair Code for ELON_MD Connected_*
*_Made With 🤍_*
*By ELON*
______________________________________
╔════◇
║ *『 ELON-MD OFFICIAL 』*
║ _YOU HAVE SUCCESSFULLY SELECTED THE BEST BOT._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _https://www.youtube.com/@EmmaNuel-ri2to_
║❒ *Owner:* _https://wa.me/message/2348167574039_
║❒ *Repo:* _https://github.com/elonmusk02/Elon-MD_
║❒ *WaGroup:* _https://chat.whatsapp.com/Elw76HZI6R13C9OfYQNuoJ_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T_
╚══════════════════════╝ 
_____________________________________
_Don't Forget To Give a Star To My Repo_`
 await Pair_Code_By_Ibrahim_King.sendMessage(Pair_Code__Ibrahim_King.user.id,{text:IBRAHIM_TECH_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_Ibrahim_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    IBRAHIM_TECH_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Currently Unavailable"});
         }
        }
    }
    return await IBRAHIM_TECH_PAIR_CODE()
});
module.exports = router
