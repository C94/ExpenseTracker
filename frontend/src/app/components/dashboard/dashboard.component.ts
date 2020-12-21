import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/common/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  expenses: Expense[];
  totalPrice = 0;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
      this.calculateTotal(this.expenses);
    });
  }

  calculateTotal(expenses: Expense[]): void {
    expenses.forEach((expense) => (this.totalPrice += expense.cost));
  }
}
