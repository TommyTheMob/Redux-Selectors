import React from "react";
import {Provider} from "react-redux";
import TransferList from './componenets/TransferList.jsx';
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <TransferList />
        </Provider>
    )
}

export default App