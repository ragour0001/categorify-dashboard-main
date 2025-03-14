export interface Subcategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  metrics?: {
    value: number;
    label: string;
    change?: number;
  }[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface SearchResult {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  url: string;
}

export const categories: Category[] = [
  {
    id: "seo",
    name: "SEO",
    icon: "search",
    subcategories: [
      {
        id: "keyword-research",
        name: "Keyword Research",
        description: "Discover high-performing keywords to target in your content",
        icon: "key",
        metrics: [
          { value: 245, label: "Opportunities", change: 12 },
          { value: 84, label: "Ranking Keywords", change: -2 }
        ]
      },
      {
        id: "backlink-analysis",
        name: "Backlink Analysis",
        description: "Analyze your backlink profile and find new opportunities",
        icon: "link",
        metrics: [
          { value: 1245, label: "Total Backlinks", change: 34 },
          { value: 87, label: "Domain Authority", change: 2 }
        ]
      },
      {
        id: "on-page-seo",
        name: "On-Page SEO",
        description: "Optimize your website's pages for better search rankings",
        icon: "file-text",
        metrics: [
          { value: 92, label: "Average Score", change: 5 },
          { value: 15, label: "Issues Found", change: -3 }
        ]
      },
      {
        id: "technical-seo",
        name: "Technical SEO",
        description: "Improve your website's technical aspects for better indexing",
        icon: "settings",
        metrics: [
          { value: 98, label: "Performance Score", change: 2 },
          { value: 3, label: "Critical Issues", change: -1 }
        ]
      }
    ]
  },
  {
    id: "content",
    name: "Content",
    icon: "file-text",
    subcategories: [
      {
        id: "content-analysis",
        name: "Content Analysis",
        description: "Analyze your content performance and identify opportunities",
        icon: "bar-chart",
        metrics: [
          { value: 45, label: "Content Pieces", change: 5 },
          { value: 3.2, label: "Avg. Engagement (min)", change: 0.4 }
        ]
      },
      {
        id: "content-planner",
        name: "Content Planner",
        description: "Plan and schedule your content calendar",
        icon: "calendar",
        metrics: [
          { value: 12, label: "Planned Pieces", change: 4 },
          { value: 5, label: "Draft Content", change: -2 }
        ]
      },
      {
        id: "content-optimization",
        name: "Content Optimization",
        description: "Improve your existing content for better performance",
        icon: "edit-3",
        metrics: [
          { value: 78, label: "Average Score", change: 12 },
          { value: 24, label: "Optimized Pieces", change: 8 }
        ]
      },
      {
        id: "ai-assistant",
        name: "AI Writing Assistant",
        description: "Create and optimize content with AI assistance",
        icon: "cpu",
        metrics: [
          { value: 156, label: "AI Generated Pieces", change: 42 },
          { value: 85, label: "Satisfaction Score", change: 7 }
        ]
      }
    ]
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: "bar-chart-2",
    subcategories: [
      {
        id: "traffic-insights",
        name: "Traffic Insights",
        description: "Understand your website traffic patterns and sources",
        icon: "users",
        metrics: [
          { value: 24563, label: "Monthly Visitors", change: 1245 },
          { value: 3.4, label: "Avg. Session (min)", change: 0.2 }
        ]
      },
      {
        id: "conversion-tracking",
        name: "Conversion Tracking",
        description: "Track and analyze your conversion goals",
        icon: "target",
        metrics: [
          { value: 3.2, label: "Conversion Rate (%)", change: 0.5 },
          { value: 342, label: "Monthly Conversions", change: 28 }
        ]
      },
      {
        id: "user-behavior",
        name: "User Behavior",
        description: "Analyze how users interact with your website",
        icon: "activity",
        metrics: [
          { value: 52, label: "Bounce Rate (%)", change: -2.4 },
          { value: 2.1, label: "Pages per Session", change: 0.3 }
        ]
      },
      {
        id: "custom-reports",
        name: "Custom Reports",
        description: "Create and schedule custom analytics reports",
        icon: "file-text",
        metrics: [
          { value: 8, label: "Saved Reports", change: 2 },
          { value: 4, label: "Weekly Emails", change: 1 }
        ]
      }
    ]
  },
  {
    id: "social",
    name: "Social Media",
    icon: "share-2",
    subcategories: [
      {
        id: "profile-analytics",
        name: "Profile Analytics",
        description: "Track your social media profile performance",
        icon: "trending-up",
        metrics: [
          { value: 12567, label: "Total Followers", change: 342 },
          { value: 2.8, label: "Engagement Rate (%)", change: 0.3 }
        ]
      },
      {
        id: "content-scheduler",
        name: "Content Scheduler",
        description: "Schedule and manage your social media posts",
        icon: "calendar",
        metrics: [
          { value: 28, label: "Scheduled Posts", change: 6 },
          { value: 94, label: "Publishing Score", change: 2 }
        ]
      },
      {
        id: "competitor-analysis",
        name: "Competitor Analysis",
        description: "Analyze your competitors' social media performance",
        icon: "users",
        metrics: [
          { value: 5, label: "Tracked Competitors", change: 2 },
          { value: 65, label: "Performance Score", change: 5 }
        ]
      },
      {
        id: "hashtag-research",
        name: "Hashtag Research",
        description: "Find and analyze effective hashtags for your content",
        icon: "hash",
        metrics: [
          { value: 145, label: "Tracked Hashtags", change: 23 },
          { value: 3.4, label: "Avg. Reach Increase", change: 0.6 }
        ]
      }
    ]
  },
  {
    id: "advertising",
    name: "Advertising",
    icon: "dollar-sign",
    subcategories: [
      {
        id: "ad-performance",
        name: "Ad Performance",
        description: "Track and analyze your advertising campaigns",
        icon: "pie-chart",
        metrics: [
          { value: 12678, label: "Ad Spend ($)", change: 1200 },
          { value: 3.2, label: "ROAS", change: 0.4 }
        ]
      },
      {
        id: "campaign-planner",
        name: "Campaign Planner",
        description: "Plan and optimize your advertising campaigns",
        icon: "layout",
        metrics: [
          { value: 8, label: "Active Campaigns", change: 2 },
          { value: 12, label: "Planned Campaigns", change: 3 }
        ]
      },
      {
        id: "audience-insights",
        name: "Audience Insights",
        description: "Understand your advertising audience demographics",
        icon: "users",
        metrics: [
          { value: 542345, label: "Audience Reach", change: 23456 },
          { value: 2.4, label: "Click-through Rate (%)", change: 0.3 }
        ]
      },
      {
        id: "budget-optimizer",
        name: "Budget Optimizer",
        description: "Optimize your advertising budget allocation",
        icon: "trending-up",
        metrics: [
          { value: 24, label: "Cost Reduction (%)", change: 5 },
          { value: 1.4, label: "CPC ($)", change: -0.2 }
        ]
      }
    ]
  }
];

export const allSubcategories = categories.flatMap(category => 
  category.subcategories.map(subcategory => ({
    ...subcategory,
    categoryId: category.id,
    categoryName: category.name
  }))
);

// This function is kept for backward compatibility but is no longer the primary search method
export const mockSearchResults = (query: string): SearchResult[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  // Filter subcategories based on the search query
  return allSubcategories
    .filter(subcategory => 
      subcategory.name.toLowerCase().includes(lowercaseQuery) || 
      subcategory.description.toLowerCase().includes(lowercaseQuery)
    )
    .map(subcategory => ({
      id: subcategory.id,
      name: subcategory.name,
      description: subcategory.description,
      category: subcategory.categoryName,
      type: 'Tool',
      url: `/${subcategory.categoryId}/${subcategory.id}`
    }));
};
