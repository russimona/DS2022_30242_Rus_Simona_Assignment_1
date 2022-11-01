package ro.tuc.ds2020.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.controllers.handlers.exceptions.model.ResourceNotFoundException;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.dtos.UserDetailsDTO;
import ro.tuc.ds2020.dtos.builders.UserBuilder;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.repositories.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> findUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .map(UserBuilder::toUserDTO)
                .collect(Collectors.toList());
    }

    public UserDetailsDTO findUserById(UUID id) {
        Optional<User> prosumerOptional = userRepository.findById(id);
        if (!prosumerOptional.isPresent()) {
            LOGGER.error("User with id {} was not found in db", id);
            throw new ResourceNotFoundException(User.class.getSimpleName() + " with id: " + id);
        }
        return UserBuilder.toUserDetailsDTO(prosumerOptional.get());
    }

    public UUID insert(UserDetailsDTO userDTO) {
        User user = UserBuilder.toEntity(userDTO);
        user = userRepository.save(user);
        LOGGER.debug("User with id {} was inserted in db", user.getId());
        return user.getId();
    }

    public void deletUserById(UUID id){
        Optional<User> prosumerOptional = userRepository.findById(id);
        if (!prosumerOptional.isPresent()) {
            LOGGER.error("User with id {} was not found in db", id);
            throw new ResourceNotFoundException(User.class.getSimpleName() + " with id: " + id);
        }

        userRepository.delete(prosumerOptional.get());
    }

    public UUID updateUser(UserDetailsDTO userDTO) {
        Optional<User> prosumerOptional = userRepository.findById(userDTO.getId());
        if (!prosumerOptional.isPresent()) {
            LOGGER.error("User with id {} was not found in db", userDTO.getId());
            throw new ResourceNotFoundException(User.class.getSimpleName() + " with id: " + userDTO.getId());
        }

        User user = prosumerOptional.get();

        if (userDTO.getName() !=null){
            user.setName(userDTO.getName());
        }
        if (userDTO.getSurname() !=null){
            user.setSurname(userDTO.getSurname());
        }
        if (userDTO.getEmail() !=null){
            user.setEmail(userDTO.getEmail());
        }
        if(userDTO.getPassword()!=null){
            user.setPassword(userDTO.getPassword());
        }
        if(userDTO.getRole()!=null){
            user.setRole(userDTO.getRole());
        }
        userRepository.save(user);

        return userDTO.getId();
    }

}
