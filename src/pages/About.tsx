import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { useMemo } from "react";
import HelpPanel from "@/components/HelpPanel";
import { FiExternalLink } from "react-icons/fi";
import { SiReact, SiTypescript, SiVite, SiTailwindcss, SiRadixui } from "react-icons/si";

// Add styles for shooting star
const shootingStarStyle = `
  absolute top-20 -left-10
  w-4 h-0.5 bg-white
  rounded-full
  shadow-[0_0_0_1px_#ffffff10,0_0_0_2px_#ffffff10,0_0_20px_2px_#ffffff50]
  animate-[shootingStar_3s_ease-in-out_infinite]
`;

// Add keyframes for shooting star animation
const shootingStarKeyframes = `
@keyframes shootingStar {
  0% {
    transform: translateX(0) scale(0.3);
    opacity: 0;
  }
  50% {
    transform: translateX(200px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(400px) scale(0.3);
    opacity: 0;
  }
}
`;

// Add styles for code blocks
const codeBlockStyle = "font-mono text-left bg-[#1e1e1e] text-white p-4 rounded border-2 border-black overflow-x-auto";
const commentStyle = "text-[#6A9955]"; // green comments
const stringStyle = "text-[#CE9178]";  // orange strings
const keywordStyle = "text-[#569CD6]"; // blue keywords
const functionStyle = "text-[#DCDCAA]"; // yellow function names
const punctuationStyle = "text-[#D4D4D4]"; // light gray punctuation

interface AboutProps {
  isHelpOpen?: boolean;
  onHelpClose?: () => void;
}

const About = ({ isHelpOpen = false, onHelpClose = () => {} }: AboutProps) => {
  // Define accordion colors using our design system
  const accordionColors = {
    'event-registration': 'bg-primary-300 hover:bg-primary-400 border-primary-500',
    'event-emission': 'bg-primary-400 hover:bg-primary-500 border-primary-600',
    'listener-removal': 'bg-primary-500 hover:bg-primary-600 border-primary-700',
    'implementation': 'bg-primary-600 hover:bg-primary-700 border-primary-800',
    'usage': 'bg-primary-700 hover:bg-primary-800 border-primary-900'
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>{shootingStarKeyframes}</style>
      
      {/* Shooting star */}
      <div className={shootingStarStyle} />

      {/* Help Panel */}
      <HelpPanel 
        wordLength={5}
        isOpen={isHelpOpen}
        onClose={onHelpClose}
      />
      
      <div className="flex justify-center px-2 sm:px-4">
        <div className="w-full max-w-3xl space-y-6">
          <Text as="h1" className="text-3xl font-bold text-black text-center">About Word Game</Text>
          
          {/* MyActionListener Card */}
          <Card className="w-full">
            <div className="p-6 space-y-6 text-left">
              <Text as="h2" className="text-2xl font-bold text-black">Event System Implementation</Text>
              <Text as="p">
                The game uses a custom event system (<code className="font-mono bg-primary-100 px-1 py-0.5 rounded">MyActionListener</code>) 
                for handling communication between components. This system follows the publisher-subscriber pattern,
                allowing for decoupled and maintainable code.
              </Text>

              <Accordion type="single" collapsible className="space-y-4">
                <Accordion.Item value="event-registration" className={`border ${accordionColors['event-registration']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">Event Registration</Text>
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
                          <span className={punctuationStyle}>);</span>
                          <span className={punctuationStyle}>{'}'});</span>
                        </code>
                      </pre>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="event-emission" className={`border ${accordionColors['event-emission']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">Event Emission</Text>
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

                <Accordion.Item value="listener-removal" className={`border ${accordionColors['listener-removal']}`}>
                  <Accordion.Header>
                    <Text as="h3" className="font-bold">Listener Removal</Text>
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

                <Accordion.Item value="implementation" className={`border ${accordionColors['implementation']}`}>
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

                <Accordion.Item value="usage" className={`border ${accordionColors['usage']}`}>
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
          </Card>

          {/* Tech Stack Card */}
          <Card className="w-full p-6">
            <Text as="h2" className="text-2xl font-bold mb-4 text-black text-left">Tech Stack</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="font-bold mb-2 text-left underline decoration-2">Frontend Framework</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <SiReact className="text-[#61DAFB]" size={20} />
                      <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                        React <FiExternalLink size={14} />
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <SiTypescript className="text-[#3178C6]" size={20} />
                      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                        TypeScript <FiExternalLink size={14} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="font-bold mb-2 text-left underline decoration-2">Build Tools</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <SiVite className="text-[#646CFF]" size={20} />
                      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                        Vite <FiExternalLink size={14} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="font-bold mb-2 text-left underline decoration-2">Styling & UI</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <SiTailwindcss className="text-[#38B2AC]" size={20} />
                      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                        Tailwind CSS <FiExternalLink size={14} />
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <SiRadixui className="text-[#808080]" size={20} />
                      <a href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                        Radix UI <FiExternalLink size={14} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="font-bold mb-2 text-left underline decoration-2">Other Tools</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <img src="https://reactrouter.com/favicon.ico" alt="" className="w-5 h-5" />
                      <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                        React Router <FiExternalLink size={14} />
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="https://dictionaryapi.dev/favicon.ico" alt="" className="w-5 h-5" />
                      <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                        Free Dictionary API <FiExternalLink size={14} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Features Card */}
          <Card className="w-full p-6">
            <Text as="h2" className="text-2xl font-bold mb-4 text-black text-left">Key Features</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-lg text-left">
                <div className="font-bold mb-2 text-left underline decoration-2">User Interface</div>
                <ul className="list-disc pl-6 space-y-1 text-left">
                  <li className="text-left">Modern, responsive design</li>
                  <li className="text-left">Retro-inspired aesthetics</li>
                  <li className="text-left">Mobile-first approach</li>
                  <li className="text-left">Accessible components</li>
                </ul>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg text-left">
                <div className="font-bold mb-2 text-left underline decoration-2">Game Features</div>
                <ul className="list-disc pl-6 space-y-1 text-left">
                  <li className="text-left">Real-time word validation</li>
                  <li className="text-left">Visual feedback system</li>
                  <li className="text-left">Keyboard support</li>
                  <li className="text-left">Progress tracking</li>
                </ul>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg text-left">
                <div className="font-bold mb-2 text-left underline decoration-2">Technical Features</div>
                <ul className="list-disc pl-6 space-y-1 text-left">
                  <li className="text-left">Type-safe development</li>
                  <li className="text-left">Custom event system</li>
                  <li className="text-left">Component-based architecture</li>
                  <li className="text-left">Efficient state management</li>
                </ul>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg text-left">
                <div className="font-bold mb-2 text-left underline decoration-2">Developer Experience</div>
                <ul className="list-disc pl-6 space-y-1 text-left">
                  <li className="text-left">Hot module replacement</li>
                  <li className="text-left">TypeScript integration</li>
                  <li className="text-left">Modern build system</li>
                  <li className="text-left">Developer tools support</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="flex justify-center mt-8 w-full">
            <Button variant="default" size="lg" onClick={() => window.history.back()}>
              Back to Game
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 