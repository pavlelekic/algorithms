
class Node2 {
	left = undefined;
	right = undefined;

	constructor(value) {
		this.value = value;
	}

	hasValue(v) {
		if (this.value === v) {
			return true;
		} else if (this.right && v > this.value) {
			return this.right.hasValue(v);
		} else if (this.left && v < this.value) {
			return this.left.hasValue(v);
		} else {
			return false;
		}
	}

	insert(v) {

	}
}

class Node3 {
	left = undefined;
	middle = undefined;
	right = undefined;

	constructor(leftValue, rightValue) {
		this.leftValue = leftValue;
		this.rightValue = rightValue;
	}

	hasValue(v) {
		if (this.leftValue === v) {
			return true;
		} else if (this.left && v < this.leftValue) {
			return this.left.hasValue(v);
		} else if (this.rightValue === v) {
			return true;
		} else if (this.right && v > this.rightValue) {
			return this.right.hasValue(v);
		} else if (this.middle && v > this.leftValue && v < this.rightValue) {
			return this.middle.hasValue(v);
		} else {
			return false;
		}
	}
}

