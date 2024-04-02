package com.keyin.controller;

import com.keyin.model.Procedure;
import com.keyin.service.SearchEngineService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/procedure")
public class SearchEngineController {
    private final SearchEngineService searchEngineService;

    public SearchEngineController(SearchEngineService searchEngineService) {
        this.searchEngineService = searchEngineService;
    }

    @GetMapping
    public List<Procedure> getAllProcedures() {
        return this.searchEngineService.fetchProcedures();
    }

    @GetMapping(params = "keyword")
    public List<Procedure> getProcedureByKeyword(@RequestParam(value = "keyword") String keyword) {
        return this.searchEngineService.processQuery(keyword);
    }
}
