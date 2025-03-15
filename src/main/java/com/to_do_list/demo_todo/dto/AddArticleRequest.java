package com.to_do_list.demo_todo.dto;

import com.to_do_list.demo_todo.domain.Article;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddArticleRequest {
    
    private String title;
    private String content;

    public Article toEntity(){
        return Article.builder()
            .title(title)
            .content(content)
            .build();
    }
}
