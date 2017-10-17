import { PtItem, PtUser } from "../shared/models/domain";
import { ViewIndex } from "../shared/models/ui";

export type StateKey = 'users' | 'backlogItems' | 'currentUser' | 'selectedViewIndex';

export interface State {
    backlogItems: PtItem[],
    users: PtUser[],
    currentUser: PtUser,
    selectedViewIndex: ViewIndex,
    [key: string]: any
}

export const INITIAL_STATE: State = {
    backlogItems: [],
    users: [],
    currentUser: undefined,
    selectedViewIndex: { idx: 1 }
};

