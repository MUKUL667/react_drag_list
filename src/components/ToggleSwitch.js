import React from "react";
import { DragHandle } from "./DragHandle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./data";
import { ListContainer, ListItem } from "./styel";
const ToggleSwitch = () => {
	const list = List.getList();
	return (
		<div className="App">
			<DragDropContext
				onDragEnd={(param) => {
					console.log(param);
					const srcI = param.source.index;
					const desI = param.destination?.index;
					if (desI) {
						list.splice(desI, 0, list.splice(srcI, 1)[0]);
						List.saveList(list);
					}
				}}
			>
				<ListContainer>
					<h1>The List</h1>
					<Droppable droppableId="droppable-1">
						{(provided, _) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								{list.map((item, index) => (
									<Draggable
										key={item.id}
										draggableId={"draggable-" + item.id}
										index={index}
									>
										{(provided, snapshot) => (
											<ListItem
												ref={provided.innerRef}
												{...provided.draggableProps}
											  style={{
												...provided.draggableProps.style,
												boxShadow: snapshot.isDragging
												  ? "0 0 .4rem #666"
												  : "none",
											  }}
											>
												<DragHandle {...provided.dragHandleProps} />
												<span>{item.title}</span>
											</ListItem>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</ListContainer>
			</DragDropContext>
		</div>
	);
}

export default ToggleSwitch;
