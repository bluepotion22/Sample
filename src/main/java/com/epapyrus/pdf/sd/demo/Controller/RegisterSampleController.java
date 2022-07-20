package com.epapyrus.pdf.sd.demo.Controller;


import com.epapyrus.pdf.sd.demo.Dto.Requestfilepath;
import com.epapyrus.pdf.sd.demo.Service.DocumentsRegisterService;
import com.epapyrus.pdf.sd.demo.Service.URLRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "sample")
@Slf4j
public class RegisterSampleController {

    private final URLRegisterService urlRegisterService;
    private final DocumentsRegisterService documentsRegisterService;

    //url로 등록하기
    @PostMapping("/external-resources")
    public void URLRegister(@RequestBody Requestfilepath body, HttpServletResponse response) throws IOException {
        String streamdocId = urlRegisterService.RegisterExtResources(body.getExternalResource());
        String url = "http://localhost:8080/sample/watermark?streamdocsId=" + streamdocId;
        System.out.println("url = " + url);
        response.sendRedirect(url);
    }

    //MultipartFile로 등록하기
    @PostMapping("/documents")
    public void FileRegister(@RequestParam MultipartFile pdf, HttpServletResponse response) throws IOException {
        String streamdocId = documentsRegisterService.Resiterdocuments(pdf);
        String url = "http://localhost:8080/sample/watermark?streamdocsId=" + streamdocId;
        System.out.println("url = " + url);
        response.sendRedirect(url);
    }

}