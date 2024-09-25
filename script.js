const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }

  function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

//portfolio script
$(document).ready(function() {
  var selectedClass = "";
  
  // Click event for filter buttons
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel"); // Get the data-rel attribute of the clicked button
    
    // Fade out the whole portfolio to start the transition
    $("#portfolio").fadeTo(100, 0.1);
    
    // If "all" is selected, show all items
    if (selectedClass === "all") {
      $("#portfolio div").fadeIn().addClass('scale-anm');
    } else {
      // Otherwise, show only the selected category
      $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
      
      // After a short delay, fade in the filtered items
      setTimeout(function() {
        $("." + selectedClass).fadeIn().addClass('scale-anm');
      }, 300);
    }

    // Fade back in the portfolio to full visibility
    $("#portfolio").fadeTo(300, 1);
  });
});
