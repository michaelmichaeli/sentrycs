import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { useMemo } from "react";

// Add styles for code blocks
const codeBlockStyle = "font-mono text-left bg-[#1e1e1e] text-white p-4 rounded border-2 border-black overflow-x-auto";
const commentStyle = "text-[#6A9955]"; // green comments
const stringStyle = "text-[#CE9178]";  // orange strings
const keywordStyle = "text-[#569CD6]"; // blue keywords
const functionStyle = "text-[#DCDCAA]"; // yellow function names
const punctuationStyle = "text-[#D4D4D4]"; // light gray punctuation

const About = () => {
  // Define retro colors for accordions
  const retroColors = useMemo(() => {
    const colors = [
      'bg-pink-400 hover:bg-pink-500 border-pink-600',
      'bg-purple-400 hover:bg-purple-500 border-purple-600',
      'bg-blue-400 hover:bg-blue-500 border-blue-600',
      'bg-cyan-400 hover:bg-cyan-500 border-cyan-600',
      'bg-teal-400 hover:bg-teal-500 border-teal-600',
      'bg-green-400 hover:bg-green-500 border-green-600',
      'bg-yellow-400 hover:bg-yellow-500 border-yellow-600',
      'bg-orange-400 hover:bg-orange-500 border-orange-600',
      'bg-red-400 hover:bg-red-500 border-red-600',
    ];
    
    const accordionIds = [
      'event-registration',
      'event-emission',
      'listener-removal',
      'implementation',
      'usage'
    ];
    
    const colorMap: Record<string, string> = {};
    accordionIds.forEach(id => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      colorMap[id] = colors[randomIndex];
    });
    
    return colorMap;
  }, []);

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-center">
        <Card className="w-full max-w-3xl">
          <div className="p-6 space-y-8">
            <Text as="h1" className="text-center">About Word Game</Text>
            
            <section>
              <Text as="h2" className="mb-4">How to Play</Text>
              <ul className="space-y-2 ml-6">
                <li>
                  <Text>Enter a 5-letter English word using the keyboard below</Text>
                </li>
                <li>
                  <Text>Press <span className="font-semibold">ENTER</span> to check if your word exists in the dictionary</Text>
                </li>
                <li>
                  <Text>If the word is valid, the border will turn green</Text>
                </li>
                <li>
                  <Text>If the word is invalid, the border will turn red</Text>
                </li>
                <li>
                  <Text>Use the <span className="font-semibold">Backspace</span> button to delete letters</Text>
                </li>
                <li>
                  <Text>Press <span className="font-semibold">Reset Game</span> to start over</Text>
                </li>
              </ul>
            </section>

            <div className="space-y-4">
              <Text as="h2">MyActionListener Explained</Text>
              <Text as="p">
                <code className="font-mono bg-primary-100 px-1 py-0.5 rounded">MyActionListener</code> is a simple event emitter/listener system used in this application.
                It follows the publisher-subscriber pattern, allowing components to communicate without direct dependencies.
              </Text>

              <Accordion type="multiple" className="space-y-2">
                <Accordion.Item value="event-registration" className={`border ${retroColors['event-registration']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">1. Event Registration</Text>
                  </Accordion.Header>
                  <Accordion.Content>
                    <div className="space-y-4">
                      <Text as="p">
                        Components can register listeners for specific events using <code className="font-mono bg-primary-100 px-1 py-0.5 rounded">registerListener(action, listener)</code>.
                        When an event occurs, all registered listeners for that event are notified.
                      </Text>
                      <pre className={codeBlockStyle}>
                        <code>
                          <span className={commentStyle}>// Register a listener for an event</span>{'\n'}
                          <span className={`${functionStyle}`}>actionListener</span>
                          <span className={punctuationStyle}>.</span>
                          <span className={functionStyle}>registerListener</span>
                          <span className={punctuationStyle}>(</span>
                          <span className={stringStyle}>'wordChecked'</span>
                          <span className={punctuationStyle}>, </span>
                          <span className={punctuationStyle}>(</span>
                          <span>result</span>
                          <span className={punctuationStyle}>) </span>
                          <span className={keywordStyle}>{'=> '}</span>
                          <span className={punctuationStyle}>{'{'}</span>{'\n'}
                          {'  '}<span className={functionStyle}>console</span>
                          <span className={punctuationStyle}>.</span>
                          <span className={functionStyle}>log</span>
                          <span className={punctuationStyle}>(</span>
                          <span className={stringStyle}>'Word check result:'</span>
                          <span className={punctuationStyle}>, </span>
                          <span>result</span>
                          <span className={punctuationStyle}>);</span>{'\n'}
                          <span className={punctuationStyle}>{'}'});</span>
                        </code>
                      </pre>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="event-emission" className={`border ${retroColors['event-emission']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">2. Event Emission</Text>
                  </Accordion.Header>
                  <Accordion.Content>
                    <div className="space-y-4">
                      <Text as="p">
                        Components can emit events using <code className="font-mono bg-primary-100 px-1 py-0.5 rounded">emit(action, data)</code>, which triggers all registered listeners
                        for that event with the provided data.
                      </Text>
                      <pre className={codeBlockStyle}>
                        <code>
                          <span className={commentStyle}>// Emit an event with data</span>{'\n'}
                          <span className={functionStyle}>actionListener</span>
                          <span className={punctuationStyle}>.</span>
                          <span className={functionStyle}>emit</span>
                          <span className={punctuationStyle}>(</span>
                          <span className={stringStyle}>'wordChecked'</span>
                          <span className={punctuationStyle}>, </span>
                          <span className={punctuationStyle}>{'{'}</span>{'\n'}
                          {'  '}<span>correct</span>
                          <span className={punctuationStyle}>: </span>
                          <span className={keywordStyle}>true</span>
                          <span className={punctuationStyle}>,</span>{'\n'}
                          {'  '}<span>word</span>
                          <span className={punctuationStyle}>: </span>
                          <span className={stringStyle}>'APPLE'</span>{'\n'}
                          <span className={punctuationStyle}>{'}'});</span>
                        </code>
                      </pre>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="listener-removal" className={`border ${retroColors['listener-removal']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">3. Listener Removal</Text>
                  </Accordion.Header>
                  <Accordion.Content>
                    <div className="space-y-4">
                      <Text as="p">
                        The system allows for removing all listeners for a specific event using <code className="font-mono bg-primary-100 px-1 py-0.5 rounded">removeListener(action)</code>.
                        This is useful for cleanup to prevent memory leaks.
                      </Text>
                      <pre className={codeBlockStyle}>
                        <code>
                          <span className={commentStyle}>// Remove all listeners for an event</span>{'\n'}
                          <span className={functionStyle}>actionListener</span>
                          <span className={punctuationStyle}>.</span>
                          <span className={functionStyle}>removeListener</span>
                          <span className={punctuationStyle}>(</span>
                          <span className={stringStyle}>'wordChecked'</span>
                          <span className={punctuationStyle}>);</span>
                        </code>
                      </pre>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="implementation" className={`border ${retroColors['implementation']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">Implementation Details</Text>
                  </Accordion.Header>
                  <Accordion.Content>
                    <Text as="p">
                      The <code className="font-mono bg-primary-100 px-1 py-0.5 rounded">MyActionListener</code> class maintains a private record of actions and their associated listener functions.
                      When an action is emitted, it iterates through all registered listeners for that action and invokes them with the provided data.
                    </Text>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="usage" className={`border ${retroColors['usage']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">Usage in the Application</Text>
                  </Accordion.Header>
                  <Accordion.Content>
                    <Text as="p">
                      In our Word Game, <code className="font-mono bg-primary-100 px-1 py-0.5 rounded">MyActionListener</code> is used to handle communication between different components,
                      such as notifying the game board when a word has been checked or when the game status changes.
                      This decoupled approach makes the code more maintainable and easier to extend.
                    </Text>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="default" size="lg" onClick={() => window.history.back()}>
                Back to Game
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About; 