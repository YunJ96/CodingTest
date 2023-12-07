function solution(spell, dic) {
    dic = dic.filter((e) => e.length === spell.length);
    
    for (let i = 0; i < dic.length; i++) {
        let isInclude = true;
        for (let j = 0; j < spell.length; j++) {
            if (!dic[i].includes(spell[j])) {
                isInclude = false;
                break;
            }
        }
        if (isInclude) {
            return 1;
        }
    }
    
    return 2;
}
