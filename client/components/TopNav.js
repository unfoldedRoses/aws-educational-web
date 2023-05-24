import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useRouter } from 'next/router';
const { Item } = Menu;

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
    <div className={`nav-item nav-link ${pathname ==='/' ? 'active': ''}`} href="#">Home <span className="sr-only">Home</span></div>
        </Link> 
        <Link href="/register"> <a className={`nav-item nav-link ${pathname ==='/register' ? 'active': ''}`} href="#">Register</a></Link>
        <Link href="/login"> <div className={`nav-item nav-link ${pathname ==='/login' ? 'active': ''}`} href="#">Login</div></Link>
    </div>
  </div>
</nav></div>);
};

export default TopNav;