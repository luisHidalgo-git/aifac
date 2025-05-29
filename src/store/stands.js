import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStandsStore = create(
  persist(
    (set) => ({
      stands: [
        {
          id: 1,
          name: "Gallery Modern Art",
          artist: "Various Artists",
          technique: "Mixed Media",
          priceRange: "5000-10000",
          trend: "Contemporary",
          image: "https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg",
          views: 245,
          likes: 89,
        },
        {
          id: 2,
          name: "Abstract Expressions",
          artist: "John Doe",
          technique: "Oil Painting",
          priceRange: "10000+",
          trend: "Abstract",
          image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg",
          views: 189,
          likes: 67,
        },
        {
          id: 3,
          name: "Digital Future",
          artist: "Sarah Smith",
          technique: "Digital Art",
          priceRange: "1000-5000",
          trend: "Digital",
          image: "https://images.pexels.com/photos/2570059/pexels-photo-2570059.jpeg",
          views: 312,
          likes: 156,
        },
        {
          id: 4,
          name: "Traditional Masterpieces",
          artist: "Elena Rodriguez",
          technique: "Watercolor",
          priceRange: "3000-8000",
          trend: "Classical",
          image: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg",
          views: 178,
          likes: 92,
        }
      ],
      addStand: (stand) => 
        set((state) => ({ 
          stands: [...state.stands, { ...stand, id: state.stands.length + 1, views: Math.floor(Math.random() * 100), likes: Math.floor(Math.random() * 50) }] 
        })),
      removeStand: (id) => 
        set((state) => ({ 
          stands: state.stands.filter(stand => stand.id !== id) 
        })),
      incrementViews: (id) =>
        set((state) => ({
          stands: state.stands.map(stand =>
            stand.id === id ? { ...stand, views: stand.views + 1 } : stand
          )
        })),
      toggleLike: (id) =>
        set((state) => ({
          stands: state.stands.map(stand =>
            stand.id === id ? { ...stand, likes: stand.likes === 0 ? 1 : 0 } : stand
          )
        })),
    }),
    {
      name: 'stands-storage',
    }
  )
);