// alternancia das sidebars
function toggleSidebar(sidebarToOpen, behavior) {
  let elem = document.getElementById(sidebarToOpen)
  let sidebar = document.getElementsByClassName("sidebar-nav-toggle")[0]

  if (sidebar) {
    sidebar.classList.remove("sidebar-nav-toggle")
  }

  if (behavior) {
    elem.classList.add("sidebar-nav-toggle")
  } else {
    elem.classList.remove("sidebar-nav-toggle")
  }
}


// reconhecimento dos gestos de touch
let xDown

window.addEventListener('touchstart', e => {
  const firstTouch = getTouch(e);
  xDown = firstTouch.clientX;
});

window.addEventListener('touchend', e => {
  if (!xDown) {
    return;
  }

  const { clientX: xUp } = getTouch(e);
  const xDiff = xDown - xUp;
  const xDiffAbs = Math.abs(xDown - xUp);
  const sidebarToggled = document.getElementsByClassName("sidebar-nav-toggle")[0]

  if (Math.max(xDiffAbs) < 70 ) {
    return;
  }

  
  if (xDiffAbs) {
    if ( xDiff > 0 ) {
      // left
      if (sidebarToggled && sidebarToggled.id == 'sidebar-nav') {
        toggleSidebar('sidebar-nav', 0);
      } else {
        toggleSidebar('sidebar-social', 1);
      }

    } else {
      // right
      if (sidebarToggled && sidebarToggled.id == 'sidebar-social') {
        toggleSidebar('sidebar-social', 0);
      } else {
        toggleSidebar('sidebar-nav', 1);
      }
    }
  }
});

function getTouch(e) {
  return e.changedTouches[0]
}


// ressaltar informacao
function highlight(elem) {
  toggleSidebar('sidebar-nav', 0);
  elem = document.querySelectorAll(`[data-highlight='${elem}']`)[0]
  elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
  elem.style.animation = ''
  void elem.offsetHeight
  elem.style.animation = 'highlight 1800ms'
}


// fechar a sidebar social ao clicar no data container
document.getElementById("data-container").onclick = function(elem) {
  if (elem.target.tagName != "IMG") {
    toggleSidebar('sidebar-social', 0)
  }
}


// calcula o scroll do main para ajustar o titulo principal
main_title = document.getElementById("main-title")

document.querySelectorAll("#data-container main")[0].onscroll = function(elem) {
  if (elem.target.scrollTop > 2) {
    // main_title.classList.add("main-title-top")
    main_title.style.cssText = "padding-bottom: 0; margin: 0;"
    main_title.children[0].style.cssText = "bottom: 3.32rem; font-size: 1.2rem"
  } else {
    main_title.style.cssText = "padding-bottom: 2rem; margin: 0 auto 2rem auto;"
    main_title.children[0].style.cssText = "bottom: 0; font-size: 1.6rem"
  }
} 
