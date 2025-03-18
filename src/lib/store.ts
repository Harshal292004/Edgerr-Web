import { create } from "zustand";

export type UserState = {
  name: string | null;
  mail: string | null;
  profile: string | null;
  loggedIn: boolean;
};

export type Actions = {
  login: (name: string, mail: string) => void;
  logout: () => void;
  editProfile: (payload: { name: string; profile: string }) => void;
};

export const useUserStore = create<UserState & Actions>((set) => {
  return {
    name: null,
    mail: null,
    profile: null,
    loggedIn: false,
    login: (name: string, mail: string) => {
      set(() => {
        return {
          name,
          mail,
          loggedIn: true,
        };
      });
    },
    logout: () => {
      set(() => {
        return {
          name: null,
          mail: null,
          profile: null,
          loggedIn: false,
        };
      });
    },
    editProfile: (payload: { name: string; profile: string }) => {
      const { name, profile } = payload;
      set(() => {
        return {
          name: name,
          profile: profile,
        };
      });
    },
  };
});

export enum THEME {
  BRIGHT = "bright",
  DARK = "dark",
}

export type ThemeState = {
  theme: THEME;
};

export type ThemeActions = {
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState & ThemeActions>((set) => {
  return {
    theme: THEME.BRIGHT,
    toggleTheme: () =>
      set(
        (state) => {
            return {
            theme: state.theme === THEME.BRIGHT ? THEME.DARK : THEME.BRIGHT,
            };
        }
    ),
  };
});
