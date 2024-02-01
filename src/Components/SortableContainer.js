import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import "./SortableContainer.css";
import SortableItem from "./SortableItem";
const SortableContainer = ({ tasks }) => {
  return (
    <div className="container">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <SortableItem id={task.id} text={task.text} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};
export default SortableContainer;
