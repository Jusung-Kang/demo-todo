package com.to_do_list.demo_todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.to_do_list.demo_todo.domain.Article;

public interface BlogRepository extends JpaRepository<Article, Long>{
    
    
}
