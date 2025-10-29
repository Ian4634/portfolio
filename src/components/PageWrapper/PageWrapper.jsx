
import Header from "../../components/header/Header";
import './PageWrapper.css';
function PageWrapper({PageContainer, language, setLanguage}){
    return (
        <div className="home-wrapper">
            <Header language={language} setLanguage={setLanguage}/>
            <PageContainer language={language}/>
        </div>
    );
}

export default PageWrapper;
// this is a wrapper component that includes 
// 1. the header 
// 2. specific page container passed as a prop PageContainer