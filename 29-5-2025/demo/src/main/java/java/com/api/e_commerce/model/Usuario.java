package com.api.e_commerce.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity(name = "usuarios")
public class Usuario {
    private Long id;
    private String nombre;
    private String apellido;    
    
    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    List<Pedido> pedidos; // Assuming Pedido is another entity class
}
