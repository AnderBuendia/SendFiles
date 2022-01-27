export enum ActionType {
  ADD_DOWNLOADS = 'ADD_DOWNLOADS',
  ADD_PASSWORD = 'ADD_PASSWORD',
}

export interface AddDownloadsAction {
  type: ActionType.ADD_DOWNLOADS;
  payload: number;
}

export interface AddPasswordAction {
  type: ActionType.ADD_PASSWORD;
  payload: string;
}

export type Action = AddDownloadsAction | AddPasswordAction;
