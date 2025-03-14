
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { useCategory } from '@/context/CategoryContext';
import { CategoryCard } from '@/components/ui/category-card';
import { ResultTable } from '@/components/ui/result-table';
import { FadeIn, FadeInStagger } from '@/components/ui/fade-in';

const Index = () => {
  const {
    categories,
    selectedCategory,
    selectedSubcategory,
    searchResults,
    isSearching,
    selectCategory,
    selectSubcategory
  } = useCategory();

  const renderDashboardContent = () => {
    if (isSearching) {
      return (
        <div className="space-y-6">
          <FadeIn>
            <h1 className="text-2xl font-semibold">Search Results</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <ResultTable results={searchResults} />
          </FadeIn>
        </div>
      );
    }

    if (!selectedCategory) {
      return (
        <div className="space-y-8">
          <FadeIn>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">Welcome to Dashboard</h1>
              <p className="text-muted-foreground">
                Select a category from the sidebar to get started.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 3).map(category => (
                <CategoryCard
                  key={category.id}
                  subcategory={{
                    id: category.id,
                    name: category.name,
                    description: `Explore all ${category.name.toLowerCase()} tools and features`,
                    icon: category.icon
                  }}
                  onClick={() => selectCategory(category.id)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <FadeIn>
          <div className="space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary">
              {selectedCategory.name}
            </div>
            <h1 className="text-2xl font-semibold">
              {selectedCategory.name} Tools
            </h1>
            <p className="text-muted-foreground">
              Explore all available tools and features in this category.
            </p>
          </div>
        </FadeIn>
        
        <FadeInStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          childClassName="block"
          initialDelay={100}
          staggerDelay={75}
        >
          {selectedCategory.subcategories.map(subcategory => (
            <CategoryCard
              key={subcategory.id}
              subcategory={subcategory}
              onClick={() => selectSubcategory(subcategory.id)}
            />
          ))}
        </FadeInStagger>
      </div>
    );
  };

  return (
    <DashboardLayout>
      {renderDashboardContent()}
    </DashboardLayout>
  );
};

export default Index;
