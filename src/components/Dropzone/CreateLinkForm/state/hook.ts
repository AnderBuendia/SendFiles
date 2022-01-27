import { useReducer, Reducer } from 'react';
import {
  ActionType,
  Action,
} from '@Components/Dropzone/CreateLinkForm/state/actions';
import { NumberOfDownloads } from '@Enums/file/downloads.enum';

export interface FormState {
  downloads: number;
  password: string;
}

const initialState: FormState = {
  downloads: NumberOfDownloads.ONE,
  password: '',
};

const reducer: Reducer<FormState, Action> = (state, action) => {
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
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
};

export function useForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    addDownloads: ({ downloads }: { downloads: number }) =>
      dispatch({ type: ActionType.ADD_DOWNLOADS, payload: downloads }),
    addPassword: ({ password }: { password: string }) =>
      dispatch({ type: ActionType.ADD_PASSWORD, payload: password }),
    downloads: state.downloads,
    password: state.password,
  };
}
