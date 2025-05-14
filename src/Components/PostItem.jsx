import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({ post, number, ...props }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
// 37:12
export default PostItem
