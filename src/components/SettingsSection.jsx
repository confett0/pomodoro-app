export default function SettingsSection({ title, children, className }) {
  return (
    <section className={className}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
