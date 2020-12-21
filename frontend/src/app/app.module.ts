import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseService } from './services/expense.service';

import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses/add', component: NewExpenseComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    DashboardComponent,
    NewExpenseComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
