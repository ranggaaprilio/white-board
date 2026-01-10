import { Sidebar } from "@dashboard/_components/sidebar";
import { OrgSidebar } from "@dashboard/_components/org-sidebar";
import { Navbar } from "@dashboard/_components/navbar";

interface DasboardLayoutProps {
  children: React.ReactNode;
}

const DasboardLayout = ({ children }: DasboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />

      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DasboardLayout;
