import { createSlice } from '@reduxjs/toolkit';

interface PollOption {
  id: number;
  text: string;
  votes: number;
}

interface Poll {
  id: number;
  question: string;
  options: PollOption[];
}

interface PollState {
  polls: Poll[];
}

const initialState: PollState = {
  polls: [
    {
      id: 1,
      question: 'What is your favorite programming language?',
      options: [
        { id: 1, text: 'Javascript', votes: 0 },
        { id: 2, text: 'Python', votes: 0 },
        { id: 3, text: 'Typescript', votes: 0 }
      ],
    },
  ],
};

const pollSlice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    vote: (state, action) => {
      const { pollId, optionId } = action.payload;
      const poll = state.polls.find((p) => p.id === pollId);
      const option = poll?.options.find((o) => o.id === optionId);
      if (option) {
        option.votes += 1;
      }
    },

    addPoll: (state, action) => {
      state.polls.push(action.payload);
    },
  },
});

export const { vote, addPoll } = pollSlice.actions;
export default pollSlice.reducer;