import { create } from "zustand";

export interface User {
  id?: string;
  username?: string;
  email?: string;
  isLoggedIn: boolean;
}

interface UserStore {
  user: User;
  setUser: (params: Partial<User>) => void;
  logout: () => void;
  login: (params: { username: string; id: string }) => void;
}

const initialUser: User = {
  id: undefined,
  username: undefined,
  email: undefined,
  isLoggedIn: false,
};

export const useUserStore = create<UserStore>(set => ({
  user: { ...initialUser },

  setUser: (params: Partial<User>) => set(state => ({ user: { ...state.user, ...params } })),

  logout: () => set({ user: initialUser }),

  login: ({ username, id }) =>
    set({
      user: {
        id,
        username,
        isLoggedIn: true,
      },
    }),
}));
