const express = require('express')
const router = express.Router()

const { Create_Candidate, getCandidate, avg_marks, test_avg_marks, highest_marks_subject, max_avg_marks  } = require('../controller/score')

router.post('/studentdetails', Create_Candidate)
router.get('/studentdetails', getCandidate)

// studet avg marks
router.get("/student_avg_marks", avg_marks )

// maximum test avg marks 
router.get("/avg_test_round_marks", max_avg_marks)

//  subject heighest marks
router.get("/highest_marks_subject", highest_marks_subject )




module.exports = router