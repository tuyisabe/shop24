package com.Shop24.Shop24.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "drink_order")
@Getter
@Setter
@NoArgsConstructor
public class DrinkOrderVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "drink_vo_id")
    private DrinkVo drinkVo;
    @ManyToOne
    @JoinColumn(name = "order_vo_id")
    private OrderVo orderVo;
}
