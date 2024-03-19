import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className="md:w-1/3 bg-gray-200 ml-6 rounded-xl">
            <div className='rounded-xl border-2 border-gray-400 text-center p-5 h-20'>
                <h3 className="text-2xl font-bold px-4 text-blue-700">Spend Time on Read: {readingTime}</h3>
            </div>
            <div className='rounded-xl mt-6 pt-4 border-2 border-black'>
            <h2 className="text-2xl font-bold p-4 text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
           
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;