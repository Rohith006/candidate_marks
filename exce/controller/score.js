const express = require('express')
const User = require('../model/user')

// studentdetails

exports.getCandidate = (req, res) => {
    User.find({}, (err, data) => {
        if (err) console.error(err)
        res.send(data)
    })
}

// /studentdetails
exports.Create_Candidate = (req, res) => {
    User.create({
        StudentId: req.body.StudentId,
        name: req.body.name,
        email: req.body.email,
        first_round: req.body.first_round,
        second_round: req.body.second_round,
        third_round: req.body.third_round
    }, (err, data) => {
        if (err) console.error(err)
        res.status(200).send("Register Success")
    })
}


// /student_avg_marks

exports.avg_marks = (req, res) => {
    User.aggregate([
        {
            $project:{
                _id: "$StudentId",
                // name: { $first: "$name" },
                candidate_avg_marks_: { $avg: [ "$first_round", "$second_round", "$third_round" ] },
        }}
    ], (err, result) => {
        if(err) console.log(err)
        res.status(200).send(result)
    })
}

// each test avg marks
exports.test_avg_marks = (req, res) => {
    User.aggregate([
        {
            $group:{
                _id: "avg marks per test", 
                test1_avg:{ $avg:  "$first_round" },
                test2_avg:{ $avg:  "$second_round" },
                test3_avg:{ $avg:  "$third_round" },
            }
        }
    ], (err, result) => {
        if(err) console.log(err)
        res.status(200).send(result)
    })
}

// heighst marks in subject
exports.highest_marks_subject = (req, res) => {
    User.aggregate([
        {
            $group:{
                _id: "highest_marks_subject",
                max_marks1:{$max: "$first_round"},
                max_marks2:{$max: "$second_round"},
                max_marks3:{$max: "$third_round"}

            }
        }
    ], (err, result) => {
        if(err) console.log(err)
        res.status(200).send(result)
    })
}

// find the maximum score for candiate
exports.max_avg_marks = ( req, res) => {
    User.aggregate([
        {
            $group: {
                _id: "heighest score",
                maxcandi: { $max: { $sum: [ "$first_round", "$second_round", "$third_round" ]  } },
            }
        }
    ], (err, result) => {
        if(err) console.log(err)
        res.status(200).send(result)
    })
}