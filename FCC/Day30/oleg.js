function smallestCommons(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var count = 0;

    for (var j = 1; j < Infinity; j++) {
        for (var i = min; i <= max; i++) {
            var res = j / i;
            if (res % 1 === 0) {
                count += 1;
                if (count === max) return j;
            }
        }
        count = 0;
    }
}