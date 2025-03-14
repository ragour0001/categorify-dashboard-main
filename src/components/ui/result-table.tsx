
import React from 'react';
import { cn } from '@/lib/utils';
import { SearchResult } from '@/data/categories';
import { ChevronRight } from 'lucide-react';
import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from './table';
import { FadeIn } from './fade-in';

interface ResultTableProps {
  results: SearchResult[];
  className?: string;
}

export function ResultTable({ results, className }: ResultTableProps) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M22 12c0 5-3.5 9-9 9s-9-4-9-9 4-9 9-9c4 0 7 2 8.5 5"/><polyline points="16 5 22 4 21 10"/><line x1="7" x2="17" y1="12" y2="12"/></svg>
        </div>
        <h3 className="text-lg font-medium mb-1">No results found</h3>
        <p className="text-sm text-muted-foreground">Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <FadeIn className={cn("overflow-hidden", className)}>
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="w-[180px]">Category</TableHead>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead className="text-right w-[80px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow 
                  key={result.id}
                  className="transition-colors hover:bg-muted/20"
                >
                  <TableCell>
                    <div className="font-medium">{result.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{result.description}</div>
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold">
                      {result.category}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {result.type}
                  </TableCell>
                  <TableCell className="text-right">
                    <a 
                      href={result.url} 
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </FadeIn>
  );
}
