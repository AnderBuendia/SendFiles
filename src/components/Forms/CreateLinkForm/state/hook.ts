import { useReducer } from 'react';
import {
  ActionType,
  Action,
} from '@Components/Forms/CreateLinkForm/state/action';
import { NumberOfDownloads } from '@Enums/file/downloads.enum';

export interface FormState {
  password: string;
  downloads: string;
  hasPassword: boolean;
}

const initialState: FormState = {
  password: '',
  downloads: NumberOfDownloads.ONE,
  hasPassword: false,
};

const reducer = (state: FormState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_DOWNLOADS:
      return {
        ...state,
        downloads: action.payload,
      };
    case ActionType.ADD_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case ActionType.CHANGE_HAS_PASSWORD:
      return {
        ...state,
        hasPassword: action.payload,
      };
    default:
      throw new Error(`Unknown action type: ${JSON.stringify(action)}`);
  }
};

export function useForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    addPassword: ({ password }: { password: string }) =>
      dispatch({ type: ActionType.ADD_PASSWORD, payload: password }),
    addDownloads: ({ downloads }: { downloads: string }) =>
      dispatch({ type: ActionType.ADD_DOWNLOADS, payload: downloads }),
    changeHasPassword: ({ hasPassword }: { hasPassword: boolean }) =>
      dispatch({ type: ActionType.CHANGE_HAS_PASSWORD, payload: hasPassword }),
    password: state.password,
    downloads: state.downloads,
    hasPassword: state.hasPassword,
  };
}
