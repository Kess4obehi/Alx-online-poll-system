import { useAppDispatch, useAppSelector } from "./app/hooks";
import { vote } from "./features/polls/pollSlice";

function App() {
  const polls = useAppSelector((state) => state.polls.polls);
  const dispatch = useAppDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Poll System</h1>

      {polls.map((poll) => (
        <div key={poll.id} style={{ marginTop: "20px" }}>
          <h2>{poll.question}</h2>

          {poll.options.map((option) => (
            <div key={option.id} style={{ marginBottom: "8px" }}>
              <span>
                {option.text} — {option.votes} votes
              </span>

              <button
                style={{ marginLeft: "10px" }}
                onClick={() =>
                  dispatch(
                    vote({ pollId: poll.id, optionId: option.id })
                  )
                }
              >
                Vote
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
