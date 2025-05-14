import { useState } from 'react'
import './Styles/App.css'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'
import MySelect from './Components/UI/select/MySelect'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Description' },
    { id: 3, title: 'Java', body: 'Description' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}></hr>
      <div>
        <div>dwadwadawda</div>
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  )
}

export default App
