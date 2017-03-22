function main(target_nums, below_num) {
	console.log('target_nums => ' + target_nums);
	console.log('below_num => ' + below_num);
	
	var sum = 0;
	for(var i = 0; i < below_num; i++) {
		for(var j = 0; j < target_nums.length; j++) {
			if((i % target_nums[j]) === 0) {
				sum += i;
				break;
			}
		}
	}
	console.log('sum => ' + sum);
}
main([3, 5], 1000);

