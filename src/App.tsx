// import AppRouter from "routes";
import AppRouter from "routes/routes";
import { Provider } from "react-redux";
import { store } from "core/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
