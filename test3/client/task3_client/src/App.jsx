import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost, removePost, updatePost } from './store/postSlice'
import { CreatePost } from './components/create'
import { EditPost } from './components/edit'

function App() {
  const data = useSelector((state) => state.post)
  const dispatch = useDispatch()
  const [isCreated, setIsCreated] = useState(false)
  const [editingId, setEditingId] = useState()

  useEffect(() => {
    dispatch(fetchPost())
  }, [])
  return (
    <div className='flex flex-col gap-3'>

      <button onClick={() => setIsCreated(!isCreated)}>{isCreated ? "Close create" : "Open create"}</button>
      {isCreated && <CreatePost dispatch={dispatch} />}

      {!data.isLoading ? "loading" : data.data.map((item) => (
        <div key={item.id} className='flex flex-col bg-gray-700 p-4'>
          <div className='gap-2 flex justify-end'>
            {!editingId ? <button onClick={() => setEditingId(item.id)}>Edit</button> :
              <button onClick={() => setEditingId(null)}>Cancel</button>

            }
            <button onClick={() => dispatch(removePost(item.id))}>Remove</button>
          </div>

          {editingId === item.id ?
            <EditPost
              id={item.id}
              body={item.body}
              title={item.title}
              dispatch={dispatch}
              close={() => setEditingId(null)}
            /> :
            (
              <ul className='flex items-start flex-col'>
                <li>userId: {item.userId}</li>
                <li>id: {item.id}</li>
                <li>title: {item.title}</li>
                <li>body: {item.body}</li>
              </ul>

            )
          }
        </div>
      ))}
    </div>
  )
}

export default App
