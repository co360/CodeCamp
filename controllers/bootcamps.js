// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// access   Public
exports.getBootcamps = (req, res, next) => {
  res.json({
    id: 1,
    data: 'Team Avengers',
  });
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// access   Public
exports.getBootcamp = (req, res, next) => {};

// @desc    Create a bootcamp
// @route   POST /api/v1/bootcamps
// access   Private
exports.createBootcamp = (req, res, next) => {};

// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// access   Private
exports.updateBootcamp = (req, res, next) => {};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// access   Private
exports.deleteBootcamp = (req, res, next) => {};
