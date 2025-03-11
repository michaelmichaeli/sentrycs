import { MyActionListener } from './MyActionListener';

describe('MyActionListener', () => {
  let actionListener: MyActionListener;

  beforeEach(() => {
    actionListener = new MyActionListener();
  });

  test('registerListener adds a listener to an action', () => {
    const mockListener = jest.fn();
    actionListener.registerListener('TEST_ACTION', mockListener);
    
    // Use any to access private property for testing
    const actions = (actionListener as any).actions;
    expect(actions['TEST_ACTION']).toBeDefined();
    expect(actions['TEST_ACTION'].length).toBe(1);
    expect(actions['TEST_ACTION'][0]).toBe(mockListener);
  });

  test('registerListener adds multiple listeners to the same action', () => {
    const mockListener1 = jest.fn();
    const mockListener2 = jest.fn();
    
    actionListener.registerListener('TEST_ACTION', mockListener1);
    actionListener.registerListener('TEST_ACTION', mockListener2);
    
    const actions = (actionListener as any).actions;
    expect(actions['TEST_ACTION'].length).toBe(2);
    expect(actions['TEST_ACTION'][0]).toBe(mockListener1);
    expect(actions['TEST_ACTION'][1]).toBe(mockListener2);
  });

  test('removeListener removes all listeners for an action', () => {
    const mockListener = jest.fn();
    actionListener.registerListener('TEST_ACTION', mockListener);
    actionListener.removeListener('TEST_ACTION');
    
    const actions = (actionListener as any).actions;
    expect(actions['TEST_ACTION']).toBeUndefined();
  });

  test('emit calls all listeners for an action with the provided data', () => {
    const mockListener1 = jest.fn();
    const mockListener2 = jest.fn();
    const testData = { test: 'data' };
    
    actionListener.registerListener('TEST_ACTION', mockListener1);
    actionListener.registerListener('TEST_ACTION', mockListener2);
    actionListener.emit('TEST_ACTION', testData);
    
    expect(mockListener1).toHaveBeenCalledWith(testData);
    expect(mockListener2).toHaveBeenCalledWith(testData);
  });

  test('emit throws an error when trying to emit an unregistered action', () => {
    expect(() => {
      actionListener.emit('UNREGISTERED_ACTION', {});
    }).toThrow("Can't emit an event. Event \"UNREGISTERED_ACTION\" doesn't exist.");
  });
}); 