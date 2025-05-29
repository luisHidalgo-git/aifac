import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePaymentsStore = create(
  persist(
    (set) => ({
      spaces: [
        {
          id: 1,
          name: "Premium Corner Stand",
          size: "10x10m",
          price: 5000,
          location: "Main Hall",
          available: true,
          features: ["Corner Position", "Extra Height", "Storage Room"],
          popularity: 98,
          remainingSpots: 2,
          totalSpots: 2,
        },
        {
          id: 2,
          name: "Standard Exhibition Space",
          size: "6x6m",
          price: 3000,
          location: "Gallery Wing",
          available: true,
          features: ["Standard Height", "Basic Lighting"],
          popularity: 85,
          remainingSpots: 5,
          totalSpots: 5,
        },
        {
          id: 3,
          name: "Premium Central Location",
          size: "8x8m",
          price: 4000,
          location: "Central Hall",
          available: true,
          features: ["Central Position", "Enhanced Lighting", "Power Outlets"],
          popularity: 92,
          remainingSpots: 3,
          totalSpots: 3,
        }
      ],
      reservations: [],
      addReservation: (spaceId) => 
        set((state) => {
          const space = state.spaces.find(s => s.id === spaceId);
          if (!space || !space.available) return state;
          
          const updatedSpaces = state.spaces.map(s => 
            s.id === spaceId 
              ? { 
                  ...s, 
                  available: s.remainingSpots > 1,
                  remainingSpots: s.remainingSpots - 1
                } 
              : s
          );
          
          const reservation = {
            ...space,
            reservationId: Date.now(),
            status: 'pending',
            timestamp: new Date().toISOString(),
            expiresIn: '15:00', // 15 minutes countdown
          };
          
          return {
            spaces: updatedSpaces,
            reservations: [...state.reservations, reservation]
          };
        }),
      cancelReservation: (reservationId) => 
        set((state) => {
          const reservation = state.reservations.find(r => r.reservationId === reservationId);
          if (!reservation) return state;

          const updatedSpaces = state.spaces.map(s => 
            s.id === reservation.id 
              ? { 
                  ...s, 
                  available: true,
                  remainingSpots: s.remainingSpots + 1
                } 
              : s
          );
          
          return {
            spaces: updatedSpaces,
            reservations: state.reservations.filter(r => r.reservationId !== reservationId)
          };
        }),
      updateReservationStatus: (reservationId, status) =>
        set((state) => {
          if (status === 'completed') {
            // If completed, update space availability permanently
            const reservation = state.reservations.find(r => r.reservationId === reservationId);
            if (reservation) {
              const updatedSpaces = state.spaces.map(s => 
                s.id === reservation.id 
                  ? { 
                      ...s,
                      available: s.remainingSpots > 1,
                      popularity: Math.min(100, s.popularity + 2)
                    } 
                  : s
              );
              return {
                spaces: updatedSpaces,
                reservations: state.reservations.map(r =>
                  r.reservationId === reservationId ? { ...r, status } : r
                )
              };
            }
          }
          
          if (status === 'expired') {
            // If expired, restore the space availability
            const reservation = state.reservations.find(r => r.reservationId === reservationId);
            if (reservation) {
              const updatedSpaces = state.spaces.map(s => 
                s.id === reservation.id 
                  ? { 
                      ...s,
                      available: true,
                      remainingSpots: s.remainingSpots + 1
                    } 
                  : s
              );
              return {
                spaces: updatedSpaces,
                reservations: state.reservations.map(r =>
                  r.reservationId === reservationId ? { ...r, status } : r
                )
              };
            }
          }

          return {
            reservations: state.reservations.map(r =>
              r.reservationId === reservationId ? { ...r, status } : r
            )
          };
        }),
    }),
    {
      name: 'payments-storage',
    }
  )
);