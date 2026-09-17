import React from 'react';
import stylesCmn from './common.module.css'
import styles from './PlotTab.module.css'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from '@lumel/react-sortable-hoc';

type GraphLayerItemProp = {
  uuid: string,
  name: string
}

export default function GraphLayerList({ items, activeUuid, dispatch }: { items: GraphLayerItemProp[], activeUuid: string, dispatch: CallableFunction }) {

  const DragHandle = SortableHandle(React.forwardRef(({ }, ref: React.Ref<HTMLSpanElement> | undefined) => (
    <span ref={ref} className={`material-icons-outlined ${styles.layer_item_drag}`}>drag_indicator</span>
  )));

  const ListItem = SortableElement<{ value: GraphLayerItemProp, isActive: boolean, dispatch: CallableFunction }>(
    React.forwardRef(({ value, isActive, dispatch }: { value: GraphLayerItemProp, isActive: boolean, dispatch: CallableFunction }, ref: React.Ref<HTMLButtonElement> | undefined) => (
      <button
        ref={ref}
        className={isActive ? `${stylesCmn.list_item} ${styles.list_item} active` : `${stylesCmn.list_item} ${styles.list_item}`}
        onClick={() => {
          dispatch({ type: 'SELECT_ITEM', payload: value.uuid });
        }}>
        <DragHandle />
        <span className={styles.layer_item_name}>{value.name}</span>
      </button>
    )),
  );

  const ListContainer = SortableContainer<{ items: GraphLayerItemProp[], activeUuid: String, dispatch: CallableFunction }>(
    React.forwardRef(({ items }: { items: GraphLayerItemProp[] }, ref: React.Ref<HTMLDivElement> | undefined) => (
      <div ref={ref}>
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
        className={`${styles.add_button} has-tooltip`}
        onClick={addGraph}>
        <span className={`material-icons-outlined`}>add</span>
        <span className='tooltip tooltip-right lang-en'>Add new layer</span>
        <span className='tooltip tooltip-right lang-jp'>レイヤーを追加</span>
      </button>
    </>
  );
};