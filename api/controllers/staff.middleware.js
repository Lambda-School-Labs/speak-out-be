const validateCreateStaff = (req, res, next) => {
  const {
    username,
    password,
    email,
    name,
    short_name,
    cpr,
    mobile_number,
    accent,
    gender,
    birthdate,
    teaching_rate,
    admin
  } = req.body;
  if (
    admin === null ||
    admin === undefined ||
    !username ||
    !email ||
    !name ||
    !password ||
    !gender
  ) {
    return res.status(400).json({ error: 'Wrong Body' });
  }
  req.user = {
    user_type: admin ? 'admin' : 'staff',
    username,
    email,
    name,
    password,
    short_name: short_name || null,
    cpr: cpr || null,
    mobile_number: mobile_number || null,
    gender,
    accent: accent || null,
    birthdate: birthdate || null
  };

  req.staff = {
    teaching_rate
  };

  next();
};

const validateEditStaff = (req, res, next) => {
  const {
    username,
    email,
    name,
    short_name,
    cpr,
    mobile_number,
    accent,
    gender,
    birthdate,
    teaching_rate,
    admin
  } = req.body;
  if (
    admin === null ||
    admin === undefined ||
    !username ||
    !email ||
    !name ||
    !gender
  ) {
    return res.status(400).json({ error: 'Wrong Body' });
  }
  req.user = {
    user_type: admin ? 'admin' : 'staff',
    username,
    email,
    name,
    short_name: short_name || null,
    cpr: cpr || null,
    mobile_number: mobile_number || null,
    gender,
    accent: accent || null,
    birthdate: birthdate || null
  };

  req.staff = {
    teaching_rate
  };

  next();
};

const validateStaffID = (req, res, next) => {
  console.log(req.params.staffID);
  const staffID = +req.params.staffID;
  console.log(staffID);
  if (isNaN(staffID)) {
    return res.status(401).json({ error: 'Please enter a valid ID' });
  }
  req.staffID = staffID;
  next();
};

module.exports = {
  validateCreateStaff,
  validateStaffID,
  validateEditStaff
};