import "./App.css";
import NoteApp from "./components/Noteapp";

function App() {
  const noteApp = [
    { id: 1, title: "Demo", body: "Why i love javascript", completed: false },
    {
      id: 2,
      title: "Demo2",
      body: "Why i don't like javascript",
      completed: true,
    },
  ];
  return (
    <div className="App">
      {noteApp.map((note) => (
        <NoteApp note={note} />
      ))}
    </div>
  );
}

export default App;
