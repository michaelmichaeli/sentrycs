import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Accordion } from "@/components/ui/Accordion";
import { MdEventNote, MdEventAvailable, MdEventBusy } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";

// Add styles for code blocks
const codeBlockStyle = "font-mono text-left bg-[#1e1e1e] text-white p-4 rounded border-2 border-black overflow-x-auto";
const commentStyle = "text-[#6A9955]"; // green comments
const stringStyle = "text-[#CE9178]";  // orange strings
const keywordStyle = "text-[#569CD6]"; // blue keywords
const functionStyle = "text-[#DCDCAA]"; // yellow function names
const punctuationStyle = "text-[#D4D4D4]"; // light gray punctuation

export const EventSystemSection = () => {
  // Define accordion colors using our design system
  const accordionColors = {
    'event-registration': 'bg-primary-300 hover:bg-primary-400 border-primary-500',
    'event-emission': 'bg-primary-400 hover:bg-primary-500 border-primary-600',
    'listener-removal': 'bg-primary-500 hover:bg-primary-600 border-primary-700',
    'implementation': 'bg-primary-600 hover:bg-primary-700 border-primary-800',
    'usage': 'bg-primary-700 hover:bg-primary-800 border-primary-900'
  };

  return (
    <Card className="w-full">
      <div className="p-6 space-y-6 text-left">
        <div className="flex items-center gap-2">
          <MdEventNote size={24} />
          <Text as="h2" className="text-2xl font-bold text-black">Event System Implementation</Text>
        </div>
        
        <Text as="p">
          The game uses a custom event system (<code className="font-mono bg-primary-100 px-1 py-0.5 rounded">MyActionListener</code>) 
          for handling communication between components. This system follows the publisher-subscriber pattern,
          allowing for decoupled and maintainable code.
        </Text>

        <Accordion type="single" collapsible className="space-y-4">
          <Accordion.Item value="event-registration" className={accordionColors['event-registration']}>
            <Accordion.Header>
              <div className="flex items-center gap-2">
                <MdEventAvailable size={20} />
                <Text as="h3" className="font-bold">Event Registration</Text>
              </div>
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
                    <span className={functionStyle}>actionListener</span>
                    <span className={punctuationStyle}>.</span>
                    <span className={functionStyle}>registerListener</span>
                    <span className={punctuationStyle}>(</span>
                    <span className={stringStyle}>&apos;wordChecked&apos;</span>
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
                    <span className={stringStyle}>&apos;Word check result:&apos;</span>
                    <span className={punctuationStyle}>, </span>
                    <span>result</span>
                    <span className={punctuationStyle}>);</span>
                    <span className={punctuationStyle}>{'}'});</span>
                  </code>
                </pre>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="event-emission" className={`border ${accordionColors['event-emission']}`}>
            <Accordion.Header>
              <div className="flex items-center gap-2">
                <AiOutlineApi size={20} />
                <Text as="h3" className="font-bold">Event Emission</Text>
              </div>
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
                    <span className={stringStyle}>&apos;wordChecked&apos;</span>
                    <span className={punctuationStyle}>, </span>
                    <span className={punctuationStyle}>{'{'}</span>{'\n'}
                    {'  '}<span>correct</span>
                    <span className={punctuationStyle}>: </span>
                    <span className={keywordStyle}>true</span>
                    <span className={punctuationStyle}>,</span>{'\n'}
                    {'  '}<span>word</span>
                    <span className={punctuationStyle}>: </span>
                    <span className={stringStyle}>&apos;APPLE&apos;</span>{'\n'}
                    <span className={punctuationStyle}>{'}'});</span>
                  </code>
                </pre>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="listener-removal" className={`border ${accordionColors['listener-removal']}`}>
            <Accordion.Header>
              <div className="flex items-center gap-2">
                <MdEventBusy size={20} />
                <Text as="h3" className="font-bold">Listener Removal</Text>
              </div>
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
                    <span className={stringStyle}>&apos;wordChecked&apos;</span>
                    <span className={punctuationStyle}>);</span>
                  </code>
                </pre>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="implementation" className={`border ${accordionColors['implementation']}`}>
            <Accordion.Header>
              <div className="flex items-center gap-2">
                <FiCode size={20} />
                <Text as="h3" className="font-bold">Implementation Details</Text>
              </div>
            </Accordion.Header>
            <Accordion.Content>
              <Text as="p">
                The <code className="font-mono bg-primary-100 px-1 py-0.5 rounded">MyActionListener</code> class maintains a private record of actions and their associated listener functions.
                When an action is emitted, it iterates through all registered listeners for that action and invokes them with the provided data.
              </Text>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="usage" className={`border ${accordionColors['usage']}`}>
            <Accordion.Header>
              <div className="flex items-center gap-2">
                <IoGameController size={20} />
                <Text as="h3" className="font-bold">Usage in the Application</Text>
              </div>
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
    </Card>
  );
}; 