import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Building2, 
  Landmark, 
  ClipboardCheck, 
  User, 
  Home,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EnhancedButton } from "./ui/enhanced-button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "User Dashboard", href: "/user-dashboard", icon: User },
  { name: "Bank Management", href: "/bank-management", icon: Landmark },
  { name: "Construction Company", href: "/construction-company", icon: Building2 },
  { name: "Project Manager", href: "/project-manager", icon: ClipboardCheck },
];

export const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const location = useLocation();

  const NavLinks = () => (
    <>
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
              isActive
                ? "bg-primary-accent text-white shadow-accent"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 w-full border-b bg-sidebar shadow-primary">
        <div className="flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold text-sidebar-foreground">RCMS</h1>
          <Sheet>
            <SheetTrigger asChild>
              <EnhancedButton variant="ghost" size="icon" className="text-sidebar-foreground">
                <Menu className="h-6 w-6" />
              </EnhancedButton>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-sidebar p-0">
              <nav className="flex flex-col gap-2 p-4">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-sidebar-foreground">RCMS</h2>
                  <p className="text-sm text-sidebar-foreground/70">Remote Construction Management</p>
                </div>
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 bg-sidebar border-r border-sidebar-border shadow-accent">
          <div className="flex flex-col gap-2 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-sidebar-foreground">RCMS</h2>
              <p className="text-sm text-sidebar-foreground/70">Remote Construction Management</p>
            </div>
            <nav className="flex flex-col gap-2">
              <NavLinks />
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="container mx-auto p-6 lg:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
              <div className="h-1 w-20 bg-primary-accent rounded-full"></div>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
