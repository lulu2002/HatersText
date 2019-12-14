/**
 * 2019-12-04 下午 11:07
 */
const PREFIX = "[]/*-23";

document.getElementById("trans-button").addEventListener("click", ev => {
    transText();
});

function transText() {
    let inputString = document.getElementById("input-text").value;
    let outputString = transStringToEmoteString(inputString);

    document.getElementById("output-text").value = outputString;
}

function transStringToEmoteString(inputString) {
    inputString = replaceAllToSpace(inputString);

    while (inputString.indexOf(PREFIX) != -1)
        inputString = replaceFirstSpaceToEmotes(inputString);

    return inputString;
}


function replaceAllToSpace(inputString) {
    return inputString
        .replace(/ /g, PREFIX)
        .replace(/，/g, PREFIX)
        .replace(/。/g, PREFIX)
        .replace(/,/g, PREFIX);
}

function replaceFirstSpaceToEmotes(inputString) {
    let mode = document.getElementById("emote-mode").value;
    let emoteString;

    if (mode == "emoji")
        emoteString = getRandomAmountEmoteString(emotes, 3);
    else if (mode == "text")
        emoteString = " " + getRandomAmountEmoteString(textEmotes, 1) + " ";

    return inputString.replace(PREFIX, emoteString);
}

function getRandomAmountEmoteString(emoteArr, maxAmount) {
    let randomAmount = Math.floor(Math.random() * maxAmount + 1);
    let emote = emoteArr[Math.floor(Math.random() * emoteArr.length)];
    let str = "";

    for (let i = 0; i < randomAmount; i++)
        str = str + emote;

    return str;
}

let textEmotes = [
    "( ≧Д≦)",
    "(；￣Д￣）",
    "(;¬_¬)",
    "（；¬＿¬)",
    "(｡+･`ω･´)",
    "｡゜(｀Д´)゜｡",
    "(　ﾟДﾟ)＜!!",
    "(‡▼益▼)",
    "(,,#ﾟДﾟ)",
    "(҂⌣̀_⌣́)",
    "(；¬д¬)",
    "（;≧皿≦）",
    "(╬ﾟ◥益◤ﾟ)",
    "(╬⓪益⓪)",
    "[○･｀Д´･○]",
    "૮( ᵒ̌▱๋ᵒ̌ )ა",
    "(⁎˃ᆺ˂)",
    "(ꐦ°᷄д°᷅)",
    "((╬●∀●)",
    "(╬ Ò ‸ Ó)",
    "( >д<)",
    "(*｀益´*)",
    "(☞◣д◢)☞",
    "<(｀^´)>",
    "(;｀O´)o",
    "(ꐦ ಠ皿ಠ )",
    "（｀Δ´）！",
    "(*｀Ω´*)",
    "(╬ಠ益ಠ)",
    "(╬ﾟ◥益◤ﾟ) ╬ﾟ",
    "(ு⁎ு)྆྆",
    "(╬⓪益⓪)",
    "（╬ಠ益ಠ)",
    "(●o≧д≦)o",
    "=͟͟͞͞( •̀д•́)))",
    "(๑･`▱´･๑)",
    "༼ つ ͠° ͟ ͟ʖ ͡° ༽つ",
    "(☄ฺ◣д◢)☄ฺ",
    "ꀯ(‴ꑒ᷅⺫ꑒ᷄)",
    "(#｀皿´)",
    "(｀Д´)",
    "(ﾒﾟ皿ﾟ)",
    "(o｀ﾟ皿ﾟ)",
    "( ╬◣ 益◢)",
    "（╬ಠ益ಠ)",
    "（♯▼皿▼）",
    "( ╬◣ 益◢）y━･~",
    "（○｀Ｏ´○）",
    "(; ･`д･´)",
    "｜。｀＞Д＜｜",
    "(; ･`д･´)​",
    "( •̀ω•́ )σ",
];

let emotes = [
    "\uD83D\uDE00",
    "\uD83D\uDE01",
    "\uD83D\uDE02",
    "\uD83E\uDD23",
    "\uD83D\uDE03",
    "\uD83D\uDE04",
    "\uD83D\uDE05",
    "\uD83D\uDE06",
    "\uD83D\uDE09",
    "\uD83D\uDE0A",
    "\uD83D\uDE0B",
    "\uD83D\uDE0E",
    "\uD83D\uDE0D",
    "\uD83D\uDE18",
    "\uD83E\uDD70",
    "\uD83D\uDE17",
    "\uD83D\uDE19",
    "\uD83D\uDE1A",
    "☺️",
    "\uD83D\uDE42",
    "\uD83E\uDD17",
    "\uD83E\uDD29",
    "\uD83E\uDD14",
    "\uD83E\uDD28",
    "\uD83D\uDE10",
    "\uD83D\uDE11",
    "\uD83D\uDE36",
    "\uD83D\uDE44",
    "\uD83D\uDE0F",
    "\uD83D\uDE23",
    "\uD83D\uDE25",
    "\uD83D\uDE2E",
    "\uD83E\uDD10",
    "\uD83D\uDE2F",
    "\uD83D\uDE2A",
    "\uD83D\uDE2B",
    "\uD83D\uDE34",
    "\uD83D\uDE0C",
    "\uD83D\uDE1B",
    "\uD83D\uDE1C",
    "\uD83D\uDE1D",
    "\uD83E\uDD24",
    "\uD83D\uDE12",
    "\uD83D\uDE13",
    "\uD83D\uDE14",
    "\uD83D\uDE15",
    "\uD83D\uDE43",
    "\uD83E\uDD11",
    "\uD83D\uDE32",
    "☹️",
    "\uD83D\uDE41",
    "\uD83D\uDE16",
    "\uD83D\uDE1E",
    "\uD83D\uDE1F",
    "\uD83D\uDE24",
    "\uD83D\uDE22",
    "\uD83D\uDE2D",
    "\uD83D\uDE26",
    "\uD83D\uDE27",
    "\uD83D\uDE28",
    "\uD83D\uDE29",
    "\uD83E\uDD2F",
    "\uD83D\uDE2C",
    "\uD83D\uDE30",
    "\uD83D\uDE31",
    "\uD83E\uDD75",
    "\uD83E\uDD76",
    "\uD83D\uDE33",
    "\uD83E\uDD2A",
    "\uD83D\uDE35",
    "\uD83D\uDE21",
    "\uD83D\uDE20",
    "\uD83E\uDD2C",
    "\uD83D\uDE37",
    "\uD83E\uDD12",
    "\uD83E\uDD15",
    "\uD83E\uDD22",
    "\uD83E\uDD2E",
    "\uD83E\uDD27",
    "\uD83D\uDE07",
    "\uD83E\uDD20",
    "\uD83E\uDD21",
    "\uD83E\uDD73",
    "\uD83E\uDD74",
    "\uD83E\uDD7A",
    "\uD83E\uDD25",
    "\uD83E\uDD2B",
    "\uD83E\uDD2D",
    "\uD83E\uDDD0",
    "\uD83E\uDD13",
    "\uD83D\uDE08",
    "\uD83D\uDC7F",

    //HANDS

    "\ud83e\udd32",
    "\ud83d\udc50",
    "\ud83d\ude4c",
    "\ud83d\udc4f",
    "\ud83e\udd1d",
    "\ud83d\udc4d",
    "\ud83d\udc4e",
    "\ud83d\udc4a",
    "\u270a",
    "\ud83e\udd1b",
    "\ud83e\udd1c",
    "\ud83e\udd1e",
    "\u270c\ufe0f",
    "\ud83e\udd1f",
    "\ud83e\udd18",
    "\ud83d\udc4c",
    "\ud83d\udc48",
    "\ud83d\udc49",
    "\ud83d\udc46",
    "\ud83d\udc47",
    "\u261d\ufe0f",
    "\u270b",
    "\ud83e\udd1a",
    "\ud83d\udd90",
    "\ud83d\udd96",
    "\ud83d\udc4b",
    "\ud83e\udd19",
    "\ud83d\udcaa",
    "\ud83e\uddb5",
    "\ud83e\uddb6",
    "\ud83d\udd95",
    "💦",
    "🔥"
];