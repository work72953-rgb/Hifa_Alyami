import InterviewCard from "./InterviewCard";

export default function InterviewGrid({ interviews }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {interviews.map((interview) => (
        <InterviewCard key={interview.id} interview={interview} />
      ))}
    </div>
  );
}
