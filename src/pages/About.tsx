import { Card } from "@/components/ui/Card";

const About = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-3xl p-6">
        <h1 className="text-3xl font-bold mb-6">About Word Game</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
          <p className="mb-4">
            Word Game is a fun word-guessing game where you try to guess a 5-letter word.
            You'll get feedback on each guess to help you figure out the correct word.
          </p>
          <p>
            The game provides visual feedback after each guess:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Green: The letter is in the correct position</li>
            <li>Yellow: The letter is in the word but in the wrong position</li>
            <li>Gray: The letter is not in the word</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">MyActionListener Explained</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              <code>MyActionListener</code> is a simple event emitter/listener system used in this application.
              It follows the publisher-subscriber pattern, allowing components to communicate without direct dependencies.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Key Features</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">1. Event Registration</h4>
                <p className="ml-4">
                  Components can register listeners for specific events using <code>registerListener(action, listener)</code>.
                  When an event occurs, all registered listeners for that event are notified.
                </p>
                <pre className="bg-gray-100 p-3 rounded-md text-sm mt-2 overflow-x-auto">
                  <code>
{`// Register a listener for an event
actionListener.registerListener('wordChecked', (result) => {
  console.log('Word check result:', result);
});`}
                  </code>
                </pre>
              </div>
              
              <div>
                <h4 className="font-bold">2. Event Emission</h4>
                <p className="ml-4">
                  Components can emit events using <code>emit(action, data)</code>, which triggers all registered listeners
                  for that event with the provided data.
                </p>
                <pre className="bg-gray-100 p-3 rounded-md text-sm mt-2 overflow-x-auto">
                  <code>
{`// Emit an event with data
actionListener.emit('wordChecked', { 
  correct: true, 
  word: 'APPLE' 
});`}
                  </code>
                </pre>
              </div>
              
              <div>
                <h4 className="font-bold">3. Listener Removal</h4>
                <p className="ml-4">
                  The system allows for removing all listeners for a specific event using <code>removeListener(action)</code>.
                  This is useful for cleanup to prevent memory leaks.
                </p>
                <pre className="bg-gray-100 p-3 rounded-md text-sm mt-2 overflow-x-auto">
                  <code>
{`// Remove all listeners for an event
actionListener.removeListener('wordChecked');`}
                  </code>
                </pre>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Implementation Details</h3>
            <p>
              The <code>MyActionListener</code> class maintains a private record of actions and their associated listener functions.
              When an action is emitted, it iterates through all registered listeners for that action and invokes them with the provided data.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Usage in the Application</h3>
            <p>
              In our Word Game, <code>MyActionListener</code> is used to handle communication between different components,
              such as notifying the game board when a word has been checked or when the game status changes.
              This decoupled approach makes the code more maintainable and easier to extend.
            </p>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default About; 