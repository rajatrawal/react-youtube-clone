import { createSlice } from "@reduxjs/toolkit";


const commentSlice = createSlice(
    {
        name: 'commentSlice',
        initialState: {

        },

        reducers: {
            addComment: (state, action) => {
                let parentComment, i;
                const data = action.payload
                let videoId = data.videoId;
                let commentId = data.commentId;
                let commentStructure = data.commentStructure;
                if (!state[videoId]) {
                    state[videoId] = {
                        replies: {}
                    };
                    parentComment = state[videoId];
                }
                else {
                    parentComment = state[videoId];

                    for (i of commentStructure) {
                        parentComment = parentComment['replies'][i];
                    }
                }
                parentComment['replies'][commentId] = data.data;
            }
        }
    }
)



export default commentSlice.reducer;
export const { addComment } = commentSlice.actions;