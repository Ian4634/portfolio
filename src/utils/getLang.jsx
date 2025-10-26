import en from '../assets/lang/en.json';
import zh from '../assets/lang/zh.json';

const languages = {
    'en': en,
    'zh': zh
};

function getLang(language, key){
    return languages[language][key] || languages['en'][key];
}

export default getLang;