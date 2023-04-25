/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.appdemo2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Owner
 */
@Controller
public class Hola {
    @RequestMapping("/hello")
    @ResponseBody
    public String helloFunction() {      
        return "<h1>Saludo</h1><p>Holas"; 
    }
}
