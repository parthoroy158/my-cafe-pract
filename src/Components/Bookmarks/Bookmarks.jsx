import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,time}) => {
    
    return (
        <div className="w-1/3 bg-slate-300 rounded-xl text-center mt-10">
            <h3 className="text-2xl font-bold text-center">Reading Time : [{time}]< /h3> <hr />
            <h3 className="font-bold text-2xl mt-1 p-1 ">List of Bookmarks: [{bookmarks.length}]</h3><hr />
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;