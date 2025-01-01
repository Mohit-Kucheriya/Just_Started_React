import { useEffect, useState } from "react";
import SkeletonArticles from "../skeleton/SkeletonArticles";
const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setArticles(data);
        }, 5000);
    });

    return (
        <div>
            <h2>Articles</h2>

            {articles && (
                <div className="articles">
                    {articles.map((article) => (
                        <div key={article.id} className="article">
                            <h3>{article.title}</h3>
                            <p>{article.body}</p>
                        </div>
                    ))}
                </div>
            )}

            {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticles key={n} />)}
        </div>
    );
};

export default Articles;
