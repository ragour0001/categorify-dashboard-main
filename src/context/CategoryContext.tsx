
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Category, categories as initialCategories, Subcategory, SearchResult } from '../data/categories';

interface CategoryContextType {
  categories: Category[];
  selectedCategory: Category | null;
  selectedSubcategory: Subcategory | null;
  searchQuery: string;
  searchResults: SearchResult[];
  isSearching: boolean;
  selectCategory: (categoryId: string) => void;
  selectSubcategory: (subcategoryId: string) => void;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

const STORAGE_KEY = 'dashboard_categories_data';
const SEARCH_STORAGE_KEY = 'dashboard_search_results';

// Mock backend search API call
const fetchSearchResultsFromBackend = async (query: string): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate more comprehensive dummy search results
  const results: SearchResult[] = [];
  
  if (!query.trim()) return [];
  
  const types = ['Tool', 'Article', 'Guide', 'Report', 'Template'];
  const categories = ['SEO', 'Content', 'Analytics', 'Social Media', 'Advertising'];
  
  // Generate 10-15 dummy results based on the query
  const resultCount = Math.floor(Math.random() * 6) + 10; // 10-15 results
  
  for (let i = 0; i < resultCount; i++) {
    const categoryIndex = Math.floor(Math.random() * categories.length);
    const typeIndex = Math.floor(Math.random() * types.length);
    
    results.push({
      id: `result-${i}-${Date.now()}`,
      name: `${query} ${types[typeIndex]} ${i + 1}`,
      description: `This is a ${query.toLowerCase()} ${types[typeIndex].toLowerCase()} for ${categories[categoryIndex].toLowerCase()} optimization and analysis.`,
      category: categories[categoryIndex],
      type: types[typeIndex],
      url: `/${categories[categoryIndex].toLowerCase().replace(' ', '-')}/${query.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`
    });
  }
  
  // Save to localStorage to simulate persistence
  try {
    localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(results));
  } catch (error) {
    console.error('Error saving search results to localStorage:', error);
  }
  
  return results;
};

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  // Load categories from localStorage on initial load
  const loadCategoriesFromStorage = (): Category[] => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        return JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
    return initialCategories;
  };

  // Load search results from localStorage
  const loadSearchResultsFromStorage = (): SearchResult[] => {
    try {
      const storedResults = localStorage.getItem(SEARCH_STORAGE_KEY);
      if (storedResults) {
        return JSON.parse(storedResults);
      }
    } catch (error) {
      console.error('Error loading search results from localStorage:', error);
    }
    return [];
  };

  const [categories, setCategories] = useState<Category[]>(loadCategoriesFromStorage);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>(loadSearchResultsFromStorage);
  const [isSearching, setIsSearching] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Save categories to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, [categories]);

  const selectCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId) || null;
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setIsSearching(false);
  };

  const selectSubcategory = (subcategoryId: string) => {
    if (!selectedCategory) return;
    
    const subcategory = selectedCategory.subcategories.find(s => s.id === subcategoryId) || null;
    setSelectedSubcategory(subcategory);
  };

  const handleSetSearchQuery = async (query: string) => {
    setSearchQuery(query);
    
    if (query.trim()) {
      setIsSearching(true);
      
      // Fetch results from our mock backend API
      try {
        const results = await fetchSearchResultsFromBackend(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      }
    } else {
      clearSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        selectedCategory,
        selectedSubcategory,
        searchQuery,
        searchResults,
        isSearching,
        selectCategory,
        selectSubcategory,
        setSearchQuery: handleSetSearchQuery,
        clearSearch,
        toggleSidebar,
        isSidebarOpen
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};
