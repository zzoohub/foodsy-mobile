"use client";

import { create } from "zustand";

export interface User {}

const initUser = (): User => ({});

interface UserStore {
  user: User;
  setUser: (params: Partial<User>) => void;
}

export const userStore = create<UserStore>(set => ({
  user: { ...initUser() },
  setUser: (params: Partial<User>) => set(state => ({})),
}));
