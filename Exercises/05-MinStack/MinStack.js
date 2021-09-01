class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		this.top = null;
	}

	push(val) {
		if (!this.top) this.top = new Node(val);
		else {
			const newTop = new Node(val);
			newTop.next = this.top;
			this.top = newTop;
		}
	}

	pop() {
		const oldTop = this.top;
		this.top = oldTop && oldTop.next;
		return oldTop && oldTop.value;
	}

	peek() {
		return this.top && this.top.value;
	}
}
class MinStack extends Stack {
	constructor() {
		super();
		this.minimum = new Stack();
	}

	push(val) {
		if (!this.top) {
			this.top = new Node(val);
			this.minimum.push(val);
		} else {
			const newTop = new Node(val);
			newTop.next = this.top;
			this.top = newTop;
			if (this.minimum.peek() > val) this.minimum.push(val);
			else this.minimum.push(this.minimum.peek());
		}
	}

	pop() {
		const oldTop = this.top;
		this.top = oldTop && oldTop.next;
		this.minimum.pop();
		return oldTop && oldTop.value;
	}

	min() {
		return this.minimum.peek();
	}
}

module.exports = {
	Node,
	MinStack,
};
