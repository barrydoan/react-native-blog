import React, { useState } from 'react';

const BlogContex = React.createContext();

export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
    };


    return <BlogContex.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContex.Provider>
};

export default BlogContex;