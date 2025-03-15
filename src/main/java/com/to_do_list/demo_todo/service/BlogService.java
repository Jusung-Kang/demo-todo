package com.to_do_list.demo_todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.to_do_list.demo_todo.domain.Article;
import com.to_do_list.demo_todo.repository.BlogRepository;

import jakarta.transaction.Transactional;

import com.to_do_list.demo_todo.dto.AddArticleRequest;
import com.to_do_list.demo_todo.dto.UpdateArticleRequest;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor //final로 선언된 필드를 인자값으로 하는 생성자를 생성 (blogRepository)
@Service //빈으로 등록
public class BlogService {
    
    //BlogRepository 생성
    private final BlogRepository blogRepository;

    //데이터 저장함수
    public Article save(AddArticleRequest request){
        return blogRepository.save(request.toEntity());
    }

    //데이터 모두 찾는 함수
    public List<Article> findAll(){
        return blogRepository.findAll();
    }

    //아이디로 찾는 함수
    public Article findById (long id){
        return blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이디가 없습니다."));
    }

    //수정하는 함수
    @Transactional //트랜잭션 처리
    public Article update(long id, UpdateArticleRequest request){

        Article article = blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이디가 없습니다."));

        article.update(request.getTitle(), request.getContent());

        return article;
    }

    //삭제하는 함수
    public void delete(long id){
        blogRepository.deleteById(id);
    }
}
