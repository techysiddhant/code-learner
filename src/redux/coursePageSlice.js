import { createSlice } from "@reduxjs/toolkit";
import { html } from "../data/categories/webdevelopment/html.js";
import { css } from "../data/categories/webdevelopment/css.js";



export const coursePageSlice = createSlice({
    name: "coursePage",
    initialState: {
        value: [],
    },
    reducers: {
        getCoursePage: (state, action) => {
            switch (action.payload) {
                case "html":
                    state.value = html;
                    break;
                case "css":
                    state.value = css;
                    break;
                case "javascript":
                    state.value = [];
                    break;
                case "react":
                    state.value = [];
                    break;

                default:
                    state.value = [];
            }
        }
    }
});



export const { getCoursePage } = coursePageSlice.actions;
export default coursePageSlice.reducer;