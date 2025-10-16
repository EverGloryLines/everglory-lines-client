import { Ship, TrendingUp } from "lucide-react";

export function CommonalitiesAndDifferenceSection() {
  return (
    <div className="bg-transparent px-0">
      <div className="w-full">
       
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Commonalities Card */}
                <div className="rounded-3xl bg-gray-200 p-6 md:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Ship className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 uppercase tracking-wide">
                      Commonalities
                    </h2>
                  </div>

                  <div className="space-y-6 text-gray-800">
                    <p className="text-sm md:text-base leading-relaxed">
                      The difference between Everglory Lines and other Shipping
                      Lines, in terms carrying goods from places, is
                      &quot;abolutly whatsever.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We are in the same business as any other shipping lines,
                      international shipping, liner and
                      muldlodal-logistic&quot;, nothing whatsever.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We are in the same business as any other shipping lines,
                      operating intriping containea liner and multiadoral
                      transport-logistic services, in the same usine same means,
                      the same methods and hardware-equipment.
                    </p>
                  </div>
                </div>

                {/* Differences Card */}
                <div className="rounded-3xl bg-emerald-100 p-6 md:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp
                      className="w-8 h-8 text-gray-700"
                      strokeWidth={1.5}
                    />
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 uppercase tracking-wide">
                      Differences
                    </h2>
                  </div>

                  <ul className="space-y-4 text-gray-800">
                    <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>Diverse, distinct & defined objectives.</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>
                        Key role in the development of of the country.
                      </span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>Different ways a means in meom y m-country.</span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>
                        Differogy ways and means in meeting stated objective.
                      </span>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>
                        We all need is live in our land with idological
                        differences.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
