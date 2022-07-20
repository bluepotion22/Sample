package com.epapyrus.pdf.sd.demo.Service;

import com.epapyrus.pdf.sd.demo.Dto.SampleDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
public class DocumentsRegisterService {

    public String Resiterdocuments(MultipartFile file) throws IOException {
        String streamdocsId = "";

        //StreamDocs 서버 Api
        String server = "http://192.168.0.232:8080";
        String serverApi = "/streamdocs/v4/documents";
        String request = server + serverApi;


        //header 만들기
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        //body 만들기
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("pdf", new MultipartInputStreamFileResource(file.getInputStream(), file.getOriginalFilename()));
        body.add("lifespan", "10m");
        body.add("expiredAt", "10000");
        body.add("name", "sample.jpg");                //다운로드 될 때 설정되는 파일명
        body.add("docName", "test.pdf");               //관리자 페이지에서 보여지는 문서명
        body.add("category", "pppppppp");
        body.add("description", "test1111");
        body.add("externalId", "33333");
        body.add("password", "4321");
        body.add("maxCount", "11");                    //열람 횟수 설정
        body.add("openedLifespan", "60000");           //열람 시간 설정

        //header와 body 합치기
        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(body, headers);

        ResponseEntity<Object> response = null;
        RestTemplate template = new RestTemplate();
        response = template.exchange(request, HttpMethod.POST, entity, Object.class);


        ObjectMapper mapper = new ObjectMapper();
        String s = mapper.writeValueAsString(response.getBody());
        SampleDto tomcatDto = mapper.readValue(s, SampleDto.class); // json 객체에서 StreamDocsId만 가지고 오기

        return tomcatDto.getStreamdocsId();
    }

    //파일을 Stream 형식으로 바꾸는 class
    class MultipartInputStreamFileResource extends InputStreamResource {

        private final String filename;

        MultipartInputStreamFileResource(InputStream inputStream, String filename) {
            super(inputStream);
            this.filename = filename;
        }

        @Override
        public String getFilename() {
            return this.filename;
        }

        @Override
        public long contentLength() throws IOException {
            return -1; // we do not want to generally read the whole stream into memory ...
        }
    }
}
