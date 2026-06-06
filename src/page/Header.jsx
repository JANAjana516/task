import React from 'react';
import './header.css';

import { 
  Bookmark, 
  Search, 
  CircleDollarSign, 
  Bell, 
  Settings 
} from 'lucide-react';

export default function Header() {
  return (
    <div className='headerContainerStyle'>
    
      <div className='topHeaderStyle'>
        
     
        <div className='leftSectionStyle'>
        
          <button className='bookmarkButtonStyle'>
            <Bookmark size={18} style={{ color: '#4b5563' }} />
            <span className='bookmarkTextStyle'>Bookmarks</span>
          </button>

        
          <div className='searchContainerStyle'>
            <Search size={18}  className='searchIconStyle'/>
            <input 
              type="text" 
              placeholder="Search or type a command..." 
              className='searchInputStyle'
            />
          </div>
        </div>

       
        <div  className='rightSectionStyle'>
  
          <div  className='iconsGroupStyle'>
         
            <span  className='flagStyle'>🇸🇾</span>
            
            <button className='iconButtonStyle' title="Currency">
              <CircleDollarSign size={20} />
            </button>
            <button className='iconButtonStyle' title="Notifications">
              <Bell size={20} />
            </button>
            <button  className='iconButtonStyle' title="Settings">
              <Settings size={20} />
            </button>
          </div>

       
          <div  className='dividerStyle'></div>

        
          <div  className='userProfileStyle'>
            <div className='userInfoStyle'>
              <span  className='userNameStyle'>Mohammad Shaheen</span>
              <span  className='userEmailStyle'>m.shaheen@almanaraa.com</span>
            </div>
        
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80" 
              alt="User Profile" 
              className='avatarStyle'
            />
          </div>
        </div>

      </div>


      <div  className='breadcrumbsStyle'>
        <span  className='breadcrumbLinkStyle'>Home</span>
        <span className='breadcrumbSeparatorStyle'>/</span>
        <span className='breadcrumbLinkStyle'>Fulfillment</span>
        <span className='breadcrumbSeparatorStyle'>/</span>
        <span  className='breadcrumbActiveStyle'>Shipments</span>
      </div>
    </div>
  );
}
