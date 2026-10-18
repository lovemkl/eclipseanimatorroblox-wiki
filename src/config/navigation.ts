import { BookOpen, Wand2, Scale, CircleHelp } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guides", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "features", path: "/features", icon: Wand2, isContentType: true },
  { key: "comparisons", path: "/comparisons", icon: Scale, isContentType: true },
  { key: "faq", path: "/faq", icon: CircleHelp, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
