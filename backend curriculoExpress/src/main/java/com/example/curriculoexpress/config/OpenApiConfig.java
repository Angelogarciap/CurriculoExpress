package com.example.curriculoexpress.config;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI customOpenAPI() {
            return new OpenAPI()
                .info(new Info()
                        .title("Online Marketplace API")
                        .version("1.0")
                        .description("API for managing the payments for the 'Universo da Cris' website"));
    }
}
