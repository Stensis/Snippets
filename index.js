function openTab(tabName) {
    console.log("Tab hovered: ", tabName);  // debug log
  
    // Hide all tab contents
    let contents = document.querySelectorAll(".content");
    contents.forEach((content) => {
        content.style.display = "none";
    });

    // Reset all dots to default color
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
        dot.style.backgroundColor = "rgb(223, 207, 62)";
    });

    // Update active dot based on the tab
    if (tabName === 'tab1') {
        dots[0].style.backgroundColor = "rgb(231, 239, 247)";
    } else if (tabName === 'tab2') {
        dots[1].style.backgroundColor = "rgb(231, 239, 247)";
    } else if (tabName === 'tab3') {
        dots[2].style.backgroundColor = "rgb(231, 239, 247)";
    }

    // Show the hovered tab's content
    const activeContent = document.getElementById(tabName);
    activeContent.style.display = "block";



  // Show the hovered tab's content
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");

  if (tabName !== "tab1") {
    // If we're not on tab1, hide its p and a elements
    document.querySelector(".tablink:first-of-type p").style.display = "none";
    document.querySelector(".tablink:first-of-type a").style.display = "none";
  }
}

function resetTab() {
  const anyTabHovered = Array.from(document.querySelectorAll(".tablink")).some(
    (tab) => tab.matches(":hover")
  );
  if (!anyTabHovered) {
    openTab("tab1");
    // Resetting the display of p and a for tab1 when no tab is hovered
    document.querySelector(".tablink:first-of-type p").style.display = "block";
    document.querySelector(".tablink:first-of-type a").style.display = "block";
  }
}

window.onload = function () {
  openTab("tab1");
};
