import createDateContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost': 
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 9999), title: `Blog post #${state.length + 1}`}];
        default:
            return state;
    }
};


const addBlogPost = (dispatch) => {
    return () => {
        dispatch ({type: 'add_blogpost'});
    };
    
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id});
    }
};

export const { Context, Provider } = createDateContext(blogReducer, {addBlogPost, deleteBlogPost}, []);