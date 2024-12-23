import "./App.css";
import RenderExample from "./components/\bRenderExample";
import ShouldUpdateExample from "./components/\bShouldComponentUpdate";
import DerivedStateExample from "./components/DerivedStateExample";
import DidUpdateExample from "./components/DidUpdateExmaple";
import FetchDataExample from "./components/FetchDataExample";
import LifecycleDemo from "./components/LifeCycleDemo";
import LifecycleOverview from "./components/LifeCycleOverview";
import SnapshotExample from "./components/SnapshotExample";

function App() {
  return (
    <>
      <DidUpdateExample />

      <FetchDataExample />

      {/* <LifecycleDemo /> */}

      {/* <LifecycleOverview /> */}

      {/* <DerivedStateExample initialValue={12345} /> */}

      {/* <RenderExample /> */}

      {/* <ShouldUpdateExample /> */}

      {/* <SnapshotExample /> */}
    </>
  );
}

export default App;
