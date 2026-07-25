import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
};

function Tabs({ tabs, activeTab, onChange }: TabsProps) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden border-b border-neutral-500 sm:block">
        <nav className="flex gap-2" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onChange(tab.id)}
                className="relative pb-3 text-3 font-medium px-4 uppercase text-neutral-50 cursor-pointer hover:text-neutral-100 focus:outline-none focus:text-neutral-100 "
              >
                {tab.label}

                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-lime-500" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* for Mobile view */}
      <div className="sm:hidden relative">
        <button
          className="relative w-full text-3 uppercase rounded-lg border border-neutral-400 bg-neutral-700 px-3 py-2 text-neutral-50 flex items-center justify-between gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {activeTab}
          <ChevronDown size={16} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-neutral-700 border border-neutral-600 rounded-lg mt-1 z-10 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  onChange(tab.id);
                  setIsOpen(false);
                }}
                className="w-full text-left px-2 py-2.5 text-neutral-50 hover:text-neutral-100 focus:outline-none focus:text-neutral-100 uppercase text-3 flex items-center justify-between gap-2 cursor-pointer"
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
        {/* <select
          value={activeTab}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-3 uppercase rounded-lg border border-gray-300 bg-white px-3 py-2"
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
}

export default Tabs;
