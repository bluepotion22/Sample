package com.epapyrus.pdf.sd.demo.Controller;


import com.epapyrus.pdf.sd.demo.Dto.Requestfilepath;
import com.epapyrus.pdf.sd.demo.Service.DocumentsRegisterService;
import com.epapyrus.pdf.sd.demo.Service.URLRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public String URLRegister(@RequestBody Requestfilepath body) {
        return urlRegisterService.RegisterExtResources(body.getExternalResource());
    }

    //Body에 파일담아서 등록하기
    @PostMapping("/documents")
    public String FileRegister(@RequestParam MultipartFile pdf) throws IOException {
        return documentsRegisterService.Resiterdocuments(pdf);
    }

}