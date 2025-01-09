export default defineEventHandler(async (event) => {
    return {
      totalStats: [
        { name: 'Complete', value: 3 },
        { name: 'Partials', value: 0 },
        { name: 'Cancelled', value: 0 },
        { name: 'Failed', value: 0 }
      ]
    };
  });
  