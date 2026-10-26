import type { CategoryData } from "@/types/category";
import raw from "./category.json";

// All static site content lives in category.json; this file only gives it its type.
export const data = raw as CategoryData;

export const common = data.common;
export const site = common.site;
export const assets = common.assets;
export const sections = data.categories.AuraSpaces.sections;
