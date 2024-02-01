import { useSortable } from "@dnd-kit/sortable";
import "./SortableItem.css";
import { CSS } from "@dnd-kit/utilities";
const SortableItem = ({ id, text }) => {
  // using useSortable hook
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,

    // using utility method from '@dnd-kit/utilities' to convert transform
    // attribute from useSortable hook into css style property
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="item"
    >
      {text}
    </div>
  );
};
export default SortableItem;
