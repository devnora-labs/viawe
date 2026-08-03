/**
 * Keyboard skip link. Hidden until focused, then the first stop in the
 * tab order. Required by the craft floor's accessibility floor and by
 * AGENTS.md's accessibility requirements.
 */
export function SkipLink() {
  return (
    <a className="vw-skip-link" href="#main-content">
      Skip to main content
    </a>
  );
}
