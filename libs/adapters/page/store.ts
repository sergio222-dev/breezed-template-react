export enum Pages {
  Home,
}

export interface PageStore {
  page: Pages
}

export const initialState: PageStore = {
  page: Pages.Home,
}