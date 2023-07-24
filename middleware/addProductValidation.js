const addProductValidation = (req, res, next) => {
  const { quantity, name, price } = req.body;
  //   quantity < 1 || name.length < 3 || price < 1000;
  

  if (isNaN(quantity) || quantity < 1 || quantity === null ) {
    res.status(500).json('quantity minimal is 1');
  } else if (name.length < 3) {
    res.status(500).json('character minimal is 3');
  } else if (price < 1000 || isNaN(price) || price === null ) {
    res.status(500).json('price minimal is 1000');
  } else {
    next();
  }
};

module.exports = addProductValidation;
