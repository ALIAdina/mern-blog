import React from 'react'
import { Link } from "react-router-dom";

function Post({_id,title,summary,cover,content,createdAt,author}) {
    return (
        <div className="post">
            <div className="image">
          {/* <-- <Link to={`post/${_id}`} src={cover} alt="" />--> */}
            <Link to={`/post/${_id}`}>
          <img src={cover} alt="" />
        </Link>

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
              {/*  <div dangerouslySetInnerHTML={{ __html: content }} />  */}
              <div
  dangerouslySetInnerHTML={{
    __html: content?.slice(0, 500) + "..."
  }}
/>
            </div>
        </div>
    )
}

export default Post
