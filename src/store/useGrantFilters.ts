import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GrantFilterStore {
  search: string
  industry: string
  location: string
  activity: string

  setSearch: (v: string) => void
  setIndustry: (v: string) => void
  setLocation: (v: string) => void
  setActivity: (v: string) => void
}

export const useGrantFilters = create<GrantFilterStore>()(
  persist(
    (set) => ({
      search: '',
      industry: '',
      location: '',
      activity: '',

      setSearch: (v) => set({ search: v }),
      setIndustry: (v) => set({ industry: v }),
      setLocation: (v) => set({ location: v }),
      setActivity: (v) => set({ activity: v }),
    }),
    {
      name: 'grant-filter-storage',
    }
  )
)
