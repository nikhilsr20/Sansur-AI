package com.example.demo.Controller;

import com.example.demo.DTO.SignupRequestDto ;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.demo.Service.AuthService;
import com.example.demo.DTO.SignupResponseDto ;
import org.springframework.web.bind.annotation.RequestMapping;

// This is the Controller which handles the Requests Of The Signup Page

@RestController
@RequestMapping("/auth")
public class AuthController {

     private final AuthService authService;

     public AuthController(AuthService authService){
         this.authService=authService;
     }

     @PostMapping("/Signup")
     public SignupResponseDto SignupUser(@RequestBody SignupRequestDto  signupRequestdto){

        String message=authService.signup(signupRequestdto);
        SignupResponseDto s=new SignupResponseDto();
        s.setMessage(message);
        return s;
     }

}
