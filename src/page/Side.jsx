import React, { useState } from 'react';
import './slide.css';
//icon
import {
  LayoutDashboard,
  Truck,
  Wallet,
  Calculator,
  Package,
  Boxes
} from 'lucide-react';

 function Side() {
  // عنصر يلي بيكون active  بالبداية
  const [activeItem, setActiveItem] = useState('Shipments');

  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: <LayoutDashboard size={22} /> },
    { id: 'Shipments', label: 'Shipments', icon: <Truck size={22} /> },
    { id: 'Accounting', label: 'Accounting', icon: <Wallet size={22} /> },
    { id: 'Calculator', label: 'Calculator', icon: <Calculator size={22} /> },
    { id: 'Fulfillment', label: 'Fulfillment', icon: <Package size={22} /> },
    { id: 'Pickup', label: 'Pickup', icon: <Boxes size={22} /> },
  ];

  return (
    <div className='sidebarStyle'>

      <div className='logoContainerStyle'>
        <div className='logoStyle'>❯❯</div>
      </div>


      <div className='menuContainerStyle'>
        {menuItems.map((item) => {
          const isActive = activeItem === item.id;

          return (
            <button className='itemStyle'
              key={item.id}
              onClick={() => setActiveItem(item.id)} // تغيير العنصر النشط عند الضغط
              style={{
                backgroundColor: isActive ? '#c2410c' : '#1e3a8a',
              }}
            >

              <div className='iconStyle'>{item.icon}</div>

              <span className='labelStyle'>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Side;