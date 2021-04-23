import {AppState} from '../../app.state';
import {createSelector} from '@ngrx/store';
import {CategoriesState} from '../state/categories.state';


export const selectCategories = (state: AppState) => state.categoriesState;

export const categories =
  createSelector(selectCategories, (state: CategoriesState) => state.categoriesModel);

export const isCategoriesLoading =
  createSelector(selectCategories, (state: CategoriesState) => state.isLoading);

export const isCategoriesLoadingFailed =
  createSelector(selectCategories, (state: CategoriesState) => state.isLoadingFailed);
