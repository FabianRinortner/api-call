import {Action} from '@ngrx/store';
import {CategoriesModel} from '../model/categories.model';

export enum CategoriesActionTypes {
  LOAD_CATEGORIES = 'LOAD_CATEGORIES',
  LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS',
  LOAD_CATEGORIES_ERROR = 'LOAD_CATEGORIES_ERROR',
  RESET_CATEGORIES = 'RESET_CATEGORIES',
}

export type CategoriesActionUnion =
  LoadCategoriesAction
  | LoadCategoriesSuccessAction
  | LoadCategoriesErrorAction
  | ResetCategories;

export class LoadCategoriesAction implements Action {
  readonly type = CategoriesActionTypes.LOAD_CATEGORIES;

  constructor() {
  }
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS;

  constructor(public payload: CategoriesModel) {
  }
}

export class LoadCategoriesErrorAction implements Action {
  readonly type = CategoriesActionTypes.LOAD_CATEGORIES_ERROR;

  constructor() {
  }
}

export class ResetCategories implements Action {
  readonly type = CategoriesActionTypes.RESET_CATEGORIES;

  constructor() {
  }
}
