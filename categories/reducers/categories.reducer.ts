import {CategoriesState, INITIAL_CATEGORIES_STATE} from '../state/categories.state';
import {CategoriesActionTypes, CategoriesActionUnion} from '../actions/categories.action';

export function categoriesReducer(state: CategoriesState = INITIAL_CATEGORIES_STATE,
                                  action: CategoriesActionUnion): CategoriesState {

  switch (action.type) {
    case CategoriesActionTypes.LOAD_CATEGORIES: {
      return {...state, isLoading: true, isLoadingFailed: false};
    }
    case CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS: {
      return {...state, categoriesModel: action.payload, isLoading: false, isLoadingFailed: false};
    }
    case CategoriesActionTypes.LOAD_CATEGORIES_ERROR: {
      return {...state, isLoadingFailed: true, isLoading: false};
    }
    case CategoriesActionTypes.RESET_CATEGORIES: {
      return INITIAL_CATEGORIES_STATE;
    }
    default: {
      return state;
    }
  }
}
