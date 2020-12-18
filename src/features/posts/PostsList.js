import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectAllPosts, fetchPosts } from './postsSlice'
import PostExcerpt from './PostExcerpt'

export const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const dispatch = useDispatch()

  const postStatus = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  // show in the UI the status of data fetching
  let content

  switch (postStatus) {
    case 'loading':
      content = <div className="loader">Loading...</div>
      break
    case 'succeded':
      // sorting post in reverse order chrono..
      const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))

      content = orderedPosts.map((post) => (
        <PostExcerpt key={post.id} post={post} />
      ))
      break
    case 'error':
      content = <div>{error}</div>
      break
    default:
      break
  }

  return (
    <div className="posts-list">
      <h1>Posts</h1>
      {content}
    </div>
  )
}
