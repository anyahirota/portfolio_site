 

document.addEventListener("DOMContentLoaded", function () {
    
    const sidebarButton = document.getElementById("sidebar-header-button"); 
    sidebarButton.addEventListener("click", openSideBar)

    function openSideBar() {
        document.querySelector(".sidebar").style.width = "250px";
        document.querySelector(".main-content").style.marginRight = "250px";
        sidebarButton.removeEventListener("click", openSideBar); 
        sidebarButton.addEventListener("click", closeSideBar); 
    }

    function closeSideBar() {
        document.querySelector(".sidebar").style.width = "0";
        document.querySelector(".main-content").style.marginRight = "0";
        sidebarButton.removeEventListener("click", closeSideBar);
        sidebarButton.addEventListener("click", openSideBar); 
    }
})
