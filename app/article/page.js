import Nav from "../components/nav";
import ArticleContent from './components/articleContent';

export default function Article() {
    return <div className="xl:px-48 md:px-16 sm:px-4">
        <Nav></Nav>
        <ArticleContent></ArticleContent>
    </div>
}