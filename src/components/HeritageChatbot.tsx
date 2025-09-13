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
    "brihadeeswarar temple": "The Brihadeeswarar Temple in Thanjavur is a UNESCO World Heritage Site built in 1010 CE by Raja Raja Chola I. It's famous for its towering vimana (temple tower) and the massive Nandi statue.",
    "konark sun temple": "The Konark Sun Temple in Odisha, built in the 13th century, is designed as a giant chariot with 24 wheels. It's a UNESCO World Heritage Site dedicated to the sun god Surya.",
    "khajuraho temples": "The Khajuraho Group of Monuments in Madhya Pradesh features stunning medieval Hindu and Jain temples built between 885-1000 CE, famous for their intricate sculptures and architecture.",
    "amber fort": "Amber Fort in Jaipur, Rajasthan, is a magnificent hilltop fortress built in the 16th century. It's known for its artistic Hindu-style elements and stunning mirror work in the Sheesh Mahal.",
    "mehrangarh fort": "Mehrangarh Fort in Jodhpur is one of the largest forts in India, perched 400 feet above the city. Built in 1459, it houses several palaces with intricate carvings and expansive courtyards.",
    "golden temple": "The Golden Temple (Harmandir Sahib) in Amritsar is the holiest shrine in Sikhism. The temple is covered in gold and sits in the middle of a sacred pool called Amrit Sarovar.",
    "default": "I'd be happy to tell you about India's incredible heritage sites! You can ask me about famous temples like Brihadeeswarar or Konark, historic forts like Amber or Mehrangarh, or any other heritage site."
  },
  ta: {
    "brihadeeswarar temple": "தஞ்சாவூரில் உள்ள பெரிய கோயில் 1010 CE இல் ராஜராஜ சோழன் I ஆல் கட்டப்பட்ட யுனெஸ்கோ உலக பாரம்பரிய தளம். இது அதன் உயர்ந்த விமானம் மற்றும் பெரிய நந்தி சிலைக்கு பிரபலமானது.",
    "konark sun temple": "ஒடிசாவில் உள்ள கோணார்க் சூரிய கோயில், 13 ஆம் நூற்றாண்டில் கட்டப்பட்டது, 24 சக்கரங்களுடன் ஒரு மாபெரும் தேராக வடிவமைக்கப்பட்டுள்ளது. இது சூரிய கடவுள் சூரியனுக்கு அர்பணிக்கப்பட்ட யுனெஸ்கோ உலக பாரம்பரிய தளம்.",
    "khajuraho temples": "மத்திய பிரதேசத்தில் உள்ள கஜுராஹோ நினைவுச்சின்னங்கள் 885-1000 CE க்கு இடையில் கட்டப்பட்ட அற்புதமான இடைக்கால இந்து மற்றும் சமண கோயில்களைக் கொண்டுள்ளது.",
    "amber fort": "ராஜஸ்தானின் ஜெய்ப்பூரில் உள்ள ஆம்பர் கோட்டை 16 ஆம் நூற்றாண்டில் கட்டப்பட்ட ஒரு அற்புதமான மலைக்கோட்டை. இது கலைநயமிக்க இந்து பாணி கூறுகள் மற்றும் ஷீஷ் மஹாலில் உள்ள கண்ணாடி வேலைப்பாடுகளுக்கு பிரபலமானது.",
    "mehrangarh fort": "ஜோத்பூரில் உள்ள மெஹ்ரன்கர் கோட்டை இந்தியாவின் மிகப்பெரிய கோட்டைகளில் ஒன்றாகும், நகரத்திலிருந்து 400 அடி உயரத்தில் அமைந்துள்ளது. 1459 இல் கட்டப்பட்ட இது சிக்கலான சிற்பங்கள் மற்றும் விரிவான முற்றங்களுடன் பல அரண்மனைகளைக் கொண்டுள்ளது.",
    "golden temple": "அமிர்தசரில் உள்ள தங்க கோயில் (ஹர்மந்திர் சாஹிப்) சீக்கிய மதத்தின் புனிதமான ஆலயமாகும். இந்த கோயில் தங்கத்தால் மூடப்பட்டு அமிர்த சரோவர் என்ற புனித குளத்தின் நடுவில் அமைந்துள்ளது.",
    "default": "இந்தியாவின் நம்பமுடியாத பாரம்பரிய தளங்களைப் பற்றி உங்களுக்குச் சொல்ல நான் மகிழ்ச்சியடைகிறேன்! பெரிய கோயில் அல்லது கோணார்க் போன்ற புகழ்பெற்ற கோயில்கள், ஆம்பர் அல்லது மெஹ்ரன்கர் போன்ற வரலாற்று கோட்டைகள் அல்லது வேறு எந்த பாரம்பரிய தளத்தைப் பற்றியும் என்னிடம் கேளுங்கள்."
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