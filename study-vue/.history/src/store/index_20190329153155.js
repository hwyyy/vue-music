import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions'
import * as getters from './getters'
import srate from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
const store = new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});
 
export default store;
