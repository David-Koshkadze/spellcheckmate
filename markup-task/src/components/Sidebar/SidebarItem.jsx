export default function SidebarItem({ icon, text, active }) {
  return (
    <div className={`sidebar__options__item ${active ? "active" : ""}`}>
      <img src={icon} alt="" />
      <span>{text}</span>
    </div>
  );
}
