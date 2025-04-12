import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark ,handleReading}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div>
            <h2 className="text-1xl font-bold">Number of Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleReading={handleReading}
                ></Blog>)
            }

        </div>
    );
};

export default Blogs;