import { Challenge, RawInput, Solution } from "./template/challenge";

enum NodeType {
	File,
	Directory,
}

interface Node {
	name: string;
	type: NodeType;
	parent: Directory;
	size: number;
}

type File = Node;

interface Directory extends Node {
	children: Node[];
}

type Input = Directory;

export default class Day07 extends Challenge<Input> {
	private readonly SIZE_LIMIT = 100000;

	private readonly TOTAL_AVAILABLE = 70000000;
	private readonly TOTAL_UNUSED = 30000000;

	public override transform1(rawInput: RawInput): Input {
		const root: Directory = {
			name: "root",
			type: NodeType.Directory,
			parent: null as unknown as Directory,
			size: NaN,
			children: [],
		};
		root.parent = root;
		let currentDirectory = root;

		rawInput.forEach((line) => {
			if (line.startsWith("$")) {
				if (line === "$ ls") {
					// Nothing
				} else {
					const [, path] = line.match(/^\$ cd (.+)$/) || [];
					if (path === "/") {
						currentDirectory = root;
					} else if (path === "..") {
						currentDirectory = currentDirectory.parent;
					} else {
						currentDirectory = currentDirectory.children.find((child) => child.name === path) as Directory;
					}
				}
			} else {
				const [, attribute, name] = line.match(/^(\w+) (.+)$/) || [];
				if (attribute === "dir") {
					currentDirectory.children.push({
						name,
						type: NodeType.Directory,
						parent: currentDirectory,
						size: NaN,
						children: [],
					} as Directory);
				} else {
					currentDirectory.children.push({
						name,
						type: NodeType.File,
						parent: currentDirectory,
						size: parseInt(attribute, 10),
					} as File);
				}
			}
		});

		return root;
	}

	public override part1(root: Input): Solution {
		this.calcSize(root);
		return this.getAllDirs(root, [])
			.filter((dir) => dir.size <= this.SIZE_LIMIT)
			.reduce((a, b) => a + b.size, 0);
	}

	public override part2(root: Input): Solution {
		this.calcSize(root);
		const unused = this.TOTAL_AVAILABLE - root.size;
		const toFree = this.TOTAL_UNUSED - unused;
		return this.getAllDirs(root, [])
			.filter((dir) => dir.size >= toFree)
			.sort((a, b) => a.size - b.size)[0].size;
	}

	private calcSize(dir: Directory): number {
		dir.size = dir.children
			.map((child) => {
				if (child.type === NodeType.File) {
					return child.size;
				} else {
					return this.calcSize(child as Directory);
				}
			})
			.reduce((a, b) => a + b, 0);
		return dir.size;
	}

	private getAllDirs(root: Directory, dirs: Directory[]): Directory[] {
		dirs.push(root);
		root.children.forEach((child) => {
			if (child.type === NodeType.Directory) {
				this.getAllDirs(child as Directory, dirs);
			}
		});
		return dirs;
	}
}
