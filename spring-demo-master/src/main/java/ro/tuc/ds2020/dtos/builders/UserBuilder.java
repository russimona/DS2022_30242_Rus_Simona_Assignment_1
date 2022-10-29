package ro.tuc.ds2020.dtos.builders;

import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.dtos.UserDetailsDTO;
import ro.tuc.ds2020.entities.User;

public class UserBuilder {

    private UserBuilder() {
    }

    public static UserDTO toUserDTO(User user) {
        return new UserDTO(user.getId(), user.getName(), user.getSurname(), user.getAddress(), user.getEmail(), user.getPassword());
    }

    public static UserDetailsDTO toUserDetailsDTO(User user) {
        return new UserDetailsDTO(user.getId(), user.getName(), user.getSurname(), user.getAddress(), user.getEmail(), user.getPassword());
    }

    public static User toEntity(UserDetailsDTO userDetailsDTO) {
        return new User(userDetailsDTO.getName(),
                userDetailsDTO.getSurname(),
                userDetailsDTO.getEmail(),
                userDetailsDTO.getAddress(),
                userDetailsDTO.getPassword());
    }
}