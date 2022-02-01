export enum ActionType {
  ADD_PASSWORD = 'ADD_PASSWORD',
  ADD_DOWNLOADS = 'ADD_DOWNLOADS',
  CHANGE_HAS_PASSWORD = 'CHANGE_HAS_PASSWORD',
}

export interface AddPasswordAction {
  type: ActionType.ADD_PASSWORD;
  payload: string;
}

export interface AddDownloadsAction {
  type: ActionType.ADD_DOWNLOADS;
  payload: string;
}

export interface ChangeHasPasswordAction {
  type: ActionType.CHANGE_HAS_PASSWORD;
  payload: boolean;
}

export type Action =
  | AddPasswordAction
  | AddDownloadsAction
  | ChangeHasPasswordAction;
