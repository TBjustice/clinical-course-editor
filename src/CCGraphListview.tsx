import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from '@lumel/react-sortable-hoc';
import React from 'react';
import styles from './components/PlotTab.module.css'

type CCGraphItemProp = {
  uuid: string,
  name: string
}

export default function CCGraphListview({ items, activeUuid, dispatch }: { items: CCGraphItemProp[], activeUuid: string, dispatch: CallableFunction }) {

  const DragHandle = SortableHandle(React.forwardRef(({ }, ref: React.Ref<HTMLSpanElement> | undefined) => (
        <span ref={ref} className={`material-icons-outlined`}>drag_indicator</span>
  )));

  const ListItem = SortableElement<{ value: CCGraphItemProp, isActive: boolean, dispatch: CallableFunction }>(
    React.forwardRef(({ value, isActive, dispatch }: { value: CCGraphItemProp, isActive: boolean, dispatch: CallableFunction }, ref: React.Ref<HTMLButtonElement> | undefined) => (
      <button
        ref={ref}
        className={isActive ? `${styles.layer_item} active` : styles.layer_item}
        onClick={() => {
          dispatch({ type: 'SELECT_ITEM', payload: value.uuid });
        }}>
        <DragHandle />
        <span className={styles.layer_item_name}>{value.name}</span>
      </button>
    )),
  );

  const ListContainer = SortableContainer<{ items: CCGraphItemProp[], activeUuid: String, dispatch: CallableFunction }>(
    React.forwardRef(({ items }: { items: CCGraphItemProp[] }, ref: React.Ref<HTMLDivElement> | undefined) => (
      <div ref={ref} className={styles.layer_list}>
        {items.map((value, index) => (
          <ListItem key={value.uuid} index={index} isActive={value.uuid == activeUuid} value={value} dispatch={dispatch} />
        ))}
      </div>
    )),
  );

  const onSortEnd = (
    { oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
    dispatch({ type: 'LIST_MOVE_ITEM', payload: { oldIndex, newIndex } });
  };

  

  function addGraph() {
    dispatch({
      type: 'ADD_ITEM',
      payload: crypto.randomUUID()
    });
  }

  return (
    <>
      <ListContainer items={items} activeUuid={activeUuid} dispatch={dispatch} onSortEnd={onSortEnd} useDragHandle />
      <button
      className={`${styles.add_button}`}
      onClick={addGraph}>
        <span className={`material-icons-outlined`}>add</span>
      </button>
    </>
  );
};
