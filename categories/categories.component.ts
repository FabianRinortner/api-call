import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CategoriesModel} from './model/categories.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {categories, isCategoriesLoading, isCategoriesLoadingFailed} from './selectors/categories.selector';
import {filter} from 'rxjs/operators';
import {ResetCategories} from './actions/categories.action';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  isLoading$: Observable<boolean>;
  isLoadingFailed$: Observable<boolean>;
  categoriesModel: CategoriesModel;

  private categoriesSubscription: Subscription;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isCategoriesLoading));
    this.isLoadingFailed$ = this.store.pipe(select(isCategoriesLoadingFailed));
    this.categoriesSubscription = this.store.pipe(select(categories))
      .pipe(filter(n => !!n))
      .subscribe(this.initCategoriesFromStore.bind(this));
  }

  initCategoriesFromStore(next: CategoriesModel) {
    this.categoriesModel = next;
    console.log(next);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ResetCategories());
    this.categoriesSubscription.unsubscribe();
  }
}
