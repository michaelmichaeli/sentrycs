import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FiExternalLink, FiArrowLeft, FiMonitor, FiSmartphone, FiKey, FiCode, FiCpu, FiTerminal, FiPackage, FiLayers, FiTool } from "react-icons/fi";
import { SiReact, SiTypescript, SiVite, SiTailwindcss, SiRadixui } from "react-icons/si";
import { BsKeyboard, BsEyeFill, BsSpeedometer, BsTools } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { MdEventNote, MdEventAvailable, MdEventBusy } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";

// Add styles for code blocks
const codeBlockStyle = "font-mono text-left bg-[#1e1e1e] text-white p-4 rounded border-2 border-black overflow-x-auto";
const commentStyle = "text-[#6A9955]"; // green comments
const stringStyle = "text-[#CE9178]";  // orange strings
const keywordStyle = "text-[#569CD6]"; // blue keywords
const functionStyle = "text-[#DCDCAA]"; // yellow function names
const punctuationStyle = "text-[#D4D4D4]"; // light gray punctuation

interface AboutProps {
}

const About = ({ }: AboutProps) => {
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
      <div className="flex justify-center px-2 sm:px-4">
        <div className="w-full max-w-3xl space-y-6">
          <Text as="h1" className="text-3xl font-bold text-black text-center">About Word Game</Text>
          
          {/* MyActionListener Card */}
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

              <Accordion type="single" collapsible  className="space-y-4">
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
                          <span className={stringStyle}>'wordChecked'</span>
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

          {/* Tech Stack Card */}
          <Card className="w-full p-6">
            <div className="flex items-center gap-2 mb-4">
              <FiLayers size={24} />
              <Text as="h2" className="text-2xl font-bold text-black text-left">Tech Stack</Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FiPackage size={20} />
                    <div className="font-bold text-left underline decoration-2">Frontend Framework</div>
                  </div>
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
                  <div className="flex items-center gap-2 mb-2">
                    <FiTool size={20} />
                    <div className="font-bold text-left underline decoration-2">Build Tools</div>
                  </div>
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
                  <div className="flex items-center gap-2 mb-2">
                    <BsTools size={20} />
                    <div className="font-bold text-left underline decoration-2">Styling & UI</div>
                  </div>
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
                  <div className="flex items-center gap-2 mb-2">
                    <FiPackage size={20} />
                    <div className="font-bold text-left underline decoration-2">Other Tools</div>
                  </div>
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
          <Card className="w-full">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-2">
                <IoGameController size={24} />
                <Text as="h2" className="text-2xl font-bold text-black">Key Features</Text>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FiMonitor size={20} />
                    <div className="font-bold underline decoration-2">User Interface</div>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li className="flex items-center gap-2">
                      <FiSmartphone size={16} />
                      <span>Modern, responsive design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BsEyeFill size={16} />
                      <span>Retro-inspired aesthetics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiSmartphone size={16} />
                      <span>Mobile-first approach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiKey size={16} />
                      <span>Accessible components</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <IoGameController size={20} />
                    <div className="font-bold underline decoration-2">Game Features</div>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li className="flex items-center gap-2">
                      <BsSpeedometer size={16} />
                      <span>Real-time word validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BsEyeFill size={16} />
                      <span>Visual feedback system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BsKeyboard size={16} />
                      <span>Keyboard support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BsSpeedometer size={16} />
                      <span>Progress tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FiCode size={20} />
                    <div className="font-bold underline decoration-2">Technical Features</div>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li className="flex items-center gap-2">
                      <FiCpu size={16} />
                      <span>Type-safe development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MdEventNote size={16} />
                      <span>Custom event system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCode size={16} />
                      <span>Component-based architecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCpu size={16} />
                      <span>Efficient state management</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BsTools size={20} />
                    <div className="font-bold underline decoration-2">Developer Experience</div>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li className="flex items-center gap-2">
                      <FiTerminal size={16} />
                      <span>Hot module replacement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <SiTypescript size={16} />
                      <span>TypeScript integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BsTools size={16} />
                      <span>Modern build system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiTerminal size={16} />
                      <span>Developer tools support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center mt-8 w-full">
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <FiArrowLeft size={20} />
              Back to Game
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 