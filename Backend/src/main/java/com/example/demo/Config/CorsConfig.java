package com.example.demo.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

//Yeh class mene Bnayi thi kyuki jb hum spring security use krte toh request phle security pr jati
// and then us request ka udhr bhi cors check hota agr hum spring security nhi use kre toh humara kaam kewal
// controoler pr cors origin lgane se ho jata but idhr hum cors ki configuration deni pdti h spring security k liye

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource(){

        CorsConfiguration config=new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:5173"));
        config.setAllowedMethods(List.of(
                "GET",
                "POST",
                "PUT",
                "DELETE",
                "OPTIONS"
        ));
        config.setAllowedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**",config);

        return source;


    }
}