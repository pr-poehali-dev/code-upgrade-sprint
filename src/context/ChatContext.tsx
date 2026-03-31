import { createContext, useContext, useState } from "react";

type ChatContextType = {
  openWithQuery: (query: string) => void;
  pendingQuery: string | null;
  clearPendingQuery: () => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [pendingQuery, setPendingQuery] = useState<string | null>(null);

  function openWithQuery(query: string) {
    setPendingQuery(query);
  }

  function clearPendingQuery() {
    setPendingQuery(null);
  }

  return (
    <ChatContext.Provider value={{ openWithQuery, pendingQuery, clearPendingQuery }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatContext must be used within ChatProvider");
  return ctx;
}
