import React from 'react'

function Post({title,summary,cover,content,createdAt,author}) {
    return (
        <div className="post">
            <div className="image">
            <img src={cover} alt="" />

            </div>
            <div className='texts'>
                <h2 className="">{title}</h2>
                <p className="info">
                    <a href={`/author/${author?._id}`} className="author">
                         {author?.username}
                    </a>
                    <time>{new Date(createdAt).toLocaleString()}</time>

                </p>
                <p className='summary'>{summary}</p>
                <div dangerouslySetInnerHTML={{ __html: content }} />

            </div>
        </div>
    )
}

export default Post
