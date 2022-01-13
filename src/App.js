import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import List from "./components/List/List";
import { listReducer } from "./redux/reducers/ListReducer";

const store = createStore(listReducer);

const App = () => {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};
export default App;
