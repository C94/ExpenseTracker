import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseCategory } from 'src/app/common/expense-category';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css'],
})
export class NewExpenseComponent implements OnInit {
  expenseFormGroup: FormGroup;

  expenseCategories: ExpenseCategory[] = [];

  constructor(
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expenseService
      .getCategories()
      .subscribe((data) => (this.expenseCategories = data));

    this.expenseFormGroup = this.formBuilder.group({
      expense: this.formBuilder.group({
        type: [''],
        name: [''],
        description: [''],
        paid: [''],
        dateDue: [''],
        cost: [''],
      }),
    });
  }

  onSubmit(): void {
    console.log(this.expenseFormGroup.controls.expense.value);
    this.router.navigateByUrl('/dashboard');
  }
}
