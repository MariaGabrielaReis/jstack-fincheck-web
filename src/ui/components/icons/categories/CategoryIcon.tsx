import { iconsMap } from "./iconsMap";

interface CategoryIconProps {
  type: "income" | "expense";
  category?: string;
}

type Options = keyof (typeof iconsMap.expense | typeof iconsMap.income);

export function CategoryIcon({ type, category }: CategoryIconProps) {
  const Icon =
    iconsMap[type][(category as Options) ?? "default"] ??
    iconsMap[type].default;

  return <Icon />;
}
