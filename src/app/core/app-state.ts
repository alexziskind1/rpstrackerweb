import { PtItem, PtUser } from "../shared/models/domain";
import { ViewIndex } from "../shared/models/ui";

export type StateKey = 'users' | 'backlogItems' | 'currentUser' | 'currentSelectedItem' | 'selectedViewIndex';

export interface State {
    backlogItems: PtItem[],
    users: PtUser[],
    currentUser: PtUser,
    currentSelectedItem: PtItem,
    selectedViewIndex: ViewIndex,
    [key: string]: any
}

export const INITIAL_STATE: State = {
    backlogItems: [],
    users: [],
    currentUser: undefined,
    currentSelectedItem: undefined,
    selectedViewIndex: { idx: 1 }
};

