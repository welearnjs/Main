db.posts.aggregate([
    {
        "$unwind": "$comments"
    },
    {
        "$group": {
            "_id": "$comments.author",
            "count": {
                $sum: 1
            }
        }
    },
    {
        "$sort": {
            "count": -1
        }
    },
    {
        "$limit": 1
    }

])
