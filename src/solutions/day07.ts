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

interface File extends Node {}

interface Directory extends Node {
	children: Node[];
}

type Input = Directory;

export default class Day07 extends Challenge<Input> {
	private readonly SIZE_LIMIT = 100000;

	public override transform1(rawInput: RawInput): Input {
		/*
		rawInput = [
			"$ cd /",
			"$ ls",
			"dir a",
			"14848514 b.txt",
			"8504156 c.dat",
			"dir d",
			"$ cd a",
			"$ ls",
			"dir e",
			"29116 f",
			"2557 g",
			"62596 h.lst",
			"$ cd e",
			"$ ls",
			"584 i",
			"$ cd ..",
			"$ cd ..",
			"$ cd d",
			"$ ls",
			"4060174 j",
			"8033020 d.log",
			"5626152 d.ext",
			"7214296 k",
		];*/

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
		return this.explore(root);
	}

	private explore(dir: Directory): number {
		return dir.children
			.map((child) => {
				if (child.type === NodeType.Directory) {
					return this.explore(child as Directory) + (dir.size >= this.SIZE_LIMIT ? 0 : dir.size);
				} else {
					return 0;
				}
			})
			.reduce((a, b) => a + b, 0);
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
}
