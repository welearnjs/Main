function add(x, y) {
    if (!x || typeof y !== 'number' && y !== undefined) {
        return;
    } else if (arguments.length === 1 && !isNaN(x)) {
        return function addMore(y) {
            if (typeof y === 'number') return x + y;
        };
    }
    if (arguments.length === 2) return x + y;

}
