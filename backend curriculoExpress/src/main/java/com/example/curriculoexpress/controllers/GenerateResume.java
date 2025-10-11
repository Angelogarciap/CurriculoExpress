package com.example.curriculoexpress.controllers;

import com.example.curriculoexpress.entities.CurriculoRequest;
import net.sf.jasperreports.engine.*;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;  // For enums in methods
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/generateResume")
@CrossOrigin(  // Fixed for older Spring: Enums for methods, String for allowCredentials
        origins = "http://localhost:4200",  // String (unchanged)
        methods = {RequestMethod.POST, RequestMethod.OPTIONS},  // Enums (from previous fix)
        allowCredentials = "false"  // String "false", not boolean
)
public class GenerateResume {
    @PostMapping("/gerar-curriculo")
    public ResponseEntity<byte[]> createResume(@RequestBody CurriculoRequest request) throws Exception {
        // Your existing code remains unchanged—no issues here
        InputStream template = getClass().getResourceAsStream("/templates/curriculo_template.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(template);

        Map<String, Object> params = new HashMap<>();
        params.put("nome", request.getName());
        params.put("email", request.getEmail());
        params.put("telefone", request.getTelefone());
        params.put("socialMedia", request.getSocialMedia());
        params.put("universityName", request.getUniversityName());
        params.put("courseAndSemester", request.getCourseNameAndCurrentSemester());
        params.put("lastCompany", request.getLastCompanyWorkedAt());
        params.put("lastActivities", request.getLastCompanyWorkedAtPreviousActivities());
        params.put("extraExperience", request.getExtraExperience());

        JRDataSource dataSource = new JREmptyDataSource();

        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params, dataSource);

        byte[] pdfBytes = JasperExportManager.exportReportToPdf(jasperPrint);

        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=curriculo.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }
}