import "./App.css";
import RenderExample from "./components/\bRenderExample";
import ShouldUpdateExample from "./components/\bShouldComponentUpdate";
import DerivedStateExample from "./components/DerivedStateExample";
import LifecycleDemo from "./components/LifeCycleDemo";
import LifecycleOverview from "./components/LifeCycleOverview";
import SnapshotExample from "./components/SnapshotExample";

function App() {
  return (
    <>
      <LifecycleDemo />

      <LifecycleOverview />

      <DerivedStateExample initialValue={12345} />

      <RenderExample />

      <ShouldUpdateExample />

      <SnapshotExample />
    </>
  );
}

export default App;
