package com.chandlerklein.backend.repository;

import com.chandlerklein.backend.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
