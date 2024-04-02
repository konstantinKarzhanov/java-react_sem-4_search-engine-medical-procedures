package com.keyin.repository;

import com.keyin.model.Procedure;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface ProcedureRepository extends ListCrudRepository<Procedure, Long> {
    List<Procedure> findByNameContainingIgnoreCase(String keyword);
}
