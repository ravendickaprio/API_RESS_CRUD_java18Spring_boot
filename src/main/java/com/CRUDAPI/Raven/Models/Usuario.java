package com.CRUDAPI.Raven.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")
@ToString
public class Usuario {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Setter @Getter @Column(name = "id")
    private int id;
    @Setter @Getter @Column(name = "Name")
    private String Name;
    @Setter @Getter @Column(name = "Email")
    private String Email;
    @Setter @Getter @Column(name = "Address")
    private String Address;
    @Setter @Getter @Column(name = "Phone")
    private String Phone;


}
