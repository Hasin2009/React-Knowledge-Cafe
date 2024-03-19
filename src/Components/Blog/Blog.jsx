import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 mt-10'>
            <img className='w-full rounded-2xl mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                  <img className='w-14' src={author_img} alt="" />
                  <div>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                  </div>
                </div>
                <div>
                    <span className='text-2xl'>{reading_time} min read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)}
                    className='ml-4 text-3xl text-blue-500'>
                        <IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p className='flex gap-4 mb-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id, reading_time)}
            className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;