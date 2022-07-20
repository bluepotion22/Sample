package com.epapyrus.pdf.sd.demo.Service;


import com.epapyrus.pdf.sd.demo.Dto.SampleDto;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class URLRegisterService {

    public String RegisterExtResources(String filepath) {
        String streamdocsId = "";

        //StreamDocs 서버 Api
        String server = "http://192.168.0.232:8080";
        String serverApi = "/streamdocs/v4/documents/external-resources";
        String request = server + serverApi;

        //header 만들기
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");

        //body 만들기
        Map<String, String> body = new HashMap<>();
        body.put("externalResource",filepath); //filepath = "/home/wasadm/sample/sample.pdf";
        body.put("description","filepath");

        //header와 body 합치기
        HttpEntity<Map<String, String>> entity = new HttpEntity<>(body, headers);


        ResponseEntity<SampleDto> response = null;
        RestTemplate template = new RestTemplate();
        try {
            response = template.exchange(request, HttpMethod.POST, entity, SampleDto.class); //json 객체 반환
            streamdocsId = response.getBody().getStreamdocsId(); // json 객체에서 StreamDocsId만 가지고 오기
        }catch (Exception e){
            System.out.println(e);
        }
        System.out.println("response = " + response);
        return streamdocsId;
    }
}
