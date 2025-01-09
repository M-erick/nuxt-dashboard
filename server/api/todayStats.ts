// in /server/api/todayStats.ts
export default defineEventHandler(async (event) => {
    return {
      todayStats: [
        { name: 'Complete', value: 3 },
        { name: 'Partials', value: 0 },
        { name: 'Cancelled', value: 0 },
        { name: 'Failed', value: 0 }
      ]
    };
  });
  