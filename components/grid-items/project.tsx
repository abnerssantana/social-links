import { GridItemInterface } from "@/config/site-config";
import { projectIcons } from "@/config/icons-config";
import { useThemeColors } from "@/hooks/useThemeColors";

const Project = ({ item }: { item: GridItemInterface }) => {
  const { isDark } = useThemeColors();
  const IconComponent = item.icon && projectIcons[item.icon];
  
  return (
    <div className="flex items-center justify-between gap-4 pb-2">
      {IconComponent && <div className="dark:text-black"><IconComponent /></div>}
      <div className="w-full @lg:text-lg font-semibold dark:text-black">{item.title}</div>
      <div className="flex items-center gap-1">
        <div className="mt-[1px]">{item.stars}</div>
      </div>
    </div>
  );
};

export default Project;