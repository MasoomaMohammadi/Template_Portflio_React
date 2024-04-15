function BlogItem({ blogImg, blogTittle, blogInfo, blogName, blogTime }) {
  return (
    <div className="col-4">
      <div className="blog-box">
        <div className="blog-img">
          <img src={blogImg} className="img-fluid" />
        </div>
        <div className="blog-content">
          <h3 className="blog-title">{blogTittle}</h3>
          <p className="blog-desc">{ blogInfo}</p>
        </div>
        <div className="blog-footer">
          <div className="post-author">
            <p className="author">{blogName}</p>
          </div>
          <div className="post-date">
            <span className="bi bi-clock"></span>{blogTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;