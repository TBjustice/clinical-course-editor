import { useReducer } from 'react';
import './App.css'
import CCGraphListview from './CCGraphListview.tsx'
import CCGraphEditor from './CCGraphEditor.tsx'
import { arrayMoveImmutable } from 'array-move';

interface AppState {
  ccgraphOrder: string[];
  activeUuid: string;
}

const initialState: AppState = {
  ccgraphOrder: [],
  activeUuid: ""
};

type AppStateAction =
  | { type: 'ADD_ITEM'; payload: { uuid: string; data: string } }
  | { type: 'SELECT_ITEM'; payload: string }
  | { type: 'LIST_MOVE_ITEM'; payload: { oldIndex: number; newIndex: number } }
  | { type: 'DELETE_DATA'; payload: string };
  
function AppStateReducer(state: AppState, action: AppStateAction){
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, ccgraphOrder: [...state.ccgraphOrder, action.payload.uuid]};
    case 'SELECT_ITEM':
      return { ...state, activeUuid: action.payload };
    case 'LIST_MOVE_ITEM':
      return {...state, ccgraphOrder: arrayMoveImmutable(state.ccgraphOrder, action.payload.oldIndex, action.payload.newIndex)};
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

  const ccgraphListProp = state.ccgraphOrder.map(uuid => ({
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
        <CCGraphListview items={ccgraphListProp} activeUuid={state.activeUuid} dispatch={dispatch} />
      </section>
      <section className='editor-pane'>
        {state.activeUuid.length > 0 && <CCGraphEditor /> }
      </section>
      <section className='preview-pane'></section>
    </>
  )
};
