import { useReducer } from 'react';
import './App.css'
import CCGraphList from './CCGraphList.tsx'
import { arrayMoveImmutable } from 'array-move';

interface AppState {
  dataOrder: string[];
  activeId: string;
}

const initialState: AppState = {
  dataOrder: [],
  activeId: ""
};

type AppStateAction =
  | { type: 'ADD_ITEM'; payload: { uuid: string; data: string } }
  | { type: 'SELECT_ITEM'; payload: string }
  | { type: 'LIST_MOVE_ITEM'; payload: { oldIndex: number; newIndex: number } }
  | { type: 'DELETE_DATA'; payload: string };
  
function AppStateReducer(state: AppState, action: AppStateAction){
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, dataOrder: [...state.dataOrder, action.payload.uuid]};
    case 'SELECT_ITEM':
      return { ...state, activeId: action.payload };
    case 'LIST_MOVE_ITEM':
      return {...state, dataOrder: arrayMoveImmutable(state.dataOrder, action.payload.oldIndex, action.payload.newIndex)};
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(AppStateReducer, initialState);
  function addGraph() {
    dispatch({
      type: 'ADD_ITEM',
      payload: {uuid:crypto.randomUUID(), data:""}
    });
  }

  const CCGraphListProp = state.dataOrder.map(uuid => ({
    uuid,
    name: uuid
  }));

  return (
    <>
      <section className='list-pane'>
        <header>
          <h1>CCEditor</h1>
          <p>OSS clinical cource editor</p>
        </header>
        <div className='line'></div>
        <menu>
          <button onClick={addGraph}>add</button>
          <button>save</button>
          <button>load</button>
        </menu>
        <CCGraphList items={CCGraphListProp} activeId={state.activeId} dispatch={dispatch} />
      </section>
      <section className='editor-pane'>
      </section>
      <section className='preview-pane'></section>
    </>
  )
};
