import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	ElementType,
	Key,
	Props,
	ReactElementType,
	Ref,
	Type
} from 'shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'sheben'
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	if (config != null) {
		for (const propKey in config) {
			const val = config[propKey];
			if (propKey === 'key') {
				if (config[propKey] !== undefined) {
					key = '' + config[propKey];
				}
				continue;
			}
			if (propKey === 'ref') {
				if (config[propKey] !== undefined) {
					ref = config[propKey];
				}
				continue;
			}
			if ({}.hasOwnProperty.call(config, propKey)) {
				props[propKey] = val;
			}
		}
	}

	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
