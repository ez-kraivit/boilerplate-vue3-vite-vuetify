import { createStore } from 'vuex';
import persistedState from '../plugins/persistedState';
export default createStore({
    plugins: [persistedState],
    modules: {

    }
})