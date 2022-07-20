## Controller

#### 등록컨트롤러

- RegisterSampleController  

  - **URL로 등록하기**(/sample/external-resources), 
    Body안에 서버에 있는 pdf, img 등 파일경로을 넣어줘야 합니다
  - **File로 등록하기**(/sample/documents), 
    Body안에 client에 있는 pdf, img 등 파일 자체를 넣어줘야 합니다

- ViewSampleController

  - **StreamDocsId를 uri로 열기**(/sample/open-document;stremadocsId=) 
    @MatrixVaiable 방식으로 ; 뒤에 있는 streamdocsId를 서버에 쏴서 html 반환합니다
    - [문제] Test 중 CORS 문제로 js를 못받아옵니다.

- WatermarkController 

  - **StreamDocID를 uri로 열어서 워터마크 찍기**(/sample/watermark?streamdocsId=) 

    - @RequestParam 방식으로 ? 뒤에 있는 streamdocsId 값을 가져옵니다. 
    - model로 index.jsp에 streamdocsId를 넘겨줍니다.
    - index.jsp안에서 frontApi를 사용해 open()으로 Streamdocs를 엽니다
    - create()를 수행하면서 watermark를 찍습니다.

    

## Service

#### 사용되는 Service



- **[흐름과정]URLREgisterService**(URL로 등록하기)
  - **서버에** 있는 파일 경로를 가져옵니다.
  - http://서버주소:8080/stremadocs/v4/documents/external-resource 문자열을 만듭니다.
  - HttpHeaders 객체로 "application/json"타입이라고 **헤더**를 지정해줍니다.
  - Map<String, String> 형태로 **body를 구성**합니다. {"externalResource","파일경로"}
  - HttpEntity객체로 **header와 body를 합칩**니다.
  - RestTemplate 객체의 **exchange를 실행**합니다.exchange(url, Http 메서드, <header, body> , 반환될 객체)
  - ResponseEntity로 json형태의 객체가 들어오면 **StreamdocsId를 반환**합니다.
  
  
  
- **[흐름과정]DocumentRegisterService**(File로 등록하기)
  - **클라이언트에** 있는 **파일**을 가져옵니다.
  - http://서버주소:8080/stremadocs/v4/documents/문자열을 만듭니다.
  - HttpHeaders 객체로 " **multipart/form-data**"타입이라고 **헤더**를 지정해줍니다.
  - MultiValueMap<String, Object> 형태로 **body를 구성**합니다. {"pdf","MultipartInputStremaFileResource"}
    - MultipartFile인 file 전체를 읽는 것은  대용량 메모리 문제가 발생할 수 있습니다. InputStreamResource를 사용해서 **proxy** 를 사용할 수 있습니다.
  - HttpEntity객체로 **header와 body를 합칩**니다.
  - RestTemplate 객체의 **exchange를 실행**합니다.exchange(url, Http 메서드, <header, body> , 반환될 객체)
  - ResponseEntity로 json형태의 객체가 들어오면 **ObjectMapper**를 사용합니다.
  - mapper.writeValueAsString(response.getBody())을 통해서 string 형태로 만듭니다.
  - mapper.readValue(String, Dto.class)로 String 형태를 Dto로 변환합니다.
  - Dto 안에 값을 활용해서 반환합니다.



**[흐름과정]OpenStreamDocsService**(StreamDocsId를 uri로 열기)

- Url에 있는 streamdocsId를 가져옵니다..
- http://서버주소:8080/stremadocs/view/sd;streamdocsId= 문자열을 만듭니다.
- HttpHeaders 객체로 "**text/html**"타입이라고 **헤더**를 지정해줍니다.
- RestTemplate 객체의 **getForObject를 실행**합니다.getForObject(url, 반환객체)
- 반환된 객체를 반환합니다.



**[흐름과정]OpenStreamDocsService**(StreamDocsId를 uri로 열기)

- Url에 있는 streamdocsId를 가져옵니다..
- http://서버주소:8080/stremadocs/view/sd;streamdocsId= 문자열을 만듭니다.
- HttpHeaders 객체로 "**text/html**"타입이라고 **헤더**를 지정해줍니다.
- RestTemplate 객체의 **getForObject를 실행**합니다.getForObject(url, 반환객체)
- 반환된 객체를 반환합니다.



