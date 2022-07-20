package com.epapyrus.pdf.sd.demo.Dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SampleDto {
    private String alink;
    private String category;
    private String createdAt;
    private String updatedAt;
    private String givenName;
    private String docName;
    private Number fileSize;
    private boolean deleted;
    private String description;
    private boolean crypted;
    private boolean hasPassword;
    private String type;
    private boolean originExists;
    private String externalId;
    private String streamdocsId;
    private String secureId;
}
