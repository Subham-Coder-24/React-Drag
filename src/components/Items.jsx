import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from '@dnd-kit/utilities';
const Items = ({ id,title }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : 1, // Apply opacity when dragging
      }}
      className="item"
    >
      <p>{title}</p>
      <button {...listeners}>Drag Handel</button>
    </div>
  );
};

export default Items;
