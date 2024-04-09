package com.keyin.service;

import com.keyin.model.Procedure;
import com.keyin.repository.ProcedureRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ProcedureServiceUnitTest {

    ProcedureService procedureServiceUnderTest;

    @Mock
    ProcedureRepository mockProcedureRepository;

    @BeforeEach
    void setup() {
        this.procedureServiceUnderTest = new ProcedureService(this.mockProcedureRepository);
    }

    @Test
    @DisplayName("Should return all procedures")
    void findAllProcedures() {
        List<Procedure> procedureListExpected = new ArrayList<>();

        procedureListExpected.add(new Procedure("first procedure"));
        procedureListExpected.add(new Procedure("second procedure"));

        when(this.mockProcedureRepository.findAll()).thenReturn(procedureListExpected);

        List<Procedure> procedureListActual = this.procedureServiceUnderTest.findAllProcedures();

        assertAll(
                () -> assertEquals(2, procedureListActual.size()),
                () -> assertTrue(procedureListActual.stream().allMatch(procedure -> procedure.getName().contains("procedure")))
        );
    }

    @Test
    @DisplayName("Should return all procedures containing keyword")
    void findProcedureByKeyword() {
        List<Procedure> procedureListExpected = new ArrayList<>();

        procedureListExpected.add(new Procedure("second procedure with test keyword"));

        when(this.mockProcedureRepository.findByNameContainingIgnoreCase("test")).thenReturn(procedureListExpected);

        List<Procedure> procedureListActual = this.procedureServiceUnderTest.findProcedureByKeyword("test");

        assertAll(
                () -> assertEquals(1, procedureListActual.size()),
                () -> assertEquals(procedureListExpected.getFirst(), procedureListActual.getFirst())
        );
    }
}