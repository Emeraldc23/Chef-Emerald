import chefClaude from "../assets/image/chef-claude-icon.png";
import "../assets/cssStyle/header.css";

export default function Header() {
  return (
    <header className="header">
      <img className="headerImg" src={chefClaude} alt="chefClaudeIcon" />
      <h2 className="headerTitle">Chef Emerald</h2>
    </header>
  );
}
