import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../common/expense';
import { ExpenseCategory } from '../common/expense-category';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  categoriesUrl = 'http://localhost:8080/api/expense-category';

  expensesUrl = 'http://localhost:8080/api/expenses';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ExpenseCategory[]> {
    return this.httpClient
      .get<GetResponseCategories>(this.categoriesUrl)
      .pipe(map((response) => response._embedded.expenseCategory));
  }

  getExpenses(): Observable<Expense[]> {
    return this.httpClient
      .get<GetResponseExpenses>(this.expensesUrl)
      .pipe(map((response) => response._embedded.expenses));
  }
}

interface GetResponseExpenses {
  _embedded: {
    expenses: Expense[];
  };
}

interface GetResponseCategories {
  _embedded: {
    expenseCategory: ExpenseCategory[];
  };
}
