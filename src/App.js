import "./App.css";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import SortableContainer from "./Components/SortableContainer.js";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Visit the post office" },
    { id: 2, text: "Read a chapter of a book" },
    { id: 3, text: "Exercise for 30 minutes" },
    { id: 4, text: "Schedule a team meeting" },
    { id: 5, text: "Pick up prescription from the pharmacy" }
  ]);

  const onDragEndHandler = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    setTasks((previous) => 
    {
      const oldPosition = previous.findIndex((x) => x.id === active.id);
      const newPosition = previous.findIndex((x) => x.id === over.id);

      return arrayMove(previous, oldPosition, newPosition);
    })
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="App">
      <h3 className="heading">Sortable List</h3>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={onDragEndHandler}
      >
        <SortableContainer tasks={tasks}></SortableContainer>
      </DndContext>
    </div>
  );
}

export default App;