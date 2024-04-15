import "./Blog.css";
import BlogItem from "./BlogItems";
import Vacation from "../../assets/images/post-1.jpg";
import Food from "../../assets/images/post-2.jpg";
import Work from "../../assets/images/post-3.jpg";

function Blog() {
  const blogs = [
    {
      blogImg: Vacation,
      blogTittle: "Vacation",
      blogInfo:
        "1 Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      blogName: "Masooma Mohammadi",
      blogTime: " 10 min",
    },
    {
      blogImg: Food,
      blogTittle: "Food",
      blogInfo:
        "2 Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      blogName: "Shakiba Haidari",
      blogTime: " 12 min ",
    },
    {
      blogImg: Work,
      blogTittle: "Work",
      blogInfo:
        "3 Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      blogName: "Halima Nasimi",
      blogTime: " 8 min",
    },
  ];

  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem {...blogs[0]} />
          <BlogItem {...blogs[1]} />
          <BlogItem {...blogs[2]} />
        </div>
      </div>
    </section>
  );
}

export default Blog;
