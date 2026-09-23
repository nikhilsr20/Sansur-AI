package com.example.demo.Controller;

import com.example.demo.DTO.SignupDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


// This is the Controller which handles the Requests Of The Signup Page

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SignupController {

     @PostMapping("/Signup")
     public void SignupUser(@RequestBody SignupDto dto){

         System.out.println(dto.getEmail());
         System.out.println(dto.getPassword());
         System.out.println(dto.getCpassword());



     }

}
