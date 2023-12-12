import React, { useState } from 'react';
import withSearchBar from './SearchBar'; // Importing HOC

// Reusable NavItem component
const NavItem = ({ title, name, isSelected, onSelect }) => (
  <li
    onClick={() => onSelect(name)}
    className={isSelected ? 'activeNavItem' : ''}
  >
    <a href={`#${name}`}>{title}</a>
  </li>
);

const NavigationComponent = ({ searchTerm, handleSearch, onSearchSubmit }) => {
  const [selectedNavItem, setSelectedNavItem] = useState('welcome');


  // Navigation items data structure
  const navItems = [
    { id: 1, title: "Results", name: "results" },
    { id: 2, title: "Community", name: "community" },
    { id: 3, title: "Members", name: "members" },
    { id: 4, title: "Sponsors", name: "sponsors" },
    { id: 5, title: "Contact", name: "contact" },
    { id: 6, title: "News", name: "news" },
    { id: 7, title: "PhotoGallery", name: "PhotoGallery" },
    { id: 8, title: "Weather", name: "WeatherDashboard" },
  ];
  
  // Callback function to update the selected navigation item
  const handleSelectNavItem = (name) => {
    setSelectedNavItem(name);
  };

  return (
    <nav className="Navigation">
      <ul className="NavigationMenus">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            title={item.title}
            name={item.name}
            isSelected={selectedNavItem === item.name}
            onSelect={handleSelectNavItem} 
          />
        ))}
      </ul>
      <div className="search-bar">
        <input 
          onChange={handleSearch} 
          value={searchTerm} 
          type="text" 
          placeholder="Search" 
        />
        <button onClick={() => onSearchSubmit(searchTerm)}>Go</button>
      </div>
    </nav>
  );
};

// Wrapping NavigationComponent with the withSearchBar HOC
const Navigation = withSearchBar(NavigationComponent);
export default Navigation;