
import React, { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon, X as ClearIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCategory } from '@/context/CategoryContext';

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  const { 
    searchQuery, 
    setSearchQuery, 
    clearSearch, 
    isSearching 
  } = useCategory();
  
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input when searching becomes true
  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearching]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    clearSearch();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  };

  return (
    <div className={cn(
      "relative w-full max-w-md transition-all duration-300 ease-in-out",
      isFocused || searchQuery ? "scale-105" : "scale-100",
      className
    )}>
      <div className={cn(
        "flex items-center h-10 w-full px-3 rounded-lg transition-all duration-300",
        "bg-secondary border border-border",
        isFocused && "border-primary/50 shadow-sm ring-1 ring-primary/20"
      )}>
        <SearchIcon className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
        
        <input
          ref={inputRef}
          type="text"
          placeholder="Search tools, features, categories..."
          value={searchQuery}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-sm placeholder:text-muted-foreground"
        />
        
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-1 p-1 rounded-full text-muted-foreground hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <ClearIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      
      {isFocused && !searchQuery && (
        <div className="absolute mt-1 p-2 text-xs text-muted-foreground">
          Type to search for tools, features, or categories
        </div>
      )}
    </div>
  );
}
