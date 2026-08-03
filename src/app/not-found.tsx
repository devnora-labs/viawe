import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="vw-container"
      style={{ paddingBlock: "var(--vw-space-2xl)" }}
    >
      <p className="vw-label">Error 404</p>
      <h1 style={{ marginTop: "var(--vw-space-sm)" }}>Page not found</h1>
      <p
        style={{
          marginTop: "var(--vw-space-md)",
          color: "var(--vw-text-secondary)",
        }}
      >
        That page does not exist. Most of this site has not been built yet.
      </p>
      <p style={{ marginTop: "var(--vw-space-md)" }}>
        <Link href="/">Return to the start page</Link>
      </p>
    </div>
  );
}
