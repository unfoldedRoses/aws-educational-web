import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useRouter } from 'next/router';
const { Item } = Menu;
import { Context } from "../context";
import { useState, useContext } from "react";
//show logout button only if user is logged in  
 // state
 const { state, dispatch } = useContext(Context);

const TopNav = () => {
  const router = useRouter()
  const {pathname} = router;

return (
  <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-brand" href="#">Navbar</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link href="/">
    <div className={`nav-item nav-link ${pathname ==='/' ? 'active': ''}`} href="#">Home </div>
        </Link> 
        <Link href="/register"> <div className={`nav-item nav-link ${pathname ==='/register' ? 'active': ''}`} href="#">Register</div></Link>
       
        {state.user ? (
          <Link href="/logout">
            <Button>Logout</Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
    </div>
  </div>
</nav></div>);
};

export default TopNav;