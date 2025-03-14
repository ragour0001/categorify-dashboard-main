
import React from 'react';
import { SidebarNav } from '@/components/ui/sidebar-nav';
import { SearchBar } from '@/components/ui/search-bar';
import { useCategory } from '@/context/CategoryContext';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isSidebarOpen } = useCategory();
  
  return (
    <div className="min-h-screen flex">
      <SidebarNav />
      
      <div className={cn(
        "flex-1 transition-all duration-300",
        isSidebarOpen ? "md:ml-64" : "md:ml-0"
      )}>
        <div className="py-4 px-4 md:px-6 flex items-center justify-between border-b border-border">
          <div className="flex-1 max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
        
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
