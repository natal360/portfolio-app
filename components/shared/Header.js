import React, { useState } from 'react';
import Link from 'next/link';
import { isAuthorized } from "@/utils/auth0";
import ReactResizeDetector from 'react-resize-detector';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import ActiveLink from "components/shared/ActiveLink";


const BsNavLink = props => {
  const { href, title, className = "" } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  )
}



const LoginLink = () =>
  <a className="nav-link port-navbar-link" href="api/v1/login">Login</a>

const LogoutLink = () =>
  <a className="nav-link port-navbar-link" href="api/v1/logout">Logout</a>

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        管理者
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="ポートフォリオの作成"
          />
        </DropdownItem>
        {/*
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/blogs/editor"
            title="ブログの投稿"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/blogs/dashboard"
            title="ダッシュボード"
          />
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  )
}

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) =>
        <Navbar
          className={`port-navbar port-default absolute ${className} ${width < 794 && isOpen ? "is-open" : "is-close"}`}
          dark
          expand="md">
          <div className="navbar-brand">
            <Link href="/">
              <a className="port-navbar-brand">MY PRODUCTS</a>
            </Link>
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/portfolios" title="Portfolios" />
              </NavItem>
              {/*
              <NavItem className="port-navbar-item">
                <BsNavLink href="/blogs" title="Blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/cv" title="Cv" />
              </NavItem>
              
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR" />
            </NavItem>
            */}
            </Nav>
            <Nav navbar>
              {!loading &&
                <React.Fragment>
                  {user &&
                    <React.Fragment>
                      {isAuthorized(user, "admin") &&
                        <AdminMenu />
                      }
                      <NavItem className="port-navbar-item">
                        <LogoutLink />
                      </NavItem>
                    </React.Fragment>
                  }
                  {!user &&
                    <NavItem className="port-navbar-item">
                      <LoginLink />
                    </NavItem>
                  }
                </React.Fragment>
              }
            </Nav>
          </Collapse>
        </Navbar>

      }
    </ReactResizeDetector>
  );
}

export default Header;