import React, { useState } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updatenews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `Newzz-${props.titlename}`;

    updatenews();
  }, []);

  // capitalize = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);

    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(totalResults + parseddata.totalResults);
  };

  return (
    <>
      <h2 className="text-center">Newzz-Top Headlines on {props.titlename}</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-2">
          <div className="row my-5">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    title={
                      element.title ? element.title.slice(0, 48) + "..." : ""
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 117) + "..."
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pagesize: "8",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.string,
  category: PropTypes.string,
};

export default News;
