import './App.css';
import ExampleUseEffect from './ExampleUseEffect';
import ExampleUseMemo from './ExampleUseMeno';
import ExampleuseState from './ExampleuseState';
import DataContext, { useData } from './ExampleUseContext';
import ContextList from './ContextList';
import { DataProvider } from './usecontext/DataContext';
import Child from './usecontext/Child';
import StudentDetails from './usecontext/StudentDetails';
import ParentCom from './useMemo/parentCom';
import Parent from './useCallback/ParentCom';
import ExampleUseReducer from './ExampleUseReducer';


function App() {
  return (
    <div className="App">
     
      {/* <ExampleuseState/> */}

      {/* <ExampleUseEffect/> */}

      {/* <DataContext.Provider value={useData()}>
        <ContextList/>
      </DataContext.Provider> */}

      {/* <DataProvider>
        <Child/>
        <StudentDetails/>
      </DataProvider> */}

      {/* <ExampleUseMemo/>
      <ParentCom/> */}
       {/* <Parent/> */}

       <ExampleUseReducer/>
    </div>
  );
}

export default App;
