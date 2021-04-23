import {CategoriesModel} from '../model/categories.model';

export class CategoriesState {
  categoriesModel?: CategoriesModel;
  isLoading?: boolean;
  isLoadingFailed?: boolean;
}

export const INITIAL_CATEGORIES_STATE: CategoriesState = {

  // Data to create an initial state
  categoriesModel: {
    categories: [
      {
        idCategory: 1,
        strCategory: 'Beef',
        strCategoryThumb: 'beef.png',
        strCategoryDescription: ' Beef is a nutrients.'
      },
      {
        idCategory: 2,
        strCategory: 'Beef',
        strCategoryThumb: 'beef.png',
        strCategoryDescription: ' Beef is a nutrients.'
      }
    ]
  }

};

