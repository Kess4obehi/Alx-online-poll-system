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
        { id: 1, text: 'Python', votes: 0 },
        { id: 0, text: 'Typescript', votes: 0 }
      ],
    },
  ],
};

const pollSlice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    vote: (state, action) => {
      const { pollID, optionID } = action.payload;
      const poll = state.polls.find((p) => p.id === pollID);
      const option = poll?.options.find((o) => o.id === optionID);
      if (option) {
        option.votes += 1;
      }
    },
  },
});

export const { vote } = pollSlice.actions;
export default pollSlice.reducer;