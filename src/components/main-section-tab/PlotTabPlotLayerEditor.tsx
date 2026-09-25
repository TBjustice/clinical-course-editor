import { useState } from 'react'
import styles from './PlotTabPlotLayerEditor.module.css'
import Dialog from '../ui/Dialog .tsx';
import { IconButtonOutline } from '../ui/IconButton.tsx';
import { useProjectDataStore } from '../../stores/ProjectDataStore.ts';
import type { CliCLayer, CliCPlot } from '../../types/CliCTypes.ts';
import { useShallow } from 'zustand/shallow';

function PlotEditor({ plot, dataNameLut, updatePlot }: {
  plot: CliCPlot,
  dataNameLut: Record<string, string>,
  updatePlot: (plot: CliCPlot) => void
}) {
  return (
    <div className={styles.graph_config}>
      <menu className={styles.graph_menu}>
        <select
          name='graph-type' className={styles.type_select} value={plot.type}
          onChange={(event) => {
            updatePlot({
              ...plot,
              type: event.target.value
            })
          }}>
          <option>-----</option>
          <option value='line'>Line</option>
          <option value='step-area'>StepArea</option>
          <option value='timing'>Timing</option>
        </select>
        <IconButtonOutline icon_name='keyboard_arrow_up'>
          <div className='tooltip-left tooltip lang-en'>Move Up</div>
          <div className='tooltip-left tooltip lang-jp'>上に移動</div>
        </IconButtonOutline>
        <IconButtonOutline icon_name='keyboard_arrow_down'>
          <div className='tooltip-left tooltip lang-en'>Move Down</div>
          <div className='tooltip-left tooltip lang-jp'>下に移動</div>
        </IconButtonOutline>
        <IconButtonOutline icon_name='delete_forever'>
          <div className='tooltip-left tooltip lang-en'>Delete</div>
          <div className='tooltip-left tooltip lang-jp'>削除</div>
        </IconButtonOutline>
      </menu>
      <section className={styles.section}>
        <header>
          <span className='lang-en'>Series</span>
          <span className='lang-jp'>データ</span>
        </header>
        <div className={styles.series_wrap}>
          {plot.target.map(item => (
            <div className={styles.series_item} key={item}>
              <div className={styles.series_item_name}>
                <span>{dataNameLut[item]}</span>
              </div>
              <button className={styles.series_item_delete}>
                <span className={'material-icons-outlined'}>clear</span>
              </button>
            </div>
          ))}
          <button className={styles.series_add}>
            <span className='material-icons-outlined'>add</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default function PlotLayerEditor({ activeLayer }: { activeLayer: CliCLayer }) {
  const [isDeleteDialogOpened, setDeleteDialogOpened] = useState(false);

  const updateActiveLayer = useProjectDataStore((state) => (state.updateActiveLayer));
  const deleteActiveLayer = useProjectDataStore((state) => (state.deleteActiveLayer));

  const dataNameLut: Record<string, string> = useProjectDataStore(useShallow((state) => {
    const result: Record<string, string> = {};
    state.tableList.forEach((table) => {
      table.header.forEach((item) => {
        result[item.uuid] = item.name;
      })
    });
    return result;
  }));

  function onLayerNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateActiveLayer({
      ...activeLayer,
      name: event.target.value
    });
  }

  function onGraphHeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateActiveLayer({
      ...activeLayer,
      height: parseInt(event.target.value)
    });
  }

  function updatePlot(plot: CliCPlot, targetIndex: number) {
    updateActiveLayer({
      ...activeLayer,
      plotList: activeLayer.plotList.map((item, index) => (index == targetIndex ? plot : item))
    })
  }

  return (
    <>
      <header className={styles.header}>
        <input type='text' id='ccgraph-name' className={styles.ccgraph_name} value={activeLayer.name} onChange={onLayerNameChange} />
        <button onClick={() => { setDeleteDialogOpened(true); }}>
          <svg width={24} height={24} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path d='M17 4 28 4A1 1 0 0128 6L4 6A1 1 0 014 4L15 4 15 2A1 1 0 0117 2ZM26 31 6 31 4 9A1 1 0 016 9L8 29 24 29 26 9A1 1 0 0128 9ZM9 10 10 26 12 26 11 10ZM15 10 15 26 17 26 17 10ZM21 10 20 26 22 26 23 10Z' fill='#f00' />
          </svg>
        </button>
      </header>
      <section className={styles.section}>
        <header>
          <span className='lang-en'>Height</span>
          <span className='lang-jp'>高さ</span>
        </header>
        <div className={styles.range_wrap}>
          <input
            type='range' name='ccgraph-height' className={styles.range}
            min={5} max={200} step={1}
            value={activeLayer.height}
            onChange={onGraphHeightChange} />
          <input
            type='number' name='ccgraph-height' className={styles.range}
            value={activeLayer.height}
            onChange={onGraphHeightChange} />
        </div>
      </section>
      <section className={styles.section}>
        <header>
          <span className='lang-en'>Graphs</span>
          <span className='lang-jp'>グラフ一覧</span>
        </header>
        <div className={styles.graph_list}>
          {activeLayer.plotList.map((item, idx) => (
            <PlotEditor
              plot={item} key={idx}
              dataNameLut={dataNameLut}
              updatePlot={(plot) => { updatePlot(plot, idx); }} />
          ))}
          <button className={styles.add_graph}>
            <span className='lang-en'>Add New Graph</span>
            <span className='lang-jp'>グラフを追加</span>
          </button>
        </div>
      </section>

      <Dialog
        isOpen={isDeleteDialogOpened}
        onCancelDialog={() => {
          setDeleteDialogOpened(false);
        }}>
        <header>
          <span className='lang-en'>Do you really want to delete this layer?</span>
          <span className='lang-jp'>本当にこのレイヤーを削除しても良いですか?</span>
        </header>
        <p>
          <span className='lang-en'>All the content are deleted permanently.</span>
          <span className='lang-jp'>内容は完全に消去されます。</span>
        </p>
        <menu>
          <button
            onClick={() => {
              setDeleteDialogOpened(false);
            }}>Cancel</button>
          <button
            onClick={() => {
              setDeleteDialogOpened(false);
              deleteActiveLayer();
            }}>Yes</button>
        </menu>
      </Dialog >
    </>
  )
}
