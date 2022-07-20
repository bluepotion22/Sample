package com.epapyrus.pdf.sd.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/sample")
public class WatermarkController {

    //http://서버주소/sample/watermark?streamdocsId="" 형태로 id 받기
    @GetMapping("/watermark{streamdocsId}")
    public String index(@RequestParam String streamdocsId, Model model){
        model.addAttribute("streamdocsId",streamdocsId); //index.jsp에 데이터 보내주기
        return "index";
    }
}
