"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import type { BreadcrumbItem } from './Breadcrumb';

type BreadcrumbContextValue = {
  breadcrumbs: BreadcrumbItem[] | null;
  setBreadcrumbs: (items: BreadcrumbItem[] | null) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextValue>({
  breadcrumbs: null,
  setBreadcrumbs: () => {},
});

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[] | null>(null);
  const value = useMemo(() => ({ breadcrumbs, setBreadcrumbs }), [breadcrumbs]);

  return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>;
};

export const useBreadcrumbs = () => useContext(BreadcrumbContext);

// Call from a page to show breadcrumbs in the nav bar while that page is mounted
export const useSetBreadcrumbs = (items: BreadcrumbItem[]) => {
  const { setBreadcrumbs } = useBreadcrumbs();
  const key = JSON.stringify(items);

  useEffect(() => {
    setBreadcrumbs(JSON.parse(key));
    return () => setBreadcrumbs(null);
  }, [key, setBreadcrumbs]);
};
