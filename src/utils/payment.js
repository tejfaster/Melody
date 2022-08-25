// import RazorpayCheckout from 'react-native-razorpay';

// export const payment = () =>{
//     var options = {
//         description: 'Credits towards consultation',
//         // image: 'https://i.imgur.com/3g7nmJC.png',
//         currency: 'INR',
//         key: 'rzp_live_zwg1fcIOtKviD1', // Your api key
//         amount: '5000',
//         name: 'Tej Pratap',
//         // prefill: {
//         //   email: 'tejfaster55@gmail.com',
//         //   contact: '7701827831',
//         //   name: 'Tej Pratap'
//         // },
//         theme: { color: '#528FF0' }
//       }
//       RazorpayCheckout.open(options).then((data) => {
//         // handle success
//         alert(`Success: ${data.razorpay_payment_id}`);
//       }).catch((error) => {
//         // handle failure
//         console.log(error.code,error.description,error)
//         alert(`Error: ${error.code} | ${error.description}`);
//       });
// }