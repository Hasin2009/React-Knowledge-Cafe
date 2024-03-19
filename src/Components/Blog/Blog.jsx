import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

Blog.proptypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;