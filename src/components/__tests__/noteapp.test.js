import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import NoteApp from "../Noteapp";

afterEach(() => {
  cleanup();
});

test("should render non-completed note", () => {
  const noteItem = {
    id: 1,
    title: "Demo",
    body: "Why i love javascript",
    completed: false,
  };

  render(<NoteApp note={noteItem} />);
  const noteAppElement = screen.getByTestId("note-1");
  expect(noteAppElement).toHaveTextContent("Demo");
  expect(noteAppElement).toHaveClass("not-completed");
});

test("should render completed note", () => {
  const noteItem = {
    id: 2,
    title: "Demo 2",
    body: "Why i don't like javascript",
    completed: true,
  };

  render(<NoteApp note={noteItem} />);
  const noteAppElement = screen.getByTestId("note-2");
  expect(noteAppElement).toHaveTextContent("Demo 2");
  expect(noteAppElement).toHaveClass("completed");
});

// snapshot test

test("matches snapshot", () => {
  const noteItem = {
    id: 1,
    title: "Demo",
    body: "Why i love javascript",
    completed: false,
  };

  const tree = renderer.create(<NoteApp note={noteItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});
