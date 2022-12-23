
class Task{
	constructor(
		public name: string,
		public fastDescription: string,
		public textParagraph: string,
		public initDate: Date,
		public finishDate: Date,
		public state: boolean,
		public relevance: string
	){}
}