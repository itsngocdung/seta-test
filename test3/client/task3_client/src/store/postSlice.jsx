import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk('fetchPost', async () => {
  const data = await fetch('http://localhost:8080/api/v1/posts')
  return data.json()
})

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: [],
    error: false
  },
  reducers: {
    removePost: (state, action) => {
      const idx = state.data.findIndex(p => p.id === action.payload)

      if (idx > -1) state.data.splice(idx, 1)
    },
    updatePost: (state, action) => {
      const { title, body, id } = action.payload

      const idx = state.data.findIndex(p => p.id === id)

      state.data[idx] = {
        title: title, body: body
      }

    },
    createPost: (state, action) => {
      const data = {
        id: new Date().getTime(),
        userId: 1,
        title: action.payload.title,
        body: action.payload.body
      }

      state.data.unshift(data)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.error = true
    }),

      builder.addCase(fetchPost.fulfilled, (state, action) => {
        state.data = action.payload
      })
  }
})

export const { removePost, updatePost, createPost } = postSlice.actions

export default postSlice.reducer
