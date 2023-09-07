function solution(my_string, indices) {
    return my_string.split("")
            .filter((e, index) => !indices.includes(index)).join("");
}