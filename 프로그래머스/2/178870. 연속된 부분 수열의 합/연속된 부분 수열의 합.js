function solution(sequence, k) {
    let n = sequence.length;
    let left = 0, right = 0;
    let sum = sequence[0];
    let bestRange = [0, n];

    while (right < n) {
        if (sum === k) {
            if ((right - left) < (bestRange[1] - bestRange[0])) {
                bestRange = [left, right];
            }
            sum -= sequence[left++];
        } else if (sum < k) {
            right++;
            if (right < n) sum += sequence[right];
        } else {
            sum -= sequence[left++];
        }
    }

    return bestRange;
}