package com.keyin.service;

import com.keyin.model.Procedure;
import com.keyin.repository.ProcedureRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProcedureService {
    private final ProcedureRepository procedureRepository;

    public ProcedureService(ProcedureRepository procedureRepository) {
        this.procedureRepository = procedureRepository;
    }

    public List<Procedure> findAllProcedures() {
        return this.procedureRepository.findAll();
    }

    public List<Procedure> findProcedureByKeyword(String keyword) {
        return this.procedureRepository.findByNameContainingIgnoreCase(keyword);
    }
}
