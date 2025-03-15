package com.to_do_list.demo_todo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
public class TestController {

    private final BlogRepository blogRepository;

    private final BlogService blogService;
    
    @GetMapping("/api/hello")
    public String hello() {
        return "this is backend.";
    }
    @PostMapping("/api/articles")
    public ResponseEntity<Article> addAEntity(@RequestBody AddArticleRequest request){
        Article saveArticle = blogService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(saveArticle);
    }

    @GetMapping("/api/articles")
    public ResponseEntity<List<ArticleResponse>> findAllArticles(){
        List<ArticleResponse> articles = blogRepository.findAll()
            .stream()
            .map(ArticleResponse::new)
            .toList();

        return ResponseEntity.ok()
                .body(articles);
    }

    @GetMapping("/api/articles/{id}")
    public ResponseEntity<ArticleResponse> findArticle(@PathVariable("id") long id){
        Article article = blogService.findById(id);

        return ResponseEntity.ok().body(new ArticleResponse(article));
    }

    @DeleteMapping("/api/articles/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable("id") long id){
        blogService.delete(id);
        return ResponseEntity.ok().build();
    }


}
