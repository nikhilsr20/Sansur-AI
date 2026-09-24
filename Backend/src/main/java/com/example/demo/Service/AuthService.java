package com.example.demo.Service;

import com.example.demo.DTO.SignupRequestDto;
import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;
import  com.example.demo.Entity.Role;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final  UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService( UserRepository userRepository,
                        PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String signup(SignupRequestDto signupRequestDto){
        String email=signupRequestDto.getEmail();
        String password=signupRequestDto.getPassword();
        String cpassword=signupRequestDto.getCpassword();


        if(userRepository.existsByEmail(email)){
            return "Email Already Exists";
        }

        String encodedPassword=passwordEncoder.encode(password);
        UserEntity user = new UserEntity(
                null,
                email,
                encodedPassword,
                Role.USER
        );

        userRepository.save(user);


        return "Signup Successful";
    }

}