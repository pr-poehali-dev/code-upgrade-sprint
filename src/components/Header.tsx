interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <img src="https://cdn.poehali.dev/projects/60209063-9706-4378-8822-ce32e90e1e43/bucket/2a6768d5-0417-41c4-b07f-56cd101ff76b.png" alt="A·A Mebel" className="h-10 brightness-0 invert" />
        <nav className="flex gap-8">
          <a
            href="#tracking"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Отследить
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Поддержка
          </a>
        </nav>
      </div>
    </header>
  );
}