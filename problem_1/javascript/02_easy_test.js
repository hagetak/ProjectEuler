function main() {
	var below_num = 1000;
	var sum = 0;

	for(var i = 0; i < below_num; i++) {
		if(isTargetNumber(i)) {
			sum += i;
		}
	}
	console.log('sum => ' + sum);
}

function isTargetNumber(target_num){
	var target_nums = [3, 5];
	for(var j = 0; j < target_nums.length; j++) {
		if((target_num % target_nums[j]) === 0) {
			return true;
		}
	}
	return false;
}

main();
