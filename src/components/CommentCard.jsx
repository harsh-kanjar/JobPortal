import React from 'react'
import '../css/components/commentcard.css'
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
function CommentCard({imgSrc,name,production,postedDate,content,likes}) {
  return (
     <>
        <div className="comment-card">
            <div className="user">
                <img src={imgSrc} alt="" />
                <div>
                    <p id="name">{name}</p>
                    <p id="production">{production}</p>
                    <p id="posted-date">{postedDate}</p>
                </div>
            </div>
            <div id="content">{content}</div>
            <p style={{marginTop:'56px', color:'#BB362A',marginLeft:'35px'}}><FcLike />Liked by {likes} peoples</p>
            <hr />
            <div id="icons">
                <span><FcLike />Like</span>
                <span><FaRegComment/>Comment</span>
                <span><FaShare/>Share</span>
                <span><CiBookmark/>Save</span>
            </div>
        </div>
     </>
  )
}

export default CommentCard
