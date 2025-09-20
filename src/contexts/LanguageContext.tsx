import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.categories': 'Categories',
    'nav.search': 'Search',
    'nav.login': 'Login',
    
    // Common
    'common.next': 'Next',
    'common.explore': 'Explore',
    'common.search': 'Search',
    'common.viewDetails': 'View Details',
    'common.back': 'Back',
    'common.close': 'Close',
    'common.send': 'Send',
    'common.menu': 'Menu',
    'common.joinToday': 'Join Travora Today',
    'common.planVisit': 'Plan Your Visit',
    'common.getDirections': 'Get Directions',
    'common.saveToFavorites': 'Save to Favorites',
    
    // Landing
    'landing.title': 'Travora',
    'landing.subtitle': "Discover India's Rich Heritage",
    
    // Welcome
    'welcome.title': 'Welcome to Travora',
    'welcome.subtitle': 'Explore the magnificent heritage sites of India through our interactive AR experience',
    
    // About
    'about.title': 'About Travora',
    'about.description': 'Travora is your gateway to exploring India\'s incredible heritage. Using cutting-edge AR technology, we bring ancient monuments, temples, and forts to life, offering immersive experiences that connect you with the rich cultural history of our nation.',
    'about.mission': 'Our Mission',
    'about.mission.desc': 'Travora is dedicated to preserving and showcasing India\'s incredible heritage for future generations. Through cutting-edge AR technology and comprehensive cultural information, we bring ancient history to life in the modern world.',
    'about.whatWeDo': 'What We Do',
    'about.vision': 'Our Vision',
    'about.vision.desc': 'To make India\'s rich cultural heritage accessible to everyone, everywhere. We believe that technology can bridge the gap between past and present, making historical sites more engaging and educational for visitors of all ages.',
    'about.heritage.discovery': 'Heritage Site Discovery',
    'about.heritage.discovery.desc': 'Explore over 1000+ monuments, temples, forts, and monasteries across India with detailed historical information.',
    'about.ar.experience': 'AR Experience',
    'about.ar.experience.desc': 'Use augmented reality to visualize historical reconstructions and interactive elements at heritage sites.',
    'about.educational.content': 'Educational Content',
    'about.educational.content.desc': 'Rich multimedia content including stories, historical context, architectural details, and cultural significance.',
    'about.community.contribution': 'Community Contribution',
    'about.community.contribution.desc': 'Users can contribute photos, reviews, and local insights to build a comprehensive heritage database.',
    
    // Categories
    'categories.title': 'Explore Heritage Categories',
    'categories.search.placeholder': 'Search heritage sites, monuments, temples...',
    'categories.temples': 'Temples',
    'categories.forts': 'Forts',
    'categories.monasteries': 'Monasteries',
    'categories.temples.desc': 'Sacred temples and religious sites',
    'categories.forts.desc': 'Majestic forts and palaces',
    'categories.monasteries.desc': 'Ancient Buddhist and Jain monasteries',
    'categories.stats.sites': 'Heritage Sites',
    'categories.stats.states': 'States Covered',
    'categories.stats.travelers': 'Happy Travelers',
    
    // Menu Items
    'menu.savedPlaces': 'Saved Places',
    'menu.reviews': 'Reviews',
    'menu.photos': 'Photos',
    'menu.lists': 'Lists',
    'menu.contribute': 'Contribute',
    'menu.settings': 'Settings',
    'menu.language': 'Language',
    'menu.description': 'Access your profile and app settings',
    
    // Login
    'login.title': 'Welcome Back',
    'login.signin': 'Sign In',
    'login.signin.desc': 'Enter your credentials to continue',
    'login.email.placeholder': 'Enter your email or phone',
    'login.password.placeholder': 'Enter your password',
    'login.button': 'Sign In',
    'login.createAccount': 'Create Account',
    'login.googleLogin': 'Continue with Google',
    'login.facebookLogin': 'Continue with Facebook',
    'login.orContinue': 'Or continue with',
    'login.noAccount': "Don't have an account?",
    
    // Create Account
    'createAccount.title': 'Join Travora',
    'createAccount.subtitle': 'Create Account',
    'createAccount.desc': 'Start your heritage journey today',
    'createAccount.email.label': 'Email or Phone',
    'createAccount.dob.label': 'Date of Birth',
    'createAccount.password.label': 'Password',
    'createAccount.password.placeholder': 'Create a password',
    'createAccount.confirmPassword.label': 'Confirm Password',
    'createAccount.confirmPassword.placeholder': 'Confirm your password',
    'createAccount.button': 'Create Account',
    'createAccount.googleSignup': 'Sign up with Google',
    'createAccount.facebookSignup': 'Sign up with Facebook',
    'createAccount.orSignup': 'Or sign up with',
    'createAccount.hasAccount': 'Already have an account?',
    'createAccount.signin': 'Sign In',
    'createAccount.errors.fillFields': 'Please fill in all fields',
    'createAccount.errors.passwordMismatch': 'Passwords do not match',
    'createAccount.errors.passwordLength': 'Password must be at least 6 characters',
    'createAccount.success': 'Account created successfully!',
    
    // Site Details
    'siteDetails.backTo': 'Back to',
    'siteDetails.unescoSite': 'UNESCO Site',
    'siteDetails.built': 'Built',
    'siteDetails.architecture': 'Architecture',
    'siteDetails.timings': 'Timings',
    'siteDetails.entryFee': 'Entry Fee',
    'siteDetails.overview': 'Overview',
    'siteDetails.history': 'History',
    'siteDetails.architectureTab': 'Architecture',
    'siteDetails.3dModel': '3D Model',
    'siteDetails.highlights': 'Highlights',
    'siteDetails.historicalBackground': 'Historical Background',
    'siteDetails.architecturalDetails': 'Architectural Details',
    'siteDetails.interactive3d': 'Interactive 3D Model',
    'siteDetails.3dInstructions': 'Drag to rotate • Scroll to zoom • Click and drag to explore the monument in 3D',
    'siteDetails.planVisit.subtitle': 'Ready to experience this magnificent heritage site in person?',
    'siteDetails.notFound': 'Heritage site not found',
    
    // Chatbot
    'chatbot.title': 'Heritage Assistant',
    'chatbot.placeholder': 'Ask me about Indian heritage sites...',
    'chatbot.greeting': 'Hello! I\'m your heritage guide. Ask me about Indian temples, forts, monasteries, or any heritage site!',

    // Landing page
    'landing.clickAnywhere': 'Click anywhere to continue',

    // Explore
    'explore.description': 'Discover thousands of heritage sites across India',
    'explore.culture': 'Indian Culture & Traditions',
    'explore.festivals': 'Festivals & Celebrations',

    // Learn
    'learn.title': 'Learn',
    'learn.description': 'Rich historical information and cultural insights',
    'learn.puzzles': 'Heritage Puzzles',
    'learn.quiz': 'Knowledge Quiz',

    // Experience
    'experience.title': 'Experience',
    'experience.description': 'Interactive AR features and virtual tours',

    // Quiz
    'quiz.title': 'Heritage Quiz',
    'quiz.easy': 'Easy',
    'quiz.medium': 'Medium', 
    'quiz.hard': 'Hard',
    'quiz.selectDifficulty': 'Select Difficulty Level',
    'quiz.question': 'Question',
    'quiz.score': 'Score',
    'quiz.submitAnswer': 'Submit Answer',
    'quiz.tryAgain': 'Try Again',
    'quiz.backToLearn': 'Back to Learn',
    'quiz.completed': 'Quiz Completed!',
    'quiz.correct': 'Correct!',
    'quiz.incorrect': 'Incorrect!',

    // Puzzles
    'puzzles.title': 'Heritage Site Puzzles',
    'puzzles.unscramble': 'Unscramble the letters to reveal famous heritage sites',
    'puzzles.hint': 'Hint',
    'puzzles.yourAnswer': 'Your Answer',
    'puzzles.availableLetters': 'Available Letters',
    'puzzles.checkAnswer': 'Check Answer',
    'puzzles.shuffleLetters': 'Shuffle Letters',
    'puzzles.reset': 'Reset',
    'puzzles.completed': 'Completed Puzzles',
    'puzzles.leaderboard': 'Leaderboard',
    'puzzles.difficulty': 'Difficulty',

    // Culture
    'culture.title': 'Indian Cultural Heritage',
    'culture.subtitle': 'Explore the rich cultural diversity of Indian states',
    'culture.food': 'Food',
    'culture.traditions': 'Traditions', 
    'culture.clothing': 'Clothing',
    
    // Festivals
    'festivals.title': 'Indian Festivals Calendar',
    'festivals.subtitle': 'Discover festivals celebrated throughout the year',
    'festivals.selectMonth': 'Select Month',
    'festivals.description': 'Description',
    'festivals.significance': 'Significance', 
    'festivals.traditions': 'Traditional Elements',
    'festivals.learnMore': 'Learn More',
    'festivals.noFestivals': 'No Major Festivals',
    'festivals.noFestivalsDesc': 'No major festivals found for',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.categories': 'வகைகள்',
    'nav.search': 'தேடல்',
    'nav.login': 'உள்நுழைவு',
    
    // Common
    'common.next': 'அடுத்து',
    'common.explore': 'ஆராயுங்கள்',
    'common.search': 'தேடுங்கள்',
    'common.viewDetails': 'விவரங்களைப் பார்க்கவும்',
    'common.back': 'பின்',
    'common.close': 'மூடு',
    'common.send': 'அனுப்பு',
    'common.menu': 'மெனு',
    'common.joinToday': 'இன்றே ட்ராவோராவில் சேருங்கள்',
    'common.planVisit': 'உங்கள் பயணத்தைத் திட்டமிடுங்கள்',
    'common.getDirections': 'திசைகளைப் பெறுங்கள்',
    'common.saveToFavorites': 'விருப்பங்களில் சேமிக்கவும்',
    
    // Landing
    'landing.title': 'ட்ராவோரா',
    'landing.subtitle': 'இந்தியாவின் பல்லாயிரம் ஆண்டு பழமையான பாரம்பரியத்தை கண்டறியுங்கள்',
    
    // Welcome
    'welcome.title': 'ட்ராவோராவிற்கு வரவேற்கிறோம்',
    'welcome.subtitle': 'எங்கள் ஊடாடும் AR அனுபவத்தின் மூலம் இந்தியாவின் அற்புதமான பாரம்பரிய தளங்களை ஆராயுங்கள்',
    
    // About
    'about.title': 'ட்ராவோரா பற்றி',
    'about.description': 'ட்ராவோரா இந்தியாவின் நம்பமுடியாத பாரம்பரியத்தை ஆராய்வதற்கான உங்கள் நுழைவாயில். அதிநவீன AR தொழில்நுட்பத்தைப் பயன்படுத்தி, நாங்கள் பண்டைய நினைவுச்சின்னங்கள், கோயில்கள் மற்றும் கோட்டைகளுக்கு உயிர் கொடுக்கிறோம்.',
    'about.mission': 'எங்கள் நோக்கம்',
    'about.mission.desc': 'ட்ராவோரா இந்தியாவின் நம்பமுடியாத பாரம்பரியத்தை பாதுகாத்து எதிர்கால சந்ததியினருக்கு வெளிப்படுத்துவதற்கு அர்பணிக்கப்பட்டுள்ளது. அதிநவீன AR தொழில்நுட்பம் மற்றும் விரிவான கலாச்சார தகவல்களின் மூலம், நாம் பண்டைய வரலாற்றை நவீன உலகில் உயிர்ப்பித்து காட்டுகிறோம்.',
    'about.whatWeDo': 'நாம் என்ன செய்கிறோம்',
    'about.vision': 'எங்கள் பார்வை',
    'about.vision.desc': 'இந்தியாவின் பல்லாயிரம் ஆண்டு கலாச்சார பாரம்பரியத்தை எல்லோருக்கும், எல்லா இடங்களிலும் அணுகக்கூடியதாக மாற்றுவது. தொழில்நுட்பம் கடந்த காலத்திற்கும் நிகழ்காலத்திற்கும் இடையிலான இடைவெளியைப் பாலமாக இருக்க முடியும் என்று நாங்கள் நம்புகிறோம்.',
    'about.heritage.discovery': 'பாரம்பரிய தள கண்டுபிடிப்பு',
    'about.heritage.discovery.desc': 'விரிவான வரலாற்று தகவல்களுடன் இந்தியா முழுவதும் 1000+ நினைவுச்சின்னங்கள், கோயில்கள், கோட்டைகள் மற்றும் மடாலயங்களை ஆராயுங்கள்.',
    'about.ar.experience': 'AR அனுபவம்',
    'about.ar.experience.desc': 'பாரம்பரிய தளங்களில் வரலாற்று மறுகட்டமைப்பு மற்றும் ஊடாடும் கூறுகளை காட்சிப்படுத்த ஆக்மென்டெட் ரியாலிட்டியைப் பயன்படுத்தவும்.',
    'about.educational.content': 'கல்வி உள்ளடக்கம்',
    'about.educational.content.desc': 'கதைகள், வரலாற்று சூழல், கட்டிடக்கலை விவரங்கள் மற்றும் கலாச்சார முக்கியத்துவம் உள்ளிட்ட பல்லூடக உள்ளடக்கம்.',
    'about.community.contribution': 'சமூக பங்களிப்பு',
    'about.community.contribution.desc': 'பயனர்கள் ஒரு விரிவான பாரம்பரிய தரவுத்தளத்தை உருவாக்க புகைப்படங்கள், விமர்சனங்கள் மற்றும் உள்ளூர் நுண்ணறிவுகளை பங்களிக்க முடியும்.',
    
    // Categories
    'categories.title': 'பாரம்பரிய வகைகளை ஆராயுங்கள்',
    'categories.search.placeholder': 'பாரம்பரிய தளங்கள், நினைவுச்சின்னங்கள், கோயில்களைத் தேடுங்கள்...',
    'categories.temples': 'கோயில்கள்',
    'categories.forts': 'கோட்டைகள்',
    'categories.monasteries': 'மடாலயங்கள்',
    'categories.temples.desc': 'புனித கோயில்கள் மற்றும் மத தளங்கள்',
    'categories.forts.desc': 'அற்புதமான கோட்டைகள் மற்றும் அரண்மனைகள்',
    'categories.monasteries.desc': 'பண்டைய பௌத்த மற்றும் சமண மடாலயங்கள்',
    'categories.stats.sites': 'பாரம்பரிய தளங்கள்',
    'categories.stats.states': 'மாநிலங்கள் உள்ளடக்கப்பட்டுள்ளன',
    'categories.stats.travelers': 'மகிழ்ச்சியான பயணிகள்',
    
    // Menu Items
    'menu.savedPlaces': 'சேமிக்கப்பட்ட இடங்கள்',
    'menu.reviews': 'விமர்சனங்கள்',
    'menu.photos': 'புகைப்படங்கள்',
    'menu.lists': 'பட்டியல்கள்',
    'menu.contribute': 'பங்களிப்பு',
    'menu.settings': 'அமைப்புகள்',
    'menu.language': 'மொழி',
    'menu.description': 'உங்கள் சுயவிவரம் மற்றும் ஆப்ஸ் அமைப்புகளை அணுகவும்',
    
    // Login
    'login.title': 'மீண்டும் வரவேற்கிறோம்',
    'login.signin': 'உள்நுழைவு',
    'login.signin.desc': 'தொடர உங்கள் நற்சான்றிதழ்களை உள்ளிடவும்',
    'login.email.placeholder': 'உங்கள் மின்னஞ்சல் அல்லது தொலைபேசியை உள்ளிடவும்',
    'login.password.placeholder': 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்',
    'login.button': 'உள்நுழைவு',
    'login.createAccount': 'கணக்கை உருவாக்கவும்',
    'login.googleLogin': 'Google உடன் தொடரவும்',
    'login.facebookLogin': 'Facebook உடன் தொடரவும்',
    'login.orContinue': 'அல்லது இதனுடன் தொடரவும்',
    'login.noAccount': 'கணக்கு இல்லையா?',
    
    // Create Account
    'createAccount.title': 'ட்ராவோராவில் சேருங்கள்',
    'createAccount.subtitle': 'கணக்கை உருவாக்கவும்',
    'createAccount.desc': 'இன்றே உங்கள் பாரம்பரிய பயணத்தைத் தொடங்குங்கள்',
    'createAccount.email.label': 'மின்னஞ்சல் அல்லது தொலைபேசி',
    'createAccount.dob.label': 'பிறந்த தேதி',
    'createAccount.password.label': 'கடவுச்சொல்',
    'createAccount.password.placeholder': 'கடவுச்சொல் உருவாக்கவும்',
    'createAccount.confirmPassword.label': 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
    'createAccount.confirmPassword.placeholder': 'உங்கள் கடவுச்சொல்லை உறுதிப்படுத்தவும்',
    'createAccount.button': 'கணக்கை உருவாக்கவும்',
    'createAccount.googleSignup': 'Google உடன் பதிவு செய்யவும்',
    'createAccount.facebookSignup': 'Facebook உடன் பதிவு செய்யவும்',
    'createAccount.orSignup': 'அல்லது இதனுடன் பதிவு செய்யவும்',
    'createAccount.hasAccount': 'ஏற்கனவே கணக்கு உள்ளதா?',
    'createAccount.signin': 'உள்நுழைவு',
    'createAccount.errors.fillFields': 'அனைத்து புலங்களையும் நிரப்பவும்',
    'createAccount.errors.passwordMismatch': 'கடவுச்சொற்கள் பொருந்தவில்லை',
    'createAccount.errors.passwordLength': 'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்',
    'createAccount.success': 'கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது!',
    
    // Site Details
    'siteDetails.backTo': 'திரும்பு',
    'siteDetails.unescoSite': 'யுனெஸ்கோ தளம்',
    'siteDetails.built': 'கட்டப்பட்டது',
    'siteDetails.architecture': 'கட்டிடக்கலை',
    'siteDetails.timings': 'நேரங்கள்',
    'siteDetails.entryFee': 'நுழைவு கட்டணம்',
    'siteDetails.overview': 'கண்ணோட்டம்',
    'siteDetails.history': 'வரலாறு',
    'siteDetails.architectureTab': 'கட்டிடக்கலை',
    'siteDetails.3dModel': '3D மாடல்',
    'siteDetails.highlights': 'முக்கிய அம்சங்கள்',
    'siteDetails.historicalBackground': 'வரலாற்று பின்னணி',
    'siteDetails.architecturalDetails': 'கட்டிடக்கலை விவரங்கள்',
    'siteDetails.interactive3d': 'ஊடாடும் 3D மாடல்',
    'siteDetails.3dInstructions': 'சுழற்ற இழுக்கவும் • பெரிதாக்க ஸ்க்ரோல் செய்யவும் • நினைவுச்சின்னத்தை 3D இல் ஆராய கிளிக் செய்து இழுக்கவும்',
    'siteDetails.planVisit.subtitle': 'இந்த அற்புதமான பாரம்பரிய தளத்தை நேரில் அனுபவிக்க தயாரா?',
    'siteDetails.notFound': 'பாரம்பரிய தளம் கண்டுபிடிக்கப்படவில்லை',
    
    // Chatbot
    'chatbot.title': 'பாரம்பரிய உதவியாளர்',
    'chatbot.placeholder': 'இந்திய பாரம்பரிய தளங்களைப் பற்றி என்னிடம் கேளுங்கள்...',
    'chatbot.greeting': 'வணக்கம்! நான் உங்கள் பாரம்பரிய வழிகாட்டி. இந்திய கோயில்கள், கோட்டைகள், மடாலயங்கள் அல்லது எந்த பாரம்பரிய தளத்தைப் பற்றியும் என்னிடம் கேளுங்கள்!',

    // Landing page
    'landing.clickAnywhere': 'தொடர எங்கும் கிளிக் செய்யவும்',

    // Explore
    'explore.description': 'இந்தியா முழுவதும் ஆயிரக்கணக்கான பாரம்பரிய தளங்களைக் கண்டறியுங்கள்',
    'explore.culture': 'இந்திய கலாச்சாரம் & பாரம்பரியங்கள்',
    'explore.festivals': 'திருவிழாக்கள் & கொண்டாட்டங்கள்',

    // Learn
    'learn.title': 'கற்றுக்கொள்ளுங்கள்',
    'learn.description': 'வளமான வரலாற்று தகவல் மற்றும் கலாச்சார நுண்ணறிவுகள்',
    'learn.puzzles': 'பாரம்பரிய புதிர்கள்',
    'learn.quiz': 'அறிவு வினாடி வினா',

    // Experience
    'experience.title': 'அனுபவம்',
    'experience.description': 'ஊடாடும் AR அம்சங்கள் மற்றும் மெய்நிகர் சுற்றுப்பயணங்கள்',

    // Quiz
    'quiz.title': 'பாரம்பரிய வினாடி வினா',
    'quiz.easy': 'எளிய',
    'quiz.medium': 'நடுத்தர',
    'quiz.hard': 'கடின',
    'quiz.selectDifficulty': 'சிரம நிலையைத் தேர்ந்தெடுக்கவும்',
    'quiz.question': 'கேள்வி',
    'quiz.score': 'மதிப்பெண்',
    'quiz.submitAnswer': 'பதில் சமர்பிக்கவும்',
    'quiz.tryAgain': 'மீண்டும் முயற்சிக்கவும்',
    'quiz.backToLearn': 'கற்றுக்கொள்ளுதலுக்குத் திரும்பு',
    'quiz.completed': 'வினாடி வினா முடிந்தது!',
    'quiz.correct': 'சரி!',
    'quiz.incorrect': 'தவறு!',

    // Puzzles
    'puzzles.title': 'பாரம்பரிய தள புதிர்கள்',
    'puzzles.unscramble': 'பிரபல பாரம்பரிய தளங்களை வெளிப்படுத்த எழுத்துக்களை சரிசெய்யுங்கள்',
    'puzzles.hint': 'குறிப்பு',
    'puzzles.yourAnswer': 'உங்கள் பதில்',
    'puzzles.availableLetters': 'கிடைக்கக்கூடிய எழுத்துக்கள்',
    'puzzles.checkAnswer': 'பதிலை சரிபார்க்கவum்',
    'puzzles.shuffleLetters': 'எழுத்துக்களைக் கலக்கவும்',
    'puzzles.reset': 'மீட்டமைக்கவum்',
    'puzzles.completed': 'முடிக்கப்பட்ட புதிர்கள்',
    'puzzles.leaderboard': 'தலைமைப் பலகை',
    'puzzles.difficulty': 'சிரமம்',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};