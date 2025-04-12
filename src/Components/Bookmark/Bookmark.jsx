

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <ol className="bg-slate-100 rounded-xl p-4 m-4">
            <li>{title}</li>
        </ol>
    );
};

export default Bookmark;