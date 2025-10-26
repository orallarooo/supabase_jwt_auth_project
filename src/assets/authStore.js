import { create } from 'zustand'
import supabase from '../helper/supabaseClient'

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user }),
  
  logout: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  },

  checkSession: async () => {
    const { data } = await supabase.auth.getSession()
    set({ user: data.session?.user ?? null, loading: false })

    // Слушаем изменения авторизации
    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user ?? null })
    })
  }
}))