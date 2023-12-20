import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const AdminSidebar = () => {
  return (
    <div>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Star War Characters</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
