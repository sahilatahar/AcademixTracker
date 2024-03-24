import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notices: null,
}

const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {
        setNotices: (state, action) => {
            state.notices = action.payload
        },
        addNotice: (state, action) => {
            state.notices.push(action.payload)
        },
        updateNotice: (state, action) => {
            const updatedNotice = action.payload
            state.notices = state.notices.map((notice) =>
                notice._id === updatedNotice._id ? updatedNotice : notice,
            )
        },
        deleteNotice: (state, action) => {
            const id = action.payload
            state.notices = state.notices.filter((notice) => notice._id !== id)
        },
    },
})

export const selectNotices = (state) => state.notice.notices

export const selectNoticeById = (state, id) =>
    state.notice.notices.find((notice) => notice._id === id)

export const { addNotice, deleteNotice, setNotices, updateNotice } =
    noticeSlice.actions
export default noticeSlice.reducer
