import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return <Provider store={store}>{/* Your existing app content */}</Provider>;
};

export default App;
