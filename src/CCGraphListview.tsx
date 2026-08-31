import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from '@lumel/react-sortable-hoc';
import React from 'react';
import './CCGraphListview.css'

type CCGraphItemProp = {
  uuid: string,
  name: string
}

export default function CCGraphListview({ items, activeUuid, dispatch }: { items: CCGraphItemProp[], activeUuid: string, dispatch: CallableFunction }) {

  const DragHandle = SortableHandle(React.forwardRef(({ }, ref: React.Ref<SVGSVGElement> | undefined) => (
    <svg ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='20' height='20' className='drag-handle'>
      <path d='m4 9 24 0 0 2-24 0zM4 23l0-2 24 0 0 2zM4 15l24 0 0 2-24 0z' fill='#000'/>
    </svg>
  )));

  const ListItem = SortableElement<{ value: CCGraphItemProp, isActive: boolean, dispatch: CallableFunction }>(
    React.forwardRef(({ value, isActive, dispatch }: { value: CCGraphItemProp, isActive: boolean, dispatch: CallableFunction }, ref: React.Ref<HTMLLIElement> | undefined) => (
      <li
        ref={ref}
        className={isActive ? 'active ccgraph-list-item' : 'ccgraph-list-item'}
        onClick={() => {
          dispatch({ type: 'SELECT_ITEM', payload: value.uuid });
        }}>
        <DragHandle />
        <span>{value.name}</span>
      </li>
    )),
  );

  const ListContainer = SortableContainer<{ items: CCGraphItemProp[], activeUuid: String, dispatch: CallableFunction }>(
    React.forwardRef(({ items }: { items: CCGraphItemProp[] }, ref: React.Ref<HTMLUListElement> | undefined) => (
      <ul ref={ref} className='ccgraph-list'>
        {items.map((value, index) => (
          <ListItem key={value.uuid} index={index} isActive={value.uuid == activeUuid} value={value} dispatch={dispatch} />
        ))}
      </ul>
    )),
  );

  const onSortEnd = (
    { oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
    dispatch({ type: 'LIST_MOVE_ITEM', payload: { oldIndex, newIndex } });
  };

  return <ListContainer items={items} activeUuid={activeUuid} dispatch={dispatch} onSortEnd={onSortEnd} useDragHandle />;
};
