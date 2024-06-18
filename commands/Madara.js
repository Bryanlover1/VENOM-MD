"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "shan", reaction: "😈", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐒𝚮𝚫𝚪𝚰𝚴𝐆𝚫𝚴 𝚫𝐂𝚻𝚰𝛁𝚫𝚻𝚵𝐃 \n\n ' + "║❒ 𝐓𝐘𝐏𝐄 𝐌𝐄𝐍𝐔 𝐓𝐎 𝐒𝐄𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒";
    let d = '                                            ║❒ 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 https://t.me/+H2CcYqSn6zFhZTM0';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/388c8f5c23b4e7662ebfb.mp4';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *HUNCHO-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *HUNCHO-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/e18441d126f37be8efbfa.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
