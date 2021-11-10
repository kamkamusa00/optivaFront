import { GraphicsCardI } from "@shared/models/graphicsCards.model";

export const graphicsCardsMock = ():GraphicsCardI[] => [
  {
    id:1,
    name: "Asus ROG Strix GeForce RTX 3090",
    model: "Asus ROG Strix",
    manufacturer: "Asus",
    assembler: "Asus",
    price: "300,55",
    img: "https://med.greatecno.com/185302-large_default/asus-rog-strix-geforce-rtx-3090-oc-gaming-24gb-gddr6x-tarjeta-grafica.jpg",
  },
  {
    id:2,
    name: "MSI AMD Radeon RX 6900 XT",
    model: "MSI AMD Radeon",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "856,58",
    img: "https://media.stockinthechannel.com/pic/YLVCpNatUEC-ci01QlF_4A.c-r.jpg",
  },
  {
    id:3,
    name: "MSI AMD Radeon RX 8200 XT",
    model: "MSI AMD Radeon",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "300,58",
    img: "https://media.stockinthechannel.com/pic/YLVCpNatUEC-ci01QlF_4A.c-r.jpg",
  }]
