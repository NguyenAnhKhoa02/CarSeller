package Backend.controller;

import Backend.model.User;
import Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class authController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/login")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        try {
            // Check if the provided username and password match the expected values
            if (isValidUser(username, password)) {
                User storedUser = userRepository.findByUsername(username).orElse(null);
                String role = (storedUser != null) ? storedUser.getRole() : null;
                return ResponseEntity.ok(Collections.singletonMap("role", role));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            // Handle exceptions and return an appropriate response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during authentication");
        }
    }
    private boolean isValidUser(String username, String password) {
        User storedUser = userRepository.findByUsername(username).orElse(null);
        return storedUser != null && storedUser.getPassword().equals(password);
    }
}
