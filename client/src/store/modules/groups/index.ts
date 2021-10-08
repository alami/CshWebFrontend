import {Module} from "vuex";
import {RootState} from "@/store/state";
import {GroupsState} from "@/store/modules/groups/state";
import {actions} from "@/store/modules/groups/actions";
import {mutations} from "@/store/modules/groups/mutations";

export const groups: Module<GroupsState, RootState> = {
    namespaced: false,
    actions,
    mutations,
    state: {
        groups:[]
    },
}