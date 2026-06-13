interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface TabNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function TabNav({ tabs, activeTab, onTabChange }: TabNavProps) {
  return (
    <div
      className="sticky top-0 z-20 overflow-x-auto"
      style={{
        background: "#0F1629",
        borderBottom: "1px solid #1E2A45",
        scrollbarWidth: "none",
      }}
    >
      <style>{`
        .tab-scroll::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="tab-scroll flex items-center min-w-max px-4 gap-0">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold transition-all whitespace-nowrap focus:outline-none"
              style={{
                color: isActive ? "#FFFFFF" : "#6B7280",
              }}
            >
              {tab.icon && <span className="text-base">{tab.icon}</span>}
              {tab.label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "#E8003D" }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
