package org.mind.carddatabase.domain;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false,unique = true)
    protected String username;

    @Column(nullable = false)
    protected String password;

    @Column(nullable = false)
    private String role;
}
