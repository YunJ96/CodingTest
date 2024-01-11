function solution(a, b){
        a.sort((c, d) => {
            if (c[b] < d[b]) {
                return -1;
            } else if (c[b] > d[b]) {
                return 1;
            } else if (c < d) {
                return -1;
            } else if (c > d) {
                return 1;
            }
            return 0
        })
        return a
    }