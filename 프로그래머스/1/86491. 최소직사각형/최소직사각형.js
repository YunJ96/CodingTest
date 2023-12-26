function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
        const [width, height] = sizes[i];
        maxWidth = Math.max(maxWidth, Math.min(width, height));
        maxHeight = Math.max(maxHeight, Math.max(width, height));
    }

    return maxWidth * maxHeight;
}