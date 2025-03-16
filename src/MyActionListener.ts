export class MyActionListener {
	private actions: Record<string, Array<(data: unknown) => void>>;

	// Init the class
	constructor() {
		this.actions = {};
	}

	// registerListener registers a function to an action name. In case the action already exists, the new
	// listener should be added to the already existing listeners
	// action - Action name
	// listener - Function to invoke upon action call
	registerListener(action: string, listener: (data: unknown) => void): void {
		if (!this.actions[action]) {
			this.actions[action] = [];
		}
		this.actions[action].push(listener);
	}

	// When calling the removeListener all listeners are removed from the action
	// and the action itself is removed and can no longer be called.
	// action - the Action to remove
	removeListener(action: string): void {
		delete this.actions[action];
	}

	// Invoke all registered listeners of the giving action with the passed data
	// In case the action is not registered, an exception thrown
	// action - The action name
	// data - The data to pass to all registered listeners as parameter
	emit(action: string, data: unknown): void {
		if (!this.actions[action]) {
			throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
		}

		this.actions[action].forEach((listener) => listener(data));
	}
}

// Call the constructor. Export a singleton instance
export const actionListener = new MyActionListener();
