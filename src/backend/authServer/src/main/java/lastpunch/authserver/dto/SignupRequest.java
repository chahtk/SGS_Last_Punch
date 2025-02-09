package lastpunch.authserver.dto;

import javax.validation.constraints.NotBlank;
import lastpunch.authserver.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@RequiredArgsConstructor
@Setter
@Getter
public class SignupRequest {
//    @NotBlank
//    private String name;
  
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    
    public Member toEntity() {
        return Member.builder()
//            .name(name)
            .email(email)
            .password(password)
            .status("ROLE_USER")
            .build();
    }
}