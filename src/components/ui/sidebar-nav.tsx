import React from 'react';
import { cn } from '@/lib/utils';
import { useCategory } from '@/context/CategoryContext';
import { 
  Search as SearchIcon, 
  Menu as MenuIcon, 
  X as CloseIcon,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { FadeInStagger } from './fade-in';

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  const { 
    categories, 
    selectedCategory, 
    selectCategory,
    toggleSidebar,
    isSidebarOpen
  } = useCategory();

  const handleCategoryClick = (categoryId: string) => {
    selectCategory(categoryId);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-background border border-border shadow-sm md:hidden" 
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
      </button>
      
      {/* Sidebar backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 bottom-0 z-40 w-64 bg-sidebar border-r border-border transition-transform duration-300 ease-in-out transform",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0 md:relative md:z-0",
        className
      )}>
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-border">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <button className="md:hidden" onClick={toggleSidebar}>
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto py-4 px-2">
            <h3 className="text-xs uppercase text-muted-foreground font-semibold tracking-wider px-3 mb-2">
              Categories
            </h3>
            
            <FadeInStagger 
              staggerDelay={50} 
              className="space-y-1"
              childClassName="block"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    "sidebar-item w-full flex justify-between",
                    selectedCategory?.id === category.id && "sidebar-item-active"
                  )}
                >
                  <span className="flex items-center">
                    <span className="sidebar-item-icon mr-1">{getCategoryIcon(category.icon)}</span>
                    <span>{category.name}</span>
                  </span>
                  <ChevronRightIcon className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </FadeInStagger>
          </div>
          
          {/* Sidebar footer */}
          <div className="h-14 border-t border-border p-2">
            <button className="sidebar-item w-full justify-start">
              <SearchIcon className="w-4 h-4 mr-2" />
              <span>Search...</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case 'search':
      return <SearchIcon className="w-4 h-4" />;
    case 'file-text':
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
    case 'bar-chart-2':
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
    case 'share-2':
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
    case 'dollar-sign':
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
    default:
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>;
  }
}
