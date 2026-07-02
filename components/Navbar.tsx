export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8 text-white">
      <h1 className="text-xl tracking-[0.35em] font-light">
        FRAME SOCIETY
      </h1>

      <div className="hidden md:flex gap-10 uppercase text-sm tracking-[0.2em]">
        <a href="#">Places</a>
        <a href="#">Events</a>
        <a href="#">Portfolio</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}