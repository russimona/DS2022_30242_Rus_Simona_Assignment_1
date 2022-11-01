package ro.tuc.ds2020.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import ro.tuc.ds2020.Ds2020TestConfig;
import ro.tuc.ds2020.dtos.UserDetailsDTO;
import ro.tuc.ds2020.services.UserService;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


public class UserControllerUnitTest extends Ds2020TestConfig {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService service;

    @Test
    public void insertUserTest() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        //String name, String surname, String address, String email, String password
        UserDetailsDTO userDTO = new UserDetailsDTO("John", "Doe","Admin", "john@doe.com","password");

        mockMvc.perform(post("/users")
                .content(objectMapper.writeValueAsString(userDTO))
                .contentType("application/json"))
                .andExpect(status().isCreated());
    }

    @Test
    public void insertUserTestFailsDueNullPassword() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        UserDetailsDTO userDTO = new UserDetailsDTO("John", "Doe","Admin", "john@doe.com",null);

        mockMvc.perform(post("/users")
                .content(objectMapper.writeValueAsString(userDTO))
                .contentType("application/json"))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void insertUserTestFailsDueToNullSurname() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        UserDetailsDTO userDTO = new UserDetailsDTO("John", null,"Admin", "john@doe.com","password");
        mockMvc.perform(post("/users")
                .content(objectMapper.writeValueAsString(userDTO))
                .contentType("application/json"))
                .andExpect(status().isBadRequest());
    }
}
