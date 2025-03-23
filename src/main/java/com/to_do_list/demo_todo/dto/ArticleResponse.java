package com.to_do_list.demo_todo.dto;

import com.to_do_list.demo_todo.domain.Article;

import lombok.Getter;

@Getter
public class ArticleResponse {
    private final Long id;
    private final String title;
    private final String content;

    public ArticleResponse(Article article){
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
    }
}
