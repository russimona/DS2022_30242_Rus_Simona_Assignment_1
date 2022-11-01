package ro.tuc.ds2020.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import ro.tuc.ds2020.Ds2020TestConfig;
import ro.tuc.ds2020.dtos.DeviceDetailsDTO;
import ro.tuc.ds2020.services.DeviceService;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


public class DeviceControllerUnitTest extends Ds2020TestConfig {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DeviceService service;
//String name, String manufacturer, Integer year_manufacture, Integer consumption
    @Test
    public void insertDeviceTest() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        DeviceDetailsDTO deviceDTO = new DeviceDetailsDTO("8Pro", "OnePlus", 2022, 2);

        mockMvc.perform(post("/device")
                .content(objectMapper.writeValueAsString(deviceDTO))
                .contentType("application/json"))
                .andExpect(status().isCreated());
    }

    @Test
    public void insertDeviceTestFailsDueToNull() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        DeviceDetailsDTO deviceDTO = new DeviceDetailsDTO("8Pro", "OnePlus", 2022, null);

        mockMvc.perform(post("/device")
                .content(objectMapper.writeValueAsString(deviceDTO))
                .contentType("application/json"))
                .andExpect(status().isBadRequest());
    }
}
