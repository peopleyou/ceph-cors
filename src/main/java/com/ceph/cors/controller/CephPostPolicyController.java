package com.ceph.cors.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yuanyouz on 2017/6/23.
 */
@Controller
public class CephPostPolicyController {

    static String accessKey = "U2A27HEBIS06RIF3JOBC";
    static String secretKey = "C4UB88kkbR5QQhBEnKau2zUmkqxdttQOYSexIcDg";
    static String bucket = "helloworld";
    static String endpoint = "http://192.168.30.11/";

    @RequestMapping("/get")
    public void getPolicy(HttpServletRequest request, HttpServletResponse response) {
    }


}
