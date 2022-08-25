import { faker } from '@faker-js/faker';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const finalSpaceCharacters = [...Array(8)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  thumb: faker.image.avatar(),
}));

const DnD = () => {
  return (
    <DragDropContext onDragEnd={() => console.log('dragged')}>
      <Droppable droppableId='characters'>
        {provided => (
          <ul
            className='characters'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {finalSpaceCharacters.map(({ id, name, thumb }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {provided => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className='characters-thumb'>
                        <img src={thumb} alt={`${name} Thumb`} />
                      </div>
                      <p>{name}</p>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DnD;
