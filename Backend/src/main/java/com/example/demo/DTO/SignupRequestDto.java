package com.example.demo.DTO;

public class SignupRequestDto {

    private String email;
    private String password;
    private String cpassword;

    // Getters

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getCpassword() {
        return cpassword;
    }

    // Setters

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setCpassword(String cpassword) {
        this.cpassword = cpassword;
    }
}