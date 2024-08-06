import NewsCard from "./NewsCard";

async function News() {
  const res = await fetch(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
  );
  const data = await res.json();
  const myData = data.Data.slice(0, 11);

  return (
    <div className="container p-5 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {myData.map((news, index) => (
          <NewsCard key={news.id} news={news} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
}

export default News;
