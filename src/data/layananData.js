import React from "react";
import { colorPalette } from "../utils/palette";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialIcons";

const iconSize = 35;
const iconColor = colorPalette.primary;

export const dataLayanan = [
  {
    id: 1,
    label: "Kiloan",
    icon: <IconAnt name="inbox" size={iconSize} color={iconColor} />,
  },
  {
    id: 2,
    label: "Satuan",
    icon: <IconAnt name="skin" size={iconSize} color={iconColor} />,
  },
  {
    id: 3,
    label: "VIP",
    icon: <IconAnt name="Safety" size={iconSize} color={iconColor} />,
  },
  {
    id: 4,
    label: "Karpet",
    icon: <IconAnt name="menuunfold" size={iconSize} color={iconColor} />,
  },
  {
    id: 5,
    label: "Setrika",
    icon: <IconAnt name="swap" size={iconSize} color={iconColor} />,
  },
  {
    id: 6,
    label: "Antar",
    icon: (
      <IconMaterial name="delivery-dining" size={iconSize} color={iconColor} />
    ),
  },
];
