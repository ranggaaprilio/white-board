import { NewButton } from "@dashboard/_components/sidebar/new-button";
import { OrgList } from "@dashboard/_components/sidebar/list";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-gray-700 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <OrgList />
      <NewButton />
    </aside>
  );
};
