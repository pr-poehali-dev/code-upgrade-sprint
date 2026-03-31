import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQS = [
  {
    question: "Я сделал заказ на ВБ, статус в заказе поменялся на «Доставлен», но мебель я не получил, почему?",
    answer: "Это техническая особенность взаимодействия нашего программного обеспечения с платформой Wildberries. Ваш товар у курьера в машине и будет доставлен на оговоренных с логистами условиях.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white px-6 py-12 lg:py-16 max-w-3xl mx-auto">
      <h2 className="uppercase text-sm tracking-wide text-neutral-600 mb-6">Вопросы и ответы</h2>
      <div className="divide-y divide-neutral-200 border-t border-neutral-200">
        {FAQS.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-start gap-4 py-5 text-left"
            >
              <span className="text-base font-medium text-neutral-900">{faq.question}</span>
              <Icon
                name="ChevronDown"
                size={20}
                className={`shrink-0 text-neutral-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <p className="pb-5 text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
