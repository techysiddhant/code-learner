/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { htmlCourse } from "../data/tutorials/webdevelopment/htmlCourse";
import { CssCourse } from "../data/tutorials/webdevelopment/CssCourse";

export const courseSlice = createSlice({
    name: "course",
    initialState: {
        value: [],
    },
    reducers: {
        getCourse: (state, action) => {
            const categoryId = +action.payload.slice(0, 1);
            const tutorialId = action.payload.slice(1, 3);
            const createrId = action.payload.slice(3, 5);
            const courseId = +action.payload;
            // console.log(categoryId, tutorialId, createrId, courseId);
            if (categoryId === 1) {
                const course = webDevCourse(tutorialId, createrId, courseId);
                // console.log(course);
                if(course.length > 0){

                    state.value = course[0];
                    
                }
                else{

                    state.value = course;
                }
            } else if (categoryId === 2) {
                // const course = programmingLanguages(tutorialId, createrId, courseId);
            } else if (categoryId === 3) {
                // const course = androidDevelopment(tutorialId, createrId, courseId);
            } else {
                state.value = [];
            }
            // switch (+categoryId) {
            //     case 1:
            //         webdevcourse(action.payload.slice(1,3))
            //         break;

            //     default:
            //         break;
            // }
            // console.log(state.value);
            // console.log(action.payload);

            // console.log();
            // const course = htmlCourse.filter((course) => course.courseId === courseId);
            // console.log(course[0]);
            // state.value = course[0];
            // state.value = htmlCourse[action.payload - 1];
        },
    },
});
export const { getCourse } = courseSlice.actions;
export default courseSlice.reducer;

function webDevCourse(tutorialId, createrId, courseId) {
    const tutorialIdSliced = tutorialId.slice(0, 1);
    tutorialId = tutorialIdSliced == 0 ? +tutorialId.slice(-1) : +tutorialId;
    // const createrIdSliced = createrId.slice(0, 1);
    // createrId = createrIdSliced == 0 ? +createrId.slice(-1) : +createrId;
    // console.log(tutorialId);
    // console.log(typeof tutorialId);
    let course;
    switch (tutorialId) {
        case 1:
            course = htmlCourse.filter((course) => course.courseId === courseId);
            // console.log(course);
            return course ? course : [];
        case 2:
            course = CssCourse.filter((course) => course.courseId === courseId);
            return course ? course : [];
        case 3:
            return [];
        default:
            return [];
    }

}

function programmingLanguages(tutorialId, createrId, courseId) {
    const tutorialIdSliced = tutorialId.slice(0, 1);
    tutorialId = tutorialIdSliced == 0 ? +tutorialId.slice(-1) : +tutorialId;
    // const createrIdSliced = createrId.slice(0, 1);
    // createrId = createrIdSliced == 0 ? +createrId.slice(-1) : +createrId;
    // console.log(tutorialId);
    // console.log(typeof tutorialId);
    let course;
    switch (tutorialId) {
        case 1:
            course = htmlCourse.filter((course) => course.courseId === courseId);
            // console.log(course);
            return course ? course : [];
        case 2:
            return [];
        case 3:
            return [];
        default:
            return [];
    }

}

function androidDevelopment(tutorialId, createrId, courseId) {
    const tutorialIdSliced = tutorialId.slice(0, 1);
    tutorialId = tutorialIdSliced == 0 ? +tutorialId.slice(-1) : +tutorialId;
    // const createrIdSliced = createrId.slice(0, 1);
    // createrId = createrIdSliced == 0 ? +createrId.slice(-1) : +createrId;
    // console.log(tutorialId);
    // console.log(typeof tutorialId);
    let course;
    switch (tutorialId) {
        case 1:
            course = htmlCourse.filter((course) => course.courseId === courseId);
            // console.log(course);
            return course ? course : [];
        case 2:
            return [];
        case 3:
            return [];
        default:
            return [];
    }

}