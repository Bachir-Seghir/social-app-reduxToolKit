import React from 'react'
import { Link } from 'react-router-dom'

import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { PostAuthor } from '../users/PostAuthor'

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <ReactionButtons post={post} />
    </article>
  )
}

PostExcerpt = React.memo(PostExcerpt)

export default PostExcerpt
