import { BsBookmarksFill } from "react-icons/bs";


const Blog = ({ blog, handleAddBookmark, handleReading }) => {
    const { cover, title, author, image, posted_date, reading_time, hashtags, id } = blog;
    return (
        <div >
            <img className="mt-5 mb-2 w-300 h-100 object-cover" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <img className="w-14" src={image} alt="" />
                    <div>
                        <h2 className="font-bold">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <h2>{reading_time} min read</h2>
                    <button onClick={() => handleAddBookmark(blog)}><BsBookmarksFill /></button>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                {
                    hashtags.map(hash => <span>#{hash}</span>)
                }

            </div>
            <div>
                <button className="bg-slate-400  rounded p-2 m-2 font-bold" onClick={() => handleReading(id, reading_time)}>Mark As Read</button>
            </div>
        </div>
    );
};

export default Blog;