import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { IoGameController } from "react-icons/io5";
import { FiMonitor, FiSmartphone, FiKey, FiCode, FiCpu, FiTerminal } from "react-icons/fi";
import { BsEyeFill, BsSpeedometer, BsKeyboard, BsTools } from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import { SiTypescript } from "react-icons/si";

export const KeyFeaturesSection = () => {
  return (
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
  );
}; 