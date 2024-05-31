package org.mind.carddatabase.domain;

import lombok.*;
import lombok.extern.jbosslog.JBossLog;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "owner")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private  String brand;
    private  String model;
    private  String color;
    private  String registerNumber;

    private int year;
    private int price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ownerid")
    private Owner owner;
}
