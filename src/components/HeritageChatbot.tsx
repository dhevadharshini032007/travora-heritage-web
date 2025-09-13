import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const heritageKnowledge = {
  en: {
    "brihadeeswarar temple": "The Brihadeeswarar Temple in Thanjavur is a UNESCO World Heritage Site built in 1010 CE by Raja Raja Chola I. This magnificent Dravidian temple features a 66-meter tall vimana (temple tower), one of the tallest in South India. The temple was conceived as a royal chapel where the emperor could directly worship Lord Shiva. The massive Nandi statue, carved from a single stone, weighs approximately 25 tons. The temple showcases advanced Chola engineering - the 80-ton granite capstone was hauled up a 4km ramp. The walls feature beautiful frescoes depicting scenes from Hindu mythology, making it a masterpiece of temple architecture and art.",
    "konark sun temple": "The Konark Sun Temple in Odisha, built in the 13th century by King Narasimhadeva I, is designed as a colossal chariot of the Sun God Surya with 24 elaborately carved stone wheels and seven spirited horses. Each wheel is about 10 feet in diameter and functions as a sundial, accurately calculating time. The temple was built using the Kalinga architectural style and required 1,200 artisans working for 12 years. Legend says that the temple's main architect's son sacrificed himself to complete the construction. The intricate stone carvings depict daily life, celestial beings, and erotic sculptures, representing the cycle of life and cosmic energy.",
    "khajuraho temples": "The Khajuraho Group of Monuments in Madhya Pradesh comprises 85 original temples built between 950-1050 CE by the Chandela dynasty, of which 25 survive today. These temples follow the Nagara architectural style and are famous for their intricate sculptures covering every inch of the exterior walls. The temples are divided into three groups: Western (most famous), Eastern, and Southern. The erotic sculptures, which represent only 10% of all carvings, symbolize the tantric traditions and the celebration of life. The temples were 'lost' in dense forests for centuries until British engineer T.S. Burt rediscovered them in 1838. The craftsmanship represents the pinnacle of medieval Indian art and architecture.",
    "amber fort": "Amber Fort in Jaipur, built in the 16th century by Raja Man Singh I, is a magnificent example of Rajput architecture blended with Mughal influences. The fort is famous for the Sheesh Mahal (Mirror Palace), where thousands of tiny mirrors create a starry effect when lit with a single candle. The fort features artistic Hindu-style elements, including painted gateways and cobbled paths. The Diwan-e-Khas (Hall of Private Audience) has beautiful marble work and precious stone inlays. The fort offers elephant rides up the ramparts and houses the famous Sila Devi temple. The fort's strategic location provided defense while its architecture reflects the prosperity of the Kachwaha Rajput clan.",
    "mehrangarh fort": "Mehrangarh Fort in Jodhpur, built in 1459 by Rao Jodha, is one of India's largest forts, rising 400 feet above the Blue City. The fort houses several palaces including Moti Mahal (Pearl Palace), Phool Mahal (Palace of Flowers), and Sheesh Mahal (Mirror Palace). The fort's thick walls (up to 36 meters high and 21 meters wide) have withstood numerous attacks. The fort museum houses an excellent collection of palanquins, howdahs, royal cradles, miniature paintings, musical instruments, costumes, and furniture. The fort offers spectacular views of Jodhpur city and houses the world's only flying fox zip-line experience within a fort premises.",
    "somnath temple": "The Somnath Temple in Gujarat is the first among the 12 Jyotirlingas of Lord Shiva and holds immense religious significance. The original temple is believed to have been built in gold by the Moon God, then rebuilt in silver by Ravana, in wood by Lord Krishna, and in stone by Bhimdev. The temple has been destroyed and rebuilt multiple times throughout history, with the current structure completed in 1951. Located on the shores of the Arabian Sea, the temple's architecture follows the Chalukya style. The temple's flag changes three times a day, and it's said that there's no land between Somnath and Antarctica - only ocean. The temple symbolizes the resilience and eternal faith of Hindu devotees.",
    "golden temple": "The Golden Temple (Harmandir Sahib) in Amritsar is the holiest shrine in Sikhism, built by Guru Arjan Dev Ji in 1604. The temple is covered with 750 kg of pure gold and sits in the middle of Amrit Sarovar (Pool of Nectar). The temple represents the spiritual and temporal headquarters of Sikhism. It serves free meals (langar) to over 100,000 people daily regardless of caste, creed, or religion. The temple has four entrances representing openness to all. The Guru Granth Sahib is ceremonially opened each morning and closed each evening. The temple's architecture blends Hindu and Islamic styles, symbolizing the universal nature of Sikh philosophy.",
    "default": "I'd be happy to tell you about India's incredible heritage sites! You can ask me about famous temples like Brihadeeswarar, Konark, Khajuraho, Somnath, or Golden Temple. I can also share information about historic forts like Amber or Mehrangarh, or any other heritage site. Each has fascinating history, unique architecture, and cultural significance!"
  },
  ta: {
    "brihadeeswarar temple": "தஞ்சாவூரில் உள்ள பெரிய கோயில் 1010 CE இல் ராஜராஜ சோழன் I ஆல் கட்டப்பட்ட யுனெஸ்கோ உலக பாரம்பரிய தளம். இந்த அற்புதமான திராவிட கோயில் 66 மீட்டர் உயரமான விமானத்தைக் கொண்டுள்ளது, இது தென்னிந்தியாவின் மிக உயரமான கோயில் கோபுரங்களில் ஒன்றாகும். இந்த கோயில் சக்ரவர்த்தி நேரடியாக சிவபெருமானை வழிபட ஒரு அரச தேவாலயமாக கருதப்பட்டது. ஒரே கல்லில் செதுக்கப்பட்ட பெரிய நந்தி சிலையின் எடை சுமார் 25 டன்கள். கோயில் சோழர்களின் மேம்பட்ட பொறியியலை வெளிப்படுத்துகிறது - 80 டன் கிரானைட் கப்ஸ்டோன் 4 கிமீ சாய்வு மூலம் மேலே இழுக்கப்பட்டது.",
    "konark sun temple": "ஒடிசாவில் உள்ள கோணார்க் சூரிய கோயில் 13 ஆம் நூற்றாண்டில் மன்னன் நரசிம்ஹதேவன் I ஆல் கட்டப்பட்டது. இது 24 அலங்கரிக்கப்பட்ட கல் சக்கரங்கள் மற்றும் ஏழு குதிரைகளுடன் சூரிய கடவுள் சூரியனின் மாபெரும் தேராக வடிவமைக்கப்பட்டுள்ளது. ஒவ்வொரு சக்கரமும் சுமார் 10 அடி விட்டம் கொண்டது மற்றும் சூரிய கடிகாரமாக செயல்படுகிறது. கோயில் கலிங்க கட்டிடக்கலை பாணியில் கட்டப்பட்டது மற்றும் 12 ஆண்டுகள் 1,200 கைவினைஞர்கள் பணியாற்றினர். புராணத்தின் படி, கோயிலின் முக்கிய கட்டிடக் கலைஞரின் மகன் கட்டுமானத்தை முடிக்க தன்னை தியாகம் செய்தான்.",
    "khajuraho temples": "மத்திய பிரதேசத்தில் உள்ள கஜுராஹோ நினைவுச்சின்னங்கள் 950-1050 CE க்கு இடையில் சந்தேல வம்சத்தால் கட்டப்பட்ட 85 அசல் கோயில்களைக் கொண்டுள்ளது, அவற்றில் 25 இன்று உயிர் பிழைத்துள்ளன. இந்த கோயில்கள் நாகர கட்டிடக்கலை பாணியைப் பின்பற்றுகின்றன மற்றும் வெளிப்புற சுவர்களின் ஒவ்வொரு அங்குலத்தையும் மூடும் சிக்கலான சிற்பங்களுக்கு பிரபலமானவை. கோயில்கள் மூன்று குழுக்களாக பிரிக்கப்பட்டுள்ளன: மேற்கு (மிகவும் பிரபலமானது), கிழக்கு மற்றும் தெற்கு. காமசிற்பங்கள், எல்லா சிற்பங்களில் 10% மட்டுமே பிரதிநிதித்துவப்படுத்துகின்றன, தாந்த்ரிக மரபுகள் மற்றும் வாழ்க்கையின் கொண்டாட்டத்தை குறிக்கின்றன.",
    "amber fort": "ஜெய்ப்பூரில் உள்ள ஆம்பர் கோட்டை 16 ஆம் நூற்றாண்டில் ராஜா மான் சிங் I ஆல் கட்டப்பட்டது, இது முகலாய தாக்கங்களுடன் கலந்த ராஜபுத்திர கட்டிடக்கலையின் அற்புதமான எடுத்துக்காட்டு. கோட்டை ஷீஷ் மஹாலுக்கு (கண்ணாடி அரண்மனை) பிரபலமானது, அங்கு ஆயிரக்கணக்கான சிறிய கண்ணாடிகள் ஒரு மெழுகுவர்த்தியால் ஒளிரும்போது நட்சத்திர விளைவை உருவாக்குகின்றன. கோட்டையில் வர்ணம் பூசப்பட்ட நுழைவாயில்கள் மற்றும் கல் பதிக்கப்பட்ட பாதைகள் உள்ளிட்ட கலை நயமிக்க இந்து பாணி கூறுகள் உள்ளன.",
    "mehrangarh fort": "ஜோத்பூரில் உள்ள மெஹ்ரன்கர் கோட்டை 1459 இல் ராவ் ஜோதாவால் கட்டப்பட்டது, இது நீல நகரத்திலிருந்து 400 அடி உயரத்தில் உயர்ந்து இந்தியாவின் மிகப்பெரிய கோட்டைகளில் ஒன்றாகும். கோட்டையில் மோதி மஹால் (முத்து அரண்மனை), பூல் மஹால் (மலர்களின் அரண்மனை) மற்றும் ஷீஷ் மஹால் (கண்ணாடி அரண்மனை) உள்ளிட்ட பல அரண்மனைகள் உள்ளன. கோட்டையின் தடித்த சுவர்கள் (36 மீட்டர் உயரம் மற்றும் 21 மீட்டர் அகலம் வரை) பல தாக்குதல்களைத் தாங்கியுள்ளன. கோட்டை அருங்காட்சியகம் பல்லக்குகள், ஹௌதாக்கள், அரச தொட்டில்கள், சிறு ஓவியங்கள் மற்றும் பளிங்குகளின் சிறந்த சேகரிப்பைக் கொண்டுள்ளது.",
    "somnath temple": "குஜராத்தில் உள்ள சோம்நாத் கோயில் சிவபெருமானின் 12 ஜோதிர்லிங்கங்களில் முதன்மையானது மற்றும் மகத்தான மத முக்கியத்துவத்தைக் கொண்டுள்ளது. அசல் கோயில் சந்திர கடவுளால் தங்கத்தில் கட்டப்பட்டதாக நம்பப்படுகிறது, பின்னர் ராவணனால் வெள்ளியில், கிருஷ்ணரால் மரத்தில், மற்றும் பீம்தேவரால் கல்லில் மீண்டும் கட்டப்பட்டது. கோயில் வரலாறு முழுவதும் பல முறை அழிக்கப்பட்டு மீண்டும் கட்டப்பட்டுள்ளது, தற்போதைய கட்டமைப்பு 1951 இல் முடிக்கப்பட்டது. அரபிக் கடலின் கரையில் அமைந்துள்ள இந்த கோயில் சாளுக்கிய பாணியைப் பின்பற்றுகிறது.",
    "golden temple": "அமிர்தசரில் உள்ள தங்க கோயில் (ஹர்மந்திர் சாஹிப்) சீக்கிய மதத்தின் புனிதமான ஆலயமாகும், இது 1604 இல் குரு அர்ஜுன் தேவ் ஜி ஆல் கட்டப்பட்டது. கோயில் 750 கிலோ தூய தங்கத்தால் மூடப்பட்டு அமிர்த சரோவர் (அமிர்த குளம்) நடுவில் அமைந்துள்ளது. கோயில் சீக்கிய மதத்தின் ஆன்மீக மற்றும் தற்காலிக தலைமையகத்தை பிரதிநிதித்துவப்படுத்துகிறது. இது சாதி, மதம் அல்லது மதம் பாராமல் தினமும் 100,000 க்கும் மேற்பட்ட மக்களுக்கு இலவச உணவு (லங்கர்) வழங்குகிறது. கோயிலில் நான்கு நுழைவாயில்கள் உள்ளன, இது அனைவருக்கும் திறந்திருப்பதைக் குறிக்கிறது.",
    "default": "இந்தியாவின் நம்பமுடியாத பாரம்பரிய தளங்களைப் பற்றி உங்களுக்குச் சொல்ல நான் மகிழ்ச்சியடைகிறேன்! பெரிய கோயில், கோணார்க், கஜுராஹோ, சோம்நாத் அல்லது தங்க கோயில் போன்ற புகழ்பெற்ற கோயில்களைப் பற்றி என்னிடம் கேளுங்கள். ஆம்பர் அல்லது மெஹ்ரன்கர் போன்ற வரலாற்று கோட்டைகள் அல்லது வேறு எந்த பாரம்பரிய தளத்தைப் பற்றியும் என்னால் தகவல் பகிர முடியும். ஒவ்வொன்றும் அற்புதமான வரலாறு, தனித்துவமான கட்டிடக்கலை மற்றும் கலாச்சார முக்கியத்துவத்தைக் கொண்டுள்ளது!"
  }
};

export const HeritageChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { language, t } = useLanguage();

  const initializeChat = () => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: t('chatbot.greeting'),
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  const getHeritageResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    const knowledge = heritageKnowledge[language];
    
    // Check for specific heritage sites
    for (const [key, value] of Object.entries(knowledge)) {
      if (key !== 'default' && lowerQuery.includes(key)) {
        return value;
      }
    }
    
    // Check for general terms
    if (lowerQuery.includes('temple') || lowerQuery.includes('கோயில்')) {
      return language === 'en' 
        ? "India has magnificent temples like Brihadeeswarar Temple, Konark Sun Temple, Khajuraho Temples, Golden Temple, and many more. Each has unique architecture and rich history. Which temple would you like to know about?"
        : "இந்தியாவில் பெரிய கோயில், கோணார்க் சூரிய கோயில், கஜுராஹோ கோயில்கள், தங்க கோயில் போன்ற அற்புதமான கோயில்கள் உள்ளன. ஒவ்வொன்றும் தனித்துவமான கட்டிடக்கலை மற்றும் வளமான வரலாற்றைக் கொண்டுள்ளது. எந்த கோயிலைப் பற்றி தெரிந்துகொள்ள விரும்புகிறீர்கள்?";
    }
    
    if (lowerQuery.includes('fort') || lowerQuery.includes('கோட்டை')) {
      return language === 'en'
        ? "India's forts are architectural marvels! Famous ones include Amber Fort, Mehrangarh Fort, Golconda Fort, and many others. They showcase the military architecture and royal heritage of India. Which fort interests you?"
        : "இந்தியாவின் கோட்டைகள் கட்டிடக்கலை அற்புதங்கள்! புகழ்பெற்றவற்றில் ஆம்பர் கோட்டை, மெஹ்ரன்கர் கோட்டை, கோல்கொண்டா கோட்டை போன்றவை அடங்கும். அவை இந்தியாவின் இராணுவ கட்டிடக்கலை மற்றும் அரச பாரம்பரியத்தை வெளிப்படுத்துகின்றன. எந்த கோட்டை உங்களுக்கு ஆர்வமாக உள்ளது?";
    }
    
    return knowledge.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getHeritageResponse(inputValue),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => {
          setIsOpen(true);
          initializeChat();
        }}
        className="fixed bottom-6 right-6 z-50 btn-primary-glow rounded-full w-14 h-14 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-heritage text-secondary-foreground p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">{t('chatbot.title')}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-secondary-foreground hover:bg-secondary-foreground/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      message.isBot
                        ? 'bg-heritage-cream text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('chatbot.placeholder')}
              className="flex-1 rounded-2xl"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="btn-heritage rounded-2xl"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};