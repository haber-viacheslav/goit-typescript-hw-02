/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
	title: string;
	text?: string;
	description?: string;
}
class Component<T extends ComponentProps> {
	constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
	pageInfo(): string {
		return this.props.title;
	}
}

const page = new Page({ title: "My Page" });
page.pageInfo(); //?

export {};
