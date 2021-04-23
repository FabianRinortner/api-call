import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  CategoriesActionTypes,
  LoadCategoriesAction,
  LoadCategoriesErrorAction,
  LoadCategoriesSuccessAction
} from '../actions/categories.action';
import {CategoriesModel} from '../model/categories.model';

@Injectable()
export class CategoriesEffect {

  constructor(private httpClient: HttpClient, private actions$: Actions) {
  }

  @Effect()
  categories$: Observable<Action> = this.actions$
    .pipe(ofType(CategoriesActionTypes.LOAD_CATEGORIES))
    .pipe(switchMap((action: LoadCategoriesAction) => {
      const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

      return this.httpClient.get<CategoriesModel>(url)
        .pipe(map((data: CategoriesModel) => new LoadCategoriesSuccessAction(data)))
        .pipe(catchError(() => of(new LoadCategoriesErrorAction())));
    }));
}
