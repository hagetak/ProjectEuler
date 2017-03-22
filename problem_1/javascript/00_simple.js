(function main() {
	var target_nums = [3, 5];
	var below_num = 1000;
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
})();

