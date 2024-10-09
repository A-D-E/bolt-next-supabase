'use client'

import { usePathname } from 'next/navigation';

const translations = {
  en: {
    Index: {
      welcome: "Welcome to Next.js with Supabase and i18n",
      email: "Email",
      password: "Password",
      signUp: "Sign Up",
      signIn: "Sign In"
    },
    Dashboard: {
      welcome: "Welcome, {email}!",
      signOut: "Sign Out",
      loading: "Loading..."
    }
  },
  fr: {
    Index: {
      welcome: "Bienvenue sur Next.js avec Supabase et i18n",
      email: "Email",
      password: "Mot de passe",
      signUp: "S'inscrire",
      signIn: "Se connecter"
    },
    Dashboard: {
      welcome: "Bienvenue, {email} !",
      signOut: "Se déconnecter",
      loading: "Chargement..."
    }
  },
  es: {
    Index: {
      welcome: "Bienvenido a Next.js con Supabase y i18n",
      email: "Correo electrónico",
      password: "Contraseña",
      signUp: "Registrarse",
      signIn: "Iniciar sesión"
    },
    Dashboard: {
      welcome: "¡Bienvenido, {email}!",
      signOut: "Cerrar sesión",
      loading: "Cargando..."
    }
  }
};

export function useTranslations(namespace: keyof typeof translations.en) {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';

  const t = (key: string, params?: Record<string, string>) => {
    let translation = translations[locale as keyof typeof translations]?.[namespace]?.[key as keyof typeof translations.en.Index] || key;
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation.replace(`{${key}}`, value);
      });
    }
    return translation;
  };
  return t;
}