import { useState } from "react"
import { createPost } from "../store/postSlice"

export const CreatePost = ({ dispatch }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleCreatePost = () => {
    dispatch(createPost({ title: title, body: body }))
    setTitle("")
    setBody("")
  }
  return (
    <div className="flex flex-col w-2xl bg-gray-600 gap-3 p-4 m-auto">
      <h2>Create new Post</h2>
      <label htmlFor="title" className="text-left">Title</label>
      <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" className="!bg-white !text-black !p-2" />
      <label htmlFor="body" className="text-left">Body</label>
      <textarea id="body" type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="body" className="!bg-white !text-black !p-2" />
      <button onClick={handleCreatePost}>Create</button>
    </div>
  )
}


