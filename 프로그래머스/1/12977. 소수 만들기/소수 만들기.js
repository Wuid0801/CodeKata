function solution(nums) {
    var answer = 0;
    
    // 일단 각 3자리를 더한 환경을 만들고자 했다
    // 그후 그 합한 수에대한 소수를 판별하고 맞으면 ++하는 느낌으로 하자 하였다.
    for(let i = 0; i<nums.length-2; i++){
        for(let j = i+1; j<nums.length-1; j++){
            for(let k = j+1; k<nums.length; k++){
                let num = nums[i]+nums[j]+nums[k];
                let prime = true;
                for(let a = 2; a<=Math.sqrt(num); a++){
                    if(num % a === 0){
                        prime = false;
                        break;
                    }
                }
                if(prime && num >2){
                    answer++;
                }
            }
        }
    }
    return answer;
}