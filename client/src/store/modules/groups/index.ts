import {Module} from "vuex";
import {RootState} from "@/store/state";
import {GroupsState} from "@/store/modules/groups/state";
import {makeActions} from "@/store/modules/groups/actions";
import {mutations} from "@/store/modules/groups/mutations";
import {GroupsService} from "@/data/groups/groups-service";

export const groups: Module<GroupsState, RootState> = {
    namespaced: true,
    actions: makeActions(new GroupsService()),// TODO: maybe not the best place to create it
    mutations,
    state: {
        groups:[]
    },
}