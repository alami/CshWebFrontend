import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './state';
import {groups} from "@/store/modules/groups";

Vue.use(Vuex)

const options: StoreOptions<RootState> = {
  state: { },
  modules: {
    groups
  }
}
export default new Vuex.Store(options);

