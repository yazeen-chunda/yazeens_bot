const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is  Muhammed yazeen*
*Creator number : wa.me/+919074197522?text=Hi%20Muhammed%20yazeen.%20*
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
*Githublink (Setup)  :    https://github.com/yazeen-chunda/yazeens_bot/edit/master/plugins/git.js*
*Audio commads :   https://github.com/yazeen-chunda/yazeens_bot/tree/master/uploads*
*Sticker commads : https://github.com/yazeen-chunda/yazeens_bot/tree/master/uploads*
`}) 

}));
