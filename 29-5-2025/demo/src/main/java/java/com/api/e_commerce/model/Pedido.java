package com.api.e_commerce.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "peidos")
public class Pedido {
    private Long id;
    private String detalle;    

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario; // Assuming Usuario is another entity class
    
}
