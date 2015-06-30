db.grades.aggregate([
    {
        $unwind: '$scores'
    },
    {
        $match: {
            $or: [
                {
                    'scores.type': 'exam'
                        },
                {
                    'scores.type': 'homework'
                        }
            ]
        }
    },
    {
        $group: {
            '_id': {
                'class_id': '$class_id',
                'student_id': '$student_id'
            },
            'st_average': {
                '$avg': '$scores.score'
            }
        }
    },
    {
        $group: {
            '_id': '$_id.class_id',
            'cl_average': {
                '$avg': '$st_average'
            }
        }
    },
    {
        $sort: {
            'cl_average': -1
        }
    },
    {
        "$limit": 1
    }
])