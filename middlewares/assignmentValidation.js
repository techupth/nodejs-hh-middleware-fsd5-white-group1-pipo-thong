function validateAssignmentData(req, res, next) {
  const productData = req.body;

  if (!productData.title) {
    return res.status(400).json({
      message: "Title is require",
    });
  } else if (productData.title.length > 35) {
    return res.status(400).json({
      message: "Title must not be over 35 characters",
    });
  }

  if (!productData.description) {
    return res.status(400).json({
      message: "Description is require",
    });
  } else if (productData.description.length > 150) {
    return res.status(400).json({
      message: "Title must not be over 150 characters",
    });
  }

  if (!Array.isArray(productData.categories)) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }

  next();
}

export default validateAssignmentData;
