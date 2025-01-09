export default defineEventHandler(async (event) => {
    return [
      { number: 'ORDE5789', customer: 'Muriithi', status: 'Cancelled', totalPrice: 'KES 1500', orderDate: '4th December 2024' },
      { number: 'ORDE5790', customer: 'John Doe', status: 'Complete', totalPrice: 'KES 2500', orderDate: '5th December 2024' },
      { number: 'ORDE5791', customer: 'Jane Doe', status: 'In Progress', totalPrice: 'KES 3500', orderDate: '6th December 2024' },
      { number: 'ORDE5791', customer: 'Jane Doe', status: 'Partials', totalPrice: 'KES 3500', orderDate: '6th December 2024' },


    ];
  });
  