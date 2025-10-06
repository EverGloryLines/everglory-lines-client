export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div>
        {/* Uses Roboto (default font-sans) with medium weight */}
        <h1 className="text-3xl font-normal">
          This heading uses montserrat normal font.
        </h1>
        <h1 className="text-3xl font-medium">
          This heading uses montserrat medium font.
        </h1>
        <h1 className="text-3xl font-semibold">
          This heading uses montserrat semibold font.
        </h1>
        <p className="text-3xl font-bold">
          This paragraph also uses montserrat bold font.
        </p>
        <p className="text-3xl font-extrabold">
          This paragraph also uses montserrat extra bold font.
        </p>
      </div>
      <div>
        <div>
          {/* ⭐ Use font-microgramma for the family, then standard weights ⭐ */}
          <p className="text-xl font-mono">
            This text uses Microgramma regular (400)
          </p>
          <p className="text-xl font-microgramma-medium">
            This text uses Microgramma medium
          </p>

          {/* ... Orbitron section (Needs consolidation for ideal use too) ... */}
        </div>
        {/* You can mix and match utility classes */}
        <h2 className="px-4 py-2 font-orbitron-extrabold">
          Click Me (orbitron-extrabold)
        </h2>
        <h2 className="px-4 py-2 font-orbitron-bold">
          Click Me (orbitron-bold)
        </h2>

        <h2 className="px-4 py-2 font-orbitron-light">
          Click Me (orbitron-light)
        </h2>
        <h2 className="px-4 py-2 font-orbitron-medium">
          Click Me (orbitron-medium)
        </h2>
      </div>
    </div>
  );
}
