package com.keyin.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name = "account_keyword")
@Table(name = "account_keyword")
public class AccountKeyword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(
            name = "account_id",
            referencedColumnName = "id",
            nullable = false,
            columnDefinition = "bigserial",
            foreignKey = @ForeignKey(name = "account_keyword_account_fkey")
    )
    private Account account;

    @ManyToOne
    @JoinColumn(
            name = "keyword_id",
            referencedColumnName = "id",
            nullable = false,
            columnDefinition = "bigserial",
            foreignKey = @ForeignKey(name = "account_keyword_keyword_fkey")
    )
    private Keyword keyword;

    @Column(
            name = "date_time",
            nullable = false
    )
    private LocalDateTime dateTime;

    public AccountKeyword() {}

    public AccountKeyword(Account account, Keyword keyword) {
        this.account = account;
        this.keyword = keyword;
        this.dateTime = LocalDateTime.now();
    }

    public Account getAccount() {
        return this.account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Keyword getKeyword() {
        return this.keyword;
    }

    public void setKeyword(Keyword keyword) {
        this.keyword = keyword;
    }
}
