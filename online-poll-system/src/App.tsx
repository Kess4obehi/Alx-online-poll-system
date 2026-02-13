import { useState } from "react";
import { useAppDispatch } from "./app/hooks";
import { addPoll } from "./features/polls/pollSlice";
import PollList from "./components/PollList";

function App() {
  const dispatch = useAppDispatch();

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  const handleCreatePoll = () => {
    const newPoll = {
      id: Date.now(),
      question,
      options: [
        { id: 1, text: option1, votes: 0 },
        { id: 2, text: option2, votes: 0 },
        { id: 3, text: option3, votes: 0 },
      ],
    };

    dispatch(addPoll(newPoll));

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
  };

  const isFormValid =
    question.trim() !== "" &&
    option1.trim() !== "" &&
    option2.trim() !== "" 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Poll System</h1>

      <h2>Create a Poll</h2>
      <input
        placeholder="Poll question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />

      <input 
        placeholder="Option 1"
        value={option1}
        onChange={(e) => setOption1(e.target.value)}
      />
      <br />

      <input 
        placeholder="Option 2"
        value={option2}
        onChange={(e) => setOption2(e.target.value)}
      />
      <br />

      <input 
        placeholder="Option 3"
        value={option3}
        onChange={(e) => setOption3(e.target.value)}
      />
      <br />

      <button onClick={handleCreatePoll} disabled={!isFormValid}
      style={{
        opacity: isFormValid ? 1 : 0.5,
        cursor: isFormValid ? "pointer" : "not-allowed"
      }}
      >Create Poll</button>

      <hr />

      <PollList />
    </div>
  );
}

export default App;
