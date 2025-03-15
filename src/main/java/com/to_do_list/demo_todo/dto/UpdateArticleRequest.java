package com.to_do_list.demo_todo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter

public class UpdateArticleRequest {
    private String title;
    private String content;
}
