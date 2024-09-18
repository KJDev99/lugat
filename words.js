const nouns = [
  { english: "people", uzbek: "odamlar" },
  { english: "history", uzbek: "tarix" },
  { english: "way", uzbek: "yo'l" },
  { english: "art", uzbek: "sanat" },
  { english: "world", uzbek: "dunyo" },
  { english: "information", uzbek: "malumot" },
  { english: "map", uzbek: "xarita" },
  { english: "family", uzbek: "oila" },
  { english: "government", uzbek: "hukumat" },
  { english: "health", uzbek: "sog'lik" },
  { english: "system", uzbek: "tizim" },
  { english: "computer", uzbek: "kompyuter" },
  { english: "meat", uzbek: "go'sht" },
  { english: "year", uzbek: "yil" },
  { english: "thanks", uzbek: "rahmat" },
  { english: "music", uzbek: "musiqa" },
  { english: "person", uzbek: "shaxs" },
  { english: "reading", uzbek: "o'qish" },
  { english: "method", uzbek: "usul" },
  { english: "data", uzbek: "ma'lumot" },
  { english: "food", uzbek: "ovqat" },
  { english: "understanding", uzbek: "tushuncha" },
  { english: "theory", uzbek: "nazariya" },
  { english: "law", uzbek: "qonun" },
  { english: "bird", uzbek: "qush" },
  { english: "literature", uzbek: "adabiyot" },
  { english: "problem", uzbek: "muammo" },
  { english: "software", uzbek: "dasturiy ta'minot" },
  { english: "control", uzbek: "nazorat" },
  { english: "knowledge", uzbek: "bilim" },
  { english: "power", uzbek: "kuch" },
  { english: "ability", uzbek: "qobiliyat" },
  { english: "economics", uzbek: "iqtisodiyot" },
  { english: "love", uzbek: "sevgi" },
  { english: "internet", uzbek: "internet" },
  { english: "television", uzbek: "televizor" },
  { english: "science", uzbek: "fan" },
  { english: "library", uzbek: "kutubxona" },
  { english: "nature", uzbek: "tabiat" },
  { english: "fact", uzbek: "fakt" },
  { english: "product", uzbek: "mahsulot" },
  { english: "idea", uzbek: "g'oya" },
  { english: "temperature", uzbek: "harorat" },
  { english: "investment", uzbek: "sarmoya" },
  { english: "area", uzbek: "hudud" },
  { english: "society", uzbek: "jamiyat" },
  { english: "activity", uzbek: "faoliyat" },
  { english: "story", uzbek: "hikoya" },
  { english: "industry", uzbek: "sanoat" },
  { english: "media", uzbek: "omma axborot vositalari" },
  { english: "thing", uzbek: "narsa" },
  { english: "oven", uzbek: "pechka" },
  { english: "community", uzbek: "jamoa" },
  { english: "definition", uzbek: "ta'rif" },
  { english: "safety", uzbek: "xavfsizlik" },
  { english: "quality", uzbek: "sifat" },
  { english: "development", uzbek: "rivojlanish" },
  { english: "language", uzbek: "til" },
  { english: "management", uzbek: "boshqaruv" },
  { english: "player", uzbek: "o'yinchi" },
  { english: "variety", uzbek: "turli xillik" },
  { english: "video", uzbek: "video" },
  { english: "week", uzbek: "hafta" },
  { english: "security", uzbek: "xavfsizlik" },
  { english: "country", uzbek: "mamlakat" },
  { english: "exam", uzbek: "imtihon" },
  { english: "movie", uzbek: "film" },
  { english: "organization", uzbek: "tashkilot" },
  { english: "equipment", uzbek: "uskunalar" },
  { english: "physics", uzbek: "fizika" },
  { english: "analysis", uzbek: "tahlil" },
  { english: "policy", uzbek: "siyosat" },
  { english: "series", uzbek: "seriya" },
  { english: "thought", uzbek: "fikr" },
  { english: "basis", uzbek: "asos" },
  { english: "boyfriend", uzbek: "yigit" },
  { english: "direction", uzbek: "yo'nalish" },
  { english: "strategy", uzbek: "strategiya" },
  { english: "technology", uzbek: "texnologiya" },
  { english: "army", uzbek: "armee" },
  { english: "camera", uzbek: "kamera" },
  { english: "freedom", uzbek: "erkinlik" },
  { english: "paper", uzbek: "qog'oz" },
  { english: "environment", uzbek: "muhit" },
  { english: "child", uzbek: "bola" },
  { english: "instance", uzbek: "misol" },
  { english: "sentence", uzbek: "jumla" },
  { english: "virus", uzbek: "virus" },
  { english: "news", uzbek: "yangiliklar" },
  { english: "energy", uzbek: "energiya" },
  { english: "delivery", uzbek: "yetkazib berish" },
  { english: "user", uzbek: "foydalanuvchi" },
  { english: "oven", uzbek: "pechka" },
  { english: "reading", uzbek: "o'qish" },
  { english: "love", uzbek: "sevgi" },
  { english: "concept", uzbek: "g'oya" },
  { english: "organization", uzbek: "tashkilot" },
  { english: "language", uzbek: "til" },
  { english: "development", uzbek: "rivojlanish" },
  { english: "movie", uzbek: "kino" },
  { english: "exam", uzbek: "imtihon" },
  { english: "country", uzbek: "mamlakat" },
  { english: "week", uzbek: "hafta" },
  { english: "video", uzbek: "video" },
  { english: "player", uzbek: "o'yinchi" },
  { english: "variety", uzbek: "turli xillik" },
  { english: "series", uzbek: "seriya" },
  { english: "policy", uzbek: "siyosat" },
  { english: "analysis", uzbek: "tahlil" },
  { english: "physics", uzbek: "fizika" },
  { english: "equipment", uzbek: "uskunalar" },
  { english: "movie", uzbek: "kino" },
  { english: "freedom", uzbek: "erkinlik" },
];

const adjectives = [
  { english: "unequaled", uzbek: "tengsiz" },
  { english: "inconclusive", uzbek: "noaniq" },
  { english: "yielding", uzbek: "xosil beruvchi" },
  { english: "slippery", uzbek: "sirg'anchiq" },
  { english: "agitated", uzbek: "xayajonlangan" },
  { english: "debonair", uzbek: "yomon" },
  { english: "icy", uzbek: "muzli" },
  { english: "madly", uzbek: "aqldan ozgan" },
  { english: "scarce", uzbek: "kam" },
  { english: "magenta", uzbek: "mjenta" },
];

const verbs = [
  { english: "learn", uzbek: "o'rganmoq" },
  { english: "become", uzbek: "aylanib qolmoq" },
  { english: "come", uzbek: "kelmoq" },
  { english: "include", uzbek: "o'z ichiga olmoq" },
  { english: "thank", uzbek: "raxmat aytmoq" },
  { english: "provide", uzbek: "taminlamoq" },
  { english: "create", uzbek: "yaratmoq" },
  { english: "add", uzbek: "qo'shmoq" },
  { english: "understand", uzbek: "tushunmoq" },
  { english: "consider", uzbek: "xisobga olmoq" },
];