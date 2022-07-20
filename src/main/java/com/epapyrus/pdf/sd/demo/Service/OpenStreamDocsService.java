package com.epapyrus.pdf.sd.demo.Service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Service
@Slf4j
public class OpenStreamDocsService {

    //url형식으로 streamdocs 열기
    public String viewStreamDocs(String Instreamdocsid) {
        //StreamDocs 서버 Api
        String server = "http://192.168.0.232:8080";
        String serverApi = "/streamdocs/view/sd";
        String streamdocsId = ";streamdocsId=" + Instreamdocsid;
        String request = server + serverApi + streamdocsId;

        //header 만들기
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "text/html;charset=UTF-8");

        //string으로 받기
        RestTemplate template = new RestTemplate();
        String forObject = template.getForObject(request, String.class);

        return forObject;
    }
}
