import React from 'react'

function Post({title,summary,cover,content,createdAt,author}) {
    return (
        <div className="post">
            <div className="image">
                <img src={'https://mern-blog-1-ag6j.onrender.com/' + cover} 
               // "https://techcrunch.com/wp-content/uploads/2022/12/airco-Large.jpeg?resize=668,393"
                 alt="" className="" />

            </div>
            <div className='texts'>
                <h2 className="">{title}</h2>
                <p className="info">
                    <a href="" className="author">{author?.username}</a>
                    <time>{new Date(createdAt).toLocaleString()}</time>

                </p>
                <p className='summary'>{summary}</p>

            </div>
        </div>
    )
}

export default Post
