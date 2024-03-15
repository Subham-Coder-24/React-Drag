import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
const Container = ({ title, id, children, onAddItem }) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
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
      className="container"
    >
      <div className="container_heading">
        <h1>{title}</h1>
        <button {...listeners}>Drag handel</button>
      </div>
      {children}
      <div className="add_item_button">
        <button onClick={onAddItem}>Add item</button>
      </div>
    </div>
  );
};

export default Container;
