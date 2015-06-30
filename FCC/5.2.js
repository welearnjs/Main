db.zips.aggregate([
    {
        "$match": {
            "$or": [
                {
                    "state": "CA",

            },
                {
                    "state": "NY",

            }
         ]
        }
   },
    {
        $group: {
            _id: {
                city: '$city'
            },
            pop: {
                $sum: "$pop"
            },

        }
   },
    {
        $match: {
            pop: {
                $gt: 25000
            }
        }
    },


    {
        $sort: {
            pop: -1
        }
    },
    {
        $group: {
            _id: '$city',
            pop: {
                $avg: "$pop"
            },

        }
   }

 ])