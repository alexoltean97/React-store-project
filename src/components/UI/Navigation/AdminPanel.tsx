

const AdminPanel = () => {
    return(
        <aside className="sidebar">
          <h3 className="ml-4">SideMenu</h3>
          <a href="#">
            <i className="fas fa-tachometer-alt sidebar-icon"></i>Dashboard
          </a>
        
          <a href="#">
            <i className="fas fa-box sidebar-icon"></i>Products
          </a>
          <a href="#">
            <i className="fas fa-shopping-cart sidebar-icon"></i>Orders
          </a>
          <a href="#">
            <i className="fas fa-users sidebar-icon"></i>Customers
          </a>
          <div className="mt-5 ml-4">
            <img
              src="path_to_your_avatar_image"
              alt="Avatar"
              className="rounded-circle"
              width="40"
              height="40"
            />
            <span className="ml-2">Alex</span>
          </div>
        </aside>
    );
}

export default AdminPanel;