import Link from "next/link";
import Button from "../button";
import { GridItemInterface } from "@/config/site-config";
import { useThemeColors } from "@/hooks/useThemeColors";
import { socialIcons } from "@/config/icons-config";

const Social = ({ item }: { item: GridItemInterface }) => {
  const { getItemColor } = useThemeColors();
  
  // Get the appropriate icon component from our centralized system
  const IconComponent = item.icon && socialIcons[item.icon];

  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      {/* Header */}
      <div className="flex items-center justify-between">
        {item.icon && IconComponent && (
          <IconComponent
            color={getItemColor(item)}
            style={{ fontSize: "34px" }}
          />
        )}
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={getItemColor(item)}
          />
        )}
      </div>
      {/* Content */}
      <div className="mt-1">
        <div className="@lg:text-lg font-semibold line-clamp-1">
          {item.title} <span className="ml-1 text-sm font-normal text-neutral-600 dark:text-slate-200">{item.username}</span>
        </div>
        {item.description && (
          <div className="mt-1 mb-2 text-sm text-neutral-600 dark:text-neutral-50 line-clamp-2">
            {item.description}
          </div>
        )}
        {item.layout === "1x2" && (
          <div className="mt-2">
            <Button
              text={item.buttonTitle ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={getItemColor(item)}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Social;