package com.keyin.controller;

import com.keyin.dto.ResponseDTO;
import com.keyin.exception.AccountNotFoundException;
import com.keyin.model.Procedure;
import com.keyin.service.ProcedureService;
import com.keyin.service.SearchEngineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/procedure")
public class ProcedureController {
    private final ProcedureService procedureService;
    private final SearchEngineService searchEngineService;

    @Autowired
    public ProcedureController(ProcedureService procedureService, SearchEngineService searchEngineService) {
        this.procedureService = procedureService;
        this.searchEngineService = searchEngineService;
    }

    @GetMapping
    public List<Procedure> getAllProcedures() {
        return this.procedureService.findAllProcedures();
    }

    @GetMapping(params = "keyword")
    public ResponseEntity<?> getProceduresByKeyword(
            @RequestParam(value = "keyword") String keyword,
            Principal principal
    ) {
        try {
            List<Procedure> procedureList = this.searchEngineService.processQuery(keyword, principal.getName());

            return ResponseEntity.ok(procedureList);
        } catch (AccountNotFoundException e) {
            return new ResponseEntity<>(
                    new ResponseDTO(principal.getName(), e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
