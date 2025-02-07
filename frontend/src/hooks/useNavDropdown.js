import { useEffect } from "react";

const useNavDropdown = () => {
  useEffect(() => {
    /*=============== SHOW MENU ===============*/
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");

    if (toggle && nav) {
      const toggleMenu = () => {
        nav.classList.toggle("show-menu");
        toggle.classList.toggle("show-icon");
      };
      toggle.addEventListener("click", toggleMenu);

      // Cleanup function to remove event listener
      return () => toggle.removeEventListener("click", toggleMenu);
    }
  }, []);

  useEffect(() => {
    /*=============== SHOW DROPDOWN MENU ===============*/
    const dropdownItems = document.querySelectorAll(".dropdown__item");
  
    const toggleItem = (item) => {
  
      const dropdownContainer = item.querySelector(".dropdown__container");
  
      if (!dropdownContainer) return;
  
      if (item.classList.contains("show-dropdown")) {
        dropdownContainer.style.height = "0px";
        item.classList.remove("show-dropdown");
      } else {
        dropdownContainer.style.height = `${dropdownContainer.scrollHeight}px`;
        item.classList.add("show-dropdown");
      }
    };
  
    const handlers = [];
  
    dropdownItems.forEach((item) => {
      const dropdownButton = item.querySelector(".dropdown__button");
  
      if (dropdownButton) {
        const clickHandler = () => {
  
          const showDropdown = document.querySelector(".show-dropdown");
  
          toggleItem(item);
  
          if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown);
          }
        };
  
        dropdownButton.addEventListener("click", clickHandler);
        handlers.push({ button: dropdownButton, handler: clickHandler });
      }
    });
  
    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      handlers.forEach(({ button, handler }) => {
        button.removeEventListener("click", handler);
      });
    };
  }, []);
  

  useEffect(() => {
    /*=============== DELETE DROPDOWN STYLES ON RESIZE ===============*/
    const mediaQuery = window.matchMedia("(min-width: 1118px)");
    const dropdownItems = document.querySelectorAll(".dropdown__item");
    const dropdownContainers = document.querySelectorAll(".dropdown__container");

    const removeStyle = () => {
      if (mediaQuery.matches) {
        dropdownContainers.forEach((e) => e.removeAttribute("style"));
        dropdownItems.forEach((e) => e.classList.remove("show-dropdown"));
      }
    };

    window.addEventListener("resize", removeStyle);

    return () => {
      window.removeEventListener("resize", removeStyle);
    };
  }, []);
};

export default useNavDropdown;
