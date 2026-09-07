import VoiceOverCard from "./VoiceOverCard";

export default function VoiceOverGrid({ projects }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <VoiceOverCard key={project.id} project={project} />
      ))}
    </div>
  );
}