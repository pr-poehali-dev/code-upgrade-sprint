export default function Footer() {
  return (
    <div
      className="relative h-[200px] sm:h-[220px] lg:h-[250px] max-h-[250px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+200px)] sm:h-[calc(100vh+220px)] lg:h-[calc(100vh+250px)] -top-[100vh]">
        <div className="h-[200px] sm:h-[220px] lg:h-[250px] sticky top-[calc(100vh-200px)] sm:top-[calc(100vh-220px)] lg:top-[calc(100vh-250px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] text-white font-bold tracking-tight">
                A·A MEBEL
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} A·A Mebel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
