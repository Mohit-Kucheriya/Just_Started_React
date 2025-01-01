import User from "./components/User";
import Articles from "./components/Articles";
function App() {
  return (
    <div className="app-body">
      <header>
        <h1>React Skeleton Screen</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
