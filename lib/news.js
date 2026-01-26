import { DUMMY_NEWS } from "@/dummy-news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}
