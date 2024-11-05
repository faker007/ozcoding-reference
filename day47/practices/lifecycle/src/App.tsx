import "./App.css";
import DerivedStateExample from "./components/DerivedStateExample";
import LifecycleDemo from "./components/LifeCycleDemo";
import LifecycleOverview from "./components/LifeCycleOverview";

function App() {
  return (
    <>
      <LifecycleDemo />

      <LifecycleOverview />

      <DerivedStateExample initialValue={12345} />
    </>
  );
}

export default App;
