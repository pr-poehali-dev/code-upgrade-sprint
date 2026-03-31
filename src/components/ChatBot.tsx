import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ORDERS: Record<string, string> = {
  "111111": `Ваш заказ везёт курьер Владимир. Расчётное время прибытия с 13:00 до 14:30 (по МСК).\n\nВы можете связаться с ним по телефону: +7-928-111-22-33`,
};

type Message = {
  from: "bot" | "user";
  text: string;
};

const WELCOME: Message = {
  from: "bot",
  text: "Привет! Введите номер заказа, и я расскажу, где ваша мебель и когда ждать курьера.",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { from: "user", text: trimmed };
    const reply = ORDERS[trimmed];
    const botMsg: Message = {
      from: "bot",
      text: reply ?? "Заказ с таким номером не найден. Проверьте номер и попробуйте снова.",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Открыть чат"
      >
        {open ? <Icon name="X" size={22} /> : <Icon name="MessageCircle" size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border">
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-2">
            <Icon name="Bot" size={18} />
            <span className="font-semibold text-sm">Отслеживание заказа</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] text-sm px-3 py-2 rounded-2xl whitespace-pre-line leading-relaxed ${
                    msg.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-border p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Введите номер заказа..."
              className="flex-1 text-sm border border-input rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-ring bg-background text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-primary-foreground rounded-lg px-3 py-2 hover:opacity-90 transition-opacity"
            >
              <Icon name="Send" size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
