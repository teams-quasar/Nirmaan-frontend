import { createSlice } from '@reduxjs/toolkit';

const blogNewEditorSlice = createSlice({
  name: 'blogNewEditor',
  initialState: {
    isVisible: false,
  },
  reducers: {
    showNewEditor: (state) => {
      state.isVisible = true;
    },
    hideNewEditor: (state) => {
      state.isVisible = false;
    },
    toggleNewEditor: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { showNewEditor, hideNewEditor, toggleNewEditor } = blogNewEditorSlice.actions;
export default blogNewEditorSlice.reducer;
