const graph = {
	a: ['c'],
	b: ['c'],
	c: ['s', 'r'],
	d: ['a'],
	s: ['a', 'c'],
	r: ['d'],
	z: ['z'],
};

function SolveGraphBFS(graph, start, end, visited = {}, queue = []) {
	if (!visited[start]) {
		for (let i = 0; i < graph[start].length; i += 1) {
			// agregamos todas sus conexiones al queue
			queue.push(graph[start][i]);
		}
	}
	visited[start] = true;
	if (queue.length != 0) {
		return (
			queue[0] === end ||
			solveGraphBFS(graph, queue.shift(), end, visited, queue)
		);
	} else {
		return false;
	}
}

solveGraphBFS(graph, 'a', 'r'); // true
solveGraphBFS(graph, 's', 'b'); // false

module.exports = SolveGraphBFS;
