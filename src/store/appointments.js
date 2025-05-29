import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAppointmentsStore = create(
  persist(
    (set) => ({
      appointments: [
        {
          id: 1,
          matchName: "Gallery Modern Art",
          date: "2024-02-15",
          time: "10:00",
          status: "confirmed",
          confirmationCode: "ARTX7Y9Z",
        }
      ],
      recommendedMatches: [
        {
          id: 1,
          name: "Gallery Modern Art",
          specialty: "Contemporary Art",
          matchScore: 95,
          avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
          availability: ["10:00", "14:00", "16:00"],
          rating: 4.8,
          totalMeetings: 156,
          booked: false,
        },
        {
          id: 2,
          name: "Abstract Visions",
          specialty: "Abstract Art",
          matchScore: 88,
          avatar: "https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg",
          availability: ["09:00", "11:00", "15:00"],
          rating: 4.6,
          totalMeetings: 98,
          booked: false,
        },
        {
          id: 3,
          name: "Digital Dreams",
          specialty: "Digital Art",
          matchScore: 92,
          avatar: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
          availability: ["11:00", "13:00", "16:00"],
          rating: 4.9,
          totalMeetings: 203,
          booked: false,
        }
      ],
      addAppointment: (appointment) => 
        set((state) => {
          const newAppointment = {
            ...appointment,
            id: Date.now(),
            status: 'confirmed',
            confirmationCode: Math.random().toString(36).substr(2, 8).toUpperCase(),
          };
          
          const updatedMatches = state.recommendedMatches.map(match => 
            match.id === appointment.matchId 
              ? { ...match, booked: true }
              : match
          );

          return {
            appointments: [...state.appointments, newAppointment],
            recommendedMatches: updatedMatches
          };
        }),
      removeAppointment: (id) => 
        set((state) => ({
          appointments: state.appointments.filter(appointment => appointment.id !== id)
        })),
      getAppointmentsByDate: (date) => 
        set((state) => ({
          appointments: state.appointments.filter(app => app.date === date)
        })),
    }),
    {
      name: 'appointments-storage',
    }
  )
);