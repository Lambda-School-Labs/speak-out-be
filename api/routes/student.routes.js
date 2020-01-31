const express = require('express');

const {
  findAllStudents,
  findStudentById,
  deleteAStudent
} = require('../controllers/Student/student.controller');

const {
  validateStudentID,
  checkIfStudentExistsByID
} = require('../controllers/Student/student.middleware');

const router = express.Router();

router.param('studentID', validateStudentID);

router.get('/students', findAllStudents);
// router.post('/staff', validateCreateStaff, createAStaff);
router.get('/student/:studentID', checkIfStudentExistsByID, findStudentById);
// router.put(
//   '/staff/:staffID',
//   checkIfStaffExistsByID,
//   validateEditStaff,
//   editAStaff
// );
router.delete('/student/:studentID', checkIfStudentExistsByID, deleteAStudent);

module.exports = router;