const adjectives = [
  // { english: "icy", uzbek: "muzli" },
  // { english: "madly", uzbek: "aqldan ozgan" },
  // { english: "sweet", uzbek: "shirin" },
  // { english: "able", uzbek: "qodir" },
  // { english: "natural", uzbek: "tabiy" },
  // { english: "ready", uzbek: "tayyor" },
  // { english: "mean", uzbek: "anglatadi" },
  // { english: "young", uzbek: "yosh" },
  // { english: "narrow", uzbek: "tor" },
  // { english: "shaky", uzbek: "titroqli" },
  // { english: "sour", uzbek: "nordon" },
  // { english: "ceaseless", uzbek: "tinimsiz" },
  // { english: "delicious", uzbek: "mazali" },
  // { english: "regular", uzbek: "muntazam" },
  // { english: "living", uzbek: "jonli" },
  // { english: "adventurous", uzbek: "sarguzashtli" },
  // { english: "lonely", uzbek: "yolg'iz" },
  // { english: "whole", uzbek: "butun" },
  // { english: "past", uzbek: "o'tgan" },
  // { english: "organic", uzbek: "organik" },
  { english: "internal", uzbek: "ichki" },
  // { english: "few", uzbek: "oz" },
  { english: "concerned", uzbek: "tashvishli" },
  // { english: "complete", uzbek: "to'liq" },
  { english: "illegal", uzbek: "noqonuniy" },
  // { english: "bad", uzbek: "yomon" },
  // { english: "unnatural", uzbek: "notabiiy" },
  // { english: "likeable", uzbek: "yoqimli" },
  // { english: "best", uzbek: "eng yaxshi" },
  // { english: "perfect", uzbek: "mukammal" },
  // { english: "messy", uzbek: "tartibsiz" },
  { english: "noisy", uzbek: "shovqinli" },
  // { english: "dull", uzbek: "zerikarli" },
  // { english: "second", uzbek: "ikkinchi" },
  // { english: "efficient", uzbek: "samarali" },
  { english: "testy", uzbek: "mazali" },
  { english: "irritable", uzbek: "asabiy" },
  // { english: "worried", uzbek: "xavotirli" },
  // { english: "black", uzbek: "qora" },
  // { english: "neighborly", uzbek: "qo'shnichilik" },
  // { english: "shiny", uzbek: "yaltiroq" },
  // { english: "dangerous", uzbek: "xavfli" },
  // { english: "lively", uzbek: "jonli" },
  // { english: "quickest", uzbek: "eng tez" },
  // { english: "many", uzbek: "ko'p" },
  // { english: "closed", uzbek: "yopiq" },
  { english: "military", uzbek: "harbiy" },
  // { english: "smiling", uzbek: "tabassum" },
  // { english: "female", uzbek: "ayol" },
  { english: "certain", uzbek: "aniq" },
  { english: "attractive", uzbek: "jozibali" },
  { english: "cooing", uzbek: "pishirilgan" },
  { english: "gorgeous", uzbek: "chiroyli" },
  { english: "magnificent", uzbek: "ajoyib" },
  // { english: "learned", uzbek: "o'rgangan" },
  // { english: "solid", uzbek: "mustahkam" },
  { english: "ordinary", uzbek: "oddiy" },
  { english: "chief", uzbek: "shef" },
  // { english: "talented", uzbek: "qobiliyatli" },
  // { english: "livid", uzbek: "jonli" },
  // { english: "chemical", uzbek: "kimyoviy" },
  // { english: "successful", uzbek: "omadli" },
  { english: "bouncy", uzbek: "chaqqon" },
  { english: "damaging", uzbek: "zararli" },
  { english: "absent", uzbek: "yo'q" },
  // { english: "real", uzbek: "haqiqiy" },
  { english: "telling", uzbek: "aytib" },
  { english: "rabid", uzbek: "quturgan" },
  { english: "outgoing", uzbek: "chiquvchi" },

  // { english: "mature", uzbek: "pishgan" },
  // { english: "cloudy", uzbek: "bulutli" },
  // { english: "odd", uzbek: "g‘alati" },
  // { english: "fearless", uzbek: "qo‘rqmas" },
  // { english: "abnormal", uzbek: "g‘ayritabiiy" },
  // { english: "fearful", uzbek: "qo‘rqoq" },
  // { english: "halting", uzbek: "to‘xtagan" },
  // { english: "general", uzbek: "umumiy" },
  // { english: "utter", uzbek: "butkul" },
  // { english: "unsuitable", uzbek: "yaroqsiz" },
  // { english: "rainy", uzbek: "yomg‘irli" },
  // { english: "comfortable", uzbek: "qulay" },
  // { english: "caring", uzbek: "g‘amxo‘r" },
  // { english: "wild", uzbek: "yovvoyi" },
  // { english: "kindly", uzbek: "mehribon" },
  // { english: "wonderful", uzbek: "ajoyib" },
  // { english: "accessible", uzbek: "yaroqli" },
  // { english: "unknown", uzbek: "noma'lum" },
  // { english: "windy", uzbek: "shamolli" },
  // { english: "permissible", uzbek: "ruxsat beriladigan" },
  // { english: "imperfect", uzbek: "nomukammal" },
  // { english: "steady", uzbek: "barqaror" },
  // { english: "flat", uzbek: "tekis" },
  // { english: "wrong", uzbek: "xato" },
  // { english: "hurt", uzbek: "siqilgan" },
  // { english: "quick", uzbek: "tez" },
  // { english: "damaged", uzbek: "zararli" },
  // { english: "curious", uzbek: "qiziquvchan" },
  // { english: "milky", uzbek: "sutli" },
  // { english: "infamous", uzbek: "noma'lum" },
  // { english: "stormy", uzbek: "bo‘ronli" },
  // { english: "convincing", uzbek: "ishonarli" },
  // { english: "yummy", uzbek: "mazali" },
  // { english: "long-term", uzbek: "uzoq muddatli" },
  // { english: "confused", uzbek: "chalkash" },
  // { english: "thoughtless", uzbek: "o‘ylamasdan" },
  // { english: "habitual", uzbek: "odatiy" },
  // { english: "clumsy", uzbek: "beadab" },
  // { english: "nosy", uzbek: "shovqinli" },
  // { english: "fancy", uzbek: "g‘alati" },
  // { english: "old-fashioned", uzbek: "eski urfli" },
  // { english: "half", uzbek: "yarim" },
  // { english: "unhealthy", uzbek: "nosog'lom" },
  // { english: "receptive", uzbek: "qabul qiluvchi" },
  // { english: "periodic", uzbek: "davriy" },
  // { english: "anxious", uzbek: "xursand" },
  // { english: "used", uzbek: "ishlatilgan" },
  // { english: "sparkling", uzbek: "uchqunli" },
  // { english: "long", uzbek: "uzun" },
  // { english: "happy", uzbek: "xursand" },
  // { english: "grubby", uzbek: "kir" },
  // { english: "delicate", uzbek: "nozik" },
  // { english: "aback", uzbek: "hayratda qoldiradigan" },
  // { english: "fascinate", uzbek: "o'ziga tortgan" },
  // { english: "fascinated", uzbek: "jalb qilgan" },
  // { english: "quiet", uzbek: "sokin" },
  // { english: "ugliest", uzbek: "eng xunuk" },
  // { english: "detailed", uzbek: "batafsil" },
  // { english: "normal", uzbek: "o'rtacha" },
  // { english: "best", uzbek: "eng yaxshi" },
  // { english: "actually", uzbek: "asil" },
  // { english: "brief", uzbek: "qisqacha" },
  // { english: "parallel", uzbek: "paralel" },
  // { english: "nice", uzbek: "yaxshi" },
  // { english: "clear", uzbek: "toza" },
  // { english: "boiling", uzbek: "qaynagan" },
  // { english: "nasty", uzbek: "yomon" },
  // { english: "violent", uzbek: "zo'ravonlik" },
  // { english: "various", uzbek: "turli xil" },
  // { english: "watery", uzbek: "suvli" },
  // { english: "blue", uzbek: "ko'k" },
  // { english: "good", uzbek: "yaxshi" },
  // { english: "marvelous", uzbek: "ajoyib" },
  // { english: "thankful", uzbek: "minnatdor" },
  // { english: "naive", uzbek: "sodda" },
  // { english: "boring", uzbek: "zerikarli" },
  // { english: "appetizing", uzbek: "ishtaxa ochuvchi" },
  // { english: "scary", uzbek: "qo'rqinchli" },
  // { english: "incredible", uzbek: "aqlga sig'mas" },
  // { english: "outstanding", uzbek: "alohida" },
  // { english: "violet", uzbek: "binafsha" },
  // { english: "needless", uzbek: "keraksiz" },
  // { english: "undesirable", uzbek: "istalmagan" },
  // { english: "better", uzbek: "yaxshiroq" },
  // { english: "hungry", uzbek: "och" },
  // { english: "thoughtful", uzbek: "chuqur o'ylangan" },
  // { english: "low", uzbek: "past" },
  // { english: "annoyed", uzbek: "asabiylashgan" },
  // { english: "satisfying", uzbek: "qoniqtiradigan" },
  // { english: "familiar", uzbek: "tanish" },
  // { english: "careful", uzbek: "ehtiyotkor" },
  // { english: "lumpy", uzbek: "dona" },
  // { english: "optimal", uzbek: "optimal" },
  // { english: "peaceful", uzbek: "tinchi" },
  // { english: "succulent", uzbek: "shirali" },
  // { english: "sticky", uzbek: "yopishqoq" },
  // { english: "lazy", uzbek: "dangasa" },
  // { english: "ragged", uzbek: "yirtilgan" },
  // { english: "hurried", uzbek: "shoshilinch" },
  // { english: "bitter", uzbek: "achchiq" },
  // { english: "itchy", uzbek: "qichishish" },
  // { english: "unable", uzbek: "qodir emas" },
  // { english: "tight", uzbek: "qattiq" },
  // { english: "educated", uzbek: "bilimli" },
  // { english: "muddy", uzbek: "loyiq" },
  // { english: "wet", uzbek: "ho'l" },
  // { english: "conscious", uzbek: "ongli" },
  // { english: "vivid", uzbek: "jonli" },
  // { english: "moral", uzbek: "axloqiy" },
  // { english: "icky", uzbek: "jirkanch" },
  // { english: "famous", uzbek: "mashhur" },
  // { english: "unkempt", uzbek: "beg'ubor" },
  // { english: "wasteful", uzbek: "isrofgar" },
  // { english: "ugly", uzbek: "xunuk" },
  // { english: "mundane", uzbek: "dunyoviy" },
  // { english: "lyrical", uzbek: "lirik" },
  // { english: "mammoth", uzbek: "juda katta" },
  // { english: "elderly", uzbek: "keksa" },
  // { english: "youthful", uzbek: "yosh" },
  // { english: "abstracted", uzbek: "mavhum" },
  // { english: "kind", uzbek: "tur" },
  // { english: "tasteless", uzbek: "tamsiz" },
  // { english: "muddled", uzbek: "tushunarsiz" },
  // { english: "near", uzbek: "yaqin" },
  // { english: "rough", uzbek: "qo'pol" },
  // { english: "aggressive", uzbek: "agressiv" },
  // { english: "fantastic", uzbek: "fantastik" },
  // { english: "precious", uzbek: "qimmatli" },
  // { english: "opposite", uzbek: "qarama-qarshi" },
  // { english: "fair", uzbek: "adolatlilikka asoslangan" },
  // { english: "combative", uzbek: "jangovar" },
  // { english: "bored", uzbek: "zerikkan" },
  // { english: "sore", uzbek: "og'riq" },
  // { english: "whispering", uzbek: "shivirlayotgan" },
  // { english: "acceptable", uzbek: "qabul qilinadigan" },
  // { english: "excited", uzbek: "xayajonlangan" },
  // { english: "superior", uzbek: "ustun" },
  // { english: "neat", uzbek: "toza" },
  // { english: "melted", uzbek: "eritilgan" },
  // { english: "loose", uzbek: "bo'sh" },
  // { english: "wealthy", uzbek: "boy" },
  // { english: "absently", uzbek: "parishonxotir" },
  // { english: "lean", uzbek: "ozg'in" },
  // { english: "workable", uzbek: "ishlashga yaroqli" },
  // { english: "heartbreaking", uzbek: "yurakni ezuvchi" },
  // { english: "strange", uzbek: "g'alati" },
  // { english: "round", uzbek: "aylana" },
  // { english: "untidy", uzbek: "tartibsiz" },
  // { english: "broad", uzbek: "keng" },
  // { english: "mistaken", uzbek: "xato" },
  // { english: "bright", uzbek: "yorqin" },
  // { english: "accidental", uzbek: "tasodifiy" },
  // { english: "short", uzbek: "qisqa" },
  // { english: "great", uzbek: "buyuk" },
  // { english: "changeable", uzbek: "o'zgaruvchan" },
  // { english: "brilliant", uzbek: "juda zo'r" },
  // { english: "legal", uzbek: "qonuniy" },
  // { english: "juicy", uzbek: "suvli" },
  // { english: "tall", uzbek: "uzun" },
  // { english: "noiseless", uzbek: "shovqinsiz" },
  // { english: "unarmed", uzbek: "qurolsiz" },
  // { english: "brown", uzbek: "jigarrang" },
  // { english: "little", uzbek: "ozgina" },
  // { english: "deep", uzbek: "chuqur" },
  // { english: "aboard", uzbek: "chuqur" },
  // { english: "short", uzbek: "kalta" },
  // { english: "long", uzbek: "uzun" },
  // { english: "modern", uzbek: "zamonaviy" },
  // { english: "obsolete", uzbek: "eskirgan" },
  // { english: "married", uzbek: "uylangan" },
  // { english: "entertaining", uzbek: "ko'ngilochar" },
  // { english: "old", uzbek: "eski" },
  // { english: "imaginary", uzbek: "xayoliy" },
  // { english: "average", uzbek: "o'rtacha" },
  // { english: "necessary", uzbek: "kerakli" },
  // { english: "tense", uzbek: "zamon" },
  // { english: "fat", uzbek: "semiz" },
  // { english: "tasty", uzbek: "mazali" },
  // { english: "troubled", uzbek: "muammoli" },
  // { english: "near", uzbek: "yaqin" },
  // { english: "good", uzbek: "yaxshi" },
  // { english: "new", uzbek: "yangi" },
  // { english: "horrible", uzbek: "daxshatli" },
  // { english: "fast", uzbek: "tez" },
  // { english: "grey", uzbek: "kulrang" },
  // { english: "helpless", uzbek: "yordamsiz" },
  // { english: "melodic", uzbek: "melodik" },
  // { english: "stunning", uzbek: "ajoyib" },
  // { english: "marked", uzbek: "belgilangan" },
  // { english: "lovely", uzbek: "sevimli" },
  // { english: "clever", uzbek: "aqlli" },
  // { english: "uttermost", uzbek: "eng" },
  // { english: "enormous", uzbek: "ulkan" },
  // { english: "lucky", uzbek: "omadli" },
  // { english: "grateful", uzbek: "minnatdor" },
  // { english: "hard", uzbek: "qattiq" },
  // { english: "unequal", uzbek: "tengsiz" },
  // { english: "bright", uzbek: "yorqin" },
  // { english: "nice", uzbek: "yaxshi" },
  // { english: "beneficial", uzbek: "foydali" },
  // { english: "huge", uzbek: "ulkan" },
  // { english: "energetic", uzbek: "baquvvat" },
  // { english: "encouraging", uzbek: "rag'batlantiruvchi" },
  // { english: "earthy", uzbek: "tuproqli" },
  // { english: "unusual", uzbek: "g'ayrioddiy" },
  // { english: "colorful", uzbek: "rangli" },
  // { english: "cool", uzbek: "salqin" },
  // { english: "open", uzbek: "ochiq" },
  // { english: "hot", uzbek: "issiq" },
  // { english: "known", uzbek: "ma'lum" },
  // { english: "knowing", uzbek: "bilish" },
  // { english: "proud", uzbek: "g'ururli" },
  // { english: "electric", uzbek: "elektr" },
  // { english: "far", uzbek: "uzoqlik" },
  // { english: "fresh", uzbek: "sof" },
  // { english: "weak", uzbek: "zaif" },
  // { english: "wet", uzbek: "nam" },
  // { english: "irritating", uzbek: "bezovta qiluvchi" },
  // { english: "brave", uzbek: "jasur" },
  // { english: "jumpy", uzbek: "sakrovchi" },
  // { english: "measly", uzbek: "qizilcha" },
  // { english: "momentous", uzbek: "muhim" },
  // { english: "ill", uzbek: "kasal" },
  // { english: "mellow", uzbek: "yumshoq" },
  // { english: "impolite", uzbek: "odobsiz" },
  // { english: "kindly", uzbek: "mehribon" },
  // { english: "red", uzbek: "qizil" },
  // { english: "wide", uzbek: "keng" },
  // { english: "large", uzbek: "katta" },
  // { english: "calm", uzbek: "bosiq" },
  // { english: "empty", uzbek: "bo'sh" },
  // { english: "fearful", uzbek: "qo'rqoq" },
  // { english: "waiting", uzbek: "kutish" },
  // { english: "top", uzbek: "baland" },
  // { english: "bloody", uzbek: "qonli" },
  // { english: "hard", uzbek: "qattiq" },
  // { english: "alive", uzbek: "tirik" },
  // { english: "impressionable", uzbek: "ta'sirchan" },
  // { english: "sharp", uzbek: "o'tkir" },
  // { english: "healthy", uzbek: "sog'lom" },
  // { english: "eatable", uzbek: "yeyiladigan" },
  // { english: "boring", uzbek: "zerikarli" },
  // { english: "spicy", uzbek: "achchiq" },
  // { english: "ancient", uzbek: "qadimgi" },
  // { english: "deeply", uzbek: "chuqur" },
  // { english: "final", uzbek: "oxirgi" },
  // { english: "versed", uzbek: "bilimli" },
  // { english: "unwritten", uzbek: "yozilmagan" },
  // { english: "broken", uzbek: "buzilgan" },
  // { english: "defective", uzbek: "nuqsonli" },
  // { english: "mental", uzbek: "aqliy" },
  // { english: "wrathful", uzbek: "g'azabli" },
  // { english: "salty", uzbek: "sho'r" },
  // { english: "average", uzbek: "o'rtacha" },
  // { english: "onerous", uzbek: "og'ir" },
  // { english: "flat", uzbek: "tekis" },
  // { english: "interesting", uzbek: "qiziq" },
  // { english: "major", uzbek: "muhim" },
  // { english: "impossible", uzbek: "mumkin emas" },
  // { english: "reassured", uzbek: "ishontiradigan" },
  // { english: "late", uzbek: "kech" },
  // { english: "handy", uzbek: "qulay" },
  // { english: "amused", uzbek: "quvnoq" },
  // { english: "basic", uzbek: "asosiy" },
  // { english: "easy", uzbek: "oson" },
  // { english: "gray", uzbek: "kulrang" },
  // { english: "capable", uzbek: "qodir" },
  // { english: "certain", uzbek: "shubhasiz" },
  // { english: "smooth", uzbek: "silliq" },
  // { english: "valuable", uzbek: "qimmatli" },
  // { english: "costly", uzbek: "qimmat" },
  // { english: "imported", uzbek: "import qilingan" },
  // { english: "equal", uzbek: "teng" },
  // { english: "far", uzbek: "uzoq" },
  // { english: "empty", uzbek: "bo'sh" },
  // { english: "upset", uzbek: "xafa" },
  // { english: "white", uzbek: "oq" },
  // { english: "venomous", uzbek: "zaharli" },
  // { english: "well-groomed", uzbek: "yaxshi ishlangan" },
  // { english: "silky", uzbek: "ipak" },
  // { english: "honorable", uzbek: "hurmatli" },
  // { english: "scandalous", uzbek: "janjalli" },
  // { english: "important", uzbek: "muhim" },
  // { english: "complex", uzbek: "murakkab" },
  // { english: "clever", uzbek: "aqlli" },
  // { english: "green", uzbek: "yashil" },
  // { english: "steep", uzbek: "tik" },
  // { english: "cut", uzbek: "kesilgan" },
  // { english: "useless", uzbek: "foydasiz" },
  // { english: "common", uzbek: "umumiy" },
  // { english: "worthless", uzbek: "qiymatsiz" },
  // { english: "astonishing", uzbek: "hayratlanarli" },
  // { english: "vast", uzbek: "keng" },
  // { english: "light", uzbek: "yorug'" },
  // { english: "historical", uzbek: "tarixiy" },
  // { english: "next", uzbek: "keyingi" },
  // { english: "useful", uzbek: "foydali" },
  // { english: "careless", uzbek: "beparvo" },
  // { english: "numberless", uzbek: "sonsiz" },
  // { english: "yellow", uzbek: "sariq" },
  // { english: "unique", uzbek: "noyob" },
  // { english: "high", uzbek: "yuqori" },
  // { english: "nervous", uzbek: "asabiy" },
  // { english: "last", uzbek: "oxirgi" },
  // { english: "motionless", uzbek: "harakatsiz" },
  // { english: "silly", uzbek: "ahmoq" },
  // { english: "public", uzbek: "jamoat" },
  // { english: "wide", uzbek: "keng" },
  // { english: "final", uzbek: "oxirgi" },
  // { english: "further", uzbek: "uzoq" },
  // { english: "old", uzbek: "eski" },
  // { english: "damp", uzbek: "nam" },
  // { english: "false", uzbek: "noto'g'ri" },
  // { english: "boring", uzbek: "zerikarli" },
  // { english: "loud", uzbek: "baland ovozli" },
  // { english: "bad", uzbek: "yomon" },
  // { english: "tasteful", uzbek: "mazali" },
  // { english: "cool", uzbek: "salqin" },
  // { english: "lying", uzbek: "yolg'on" },
  // { english: "dark", uzbek: "qorong'u" },
  // { english: "inexpensive", uzbek: "arzon" },
  // { english: "major", uzbek: "muhim" },
  // { english: "mean", uzbek: "xasis" },
  // { english: "common", uzbek: "odatiy" },
  // { english: "calculating", uzbek: "hisobchi" },
  // { english: "uninterested", uzbek: "qiziqmas" },
  // { english: "depressed", uzbek: "tushkun" },
  // { english: "unused", uzbek: "foydalanilmagan" },
  // { english: "different", uzbek: "farqli" },
  // { english: "level", uzbek: "daraja" },
  // { english: "savory", uzbek: "mazali" },
  // { english: "terrible", uzbek: "dahshatli" },
  // { english: "mountainous", uzbek: "tog'li" },
  // { english: "mute", uzbek: "ovozsiz" },
  // { english: "false", uzbek: "yolg'on" },
  // { english: "curly", uzbek: "jingalak" },
  // { english: "keen", uzbek: "ishqiboz" },
  // { english: "fat", uzbek: "semiz" },
  // { english: "economic", uzbek: "iqtisodiy" },
  // { english: "harm", uzbek: "zararli" },
  // { english: "dear", uzbek: "aziz" },
  // { english: "equable", uzbek: "teng" },
  // { english: "cold", uzbek: "sovuq" },
  // { english: "yellow", uzbek: "sariq" },
  // { english: "purple", uzbek: "binafsha rang" },
  // { english: "lovely", uzbek: "ajoyib" },
  // { english: "pink", uzbek: "pushti" },
  // { english: "voiceless", uzbek: "ovozsiz" },
  // { english: "cowardly", uzbek: "qo'rqoq" },
  // { english: "extensive", uzbek: "keng qamrovli" },
  // { english: "black", uzbek: "qora" },
  // { english: "elegant", uzbek: "oqlangan" },
  // { english: "covered", uzbek: "qoplangan" },
  // { english: "left", uzbek: "chap" },
  // { english: "quick", uzbek: "tez" },
  // { english: "warm", uzbek: "issiq" },
  // { english: "beautiful", uzbek: "chiroyli" },
  // { english: "tall", uzbek: "uzun" },
  // { english: "cool", uzbek: "salqin" },
  // { english: "big", uzbek: "katta" },
  // { english: "immense", uzbek: "ulkan" },
  // { english: "minute", uzbek: "daqiqa" },
  // { english: "mysterious", uzbek: "sirli" },
  // { english: "cheerful", uzbek: "quvnoq" },
  // { english: "white", uzbek: "oq" },
  // { english: "clear", uzbek: "toza" },
  // { english: "red", uzbek: "qizil" },
  // { english: "small", uzbek: "kichik" },
  // { english: "grey", uzbek: "kul rang" },
  // { english: "brainy", uzbek: "aqlli" },
  // { english: "busy", uzbek: "band" },
  // { english: "brown", uzbek: "jigar rang" },
  // { english: "sweet", uzbek: "mazali" },
  // { english: "nice", uzbek: "yaxshi" },
  // { english: "cruel", uzbek: "qaxirli" },
  // { english: "early", uzbek: "erta" },
  // { english: "dead", uzbek: "o'lgan" },
  // { english: "safe", uzbek: "xavsiz" },
  // { english: "graceful", uzbek: "nafis" },
  // { english: "sad", uzbek: "g'amgin" },
  // { english: "clammy", uzbek: "loyqa" },
  // { english: "near", uzbek: "yaqin" },
  // { english: "warm", uzbek: "iliq" },
  // { english: "ugly", uzbek: "xunuk" },
  // { english: "delicious", uzbek: "mazali" },
  // { english: "jobless", uzbek: "ishsiz" },
  // { english: "best", uzbek: "eng yaxshi" },
  // { english: "hot", uzbek: "issiq" },
  // { english: "responsive", uzbek: "javob beruvchi" },
  // { english: "thick", uzbek: "qalin" },
  // { english: "wide", uzbek: "keng" },
  // { english: "full", uzbek: "to'la" },
  // { english: "ghastly", uzbek: "dahshatli" },
  // { english: "fuzzy", uzbek: "loyqa" },
  // { english: "foggy", uzbek: "tumanli" },
  // { english: "cloudy", uzbek: "bulutli" },
  // { english: "orange", uzbek: "sabzi rang" },
  // { english: "funny", uzbek: "kulgili" },
  // { english: "strong", uzbek: "kuchli" },
  // { english: "willing", uzbek: "hohlovchi" },
  // { english: "lowly", uzbek: "past" },
  // { english: "cool", uzbek: "salqin" },
  // { english: "crazy", uzbek: "jinni" },
  // { english: "cheap", uzbek: "arzon" },
  // { english: "wide", uzbek: "keng" },
  // { english: "rapid", uzbek: "quvnoq" },
  // { english: "understood", uzbek: "tushinilgan" },
  // { english: "rare", uzbek: "kamdan kam" },
  // { english: "big", uzbek: "katta" },
  // { english: "friendly", uzbek: "do'stona" },
  // { english: "tall", uzbek: "uzun" },
  // { english: "historical", uzbek: "tarixiy" },
  // { english: "hot", uzbek: "issiq" },
  // { english: "same", uzbek: "o'xshash" },
  // { english: "handsome", uzbek: "kelishgan" },
  // { english: "beautiful", uzbek: "chiroyli" },
  // { english: "medical", uzbek: "tibbiy" },
  // { english: "giant", uzbek: "katta" },
  // { english: "humorous", uzbek: "hazil" },
  // { english: "much", uzbek: "ko'p" },
  // { english: "clean", uzbek: "tozza" },
  // { english: "many", uzbek: "ko'p" },
  // { english: "heavy", uzbek: "og'ir" },
  // { english: "bloody", uzbek: "qonli" },
  // { english: "lucky", uzbek: "omadli" },
  // { english: "stupid", uzbek: "axmoq" },
  // { english: "smart", uzbek: "aqilli" },
  // { english: "tiny", uzbek: "kichik" },
  // { english: "helpful", uzbek: "foydali" },
  // { english: "eager", uzbek: "g'ayratli" },
  // { english: "ideal", uzbek: "ideal" },
  // { english: "intelligent", uzbek: "aqilli" },
  // { english: "frightened", uzbek: "qo'rqib ketgan" },
  // { english: "male", uzbek: "erkak" },
  // { english: "quiet", uzbek: "sokin" },
  // { english: "ugliest", uzbek: "eng xunuk" },
  // { english: "detailed", uzbek: "batafsil" },
  // { english: "normal", uzbek: "normal" },
  // { english: "great", uzbek: "buyuk" },
  // { english: "soft", uzbek: "yumshoq" },
  // { english: "wary", uzbek: "ehtiyotkor" },
  // { english: "actually", uzbek: "aslida" },
  // { english: "brief", uzbek: "qisqacha" },
  // { english: "old", uzbek: "eski" },
  // { english: "cheap", uzbek: "arzon" },
  // { english: "clear", uzbek: "aniq" },
  // { english: "cold", uzbek: "sovuq" },
  // { english: "watery", uzbek: "suvli" },
  // { english: "wet", uzbek: "nam" },
  // { english: "blue", uzbek: "ko'k" },
  // { english: "good", uzbek: "yaxshi" },
  // { english: "hard", uzbek: "qattiq" },
  // { english: "green", uzbek: "yashil" },
  // { english: "thankful", uzbek: "minnatdor" },
  // { english: "nature", uzbek: "tabiy" },
  // { english: "boring", uzbek: "zerikarli" },
  // { english: "delicious", uzbek: "mazali" },
  // { english: "scary", uzbek: "qo'rqoq" },
  // { english: "incredible", uzbek: "aqlga sig'mas" },
  // { english: "outstanding", uzbek: "boshqacha" },
  // { english: "small", uzbek: "kichkina" },
  // { english: "near", uzbek: "yaqin" },
  // { english: "needless", uzbek: "kerakli" },
  // { english: "gifted", uzbek: "sovg'a" },
  // { english: "nice", uzbek: "yaxshi" },
  // { english: "better", uzbek: "yaxshiroq" },
  // { english: "far", uzbek: "uzoq" },
  // { english: "jealous", uzbek: "hasad" },
  // { english: "hungry", uzbek: "och" },
  // { english: "thoughtful", uzbek: "o'ylovli" },
  // { english: "low", uzbek: "past" },
  // { english: "annoyed", uzbek: "bezovta" },
  // { english: "satisfying", uzbek: "qoniqarli" },
  // { english: "familiar", uzbek: "o'xshash" },
  // { english: "careful", uzbek: "ehtiyotkor" },
  // { english: "peaceful", uzbek: "tinch" },
  // { english: "sticky", uzbek: "yopishqoq" },
  // { english: "good", uzbek: "yaxshi" },
  // { english: "old", uzbek: "eski" },
  // { english: "new", uzbek: "yangi" },
  // { english: "tall", uzbek: "uzun" },
  // { english: "short", uzbek: "kalta" },
  // { english: "thin", uzbek: "ozg'in" },
  // { english: "fat", uzbek: "semiz" },
  // { english: "charming", uzbek: "go'zal" },
  // { english: "fast", uzbek: "tez" },
  // { english: "slow", uzbek: "sekin" },
  // { english: "beautiful", uzbek: "chiroyli" },
  // { english: "anxious", uzbek: "xavotirlangan" },
  // { english: "awful", uzbek: "juda yomon" },
  // { english: "polite", uzbek: "odobli, aqlli-xushli" },
  // { english: "rapidly", uzbek: "juda tez" },
  // { english: "common", uzbek: "odatiy" },
  // { english: "independent", uzbek: "mustaqil" },
  // { english: "cool", uzbek: "salqin, jindak sovuq" },
  // { english: "major", uzbek: "muhim" },
  // { english: "mean", uzbek: "baxil, ziqna" },
  // { english: "rich", uzbek: "boy, badavlat" },
  // { english: "effective", uzbek: "samarali" },
  // { english: "false", uzbek: "xato" },
  // { english: "quite", uzbek: "juda" },
  // { english: "specific", uzbek: "aniq" },
  // { english: "basic", uzbek: "oddiy, sodda" },
  // { english: "real", uzbek: "haqiqiy, real" },
  // { english: "worth", uzbek: "arziydigan" },
  // { english: "excellent", uzbek: "juda yaxshi" },
  // { english: "actual", uzbek: "haqiqiy" },
  // { english: "mystery", uzbek: "sir, jumboq" },
  // { english: "opposite", uzbek: "teskari" },
  // { english: "mental", uzbek: "aqliy" },
  // { english: "safe", uzbek: "xavfsiz" },
  // { english: "complex", uzbek: "murakkab" },
  // { english: "ancient", uzbek: "qadimiy" },
  // { english: "hidden", uzbek: "yashirin" },
  // { english: "original", uzbek: "asl nusxadagi" },
  // { english: "empty", uzbek: "bo'sh" },
  // { english: "exact", uzbek: "aniq" },
];
