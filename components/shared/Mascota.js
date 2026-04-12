export default function Mascota() {
  return (
    <div className="flex justify-center mt-20 mb-10">
      <img
        src="/mascota.png"
        alt="robot"
        className="w-[350px] md:w-[450px] lg:w-[520px] hover:scale-110 transition-transform duration-300 ease-out"
      />
    </div>
  )
}