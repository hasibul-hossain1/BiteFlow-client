// components/FeatureCard.jsx
export default function FeatureCard({ icon, title, subtitle }) {
  return (
    <div className="bg-base-100 transition-transform hover:-translate-y-3 duration-500 shadow-md p-6 rounded-lg flex flex-col items-center text-center gap-3">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-base text-neutral-content/70">{subtitle}</p>
    </div>
  );
}
