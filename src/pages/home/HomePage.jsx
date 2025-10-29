import PageWrapper from '../../components/PageWrapper/PageWrapper.jsx';
import HomeContainer from './HomeContainer.jsx';

function HomePage({language, setLanguage}) {
    return (
        <PageWrapper PageContainer={HomeContainer} language={language} setLanguage={setLanguage}/>
    );
}

export default HomePage;