import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { FiExternalLink, FiLayers, FiPackage, FiTool, FiServer, FiNavigation } from "react-icons/fi";
import { SiReact, SiTypescript, SiVite, SiTailwindcss, SiAxios, SiRadixui, SiReactrouter } from "react-icons/si";
import { BsTools } from "react-icons/bs";

export const TechStackSection = () => {
  return (
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
                <SiRadixui className="text-[#E2E8F0]" size={20} />
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
              <FiNavigation size={20} />
              <div className="font-bold text-left underline decoration-2">Routing</div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <SiReactrouter className="text-[#CA4245]" size={20} />
                <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                  React Router <FiExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="p-4 bg-primary/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FiServer size={20} />
              <div className="font-bold text-left underline decoration-2">Data Fetching</div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <SiAxios className="text-[#5A29E4]" size={20} />
                <a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                  Axios <FiExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}; 