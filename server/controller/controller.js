
const Payment = require('../model/Payment')
exports.RenderlistPost = async(req, res) => {
    /*
    await Table.aggregate([
        {
          $group: {
            "_id": '$_id',
            title: {'$first': "$title"},
            header: {'$first': "$header"},
            text: {'$first': "$text"}
          }
        }
      ]).exec((err, result) => {
        res.status(200).json(result)
      })
      */
}

/* POST METHOD 
   input: { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
   output: { "RequestId": '61b248040041bc64b411a691', Amount: 100 } 
*/

exports.createPayment = async(req, res) => {
  try
  {
    const { cardNumber, expDate, cvv, amount } = req.body;
    const month = expDate.split('/')[0];
    const year = expDate.split('/')[1];
    let date = new Date();
    date.setMonth(month);
    date.setFullYear(year);
    const payment = new Payment({cardNumber: cardNumber, expDate: date.toISOString(), cvv: cvv, amount: amount});
    await payment.save();
    return res.status(200).json({RequestId: payment._id, Amount: amount }) 
  } catch (err) {
      console.log(err)
    return res.status(404).json({code: 404, status: 'required field is empty'}) 
  }

}