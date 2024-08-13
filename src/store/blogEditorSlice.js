import { createSlice } from '@reduxjs/toolkit';

const blogEditorSlice = createSlice({
  name: 'blogEditor',
  initialState: {
    isVisible: false,
  },
  reducers: {
    showEditor: (state) => {
      state.isVisible = true;
    },
    hideEditor: (state) => {
      state.isVisible = false;
    },
    toggleEditor: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { showEditor, hideEditor, toggleEditor } = blogEditorSlice.actions;
export default blogEditorSlice.reducer;
