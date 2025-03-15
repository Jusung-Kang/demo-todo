package com.to_do_list.demo_todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.to_do_list.demo_todo.domain.Article;
import com.to_do_list.demo_todo.repository.BlogRepository;
import com.to_do_list.demo_todo.dto.AddArticleRequest;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor 
@Service //빈으로 등록
public class BlogService {
    
    private final BlogRepository blogRepository;

    public Article save(AddArticleRequest request){
        return blogRepository.save(request.toEntity());
    }

    public List<Article> findAll(){
        return blogRepository.findAll();
    }

    public Article findById (long id){
        return blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이디가 없습니다."));
    }

    public void delete(long id){
        blogRepository.deleteById(id);
    }
}
