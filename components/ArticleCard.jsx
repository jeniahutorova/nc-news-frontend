const ArticleCard = ({article_id, topic, title, img_url, author, votes}) => {
return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h2>{title}</h2>
              <p>{author}</p>
              <p>Topic: {topic}</p>
              <img src={img_url} alt={title} className="img-fluid" />
              <p>Votes: {votes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
export default ArticleCard 