closeMenu = () => {
  $("#navcheck").prop("checked", false);
};

$("body").css("overflow-y", "hidden");

$(window).on("load", function () {
  $("body").css("overflow-y", "auto");
  $(".loader-wrapper").fadeOut();
  $(".loader-wrapper").css("display", "none");
  $("#enquiryModal").modal("show");
});

$(document).ready(function () {
  AOS.init();
  function openProjectImages(projectName) {
    $("#project-modal").load(`${projectName}.html`);
  }

  var animation = lottie.loadAnimation({
    container: document.getElementById("loader-image"),
    path: "https://assets4.lottiefiles.com/packages/lf20_xhwgqrsh.json",
    // animationData: animation,
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "Logo Animation",
  });

  var supplierSlider = new Swiper(".supplier-container", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    slidesPerView: 6,
    observer: true,
    observeParents: true,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".supplier-next",
      prevEl: ".supplier-prev",
    },
  });

  $(".modalEnquiryBtn").click(function () {
    data = {
      Property_Type: $("input[name='enqpropertyType']:checked").val(),
      Budget: $("input[name='enqbudget']:checked").val(),
      Property_Name: $("#enqpropertyName").val(),
      Full_Name: $("#enqname").val(),
      Number: $("#enqphone").val(),
      Email: $("#enqemail").val(),
    };

    if (data.Full_Name == "" || data.Number == "" || data.Email == "") {
      alert("Please fill in the details");
      return;
    }

    $.ajax({
      type: "POST",
      url: "https://formcarry.com/s/-HxefqLaU2", // Replace with the path to your server-side script
      headers: {
        Accept: "application/json",
      },
      data: data,
      success: function (response) {
        // Handle the response (e.g., show a success message to the user)
        alert("Message sent successfully.");
        $("#enquiryModal").modal("hide");
      },
      error: function (error) {
        // Handle errors (e.g., show an error message)
        alert("Error sending message.");
      },
    });
  });

  $(".clientInfoBtn").click(function (e) {
    e.preventDefault();

    data = {
      Full_Name: $("#infoName").val(),
      Number: $("#infoPhone").val(),
      Email: $("#infoEmail").val(),
    };

    if (data.Full_Name == "" || data.Number == "" || data.Email == "") {
      alert("Please fill in the details");
      return;
    }

    $.ajax({
      type: "POST",
      url: "https://formcarry.com/s/-HxefqLaU2", // Replace with the path to your server-side script
      headers: {
        Accept: "application/json",
      },
      data: data,
      success: function (response) {
        // Handle the response (e.g., show a success message to the user)
        alert("Message sent successfully.");
        $("#clientInfoModal").modal("hide");
      },
      error: function (error) {
        // Handle errors (e.g., show an error message)
        alert("Error sending message.");
      },
    });
  });

  $(".enquireBtn").click(function (e) {
    data = {
      Property_Type: $("input[name='propertyType']:checked").val(),
      Buget: $("input[name='budget']:checked").val(),
      Property_Name: $("#propertyName").val(),
      Full_Name: $("#name").val(),
      Number: $("#phone").val(),
      Email: $("#email").val(),
    };

    if (
      data.Property_Type == "" ||
      data.Budget == "" ||
      data.Property_Name == "" ||
      data.Full_Name == "" ||
      data.Number == "" ||
      data.Email == ""
    ) {
      alert("Please fill in the details");
      return;
    }

    $.ajax({
      type: "POST",
      url: "https://formcarry.com/s/-HxefqLaU2", // Replace with the path to your server-side script
      headers: {
        Accept: "application/json",
      },
      data: data,
      success: function (response) {
        // Handle the response (e.g., show a success message to the user)
        alert("Message sent successfully.");
        $("#modalEnquiryForm").modal("hide");
      },
      error: function (error) {
        // Handle errors (e.g., show an error message)
        alert("Error sending message.");
      },
    });
    e.preventDefault();
  });
});
