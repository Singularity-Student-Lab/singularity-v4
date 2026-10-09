// The Singularity mark, drawn as a mask so it takes the surrounding text colour.
export default function Mark({ className }: { className?: string }) {
  return <span className={className ? `mark ${className}` : "mark"} aria-hidden="true" />;
}
