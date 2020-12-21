import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/common/expense';
import { ExpenseCategory } from 'src/app/common/expense-category';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
    });
  }
}
