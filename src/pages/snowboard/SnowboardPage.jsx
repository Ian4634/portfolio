import PageWrapper from "../../components/PageWrapper/PageWrapper";

import SnowboardContainer from "./SnowboardContainer";

function SnowboardPage({language, setLanguage}) {
    return (
        <PageWrapper language={language} setLanguage={setLanguage} PageContainer={SnowboardContainer}/>
    );
}

export default SnowboardPage;