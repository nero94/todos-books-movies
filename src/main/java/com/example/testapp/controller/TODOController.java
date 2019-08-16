package com.example.testapp.controller;

import com.example.testapp.exception.ResourceNotFoundException;
import com.example.testapp.model.TODO;
import com.example.testapp.model.Status;
import com.example.testapp.service.TODOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class TODOController {
    @Autowired
    private TODOService todoService;

    @GetMapping("/todos")
    public Iterable<TODO> getTODOs(@RequestParam(name = "status", required = false) Status status, Pageable pageable) {
        if (status == null) {
            return todoService.findAll();
        }
        return todoService.findByStatus(status);
    }

    @PostMapping("/todos")
    public TODO createTODO(@Valid @RequestBody TODO todo) {
        return todoService.save(todo);
    }

    @PutMapping("/todos/{id}")
    public TODO updateTODO(@PathVariable Long id,
                           @Valid @RequestBody TODO request) {
        return todoService.findById(id)
                .map(todo -> {
                    todo.setTitle(request.getTitle());
                    todo.setStatus(request.getStatus());
                    return todoService.save(todo);
                }).orElseThrow(() -> new ResourceNotFoundException("TODO not found with id " + id));
    }

    @DeleteMapping("/todos/{id}")
    public ResponseEntity<?> deleteTODO(@PathVariable Long id) {
        return todoService.findById(id)
                .map(todo -> {
                    todoService.delete(todo);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("TODO not found with id " + id));
    }
}
