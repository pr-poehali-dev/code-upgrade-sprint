import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [orderNumber, setOrderNumber] = useState("");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/60209063-9706-4378-8822-ce32e90e1e43/bucket/4b102027-e37f-400a-89fb-faa2cfa98acd.jpg"
          alt="Мебель"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ГДЕ МОЯ МЕБЕЛЬ?
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Отслеживайте доставку в реальном времени с помощью умного чат-бота. Всегда знайте, где ваш заказ.
        </p>
        <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto px-6 mt-2">
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Введите номер заказа"
            className="flex-1 px-5 py-4 text-black text-sm outline-none bg-white placeholder-neutral-400"
          />
          <button className="bg-black text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors duration-300 cursor-pointer whitespace-nowrap">
            Найти
          </button>
        </div>
      </div>
    </div>
  );
}