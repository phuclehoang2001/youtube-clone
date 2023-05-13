function HeaderMenuUser({ dataUser }) {
  return (
    <header className="menu_popper_header_user">
      <div className="user_avatar">
        <img src={dataUser.photoURL} alt="avatar" />
      </div>
      <div className="channel_container">
        <span className="username">{dataUser.name}</span>
        <span className="user_email">{dataUser.email}</span>
        <a href="/account" className="manage_account">
          Quản lý Tài khoản Google của bạn
        </a>
      </div>
    </header>
  );
}

export default HeaderMenuUser;
