export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-6 py-12 lg:py-16 bg-white">
      <div className="flex-1 h-[300px] lg:h-[500px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/60209063-9706-4378-8822-ce32e90e1e43/bucket/349f13b5-f0f9-405d-b5ff-f590eaa578ec.jpg"
          alt="Доставка мебели"
          className="w-full h-full object-cover sepia"
        />
      </div>
      <div className="flex-1 text-left flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Всё под контролем — 24/7</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Чат-бот отвечает мгновенно: статус заказа, дата доставки, контакт курьера. Никаких звонков в колл-центр — просто напишите и получите ответ.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Спросить бота
        </button>
      </div>
    </div>
  );
}