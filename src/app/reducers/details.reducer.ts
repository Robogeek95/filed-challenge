import { Details } from '../home/details.model';
export const ADD_DETAIL = 'ADD_DETAIL';

export function addDetailReducer(state: Details[] = [], action: any) {
  switch (action.type) {
    case ADD_DETAIL:
      return [...state, action.payload];
    default:
      return state;
  }
}
