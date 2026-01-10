import { NewButton } from "@dashboard/_components/sidebar/new-button";
import { OrgList } from "@dashboard/_components/sidebar/list";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-white h-full w-[60px] flex p-3 flex-col gap-y-4 text-black border-r border-neutral-200">
      <OrgList />
      <NewButton />
    </aside>
  );
};
