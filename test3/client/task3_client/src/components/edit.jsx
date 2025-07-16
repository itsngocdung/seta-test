import { useState } from "react"
import { updatePost } from "../store/postSlice"

export const EditPost = ({ id, title, body, dispatch, close }) => {
  const [titleChange, setTitle] = useState(title)
  const [bodyChange, setBody] = useState(body)

  const handleUpdatePost = () => {
    dispatch(updatePost({ id: id, title: titleChange, body: bodyChange }))
    close()
  }

  return (
    <div className="flex flex-col w-2xl bg-gray-600 gap-3 p-4 m-auto">
      <h2>Create new Post</h2>
      <label htmlFor="title" className="text-left">Title</label>
      <input id="title" type="text" value={titleChange} onChange={(e) => setTitle(e.target.value)} placeholder="title" className="!bg-white !text-black !p-2" />
      <label htmlFor="body" className="text-left">Body</label>
      <textarea id="body" type="text" value={bodyChange} onChange={(e) => setBody(e.target.value)} placeholder="body" className="!bg-white !text-black !p-2" />
      <button onClick={handleUpdatePost}>Update</button>
    </div>
  )
}
