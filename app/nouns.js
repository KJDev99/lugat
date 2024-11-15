const nouns = [
  { english: "people", uzbek: "odamlar" },
  { english: "history", uzbek: "tarix" },
  { english: "way", uzbek: "yo'l" },
  { english: "art", uzbek: "sanat" },
  { english: "world", uzbek: "dunyo" },
  { english: "information", uzbek: "ma'lumot" },
  { english: "map", uzbek: "xarita" },
  { english: "family", uzbek: "oila" },
  { english: "government", uzbek: "hukumat" },
  { english: "health", uzbek: "sog'lik" },
  { english: "system", uzbek: "sistema" },
  { english: "computer", uzbek: "kompyuter" },
  { english: "meat", uzbek: "go'sht" },
  { english: "year", uzbek: "yil" },
  { english: "thanks", uzbek: "raxmat" },
  { english: "music", uzbek: "musiqa" },
  { english: "person", uzbek: "inson" },
  { english: "reading", uzbek: "o'qish" },
  { english: "method", uzbek: "uslub" },
  { english: "data", uzbek: "ma'lumot" },
  // { english: "food", uzbek: "oziq-ovqat" },
  // { english: "understanding", uzbek: "tushunish" },
  // { english: "theory", uzbek: "teoriya" },
  // { english: "law", uzbek: "huquq" },
  // { english: "bird", uzbek: "qush" },
  // { english: "literature", uzbek: "adabiyot" },
  // { english: "problem", uzbek: "muammo" },
  // { english: "soft", uzbek: "yumshoq" },
  // { english: "control", uzbek: "nazorat" },
  // { english: "knowledge", uzbek: "bilim" },
  // { english: "power", uzbek: "kuch" },
  // { english: "ability", uzbek: "qobiliyat" },
  // { english: "economics", uzbek: "iqtisod" },
  // { english: "love", uzbek: "sevgi" },
  // { english: "internet", uzbek: "internet" },
  // { english: "television", uzbek: "televizor" },
  // { english: "library", uzbek: "kutubxona" },
  // { english: "nature", uzbek: "tabiat" },
  // { english: "fact", uzbek: "isbot" },
  // { english: "product", uzbek: "mahsulot" },
  // { english: "idea", uzbek: "g'oya" },
  // { english: "temperature", uzbek: "xarorat" },
  // { english: "invest", uzbek: "investitsiya" },
  // { english: "area", uzbek: "hudud" },
  // { english: "society", uzbek: "jamiyat" },
  // { english: "activity", uzbek: "faollik" },
  // { english: "story", uzbek: "ertak" },
  // { english: "industry", uzbek: "sanoat" },
  // { english: "media", uzbek: "media" },
  // { english: "thing", uzbek: "narsa" },
  // { english: "oven", uzbek: "duxovka" },
  // { english: "community", uzbek: "jamiyat" },
  // { english: "definition", uzbek: "tarif" },
  // { english: "safety", uzbek: "xavfsizlik" },
  // { english: "quality", uzbek: "sifat" },
  // { english: "development", uzbek: "rivojlanish" },
  // { english: "language", uzbek: "til" },
  // { english: "management", uzbek: "boshqaruv" },
  // { english: "player", uzbek: "o'yinchi" },
  // { english: "phone", uzbek: "telefon" },
  // { english: "video", uzbek: "video" },
  // { english: "week", uzbek: "hafta" },
  // { english: "security", uzbek: "xavfsizlik" },
  // { english: "country", uzbek: "mamlakat" },
  // { english: "exam", uzbek: "imtihon" },
  // { english: "movie", uzbek: "film" },
  // { english: "organization", uzbek: "tashkilot" },
  // { english: "equipment", uzbek: "jihoz" },
  // { english: "physics", uzbek: "fizika" },
  // { english: "analysis", uzbek: "analiz" },
  // { english: "policy", uzbek: "siyosat" },
  // { english: "series", uzbek: "serial" },
  // { english: "wall", uzbek: "devor" },
  // { english: "bee", uzbek: "ari" },
  // { english: "boyfriend", uzbek: "sevgan-yigit" },
  // { english: "direction", uzbek: "yo'nalish" },
  // { english: "strategy", uzbek: "strategiya" },
  // { english: "technology", uzbek: "texnologiya" },
  // { english: "army", uzbek: "armiya" },
  // { english: "camera", uzbek: "kamera" },
  // { english: "freedom", uzbek: "ozodlik" },
  // { english: "paper", uzbek: "qog'oz" },
  // { english: "environment", uzbek: "atmosfera" },
  // { english: "child", uzbek: "bola" },
  // { english: "instance", uzbek: "misol" },
  // { english: "month", uzbek: "oy" },
  // { english: "truth", uzbek: "haqiqat" },
  // { english: "marketing", uzbek: "marketing" },
  // { english: "university", uzbek: "universitet" },
  // { english: "writing", uzbek: "yozish" },
  // { english: "article", uzbek: "maqola" },
  // { english: "doll", uzbek: "qo'g'irchoq" },
  // { english: "difference", uzbek: "farq" },
  // { english: "goal", uzbek: "maqsad" },
  // { english: "news", uzbek: "yangilik" },
  // { english: "audience", uzbek: "tinglovchi" },
  // { english: "fishing", uzbek: "baliq-ovlash" },
  // { english: "growth", uzbek: "o'sish" },
  // { english: "income", uzbek: "kirim" },
  // // 100
  // { english: "marriage", uzbek: "uylanish" },
  // { english: "user", uzbek: "foydalanuvchi" },
  // { english: "combination", uzbek: "kombinatsiya" },
  // { english: "failure", uzbek: "mag'lub" },
  // { english: "meaning", uzbek: "ma'no" },
  // { english: "medicine", uzbek: "meditsina" },
  // { english: "philosophy", uzbek: "filosofiya" },
  // { english: "teacher", uzbek: "o'qtuvchi" },
  // { english: "communication", uzbek: "aloqa" },
  // { english: "night", uzbek: "tun" },
  // { english: "chemistry", uzbek: "kimyo" },
  // { english: "disease", uzbek: "kasallik" },
  // { english: "disk", uzbek: "" },
  // { english: "energy", uzbek: "energiya" },
  // { english: "nation", uzbek: "millat" },
  // { english: "road", uzbek: "yo'l" },
  // { english: "role", uzbek: "rol" },
  // { english: "soup", uzbek: "sho'rva" },
  // { english: "advertising", uzbek: "reklama" },
  // { english: "location", uzbek: "manzil" },
  // { english: "success", uzbek: "omad" },
  // { english: "addition", uzbek: "qo'shimcha" },
  // { english: "apartment", uzbek: "turar joy" },
  // { english: "education", uzbek: "ta'lim" },
  // { english: "math", uzbek: "matematika" },
  // { english: "moment", uzbek: "lahza" },
  // { english: "painting", uzbek: "rasm" },
  // { english: "politics", uzbek: "siyosat" },
  // { english: "attention", uzbek: "diqqat" },
  // { english: "decision", uzbek: "qaror" },
  // { english: "event", uzbek: "xodisa" },
  // { english: "property", uzbek: "mulk" },
  // { english: "shopping", uzbek: "xarid" },
  // { english: "student", uzbek: "student" },
  // { english: "wood", uzbek: "yog'och" },
  // { english: "competition", uzbek: "musobaqa" },
  // { english: "distribution", uzbek: "taqsimot" },
  // { english: "entertainment", uzbek: "ko'ngilxushlik" },
  // { english: "office", uzbek: "ofis" },
  // { english: "population", uzbek: "aholi" },
  // { english: "president", uzbek: "prezident" },
  // { english: "unit", uzbek: "qism" },
  // { english: "category", uzbek: "toifa" },
  // { english: "cigarette", uzbek: "sigaret" },
  // { english: "context", uzbek: "kontekst" },
  // { english: "introduction", uzbek: "tanishuv" },
  // { english: "opportunity", uzbek: "imkoniyat" },
  // { english: "performance", uzbek: "ijro" },
  // { english: "driver", uzbek: "haydovchi" },
  // { english: "flight", uzbek: "parvoz" },
  // { english: "length", uzbek: "uzunlik" },
  // { english: "magazine", uzbek: "jurnal" },
  // { english: "newspaper", uzbek: "gazeta" },
  // { english: "relationship", uzbek: "aloqa" },
  // { english: "teaching", uzbek: "o'qitish" },
  // { english: "cell", uzbek: "hujayra" },
  // { english: "dealer", uzbek: "diller" },
  // { english: "finding", uzbek: "topish" },
  // { english: "lake", uzbek: "ko'l" },
  // { english: "member", uzbek: "azo" },
  // { english: "message", uzbek: "xabar" },
  // { english: "scene", uzbek: "manzara" },
  // { english: "appearance", uzbek: "ko'rinish" },
  // { english: "association", uzbek: "assotsiatsiya" },
  // { english: "concept", uzbek: "tushuncha" },
  // { english: "customer", uzbek: "xaridor" },
  // { english: "death", uzbek: "o'lim" },
  // { english: "discussion", uzbek: "muhokama" },
  // { english: "housing", uzbek: "uy-joy" },
  // { english: "inflation", uzbek: "inflyatsiya" },
  // { english: "insurance", uzbek: "sug'urta" },
  // { english: "mood", uzbek: "kayfiyat" },
  // { english: "woman", uzbek: "ayol" },
  // { english: "advice", uzbek: "maslahat" },
  // { english: "blood", uzbek: "qon" },
  // { english: "effort", uzbek: "harakat" },
  // { english: "expression", uzbek: "ifoda" },
  // { english: "importance", uzbek: "muhimlik" },
  // { english: "opinion", uzbek: "fikr" },
  // { english: "payment", uzbek: "to'lov" },
  // { english: "reality", uzbek: "haqiqat" },
  // { english: "responsibility", uzbek: "mas'uliyat" },
  // { english: "situation", uzbek: "vaziyat" },
  // { english: "skill", uzbek: "mahorat" },
  // { english: "statement", uzbek: "bayonot" },
  // { english: "wealth", uzbek: "boylik" },
  // { english: "application", uzbek: "ariza" },
  // { english: "city", uzbek: "shahar" },
  // { english: "county", uzbek: "tuman" },
  // { english: "depth", uzbek: "chuqurlik" },
  // { english: "estate", uzbek: "mulk" },
  // { english: "foundation", uzbek: "asos" },
  // { english: "grandmother", uzbek: "momo" },
  // { english: "heart", uzbek: "yurak" },
  // { english: "perspective", uzbek: "istiqbol" },
  // { english: "photo", uzbek: "surat" },
  // { english: "recipe", uzbek: "retsept" },
  // { english: "studio", uzbek: "studia" },
  // { english: "topic", uzbek: "mavzu" },
  // { english: "lection", uzbek: "to'plam" },
  // // 200
  // { english: "depression", uzbek: "depressiya" },
  // { english: "imagination", uzbek: "tasavvur" },
  // { english: "passion", uzbek: "ehtiros" },
  // { english: "percentage", uzbek: "foiz" },
  // { english: "resource", uzbek: "resurs" },
  // { english: "setting", uzbek: "sozlam" },
  // { english: "ad", uzbek: "reklama" },
  // { english: "agency", uzbek: "agentlik" },
  // { english: "college", uzbek: "kollej" },
  // { english: "connection", uzbek: "ulanish" },
  // { english: "criticism", uzbek: "tanqid" },
  // { english: "debt", uzbek: "qarz" },
  // { english: "description", uzbek: "tavsif" },
  // { english: "memory", uzbek: "xotira" },
  // { english: "patience", uzbek: "sabr" },
  // { english: "secretary", uzbek: "kotib" },
  // { english: "solution", uzbek: "yechim" },
  // { english: "administration", uzbek: "boshqaruv" },
  // { english: "aspect", uzbek: "aspekt" },
  // { english: "attitude", uzbek: "munosabat" },
  // { english: "director", uzbek: "direktor" },
  // { english: "personality", uzbek: "shaxs" },
  // { english: "psychology", uzbek: "psixologiya" },
  // { english: "recommendation", uzbek: "tavsiya" },
  // { english: "response", uzbek: "javob" },
  // { english: "selection", uzbek: "tanlash" },
  // { english: "storage", uzbek: "saqlash" },
  // { english: "version", uzbek: "versiya" },
  // { english: "alcohol", uzbek: "alkogol" },
  // { english: "argument", uzbek: "argument" },
  // { english: "complaint", uzbek: "shikoyat" },
  // { english: "contract", uzbek: "shartnoma" },
  // { english: "emphasis", uzbek: "urg'u" },
  // { english: "highway", uzbek: "avtomagistral" },
  // { english: "loss", uzbek: "yo'qotish" },
  // { english: "membership", uzbek: "azolik" },
  // { english: "possession", uzbek: "egalik" },
  // { english: "preparation", uzbek: "tayyorlash" },
  // { english: "steak", uzbek: "steyk" },
  // { english: "union", uzbek: "birlashma" },
  // { english: "agreement", uzbek: "kelishuv" },
  // { english: "cancer", uzbek: "saraton" },
  // { english: "currency", uzbek: "valyuta" },
  // { english: "employment", uzbek: "ish" },
  // { english: "engineering", uzbek: "muhandislik" },
  // { english: "entry", uzbek: "kirish" },
  // { english: "interaction", uzbek: "o'zaro ta'sir" },
  // { english: "mixture", uzbek: "aralashma" },
  // { english: "preference", uzbek: "afzal" },
  // { english: "region", uzbek: "hudud" },
  // { english: "republic", uzbek: "respublika" },
  // { english: "tradition", uzbek: "an'ana" },
  // { english: "virus", uzbek: "virus" },
  // { english: "actor", uzbek: "aktyor" },
  // { english: "classroom", uzbek: "sinfxona" },
  // { english: "delivery", uzbek: "yetkazib berish" },
  // { english: "device", uzbek: "qurilma" },
  // { english: "difficulty", uzbek: "qiyinchilik" },
  // { english: "drama", uzbek: "drama" },
  // { english: "election", uzbek: "saylov" },
  // { english: "engine", uzbek: "dvigatel" },
  // { english: "football", uzbek: "futbol" },
  // { english: "guidance", uzbek: "hidoyat" },
  // { english: "hotel", uzbek: "mehmonxona" },
  // { english: "owner", uzbek: "egasi" },
  // { english: "priority", uzbek: "ustuvorlik" },
  // { english: "protection", uzbek: "himoya" },
  // { english: "suggestion", uzbek: "taklif" },
  // { english: "tension", uzbek: "kuchlanish" },
  // { english: "variation", uzbek: "variatsiya" },
  // { english: "anxiety", uzbek: "tashvish" },
  // { english: "atmosphere", uzbek: "atmosfera" },
  // { english: "awareness", uzbek: "xabardorlik" },
  // { english: "bath", uzbek: "hammom" },
  // { english: "bread", uzbek: "non" },
  // { english: "candidate", uzbek: "nomzod" },
  // { english: "climate", uzbek: "iqlim" },
  // { english: "comparison", uzbek: "qiyoslash" },
  // { english: "confusion", uzbek: "chalkashlik" },
  // { english: "construction", uzbek: "qurilish" },
  // { english: "elevator", uzbek: "lift" },
  // { english: "emotion", uzbek: "his-tuyg'u" },
  // { english: "employee", uzbek: "xodim" },
  // { english: "employer", uzbek: "ish beruvchi" },
  // { english: "guest", uzbek: "mehmon" },
  // { english: "height", uzbek: "balandlik" },
  // { english: "leadership", uzbek: "rahbarlik" },
  // { english: "mall", uzbek: "savdo markazi" },
  // { english: "manager", uzbek: "boshqaruvchi" },
  // { english: "operation", uzbek: "operatsiya" },
  // { english: "recording", uzbek: "yozuv" },
  // { english: "sample", uzbek: "namuna" },
  // { english: "transportation", uzbek: "transport" },
  // { english: "charity", uzbek: "xayriya" },
  // { english: "cousin", uzbek: "bo'la" },
  // { english: "disaster", uzbek: "ofat" },
  // { english: "editor", uzbek: "muharrir" },
  // { english: "efficiency", uzbek: "samaradorlik" },
  // { english: "excitement", uzbek: "hayajon" },
  // { english: "extent", uzbek: "daraja" },
  // 300
  // { english: "feedback", uzbek: "fikr" },
  // { english: "guitar", uzbek: "gitara" },
  // { english: "homework", uzbek: "uy vazifa" },
  // { english: "leader", uzbek: "yetakchi" },
  // { english: "mom", uzbek: "ona" },
  // { english: "outcome", uzbek: "natija" },
  // { english: "permission", uzbek: "ruxsat" },
  // { english: "presentation", uzbek: "taqdimot" },
  // { english: "promotion", uzbek: "ko'tarish" },
  // { english: "school", uzbek: "maktab" },
  // { english: "refrigerator", uzbek: "muzlatgich" },
  // { english: "name", uzbek: "ism" },
  // { english: "revenue", uzbek: "daromad" },
  // { english: "session", uzbek: "sessiya" },
  // { english: "singer", uzbek: "qo'shiqchi" },
  // { english: "tennis", uzbek: "tennis" },
  // { english: "basket", uzbek: "savat" },
  // { english: "bonus", uzbek: "bonus" },
  // { english: "cabinet", uzbek: "kabinet" },
  // { english: "childhood", uzbek: "bolalik" },
  // { english: "church", uzbek: "cherkov" },
  // { english: "clothes", uzbek: "kiyim" },
  // { english: "coffee", uzbek: "kofe" },
  // { english: "dinner", uzbek: "kechki ovqat" },
  // { english: "drawing", uzbek: "chizma" },
  // { english: "hair", uzbek: "soch" },
  // { english: "hearing", uzbek: "eshitish" },
  // { english: "initiative", uzbek: "tashabbus" },
  // { english: "judgment", uzbek: "hukm" },
  // { english: "bear", uzbek: "ayiq" },
  // { english: "measurement", uzbek: "o'lchov" },
  // { english: "mode", uzbek: "rejim" },
  // { english: "mud", uzbek: "loy" },
  // { english: "orange", uzbek: "apelsin" },
  // { english: "poetry", uzbek: "she'riyat" },
  // { english: "police", uzbek: "politsiya" },
  // { english: "possibility", uzbek: "mumkin" },
  // { english: "procedure", uzbek: "tartib" },
  // { english: "queen", uzbek: "malika" },
  // { english: "ratio", uzbek: "nisbat" },
  // { english: "relation", uzbek: "munosabat" },
  // { english: "dear", uzbek: "qadrdon" },
  // { english: "satisfaction", uzbek: "qoniqish" },
  // { english: "female", uzbek: "ayol" },
  // { english: "signature", uzbek: "imzo" },
  // { english: "significance", uzbek: "ahamyat" },
  // { english: "song", uzbek: "qo'shiq" },
  // { english: "tooth", uzbek: "tish" },
  // { english: "town", uzbek: "shahar" },
  // { english: "vehicle", uzbek: "avtomobil" },
  // { english: "volume", uzbek: "jild" },
  // { english: "wife", uzbek: "xotin" },
  // { english: "hurry", uzbek: "shoshilish" },
  // { english: "appointment", uzbek: "tayinlash" },
  // { english: "arrival", uzbek: "kelish" },
  // { english: "assumption", uzbek: "faraz" },
  // { english: "key", uzbek: "kalit" },
  // { english: "chapter", uzbek: "bob" },
  // { english: "committee", uzbek: "qo'mita" },
  // { english: "conversation", uzbek: "suhbat" },
  // { english: "database", uzbek: "ma'lumotlar bazasi" },
  // { english: "enthusiasm", uzbek: "ishtiyoq" },
  // { english: "error", uzbek: "xato" },
  // { english: "explanation", uzbek: "tushuntirish" },
  // { english: "word", uzbek: "so'z" },
  // { english: "gate", uzbek: "darvoza" },
  // { english: "girl", uzbek: "qiz" },
  // { english: "hall", uzbek: "zal" },
  // { english: "historian", uzbek: "tarixchi" },
  // { english: "hospital", uzbek: "kasalxona" },
  // { english: "injury", uzbek: "jarohat" },
  // { english: "instruction", uzbek: "ko'rsatma" },
  // { english: "punch", uzbek: "musht" },
  // { english: "stupid", uzbek: "axmoq" },
  // { english: "meal", uzbek: "taom" },
  // { english: "perception", uzbek: "idrok" },
  // { english: "pie", uzbek: "piroq" },
  // { english: "poem", uzbek: "she'r" },
  // { english: "tear", uzbek: "ko'z yosh" },
  // { english: "proposal", uzbek: "taklif" },
  // { english: "reception", uzbek: "qabul" },
  // { english: "tomorrow", uzbek: "ertaga" },
  // { english: "revolution", uzbek: "inqilob" },
  // { english: "river", uzbek: "daryo" },
  // { english: "song", uzbek: "qo'shiq" },
  // { english: "speech", uzbek: "nutq" },
  // { english: "tea", uzbek: "choy" },
  // { english: "village", uzbek: "qishloq" },
  // { english: "warning", uzbek: "ogohlantirish" },
  // { english: "winner", uzbek: "g'olib" },
  // { english: "worker", uzbek: "ishchi" },
  // { english: "writer", uzbek: "yozuvchi" },
  // { english: "assistance", uzbek: "yordam" },
  // { english: "breath", uzbek: "nafas" },
  // { english: "buyer", uzbek: "xaridor" },
  // { english: "chest", uzbek: "ko'krak" },
  // { english: "risk", uzbek: "xavf" },
  // { english: "conclusion", uzbek: "xulosa" },
  // { english: "contribution", uzbek: "hissa" },
  // { english: "yesterday", uzbek: "kecha" },
  // { english: "courage", uzbek: "jasorat" },
  // { english: "dad", uzbek: "dada" },
  // { english: "desk", uzbek: "ish stoli" },
  // { english: "drawer", uzbek: "tortma" },
  // { english: "establishment", uzbek: "muassasa" },
  // { english: "examination", uzbek: "imtihon" },
  // { english: "garbage", uzbek: "axlat" },
  // { english: "honey", uzbek: "asal" },
  // { english: "impression", uzbek: "taassurot" },
  // { english: "improvement", uzbek: "takomillash" },
  // { english: "independence", uzbek: "mustaqillik" },
  // { english: "insect", uzbek: "hashorat" },
  // { english: "inspection", uzbek: "tekshiruv" },
  // { english: "king", uzbek: "shoh" },
  // { english: "ladder", uzbek: "narvon" },
  // { english: "potato", uzbek: "kartoshka" },
  // { english: "profession", uzbek: "kasb" },
  // { english: "quantity", uzbek: "miqdor" },
  // { english: "reaction", uzbek: "aks-sado" },
  // { english: "requirement", uzbek: "talab" },
  // { english: "tongue", uzbek: "til" },
  // { english: "weakness", uzbek: "zaiflik" },
  // { english: "wedding", uzbek: "to'y" },
  // { english: "affair", uzbek: "ish" },
  // { english: "ambition", uzbek: "ambitsiya" },
  // { english: "assignment", uzbek: "topshiriq" },
  // { english: "assistant", uzbek: "yordamchi" },
  // { english: "celebration", uzbek: "nishonlash" },
  // { english: "curtain", uzbek: "parda" },
  // { english: "diamond", uzbek: "olmos" },
  // { english: "dirt", uzbek: "kir" },
  // { english: "ear", uzbek: "quloq" },
  // { english: "fortune", uzbek: "omad" },
  // { english: "friendship", uzbek: "do'stlik" },
  // { english: "wall", uzbek: "devor" },
  // { english: "gene", uzbek: "gen" },
  // { english: "girlfriend", uzbek: "sevgan qiz" },
  // { english: "hat", uzbek: "shlyapa" },
  // { english: "indication", uzbek: "ko'rsatma" },
  // { english: "intention", uzbek: "niyat" },
  // { english: "lady", uzbek: "xonim" },
  // { english: "negotiation", uzbek: "muzokara" },
  // { english: "obligation", uzbek: "majburiyat" },
  // { english: "passenger", uzbek: "yo'lovchi" },
  // { english: "pizza", uzbek: "pitsa" },
  // { english: "platform", uzbek: "platforma" },
  // { english: "poet", uzbek: "shoir" },
  // { english: "pollution", uzbek: "ifloslanish" },
  // { english: "recognition", uzbek: "tan olish" },
  // { english: "reputation", uzbek: "obro'" },
  // { english: "shirt", uzbek: "ko'ylak" },
  // { english: "speaker", uzbek: "spekr" },
  // { english: "stranger", uzbek: "begona" },
  // { english: "surgery", uzbek: "jarrohlik" },
  // { english: "sympathy", uzbek: "hamsardlik" },
  // { english: "tale", uzbek: "ertak" },
  // { english: "rat", uzbek: "kalamush" },
  // { english: "trainer", uzbek: "trener" },
  // { english: "uncle", uzbek: "amaki" },
  // { english: "youth", uzbek: "yoshlar" },
  // { english: "time", uzbek: "vaqt" },
  // { english: "work", uzbek: "ish" },
  // { english: "water", uzbek: "suv" },
  // { english: "money", uzbek: "pul" },
  // { english: "example", uzbek: "misol" },
  // { english: "while", uzbek: "shamolda" },
  // { english: "game", uzbek: "o'yin" },
  // { english: "life", uzbek: "hayot" },
  // { english: "form", uzbek: "shakl" },
  // { english: "air", uzbek: "havo" },
  // { english: "day", uzbek: "kun" },
  // { english: "place", uzbek: "joy" },
  // { english: "part", uzbek: "qism" },
  // { english: "field", uzbek: "dala" },
  // { english: "fish", uzbek: "baliq" },
  // { english: "back", uzbek: "orqa" },
  // { english: "process", uzbek: "jarayon" },
  // { english: "heat", uzbek: "issiqlik" },
  // { english: "hand", uzbek: "qo'l" },
  // { english: "experience", uzbek: "tajriba" },
  // { english: "job", uzbek: "ish" },
  // { english: "book", uzbek: "kitob" },
  // { english: "end", uzbek: "oxir" },
  // { english: "point", uzbek: "nuqta" },
  // { english: "type", uzbek: "tur" },
  // { english: "home", uzbek: "uy" },
  // { english: "economy", uzbek: "iqtisod" },
  // { english: "value", uzbek: "qiymat" },
  // { english: "body", uzbek: "tana" },
  // { english: "market", uzbek: "bozor" },
  // { english: "guide", uzbek: "yo'riqnoma" },
  // { english: "interest", uzbek: "qiziqish" },
  // { english: "state", uzbek: "davlat" },
  // { english: "course", uzbek: "kurs" },
  // { english: "company", uzbek: "kompaniya" },
  // { english: "price", uzbek: "narx" },
  // { english: "mind", uzbek: "aql" },
  // { english: "trade", uzbek: "savdo" },
  // { english: "care", uzbek: "g'amxo'rlik" },
  // { english: "group", uzbek: "guruh" },
];
