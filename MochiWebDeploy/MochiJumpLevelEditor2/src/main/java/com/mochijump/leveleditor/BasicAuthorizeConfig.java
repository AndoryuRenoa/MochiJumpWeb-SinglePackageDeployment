package com.mochijump.leveleditor;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;


@Configuration
@EnableWebSecurity
 class BasicAuthorizeConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/", "/mainmenu", "/runtime**",
        		"/polyfills**", "/favicon.ico", "/vendor**", "/styles**", 
        		"/main**", "/login", "/loginProcessor").permitAll()
        .anyRequest().authenticated()
        .and()
        .formLogin()
        .loginPage("/login")
        .loginProcessingUrl("/loginProcessor")
        .usernameParameter("username")
        .passwordParameter("password")
        .defaultSuccessUrl("/mainmenu")
        .failureUrl("/login")
        .and()
        .csrf().disable()
        .httpBasic();
    }
    
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.debug(true);
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user")
                    .password("password")
                    .roles("USER")
            .and()
                .withUser("manager")
                    .password("password")
                    .credentialsExpired(true)
                    .accountExpired(true)
                    .accountLocked(true)
                    .authorities("WRITE_PRIVILEGES", "READ_PRIVILEGES")
                    .roles("MANAGER");
    }
    
}