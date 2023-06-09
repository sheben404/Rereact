export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ElementType = any;

export interface ReactElementType {
	$$typeof: number | symbol;
	type: ElementType;
	key: Key | null;
	ref: Ref | null;
	props: Props;
	__mark: string;
}
