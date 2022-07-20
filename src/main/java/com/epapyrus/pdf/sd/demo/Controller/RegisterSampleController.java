package com.epapyrus.pdf.sd.demo.Controller;


import com.epapyrus.pdf.sd.demo.Dto.Requestfilepath;
import com.epapyrus.pdf.sd.demo.Service.DocumentsRegisterService;
import com.epapyrus.pdf.sd.demo.Service.URLRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "sample")
@Slf4j
public class RegisterSampleController {

    private final URLRegisterService urlRegisterService;
    private final DocumentsRegisterService documentsRegisterService;

    //url로 등록하기
    @PostMapping("/external-resources")
    public String URLRegister(@RequestBody Requestfilepath body, Model model) {
        String streamdocsId = urlRegisterService.RegisterExtResources(body.getExternalResource());
        model.addAttribute("streamdocsId",streamdocsId); //index.jsp에 데이터 보내주기
        return "index";
    }

    //Body에 파일담아서 등록하기
    @PostMapping("/documents")
    public String FileRegister(@RequestParam MultipartFile pdf, Model model) throws IOException {
        String streamdocsId = documentsRegisterService.Resiterdocuments(pdf);
        model.addAttribute("streamdocsId",streamdocsId); //index.jsp에 데이터 보내주기
        return "index";
    }

}