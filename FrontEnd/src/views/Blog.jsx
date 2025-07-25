import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { blogContext } from "./BlogContext";
import "../App.css";
import "./styles/Blog.css";

export default function Blog () {
    const {blogs} = useContext(blogContext);
    console.log(blogs)
    
    if (!blogs.length) return <p>Loading blog posts...</p>;
    const firstPost = blogs[0];
    const remainingPosts = blogs.slice(1);

    const groupedPosts = [];
    for (let i = 0; i < remainingPosts.length; i += 2) {
        groupedPosts.push(remainingPosts.slice(i, i + 2));
    }

    return (
        <>
            <header className="blogHeader" id="blog">
                <p>
                  Yoga life&nbsp;&nbsp;&nbsp;    /   &nbsp;&nbsp;&nbsp;Meditation&nbsp;&nbsp;&nbsp;    /&nbsp;&nbsp;&nbsp;    Psychology&nbsp;&nbsp;&nbsp;     /       &nbsp;&nbsp;&nbsp;Movie
                </p>
                <h2>Blog</h2>
            </header>
            <section className="blogSection">
                <section className="firstLayout">
                    <div className="container1 container" key={firstPost.id}>
                    <nav className="img-box">
                        <img src={firstPost.img} alt="Blog-image" />
                    </nav>
                    <nav className="innerTexts1">
                        <span className="inline-flex">
                        <p>{firstPost.createdDay}</p>
                        <strong>New!</strong>
                        </span>
                        <h3>{firstPost.title}</h3>
                        <p>{firstPost.content}</p>
                        <NavLink to={`/blog-content/${firstPost.id}`}  key={firstPost.id}>Read more...</NavLink>
                    </nav>
                    </div>
                </section>
                {groupedPosts.map((group, groupIndex) => (
                    <section
                    key={groupIndex}
                    className={groupIndex === 0 ? "secondLayout" : "thirdLayout"}
                    >
                    {group.map((x) => (
                        <nav
                        key={x.id}
                        className={`container${x.id} container`} 
                        >
                        <nav>
                            <img src={x.img} alt="Blog-image" />
                        </nav>
                        <nav className="innerTexts">
                            <p>{x.createdDay}</p>
                            <h3>{x.title}</h3>
                            <NavLink to={`/blog-content/${x.id}`} key={x.id}>Read more...</NavLink>
                        </nav>
                        </nav>
                    ))}
                    </section>
                ))}
                
                
                
            </section>
        </>
    )
}