function solution(people, limit) {
    let count = 0;
    people = people.sort((a, b) => b - a);
    let a = 0;
    let b = people.length - 1;
    while (a <= b) {
        if (people[a] + people[b] <= limit) {
            a++;
            b--;
        } else {
            a++;
        }
        count++;
    }
    return count;
}