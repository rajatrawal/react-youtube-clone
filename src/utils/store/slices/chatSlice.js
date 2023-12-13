import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_TRESHHOLD } from '../../constants';

const ChatSlice = createSlice(
    {
        name: 'chat',
        initialState: {

        },
        reducers: {
            addChat: (state, action) => {
                const videoId = action.payload.videoId;
                const data = action.payload.data;
                if (state[videoId]) {
                    state[videoId] = data.concat(state[videoId]);
                   
                    state[videoId].splice(LIVE_CHAT_TRESHHOLD, 1);
                }
                else {
                    state[videoId] = data;
                }
            }
        }
    }
)

export default ChatSlice.reducer;
export const { addChat } = ChatSlice.actions;