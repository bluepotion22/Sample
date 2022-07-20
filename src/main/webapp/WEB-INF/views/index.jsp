<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" , initial-scale="1.0">
    <script src="${pageContext.request.contextPath}/resources/js/adapter.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/style.css" rel="stylesheet"/>
    <title>StreamDocs Test!</title>
</head>

<body>

<div id="area">
    <iframe src="http://192.168.0.232:8080/streamdocs/view/sd" id="view">ifram이 올자리</iframe>
</div>

</body>

<script type="text/javascript">
    <%--alert("${streamdocsId}");--%>
    var streamdocsId = "${streamdocsId}";
    var viewerElement = document.getElementById('view');

    var streamdocs = new StreamDocs({ element: viewerElement });

    function openDocument(Id) {
        return streamdocs.document.open({ streamdocsId: Id })
            .then(function() {
                streamdocs.watermark.create({
                    watermarks: [
                        {
                            type: 'Image',
                            opacity: 0.5,
                            align: 'CENTER',
                            rotate: 0,
                            x: 0,
                            y: 20,
                            //실제보내는 url => imagePath: 'http://192.168.0.232:8080/streamdocs/assets/images/logo.png',
                            imagePath: '/streamdocs/assets/images/logo.png',
                            scale: 0.9,
                            // allowView: true,
                            // allowPrint: true,
                        },
                        {
                            type: 'Text',                 //TextWatermark 1
                            opacity: 0.9,
                            align: 'TOP_LEFT',
                            rotate: 0,
                            x: 0,
                            y: 0,
                            text: 'Test 입니다',
                            size: 64,
                            color: '#1f1f1d',
                            fontName: 'Arial',
                            // allowView: true,
                            // allowPrint: true,
                        },
                        {
                            type: 'Text',                 //TextWatermark 2
                            opacity: 0.9,
                            align: 'TOP_RIGHT',
                            rotate: 0,
                            x: 0,
                            y: 0,
                            text: 'Test 입니다',
                            size: 64,
                            color: '#1f1f1d',
                            fontName: 'Arial',
                            // allowView: true,
                            // allowPrint: true,
                        },
                        {
                            type: 'Text',                 //TextWatermark 3
                            opacity: 0.9,
                            align: 'BOTTOM_RIGHT',
                            rotate: 0,
                            x: 0,
                            y: 0,
                            text: 'Test 입니다',
                            size: 64,
                            color: '#1f1f1d',
                            fontName: 'Arial',
                            // allowView: true,
                            // allowPrint: true,
                        }
                    ],
                    temp: true
                });
            })
            .catch(function(error) {
                alert('오류 발생! 개발자 도구의 로그를 확인하세요.');
                console.error('Error name:', error.name);
                console.error('Error message:', error.message);
            });
    }

    openDocument(streamdocsId);

</script>

</html>