export const cuteEmojis = [

"ᕙ(⇀‸↼‶)ᕗ",
"ಥ‿ಥ",
"V•ᴥ•V",
"ლ(｀ー´ლ)",
"ʕ•ᴥ•ʔ",
"ʘ‿ʘ",
"ᕕ( ᐛ )ᕗ",
"♥‿♥",
"ԅ(≖‿≖ԅ)",
"ヾ(-_- )ゞ",
"(•̀ᴗ•́)و ̑̑",
"(っ˘ڡ˘ς)",
"{ಠʖಠ}",
]

export const getRandomEmoji = () => {
    return cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)] // pick a random emoji out of the list
}