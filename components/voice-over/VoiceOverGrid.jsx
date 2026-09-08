import VoiceOverCard from "./VoiceOverCard";

export default function VoiceOverGrid({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <VoiceOverCard key={item.id} item={item} />
      ))}
    </div>
  );
}
