export default function NotFound() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn&apos;t find what you were looking for.</p>
    </div>
  );
}

// Disable static generation
export const config = {
  unstable_runtimeJS: true,
};
