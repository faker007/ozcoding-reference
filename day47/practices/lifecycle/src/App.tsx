import "./App.css";
import RenderExample from "./components/\bRenderExample";
import ShouldUpdateExample from "./components/\bShouldComponentUpdate";
import DerivedStateExample from "./components/DerivedStateExample";
import LifecycleDemo from "./components/LifeCycleDemo";
import LifecycleOverview from "./components/LifeCycleOverview";

function App() {
  return (
    <>
      <LifecycleDemo />

      <LifecycleOverview />

      <DerivedStateExample initialValue={12345} />

      <RenderExample />

      <ShouldUpdateExample />
    </>
  );
}

export default App;
