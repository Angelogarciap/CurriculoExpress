package com.example.curriculoexpress.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CurriculoRequest implements Serializable {

    private String name;
    private String email;
    private String telefone;
    private String socialMedia;
    public String universityName;
    public String courseNameAndCurrentSemester;
    private String lastCompanyWorkedAt;
    private String lastCompanyWorkedAtPreviousActivities;
    private String extraExperience;

}
