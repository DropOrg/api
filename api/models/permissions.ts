export enum Access {
	NoAccess,
	Read,
	Write,
	Manage,
	Owner,
}

export enum AuthStrategy {
	None,
	Token,
	UserPass,
}