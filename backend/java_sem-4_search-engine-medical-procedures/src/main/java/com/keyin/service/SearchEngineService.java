package com.keyin.service;

import com.keyin.model.Keyword;
import com.keyin.model.Procedure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchEngineService {
    private final KeywordService keywordService;
    private final AccountKeywordService accountKeywordService;
    private final ProcedureService procedureService;
    private final AccountService accountService;

    @Autowired
    public SearchEngineService(
            KeywordService keywordService,
            AccountKeywordService accountKeywordService,
            ProcedureService procedureService,
            AccountService accountService
    ) {
        this.keywordService = keywordService;
        this.accountKeywordService = accountKeywordService;
        this.procedureService = procedureService;
        this.accountService = accountService;
    }

    public List<Procedure> processQuery(String query) {
        Keyword keyword = this.keywordService.createKeyword(query);

        this.accountKeywordService.createAccountKeywordAssociation(this.accountService.findAccountById(1L).get(), keyword);

        return this.procedureService.findProcedureByKeyword(keyword.getName());
    }

}
