const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Keith_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function KEITH_TECH_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Keith_Tech= Ibrahim_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Dullah_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Keith_Techr.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Ibrahim_King.sendMessage(Qr_Code_By_Ibrahim_King.user.id, { text: '' + b64data });
	
				   let KEITH_TECH_TEXT = `
*_Qr Code for ELON_MD Connected_*
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
	 await Qr_Code_Keith_Tech.sendMessage(Qr_Code__Elon_MD.user.id,{text:ELON_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code__Keith_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					FLASH_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await IBRAHIM_TECH_QR_CODE()
});
module.exports = router
