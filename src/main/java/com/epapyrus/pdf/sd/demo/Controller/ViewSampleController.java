package com.epapyrus.pdf.sd.demo.Controller;

import com.epapyrus.pdf.sd.demo.Service.OpenStreamDocsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(value = "sample")
public class ViewSampleController {

    private final OpenStreamDocsService openStreamDocsService;

    //streamdocsId를 uri로 받아서 열기(js 못가지고옴)
    @GetMapping(value = "/open-document{streamdocsId}" , produces = "text/html;charset=UTF-8")
    public String OpenStreamDocsById1(@MatrixVariable String streamdocsId)  {
        return  openStreamDocsService.viewStreamDocs(streamdocsId);
    }

}
