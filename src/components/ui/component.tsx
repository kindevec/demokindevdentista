"use client";

import * as React from "react";
import { useState, useRef, useLayoutEffect, useCallback } from "react";

export interface TabItem {
  id?: string;
  label?: string;
  icon: React.ReactNode;
  color: string;
  isEmergency?: boolean;
}

export interface AnimatedTabBarProps {
  items: TabItem[];
  defaultIndex?: number;
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  onTabHover?: (index: number) => void;
}

export const AnimatedTabBar: React.FC<AnimatedTabBarProps> = ({
  items,
  defaultIndex = 0,
  activeIndex: controlledIndex,
  onTabChange,
  onTabHover,
}) => {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const menuRef = useRef<HTMLMenuElement>(null);
  const menuBorderRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const offsetMenuBorder = useCallback(() => {
    const activeItem = itemRefs.current[activeIndex];
    const menu = menuRef.current;
    const menuBorder = menuBorderRef.current;

    if (activeItem && menu && menuBorder) {
      const activeRect = activeItem.getBoundingClientRect();
      const menuRect = menu.getBoundingClientRect();
      const left = Math.floor(
        activeRect.left -
          menuRect.left -
          (menuBorder.offsetWidth - activeRect.width) / 2
      );
      menuBorder.style.transform = `translate3d(${left}px, 0, 0)`;
    }
  }, [activeIndex]);

  useLayoutEffect(() => {
    offsetMenuBorder();
    const handleResize = () => {
      if (menuRef.current) {
        const menuStyle = menuRef.current.style;
        menuStyle.setProperty("--timeOut", "none");
      }
      offsetMenuBorder();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [offsetMenuBorder]);

  const handleItemClick = (index: number) => {
    if (menuRef.current) {
      const menuStyle = menuRef.current.style;
      menuStyle.removeProperty("--timeOut");
    }
    setInternalIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const handleItemHover = (index: number) => {
    if (menuRef.current) {
      const menuStyle = menuRef.current.style;
      menuStyle.removeProperty("--timeOut");
    }
    if (onTabHover) {
      onTabHover(index);
    }
  };

  return (
    <>
      <div className="svg-container" aria-hidden="true">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu-clip-path"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7 c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5 c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>

      <menu className="menu" ref={menuRef}>
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={item.id || index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`menu__item ${isActive ? "active" : ""}`}
              style={{ "--bgColorItem": item.color } as React.CSSProperties}
              onClick={() => handleItemClick(index)}
              onMouseEnter={() => handleItemHover(index)}
              onPointerEnter={() => handleItemHover(index)}
              onFocus={() => handleItemHover(index)}
              aria-label={item.label || `Tab ${index + 1}`}
            >
              <div className="menu__icon-bubble">
                {item.icon}
                {item.isEmergency && !isActive && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                )}
              </div>
              {item.label && <span className="menu__label">{item.label}</span>}
            </button>
          );
        })}
        <div className="menu__border" ref={menuBorderRef} aria-hidden="true"></div>
      </menu>
    </>
  );
};

export default AnimatedTabBar;
