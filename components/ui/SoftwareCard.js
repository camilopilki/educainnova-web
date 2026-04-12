import Link from "next/link"

export default function SoftwareCard({
  title,
  subtitle,
  description,
  tags,
  image,
  href
}) {
  return (
    <Link href={href}>
      <div className="group cursor-pointer bg-[#0d0d0f] border border-white/10 rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center hover:border-orange-500/30 transition duration-300 hover:scale-[1.02]">

        {/* TEXTO */}
        <div>
          <p className="text-xs text-orange-500 mb-2 tracking-wide">
            {subtitle}
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            {title}
          </h3>

          <p className="text-gray-400 mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full hover:border-orange-500/40 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative">

          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent blur-2xl opacity-50 group-hover:opacity-80 transition"></div>

          {/* contenedor con altura fija */}
          <div className="relative overflow-hidden rounded-xl border border-white/10">

            <img
              src={image}
              alt={title}
              className="w-full h-[240px] object-cover transition duration-500 group-hover:scale-105"
            />

            {/* overlay hover */}
            <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition duration-500"></div>

          </div>

        </div>

      </div>
    </Link>
  )
}