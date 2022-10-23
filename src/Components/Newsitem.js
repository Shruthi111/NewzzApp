import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-info">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://thumbs.dreamstime.com/z/mobile-news-application-smartphone-man-reading-online-news-website-cellphone-person-browsing-latest-articles-131140526.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          height="200"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn  btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
