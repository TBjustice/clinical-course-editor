import React from 'react';
import stylesCmn from './common.module.css'
import styles from './PlotTab.module.css'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from '@lumel/react-sortable-hoc';
import { useProjectDataStore } from '../../stores/ProjectDataStore';

type GraphLayerItemProp = {
  uuid: string,
  name: string
}

export default function PlotLayerList() {
  const setActiveLayerUuid = useProjectDataStore((state) => state.setActiveLayerUuid);
  const layerUuid = useProjectDataStore((state) => state.layerUuid);
  const layerList = useProjectDataStore((state) => state.layerList);
  const activeLayerUuid = useProjectDataStore((state) => state.activeLayerUuid);
  const addLayer = useProjectDataStore((state) => state.addLayer);
  const moveLayer = useProjectDataStore((state) => state.moveLayer);

  const layerItemList: GraphLayerItemProp[] = [];
  for (const uuid of layerUuid) {
    layerItemList.push({
      uuid, name: layerList[uuid].name
    })
  }

  const DragHandle = SortableHandle(React.forwardRef(({ }, ref: React.Ref<HTMLSpanElement> | undefined) => (
    <span ref={ref} className={`material-icons-outlined ${styles.layer_item_drag}`}>drag_indicator</span>
  )));

  const ListItem = SortableElement<{ value: GraphLayerItemProp, isActive: boolean }>(
    React.forwardRef(({ value, isActive }: { value: GraphLayerItemProp, isActive: boolean }, ref: React.Ref<HTMLButtonElement> | undefined) => (
      <button
        ref={ref}
        className={isActive ? `${stylesCmn.list_item} ${styles.list_item} active` : `${stylesCmn.list_item} ${styles.list_item}`}
        onClick={() => {
          setActiveLayerUuid(value.uuid)
        }}>
        <DragHandle />
        <span className={styles.layer_item_name}>{value.name}</span>
      </button>
    )),
  );

  const ListContainer = SortableContainer(
    React.forwardRef(({ }, ref: React.Ref<HTMLDivElement> | undefined) => (
      <div ref={ref}>
        {layerItemList.map((value, index) => (
          <ListItem key={value.uuid} index={index} isActive={value.uuid == activeLayerUuid} value={value} />
        ))}
      </div>
    )),
  );

  const onSortEnd = ( { oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
    moveLayer(oldIndex, newIndex);
  };

  return (
    <>
      <ListContainer onSortEnd={onSortEnd} useDragHandle />
      <button className={styles.add_button} onClick={() => { addLayer(crypto.randomUUID()); }}>
        <span className='lang-en'>Add New Layer</span>
        <span className='lang-jp'>レイヤーを追加</span>
      </button>
    </>
  );
};