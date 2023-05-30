export default function SidebarItem({ icon, text, active }) {
  return (
    <div className={`sidebar__options__item ${active ? "active" : ""}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
}
