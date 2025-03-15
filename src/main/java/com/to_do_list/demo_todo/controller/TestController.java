package com.to_do_list.demo_todo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.to_do_list.demo_todo.service.BlogService;

import lombok.RequiredArgsConstructor;

import com.to_do_list.demo_todo.domain.Article;
import com.to_do_list.demo_todo.dto.AddArticleRequest;
import com.to_do_list.demo_todo.dto.ArticleResponse;
import com.to_do_list.demo_todo.repository.BlogRepository;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class TestController {

    private final BlogRepository blogRepository;

    private final BlogService blogService;
    
    @GetMapping("/hello")
    public String hello() {
        return "this is backend.";
    }
    @PostMapping("/articles")
    public ResponseEntity<Article> addAEntity(@RequestBody AddArticleRequest request){
        Article saveArticle = blogService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(saveArticle);
    }

    @GetMapping("/articles")
    public ResponseEntity<List<ArticleResponse>> findAllArticles(){
        List<ArticleResponse> articles = blogRepository.findAll()
            .stream()
            .map(ArticleResponse::new)
            .toList();

        return ResponseEntity.ok()
                .body(articles);
    }
}
